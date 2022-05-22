// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAnFtWFbwe-MOAlX2YtaQeLdwUGlVH3r2I",
  authDomain: "manufacturer-website-d6184.firebaseapp.com",
  projectId: "manufacturer-website-d6184",
  storageBucket: "manufacturer-website-d6184.appspot.com",
  messagingSenderId: "723599855058",
  appId: "1:723599855058:web:9393d4cf47e91bf6c14c0b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;