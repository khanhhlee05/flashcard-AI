// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCyiB4cWL0Ebg63PBM_YTBamUzhtjk4b_o",
  authDomain: "aiflashcard-fa7db.firebaseapp.com",
  projectId: "aiflashcard-fa7db",
  storageBucket: "aiflashcard-fa7db.appspot.com",
  messagingSenderId: "1038438091601",
  appId: "1:1038438091601:web:4b8ef49b781f5288afa170",
  measurementId: "G-W9E8PPPBXZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);