import React, { useState } from "react";
import firebase from "../firebase";
// global variable - todays date
const today = new Date().toISOString().split("T")[0];

const NewTourForm = () => {
  const database = firebase.database().ref();

  const [tourName, setTourName] = useState();
  const [tourCategory, setTourCategory] = useState();
  const [tourDate, setTourDate] = useState();
  const [tourDuration, setTourDuration] = useState();
  const [tourSeats, setTourSeats] = useState();
  const [tourDescription, setTourDescription] = useState(
    "lorem ipsum doler summit"
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    database.push().set({
      name: tourName,
      category: tourCategory,
      date: tourDate,
      duration: tourDuration,
      seats: tourSeats,
      description: tourDescription,
    });
  };
  return (
    <div className="inputformWrapper">
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <input
          type="text"
          className="noteInput"
          placeholder="Add tour name"
          name="tourName"
          value={tourName}
          onChange={(e) => setTourName(e.target.value)}
          maxLength="20"
          // required
        />
        <label for="categories">Choose tour type</label>
        <select onChange={(e) => setTourCategory(e.target.value)}>
          <option value="">-- tour type --</option>
          <option value="land">land</option>
          <option value="water">water</option>
          <option value="culinary">culinary</option>
          <option value="historical">historical</option>
          <option value="air">air</option>
        </select>
        <div className="inputParamsWrapper">
          <input
            type="date"
            // disabling past dates from global variable - today
            min={today}
            className="dateInput"
            name="tourDate"
            value={tourDate}
            onChange={(e) => setTourDate(e.target.value)}
            // required
          />
          <input
            type="number"
            className="dateInput"
            placeholder="hrs"
            name="tourDuration"
            value={tourDuration}
            onChange={(e) => setTourDuration(e.target.value)}
            // required
          />
          <input
            type="number"
            className="dateInput"
            placeholder="pax"
            name="tourSeats"
            value={tourSeats}
            onChange={(e) => setTourSeats(e.target.value)}
            // required
          />
          <input
            type="text"
            className="descriptionInput"
            placeholder="tour description is here"
            name="tourDescription"
            value={tourDescription}
            onChange={(e) => setTourDescription(e.target.value)}
            // required
          />
          <button type="submit" className="noteButton">
            Add
          </button>
        </div>
      </form>
    </div>
  );
  //   }
};

export default NewTourForm;
