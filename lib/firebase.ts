// Import the functions you need from the SDKs you need
import { getApps, initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBN3vipkbMNEKNQftv7Br5JR1r_ky9EOds",
  authDomain: "next-app-fda26.firebaseapp.com",
  projectId: "next-app-fda26",
  storageBucket: "next-app-fda26.appspot.com",
  messagingSenderId: "1046844996117",
  appId: "1:1046844996117:web:2f839d30b8121e4d136c1c",
};

// Initialize Firebase
let firebase_app =
  getApps().length == 0 ? initializeApp(firebaseConfig) : getApps()[0];

export default firebase_app;
