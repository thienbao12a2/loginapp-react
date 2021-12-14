 
import firebase from 'firebase';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyANIHUNPhZJlneeAYTk0xqENurk5p4PGco",
  authDomain: "quickstart-1551101533284.firebaseapp.com",
  projectId: "quickstart-1551101533284",
  storageBucket: "quickstart-1551101533284.appspot.com",
  messagingSenderId: "953288721524",
  appId: "1:953288721524:web:22b6ea6d99ee34bf7dfd21",
  measurementId: "${config.measurementId}"
};

// Initialize Firebase
var fire = initializeApp(firebaseConfig); 
export default fire;