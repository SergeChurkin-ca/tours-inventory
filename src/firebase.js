import firebase from 'firebase/app';
import 'firebase/database';

var firebaseConfig = {
    apiKey: 'AIzaSyBpra6RB-YLwxGjJ2nyd4zF_7rbo8Lvdnk',
    authDomain: "object-formatter.firebaseapp.com",
    databaseURL: "https://object-formatter-default-rtdb.firebaseio.com/",
    projectId: "object-formatter",
    storageBucket: "object-formatter.appspot.com",
    messagingSenderId: "386246273440",
    appId: "1:386246273440:web:36b3ef47c13f794dfbdcc5",
    measurementId: "G-PEM1T4G8VE"
};

firebase.initializeApp(firebaseConfig);
export default firebase;