import React from 'react';
import './App.css';


import Error from './pages/Error';
import Home from './pages/Home';
import Tourlist from './pages/Tourlist'
import Booking from './pages/Booking';
import ManageInventory from './pages/ManageInventory';

import {Route, Switch} from 'react-router-dom';
import Navbar from './components/Navbar';


console.log(process.env.REACT_APP_TOUR_API_KEY);
function App() {
  return (
   <div>
    <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exat path="/tourlist" component={Tourlist}/>
        <Route exact path="/booking" component={Booking} />
        <Route exact path="/manageinventory" component={ManageInventory}/>
        <Route component={Error} />
      </Switch>
   </div>
  )
}

export default App;
