import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
   apiKey: "AIzaSyCKGnJzhyN9PIdQxdHv0mw6qvBjphlqM2A",
   authDomain: "fb-clone-359ec.firebaseapp.com",
   projectId: "fb-clone-359ec",
   storageBucket: "fb-clone-359ec.appspot.com",
   messagingSenderId: "623152490340",
   appId: "1:623152490340:web:6f795b5da32db0b5a87c71",
   measurementId: "G-B0K8ERKD5G"
 };

 const firebaseApp = firebase.initializeApp(firebaseConfig);
 const db = firebaseApp.firestore();
 const auth = firebase.auth();
 const provider = new firebase.auth.GoogleAuthProvider();

 export {auth, provider};
 export default db;