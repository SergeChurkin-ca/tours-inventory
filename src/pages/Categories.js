import React from 'react'

function Categories({filterItems}) {
    return (
        <div className="categories-container wrapper">
            <div className="btn-container">
                 <button className="filter-btn" onClick={() => filterItems('15')}>15</button>
            </div>
            
        </div>
    )
}
 
export default Categories
