import firebase from 'firebase/app'
iport 'firebase/database';

var firebaseConfig = {
    apiKey: process.env.REACT_APP_TOUR_API_KEY,
    authDomain: "object-formatter.firebaseapp.com",
    databaseURL: "https://object-formatter-default-rtdb.firebaseio.com",
    projectId: "object-formatter",
    storageBucket: "object-formatter.appspot.com",
    messagingSenderId: "386246273440",
    appId: "1:386246273440:web:36b3ef47c13f794dfbdcc5",
    measurementId: "G-PEM1T4G8VE"
};

firebase.initializeApp(firebaseConfig);
export default firebase;



console.log(process.env.REACT_APP_TOUR_API_KEY);