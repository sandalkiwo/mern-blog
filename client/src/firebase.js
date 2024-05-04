// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY_SECRET,
  authDomain: "mern-blog1-6a49e.firebaseapp.com",
  projectId: "mern-blog1-6a49e",
  storageBucket: "mern-blog1-6a49e.appspot.com",
  messagingSenderId: "130369624656",
  appId: "1:130369624656:web:0882a5704f47828bb3cf55",
  measurementId: "G-LN1FLB2H9S"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// export const analytics = getAnalytics(app);