import firebase from 'firebase';
 var firebaseConfig = {
    apiKey: "AIzaSyArzA9wfEtYT8WiSA1C1KmS-_PMB5gyRyo",
    authDomain: "biolinkinsta.firebaseapp.com",
    databaseURL: "https://biolinkinsta.firebaseio.com",
    projectId: "biolinkinsta",
    storageBucket: "biolinkinsta.appspot.com",
    messagingSenderId: "734954279332",
    appId: "1:734954279332:web:8c176a2bc27ca9c3edf131",
    measurementId: "G-MQSV77CVJW"
  };
 // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
 firebase.analytics();
 export default firebase; 