// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_4uDuiewwXk_mM4wSidLAzT_rDOaMxK0",
  authDomain: "ware-house-e9fe3.firebaseapp.com",
  projectId: "ware-house-e9fe3",
  storageBucket: "ware-house-e9fe3.appspot.com",
  messagingSenderId: "1094264094355",
  appId: "1:1094264094355:web:f68c90ca10b8a7958c1766"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
export default auth;