import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBxFOqlPJmRRl3RSG8Mq6_WFjmfawf-b2E",
  authDomain: "slack-f4aad.firebaseapp.com",
  projectId: "slack-f4aad",
  storageBucket: "slack-f4aad.appspot.com",
  messagingSenderId: "537628173433",
  appId: "1:537628173433:web:ec967778987d0134d860a8",
  measurementId: "G-GP5BSYVXLX",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };

export default db;
