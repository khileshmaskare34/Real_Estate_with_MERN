// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "realestate-d89b8.firebaseapp.com",
  projectId: "realestate-d89b8",
  storageBucket: "realestate-d89b8.appspot.com",
  messagingSenderId: "367311071167",
  appId: "1:367311071167:web:8449c4f12bb19c9a3f230a"
};

// Initialize Firebase

export const app = initializeApp(firebaseConfig);