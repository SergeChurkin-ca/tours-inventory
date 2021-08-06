import React from "react";

function TourItems({ filterredTours }) {
  return (
    <div className="tour-output-list">
      {filterredTours
        .sort((a, b) => a.date < b.date)
        .map((x) => {
          return (
            <div key={x.id} className="tour-item">
              <h3>{x.name}</h3>
              <p>category: {x.category}</p>
              <p>date: {x.date}</p>
              <p>seats: {x.seats}</p>
              <div className="img-container">
                <img
                  className="tour-img"
                  src={x.imgUrl}
                  alt="placeholder img"
                />
              </div>
              <div className="tour-description">
                <p>{x.description}</p>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default TourItems;
