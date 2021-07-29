import React, { useEffect, useState } from "react";
import firebase from "../firebase";
import Categories from "./Categories";
const allCategories = [1,2,3]
const TourMenu = () => {
  const [tours, setTours] = useState([]);
  const [categories, setCategories] = useState(allCategories)

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
    });
  }, []);

  // const filterItems = (filterParam) => {
  //     const newItems = tours.filter((item) => item.date === filterParam)
  //     setTours(newItems)

  // }

  // const filterItemsCat = (category) => {
  //   if (category === "all") {
  //     setTours(tours);
  //     return;
  //   }
  //   const newItems = tours.filter((item) => item.category === category);
  //   setTours(newItems);
  // };

  const filterItemsCat = (category) => {
    // return category === 'all' ? console.log('all', category) : console.log('something', category)
    return category === "all"
      ? setTours(tours)
      : setTours(tours.filter((x) => x.category === category));
  };

  return (
    <div>
      <h1>Hello from tour menu</h1>

      <Categories categories={categories} filterItemsCat={filterItemsCat} />

      {tours
        .sort((a, b) => a.date < b.date)
        .map((x) => {
          return (
            <div
              key={x.id}
              style={{
                border: "solid 1px",
                bordercolor: "grey",
                width: "230px",
                margin: "10px auto",
              }}
            >
              <p>{x.name}</p>
              <p>{x.category}</p>
              <p>date: {x.date}</p>
              <p>seats: {x.seats}</p>
            </div>
          );
        })}

      <h2>{tours.length === 0 && "hold on ..."}</h2>
    </div>
  );
};

export default TourMenu;
