import { render } from '@testing-library/react';
import React, {Component} from 'react'
import firebase from '../firebase'

export default class Tourlists extends Component {
    constructor() {
        super();
        this.state = {
            tours: []
        }
    }
  
   
    componentDidMount(){
        
        const dbRef = firebase.database().ref();
       
        dbRef.on("value", (snapshot) => {
            const data = snapshot.val();
            const newToursArray = [];
            
            for (let inventoryName in data) {
                const toursObject = {
                    id: inventoryName,
                    name: data[inventoryName].name
                }
                newToursArray.push(toursObject)
            }
            this.setState({
                tours: newToursArray,
            });
        })
    }
     handleChange = (e) => {
        e.preventDefault()
        console.log(e.target.value)

        
            return (
                <div>{e.target.value}</div>
            )
        
    }

    render() {
              return(
                <div>
                 <select id='tour-names' onChange={this.handleChange}>
                   {this.state.tours.map((toursObject => {
                        return <option value={toursObject.name} key={toursObject.id}>{toursObject.name}</option>
                   }))}
                 </select>
                </div>
          )
    }
}



