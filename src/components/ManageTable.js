import React, { Component } from "react";
import firebase  from "firebase";
import NewTourForm from "./NewTourForm.js";
import TourMenu from "../pages/TourMenu.js";



class App extends Component {
  constructor() {
    super();
    this.database = firebase.database().ref();
    this.state = {
      tours: [],
    };
  }
  
  addTour(e) {
    e.preventDefault();
  }
  addTour = (
    toursObjectName,
    toursObjectDate,
    toursObjectDuration,
    toursObjectSeats
  ) => {
    
    this.database.push().set({
      name: toursObjectName,
      date: toursObjectDate,
      duration: toursObjectDuration,
      seats: toursObjectSeats,
    });
  };

  render() {
    return (
      <div className="tour-booking-list">
        <NewTourForm addTour={this.addTour} />
        <TourMenu />
        <h1>check component</h1>
      </div>
    );
  }
}

export default App;

