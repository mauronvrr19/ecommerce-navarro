// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDOq8wUpgjN81DY7YV32Clf2tj-hLsr2ro",
  authDomain: "e-commerce-e4660.firebaseapp.com",
  projectId: "e-commerce-e4660",
  storageBucket: "e-commerce-e4660.appspot.com",
  messagingSenderId: "240561002560",
  appId: "1:240561002560:web:6140ed9fa16f94056427a5",
  measurementId: "G-VDZ6M3R7ZD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);