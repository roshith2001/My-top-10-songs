// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmtpzO6jxmF52zYw6xGWVkzb6dwCR5knY",
  authDomain: "hear-my-10-73ea9.firebaseapp.com",
  projectId: "hear-my-10-73ea9",
  storageBucket: "hear-my-10-73ea9.appspot.com",
  messagingSenderId: "145644027884",
  appId: "1:145644027884:web:b5f05dfb6d9839d688cac9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);