import React from "react";

function Categories({ categories, filterItemsCat }) {
  // const getInputValue = (e) => {
  //     const userVal = e.target.value;
  //     console.log(userVal)
  // }
  return (
    <div className="categories-container wrapper">
      {/* <div className="btn-container">
                you can filter tours here
                 <form >
                    <label>by date</label>
                    <input type="date" onChange={(e) => filterItems(e.target.value)} />
                 </form>
            </div> */}

      <div className="btn-container">
        {/* <select onChange={(e) => filterItemsCat(e.target.value)}>
          <option value="">--Please choose category--</option>
          <option value="all">--CHOOSE ALL--</option>
          <option value="land">land</option>
          <option value="water">water</option>
        </select> */}
        <select onChange={() => filterItemsCat(categories)}>
                    <option value="">--selest--</option>
                    {categories.map((category, index) => {
                        return (
                            <option key={index} value="">{category}</option>
                        )
                    })}
                </select>
      </div>
    </div>
  );
}

export default Categories;
