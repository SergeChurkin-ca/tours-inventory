import React, { useEffect, useState } from "react";
import Loading from "../components/Loading";
import firebase from "../firebase";
import Categories from "../components/CategoriesDropdown";
import TourItems from "../components/TourItems";

const TourMenu = () => {
  const [tours, setTours] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [dates, setDates] = useState([])
  
  // filter by categories
  const filterItemsCat = (category) => {
    if (category && category !== "all") {
      setTours(categories.filter((x) => x.category === category));
    } else {
      setTours(categories);
      
    }
  };
  // filter by date
  // const filterItemsDate = (filterParam) => {
  //   setTours(categories.filter((item) => item.date === filterParam));
  // };
  const filterItemsDate = (date) => {
    if (date && date !== "all") {
      setTours(dates.filter((x) => x.date === date));
    } else {
      setTours(categories);
    }
  };

  const fetchTours = async () => {
    setLoading(true);
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
          description: data[inventoryName].description,
          imgUrl:
            "https://source.unsplash.com/350x350/?" + data[inventoryName].name,
        };
        newToursArray.push(toursObject);
        setLoading(false);
      }
      setTours(newToursArray);
      setCategories(newToursArray);
      setDates(newToursArray)
    });
  };

  useEffect(() => {
    fetchTours();
  }, []);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  return (
    <>
      <div className="wrapper">
        <Categories
          // categories={categories}
          filterItemsCat={filterItemsCat}
          filterItemsDate={filterItemsDate}
          tours={tours}
        />
        <div className="tour-output-container">
          <h4>
            {tours.length === 0 &&
              "please hold on... nothing found for this day "}
          </h4>
          <TourItems filterredTours={tours} />
        </div>
      </div>
    </>
  );
};

export default TourMenu;
