// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAR5LTxK1Q8b2NvZjTn7kDb-czerpagZLI",
  authDomain: "hear-my-10-f7eca.firebaseapp.com",
  projectId: "hear-my-10-f7eca",
  storageBucket: "hear-my-10-f7eca.appspot.com",
  messagingSenderId: "467844611776",
  appId: "1:467844611776:web:bbcd3dc17828851f4b3725",
  measurementId: "G-890S6FSJS8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);