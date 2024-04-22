// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API,
  authDomain: "mern-carrental-b848b.firebaseapp.com",
  projectId: "mern-carrental-b848b",
  storageBucket: "mern-carrental-b848b.appspot.com",
  messagingSenderId: "930631396179",
  appId: "1:930631396179:web:c2b37547049f2724fb0fa6",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
