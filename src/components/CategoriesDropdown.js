import React from "react";

function Categories({  filterItemsCat, filterItemsDate }) {
  const current = new Date();

  return (
    <div className="categories-container wrapper">
      <div className="calendar-container">
        <form className="calendar">
          <label>select by date</label>
          <input
            type="date"
            placeholder="yyyy-mm-dd"
            onFocus="(this.type='date')"
            onBlur="(this.type='text')"
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
          <option value="all">--CHOOSE ALL--</option>
          <option value="land">land</option>
          <option value="water">water</option>
          <option value="culinary">culinary</option>
          <option value="air">air</option>
          <option value="historical">historical</option>
        </select>
      </div>
    </div>
  );
}

export default Categories;
