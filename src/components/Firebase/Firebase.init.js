// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD89j20mJ1rg0KpfV4uunBkHDHVwMSYNXc",
  authDomain: "emajohn-b2512.firebaseapp.com",
  projectId: "emajohn-b2512",
  storageBucket: "emajohn-b2512.appspot.com",
  messagingSenderId: "934602711568",
  appId: "1:934602711568:web:ded6ff59f344dd547fe095"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;