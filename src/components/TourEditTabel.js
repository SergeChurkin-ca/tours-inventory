import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import firebase from "firebase";

const dbRef = firebase.database().ref();
const TourEditTable = () => {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchTours = async () => {
    setLoading(true);

    dbRef.on("value", (snapshot) => {
      const data = snapshot.val();
      const newToursArray = [];

      for (let inventoryName in data) {
        const toursObject = {
          id: inventoryName,
          name: data[inventoryName].name,
          category: data[inventoryName].category,
          seats: data[inventoryName].seats,
          date: data[inventoryName].date,
          duration: data[inventoryName].duration,
        };
        newToursArray.push(toursObject);
        setLoading(false);
      }
      setTours(newToursArray);
    });
  };

  useEffect(() => {
    fetchTours();
  }, []);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  // ********** EDIT / REMOVE TOURS ****************
  const handleRemoveTour = (id) => {
    dbRef.child(id).remove();
  };
  // tour name prompt
  const handleEditTourName = (id) => {
    function requiredFunc() {
      let newUserValue = prompt("Edit Tour Name");
      if (!newUserValue) {
        alert("can't be blank");
        requiredFunc();
      } else {
        dbRef.child(id).update({
          name: newUserValue,
        });
      }
    }
    requiredFunc();
  };

  // tour date prompt and format validation
  const handleEditTourDate = (id) => {
    let today = new Date();
    const dateFormateRegex =
      /^(19|20)\d{2}-(0[1-9]|1[0-2])-(0[1-9]|1\d|2\d|3[01])$/;
    // date format is year-month-day
  
    const todayIs = new Date().toISOString().split("T")[0];
    let year = today.getFullYear();
  
    const input = document.createElement("input");
    input.type = "date";
    input.min = todayIs;
    input.value = year + "-0" + [today.getMonth() + 1] + "-" + today.getDate();
  
    const confirmButton = document.createElement("button");
    confirmButton.textContent = "Confirm";
  
    const cancelButton = document.createElement("button");
    cancelButton.textContent = "Cancel";
  
    const div = document.createElement("div");
    div.setAttribute("class", "overlay-container");
    const span = document.createElement("span");
    span.innerHTML = 'New Tour Date';
    div.appendChild(span);
    div.appendChild(input);
    div.appendChild(confirmButton);
    div.appendChild(cancelButton);
  
    const overlay = document.createElement("div");
    overlay.classList.add("overlay");
    overlay.appendChild(div);
  
    document.body.appendChild(overlay);
  
    confirmButton.addEventListener("click", () => {
      const newUserValue = input.value;
      if (!newUserValue) {
        alert("check your input\n\ncan't be blank");
      } else if (newUserValue < todayIs) {
        alert(
          "invalid date\n\ncan't chose past date\n\nconsider format: year-month-day\n\ne.g. 2021-01-01"
        );
      } else if (
        newUserValue.slice(0, 4) < year ||
        newUserValue.slice(0, 4) > year + 1
      ) {
        alert("invalid year\n\nplease chose something realistic ;)");
        console.log(dateFormateRegex.test(newUserValue));
      } else if (
        newUserValue.slice(4, 5) !== "-" ||
        newUserValue.slice(7, 8) !== "-" ||
        dateFormateRegex.test(newUserValue) === false
      ) {
        alert(
          "invalid format/date\n\nconsider format: year-month-day\n\ne.g. 2021-01-01"
        );
      } else {
        dbRef.child(id).update({
          date: newUserValue,
        });
        document.body.removeChild(overlay);
      }
    });
  
    cancelButton.addEventListener("click", () => {
      document.body.removeChild(overlay);
    });
  };
  

  // tour duration prompt
  const handleEditTourDuration = (id) => {
    function requiredFunc() {
      let newUserValue = prompt("Edit Tour Duraiton - hours");
      if (!newUserValue) {
        alert("can't be blank");
        requiredFunc();
      } else {
        dbRef.child(id).update({
          duration: newUserValue,
        });
      }
    }
    requiredFunc();
  };
  // tour seats propmpt
  const handleEditTourSeats = (id) => {
    function requiredFunc() {
      let newUserValue = prompt("Edit Tour Seats");
      if (!newUserValue) {
        alert("can't be blank");
        requiredFunc();
      } else {
        dbRef.child(id).update({
          seats: newUserValue,
        });
      }
    }
    requiredFunc();
  };
  // ********** TOUR MANAGER TABLE ****************
  return (
    <div className="tour-edit-table">
      <div className="table-header">
        <h4>Tour Inventory Editor</h4>
        <h4>Total tours: {tours.length}</h4>
        <ul className="table-params">
          <li>edit</li>
          <li>name</li>
          <li>category</li>
          <li>date</li>
          <li>duration</li>
          <li>seats</li>
        </ul>
      </div>

      {tours
        .sort((a, b) => a.date < b.date)
        .map((x) => {
          return (
            <ul key="tabb" className="table-vals">
              <li key={x.id}>
                <p>
                  <button onClick={() => handleRemoveTour(x.id)}>
                    <i className="fas fa-backspace"> </i>
                  </button>
                </p>
                <p>
                  <button onClick={() => handleEditTourName(x.id)}>
                    <i className="fas fa-pen"> </i>
                  </button>
                  {x.name}
                </p>
                <p> {x.category}</p>
                <p>
                  <button onClick={() => handleEditTourDate(x.id)}>
                    <i className="fas fa-pen"> </i>
                  </button>
                  {x.date}
                </p>
                <p>
                  <button onClick={() => handleEditTourDuration(x.id)}>
                    <i className="fas fa-pen"> </i>
                  </button>
                  {x.duration} hrs
                </p>
                <p>
                  <button onClick={() => handleEditTourSeats(x.id)}>
                    <i className="fas fa-pen"> </i>
                  </button>
                  {x.seats} pax
                </p>
              </li>
            </ul>
          );
        })}
    </div>
  );
};

export default TourEditTable;
