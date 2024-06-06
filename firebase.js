// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDwi7MOHiurDPivQtiziFx9a_kM3f0hK-Y",
  authDomain: "react-appps.firebaseapp.com",
  projectId: "react-appps",
  storageBucket: "react-appps.appspot.com",
  messagingSenderId: "1006300639850",
  appId: "1:1006300639850:web:a054db5a80f93512ced013",
  measurementId: "G-TP1RFC4V9F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
 export const auth = getAuth(app);
 export const firestore = db;

