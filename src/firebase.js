import firebase from "firebase/app"
import 'firebase/auth'
import 'firebase/database'
import 'firebase/storage'



const firebaseConfig = {
    apiKey: "AIzaSyBtL1JcuaZrQG5Vd-ahqeK13NNgakyfoZ4",
    authDomain: "chatify-e4cd4.firebaseapp.com",
    projectId: "chatify-e4cd4",
    storageBucket: "chatify-e4cd4.appspot.com",
    messagingSenderId: "94814853960",
    appId: "1:94814853960:web:4b40eb2934b390c683717d",
    measurementId: "G-MZ0KG9S475"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;