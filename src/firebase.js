

import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

// import { getAnalytics } from "firebase/analytics";



const firebaseConfig = {
  apiKey: "AIzaSyDOq8wUpgjN81DY7YV32Clf2tj-hLsr2ro",
  authDomain: "e-commerce-e4660.firebaseapp.com",
  projectId: "e-commerce-e4660",
  storageBucket: "e-commerce-e4660.appspot.com",
  messagingSenderId: "240561002560",
  appId: "1:240561002560:web:6140ed9fa16f94056427a5",
  measurementId: "G-VDZ6M3R7ZD"
};

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)

// const analytics = getAnalytics(app);
