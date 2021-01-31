import React from 'react'
import {Link} from 'react-router-dom'

export default function Navbar() {
    return (
        <div>
           <nav className="navbar"></nav>
           <ul className="nav-links">
               <li><Link to="/">Home</Link></li>
               <li><Link to="/tourlist">Tours</Link></li>
               <li><Link to="/booking">Booking</Link></li>
               <li><Link to="/manageinventory">Manager Inventory</Link></li>
           </ul>
        </div>
    )
}
