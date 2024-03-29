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
        newToursArray.sort((a, b) => {
          return new Date(a.date) - new Date(b.date);
        });
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
    const overlay = document.createElement("div");
    overlay.classList.add("overlay");
  
    const div = document.createElement("div");
    div.setAttribute("class", "overlay-container");
  
    const span = document.createElement("span");
    span.innerHTML = 'Edit Tour Name';
  
    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = "Enter tour name";
    input.style.width = '200px';
  
    const confirmButton = document.createElement("button");
    confirmButton.textContent = "Confirm";
  
    const cancelButton = document.createElement("button");
    cancelButton.textContent = "Cancel";
  
    div.appendChild(span);
    div.appendChild(input);
    div.appendChild(confirmButton);
    div.appendChild(cancelButton);
  
    overlay.appendChild(div);
    document.body.appendChild(overlay);
  
    confirmButton.addEventListener("click", () => {
      const newUserValue = input.value.trim();
      if (!newUserValue) {
        alert("Tour name can't be blank");
      } else {
        dbRef.child(id).update({
          name: newUserValue,
        });
        document.body.removeChild(overlay);
      }
    });
  
    cancelButton.addEventListener("click", () => {
      document.body.removeChild(overlay);
    });
  };
  

  // tour date prompt and format validation
  const handleEditTourDate = (id) => {
    let tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
  
    const dateFormateRegex =
      /^(19|20)\d{2}-(0[1-9]|1[0-2])-(0[1-9]|1\d|2\d|3[01])$/;
    // date format is year-month-day
  
    const tomorrowIs = tomorrow.toISOString().split("T")[0];
    let year = tomorrow.getFullYear();
  
    const input = document.createElement("input");
    input.type = "date";
    input.min = tomorrowIs;
    input.value = year + "-0" + [tomorrow.getMonth() + 1] + "-" + tomorrow.getDate();
  
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
      } else if (newUserValue < tomorrowIs) {
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
    const input = document.createElement("input");
    input.type = "number";
    input.min = 1;
    input.max = 24;
    input.placeholder = '1 hour'
    
    const confirmButton = document.createElement("button");
    confirmButton.textContent = "Confirm";
    
    const cancelButton = document.createElement("button");
    cancelButton.textContent = "Cancel";
    
    const div = document.createElement("div");
    div.setAttribute("class", "overlay-container");
    const span = document.createElement("span");
    span.innerHTML = 'Edit Tour Duration (hours)';
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
      } else {
        dbRef.child(id).update({
          duration: newUserValue,
        });
        document.body.removeChild(overlay);
      }
    });
    
    cancelButton.addEventListener("click", () => {
      document.body.removeChild(overlay);
    });
  };
  
  
  // tour seats propmpt
  const handleEditTourSeats = (id) => {
    const overlay = document.createElement("div");
    overlay.classList.add("overlay");
  
    const div = document.createElement("div");
    div.setAttribute("class", "overlay-container");
  
    const span = document.createElement("span");
    span.innerHTML = 'Edit Tour Seats';
  
    const input = document.createElement("input");
    input.type = "number";
    input.placeholder =  "seats";
    input.min = 1;
    input.style.width = '70px';
  
    const confirmButton = document.createElement("button");
    confirmButton.textContent = "Confirm";
  
    const cancelButton = document.createElement("button");
    cancelButton.textContent = "Cancel";
  
    div.appendChild(span);
    div.appendChild(input);
    div.appendChild(confirmButton);
    div.appendChild(cancelButton);
  
    overlay.appendChild(div);
    document.body.appendChild(overlay);
  
    confirmButton.addEventListener("click", () => {
      const newUserValue = input.value;
      if (!newUserValue) {
        alert("can't be blank");
      } else {
        dbRef.child(id).update({
          seats: newUserValue,
        });
        document.body.removeChild(overlay);
      }
    });
  
    cancelButton.addEventListener("click", () => {
      document.body.removeChild(overlay);
    });
  };
  
  // ********** TOUR MANAGER TABLE ****************
  return (
    <div className="tour-edit-table">
      <div className="table-header">
        <h4>Tour Inventory Editor</h4>
        <h4>Total tours: {tours.length}</h4>
      </div>

      <div className="responsive-table">
        <table>
         <thead className="table-header">
              <th>remove</th>
              <th>name</th>
              <th>category</th>
              <th>date</th>
              <th>duration</th>
              <th>seats</th>
            </thead>
          <tbody>
            {tours
              .sort((a, b) => a.date < b.date)
              .map((x) => (
                <tr className="table-vals" key={x.id}>
                  <td>
                    <button onClick={() => handleRemoveTour(x.id)}>
                      <i className="fas fa-backspace"></i>
                    </button>
                  </td>
                  <td>
                    <button onClick={() => handleEditTourName(x.id)}>
                      <i className="fas fa-pen"></i>
                    </button>
                    {x.name}
                  </td>
                  <td>{x.category}</td>
                  <td>
                    <button onClick={() => handleEditTourDate(x.id)}>
                      <i className="fas fa-pen"></i>
                    </button>
                    {x.date}
                  </td>
                  <td>
                    <button onClick={() => handleEditTourDuration(x.id)}>
                      <i className="fas fa-pen"></i>
                    </button>
                    {x.duration} hrs
                  </td>
                  <td>
                    <button onClick={() => handleEditTourSeats(x.id)}>
                      <i className="fas fa-pen"></i>
                    </button>
                    {x.seats} pax
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TourEditTable;
