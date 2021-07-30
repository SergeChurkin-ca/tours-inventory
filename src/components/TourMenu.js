import React, { useEffect, useState } from "react";
import firebase from "../firebase";
import Categories from "./Categories";
import TourItems from "./TourItems";

const TourMenu = () => {
  const [tours, setTours] = useState([]);
  const [categories, setCategories] = useState([]);

  const filterItemsCat = (category, filterParam) => {
    if (category && category !== "all") {
      setTours(categories.filter((x) => x.category === category));
    } else {
      setTours(categories);
    }
  };

  const filterItemsDate = (filterParam) => {
    setTours(categories.filter((item) => item.date === filterParam));
  };

  useEffect(() => {
    const dbRef = firebase.database().ref();

    dbRef.on("value", (snapshot) => {
      const data = snapshot.val();
      const newToursArray = [];

      for (let inventoryName in data) {
        const toursObject = {
          id: inventoryName,
          name: data[inventoryName].name,
          category: data[inventoryName].category,
          seats: data[inventoryName].seats,
          date: data[inventoryName].date,
        };
        newToursArray.push(toursObject);
      }
      setTours(newToursArray);
      setCategories(newToursArray);
    });
  }, []);

  return (
    <div>
      <h1>Hello from tour menu </h1>
      
      <Categories
        categories={categories}
        filterItemsCat={filterItemsCat}
        filterItemsDate={filterItemsDate}
      />

      <TourItems filterredTours={tours} />

      <h2>
        {tours.length === 0 &&
          "please hold on... "}
      </h2>
    </div>
  );
};

export default TourMenu;
