import React from "react";

function formatDate(dateString) {
  const date = new Date(dateString);
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const day = date.getDate();
  let daySuffix = "th";

  if (day === 1 || day === 21 || day === 31) {
    daySuffix = "st";
  } else if (day === 2 || day === 22) {
    daySuffix = "nd";
  } else if (day === 3 || day === 23) {
    daySuffix = "rd";
  }

  const formattedDate = `${monthNames[date.getMonth()]} ${day}${daySuffix}`;
  return formattedDate;
}

function TourItems({ filterredTours }) {
  return (
    <div className="tour-output-list">
      {filterredTours
        .sort((a, b) => new Date(a.date) - new Date(b.date))
        .map((x) => {
          return (
            <div key={x.id} className="tour-item">
              <div className="img-container">
                <img
                  className="tour-img"
                  src={x.imgUrl}
                  alt="placeholder img"
                />
              </div>
              <h4>🕑 {formatDate(x.date)} | {x.seats} pax  | {x.category} </h4>
              <h3>{x.name}</h3>
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
