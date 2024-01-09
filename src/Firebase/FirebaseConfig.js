// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAIIVkKf4UE0ciWs1nVxfBQScSoDiNsDAA",
  authDomain: "fir-mini-project-95a2c.firebaseapp.com",
  projectId: "fir-mini-project-95a2c",
  storageBucket: "fir-mini-project-95a2c.appspot.com",
  messagingSenderId: "1058482642913",
  appId: "1:1058482642913:web:29f9726a8a59674f0e3ca0",
  measurementId: "G-PKTPP0BXL5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);

