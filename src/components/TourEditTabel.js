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

  const handleRemoveTour = (id) => {
    dbRef.child(id).remove();
  };

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
            <ul className="table-vals">
              <li key={x.id}>
                <p>
                  <button onClick={() => handleRemoveTour(x.id)}>
                    <i class="fas fa-backspace"> </i>
                  </button>
                </p>
                <p>
                  <button onClick={() => this.handleEditTourName(x.id)}>
                    <i class="fas fa-pen"> </i>
                  </button>
                  {x.name}
                </p>
                <p> {x.category}</p>
                <p>
                  <button onClick={() => this.handleEditTourDate(x.id)}>
                    <i class="fas fa-pen"> </i>
                  </button>
                  {x.date}
                </p>
                <p>
                  <button onClick={() => this.handleEditTourDuration(x.id)}>
                    <i class="fas fa-pen"> </i>
                  </button>
                  {x.duration} hrs
                </p>
                <p>
                  <button onClick={() => this.handleEditTourSeats(x.id)}>
                    <i class="fas fa-pen"> </i>
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
