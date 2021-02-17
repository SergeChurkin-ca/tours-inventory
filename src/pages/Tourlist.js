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
                const toursObjects = {
                    // id: inventoryName,
                    // name: data[inventoryName]
                    name: data[inventoryName].Tourlist.atv
                    
                }
                newToursArray.push(toursObjects)
           
            }
            this.setState({
                tours: newToursArray,
            });
        })
    }
    
    render() {
      
    return (
        <div>
          {this.state.tours.name}
        </div>
    )
    }
}



