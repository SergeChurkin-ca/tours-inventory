import React, {useEffect, useState} from 'react'
import { render } from 'react-dom';
import firebase from '../firebase'

const TourMenu = () => {
const [tours, setTours] = useState([])


  
    useEffect(() => {
        const dbRef = firebase.database().ref();
       
        dbRef.on("value", (snapshot) => {
            const data = snapshot.val();
            const newToursArray = [];
            
            for (let inventoryName in data) {
                const toursObject = {
                    id: inventoryName,
                    name: data[inventoryName].name,
                    seats: data[inventoryName].seats,
                    date: data[inventoryName].date
                }
                newToursArray.push(toursObject)
            }
            setTours(newToursArray);
           
        })
    }, []);



    return (
        <div>
            <h1>Hello from tour menu</h1>
            {console.log('check if data is accessible', tours)}
            {console.log("test 2", Object.entries(tours))}

          {console.log(tours)}

       {/* {Object.entries(tours)} */}
            {tours.map((x)=>{
                return (
                    <div style={{border: 'solid 1px', bordercolor: 'grey', width: '230px', margin: '10px auto'}}>
                      <p>{x.name}</p>
                      <p>date: {x.date}</p>
                      <p>seats: {x.seats}</p>
                    </div>
                )
                })}
      
        </div>
    )
}

export default TourMenu;
