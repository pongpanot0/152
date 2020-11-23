import firebase from 'firebase/app'
export default function InitialFirebase(){
    var config = {
        apiKey: "AIzaSyAccX707oCsfboxLSQt8nP02BjercKJQUE",
        authDomain: "bakefirefire.firebaseapp.com",
        databaseURL: "https://bakefirefire.firebaseio.com",
        projectId: "bakefirefire",
        storageBucket: "bakefirefire.appspot.com",
        messagingSenderId: "1074758027263",
        appId: "1:1074758027263:web:a69ca5f21551cc966589ca",
        measurementId: "G-FT84WCK4R3"
      }
      firebase.InitializeApp(config);
console.log(firebase);
}