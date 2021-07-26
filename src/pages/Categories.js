import React from 'react'

function Categories({filterItems, filterItemsCat}) {

    const getInputValue = (e) => {
        const userVal = e.target.value;
        console.log(userVal)
    }
    return (
        <div className="categories-container wrapper">
            <div className="btn-container">
                you can filter tours here
                 <form >
                     <label>by date</label>
                     <input type="date" onChange={(e) => filterItems(e.target.value)}/>
                 </form>
                 
                 <div className="btn-container">
                 <button className="filter-btn" onClick={() => filterItemsCat('water')}>water</button>
            </div>
            </div>
        </div>
    )
}
 
export default Categories;
