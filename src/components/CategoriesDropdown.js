import React from "react";

function Categories({ filterItemsCat, filterItemsDate, tours }) {
  const allCategories = ['all', ...new Set(tours.map((x) => x.category))]
  const allDates = ['all', ...new Set(tours.map((x) => x.date))]

  const current = new Date();

  return (
    <div className="categories-container wrapper">
      <div className="calendar-container">
        <form className="calendar">
          <label>select by date</label>
          <input
            type="date"
            onChange={(e) => filterItemsDate(e.target.value)}
            defaultValue={`${current.getFullYear()}-0${
              current.getMonth() + 1
            }-0${current.getDate()}`}
          />
        </form>
      </div>

      <div className="options-container">
        <span>select by category</span>
        <select onChange={(e) => filterItemsCat(e.target.value)}>
          <option value="">--Choose category--</option>
          {allCategories.map((x) => {
            return (
              <option key={x}>{x}</option>
            )
          })}
        </select>
      </div>
    </div>
  );
}

export default Categories;
