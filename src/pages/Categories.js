import React from 'react'

function Categories({filterItems}) {

    const getInputValue = (e) => {
        const userVal = e.target.value;
        console.log(userVal)
    }
    return (
        <div className="categories-container wrapper">
            <div className="btn-container">
                 <form >
                     <input type="date" onChange={(e) => filterItems(e.target.value)}/>
                 </form>
                 
            </div>
        </div>
    )
}
 
export default Categories;
