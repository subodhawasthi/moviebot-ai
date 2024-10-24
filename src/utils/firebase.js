// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBzf_DumvxTbgZvolmEEBbZhYPQhDtITBM",
  authDomain: "moviebot-ai.firebaseapp.com",
  projectId: "moviebot-ai",
  storageBucket: "moviebot-ai.appspot.com",
  messagingSenderId: "313789140833",
  appId: "1:313789140833:web:ddaf89f7d3f7bb131dff20",
  measurementId: "G-FVRVWR8QZ2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
