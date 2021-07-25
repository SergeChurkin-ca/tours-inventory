import React, { useState } from "react";
import firebase  from "../firebase";
// global variable - todays date
const today = new Date().toISOString().split("T")[0];

const  NewTourForm = () =>  {
const database = firebase.database().ref();

const [tourName, setTourName] = useState()
const [tourDate, setTourDate] = useState()
const [tourDuration, setTourDuration] = useState()
const [tourSeats, setTourSeats] = useState()
  

  const handleSubmit = (e) => {
      e.preventDefault();
            database.push().set({
            name: tourName,
            date: tourDate,
            durattion: tourDuration,
            seats: tourSeats
          });
    } 
    return (
      <div className="inputformWrapper">
        <form onSubmit={ e => {handleSubmit(e)}}>
          <input
            type="text"
            className="noteInput"
            placeholder="Add tour name"
            name="tourName"
            value={tourName}
            onChange={e => setTourName(e.target.value)}
            maxLength="20"
            // required
          />
          <div className="inputParamsWrapper">
            <input
              type="date"
              // disabling past dates from global variable - today
              min={today}
              className="dateInput"
              name="tourDate"
              value={tourDate}
              onChange={e => setTourDate(e.target.value)}
              // required
            />
            <input
              type="number"
              className="dateInput"
              placeholder="hrs"
              name="tourDuration"
              value={tourDuration}
              onChange={e => setTourDuration(e.target.value)}
              // required
            />
            <input
              type="number"
              className="dateInput"
              placeholder="pax"
              name="tourSeats"
              value={tourSeats}
              onChange={e => setTourSeats(e.target.value)}
              // required
            />
            <button  type="submit" className="noteButton">
              Add
            </button>
          </div>
        </form>
      </div>
    );
//   }
    }


export default NewTourForm;
