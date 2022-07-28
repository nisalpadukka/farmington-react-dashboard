// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

//web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDV0gurWbZnOGXGViCb93vRgjeL-FHWhLQ",
  authDomain: "farmington-8e6b6.firebaseapp.com",
  projectId: "farmington-8e6b6",
  storageBucket: "farmington-8e6b6.appspot.com",
  messagingSenderId: "462785178415",
  appId: "1:462785178415:web:353fd480dbcea963654fda",
  measurementId: "G-H1XCJ4GBV3"
};


// Initialize Firebase and Firestore
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;
