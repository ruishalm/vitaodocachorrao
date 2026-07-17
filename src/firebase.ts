// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDY6ZiO39rUkQywmgv9B6CCN9g-cthiDuw",
  authDomain: "vitaodocachorrao-d19b3.firebaseapp.com",
  projectId: "vitaodocachorrao-d19b3",
  storageBucket: "vitaodocachorrao-d19b3.firebasestorage.app",
  messagingSenderId: "590697017603",
  appId: "1:590697017603:web:4bcbe9e3ea82d0fe687936",
  measurementId: "G-1GHC17ECRE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Export app and analytics for use in other parts of the application
export { app, analytics };
