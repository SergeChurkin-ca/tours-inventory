import React from "react";

function TourItems({ filterredTours }) {
  return (
    <div>
      {filterredTours
        .sort((a, b) => a.date < b.date)
        .map((x) => {
          return (
            <div
              key={x.id}
              style={{
                border: "solid 1px",
                bordercolor: "grey",
                width: "230px",
                margin: "10px auto",
              }}
            >
              <p>{x.name}</p>
              <p>{x.category}</p>
              <p>date: {x.date}</p>
              <p>seats: {x.seats}</p>
            </div>
          );
        })}
    </div>
  );
}

export default TourItems;
