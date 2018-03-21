import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBk4neLYnfhbdUMEEV1vVUO1qa4uyBdLaM",
    authDomain: "catch-of-the-day-dd02f.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-dd02f.firebaseio.com",
  });

  const base = Rebase.createClass(firebaseApp.database());

//   This is a names export
  export { firebaseApp }; 

//   This is a default export
export default base;