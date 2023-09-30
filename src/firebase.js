import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDAi9Gp2bERHu5AA0mlOoTnGbCj2ybYMNU",
  authDomain: "whtasappclone-60f1a.firebaseapp.com",
  projectId: "whtasappclone-60f1a",
  storageBucket: "whtasappclone-60f1a.appspot.com",
  messagingSenderId: "164945999402",
  appId: "1:164945999402:web:e9791c2bdfa88f4b5a7553",
  measurementId: "G-02VEWVJQGT"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()

const auth = firebase.auth()

const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider}
export default db;

