

// Import the functions you need from the SDKs you need
import { initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBAJm2J0LCByTcgGoX1LgLhWfsPsD2fIZY",
  authDomain: "email-password-auth-ed2e8.firebaseapp.com",
  projectId: "email-password-auth-ed2e8",
  storageBucket: "email-password-auth-ed2e8.appspot.com",
  messagingSenderId: "596288172932",
  appId: "1:596288172932:web:7c76dd2e183d054aa3a3d1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth =getAuth(app);
export default auth;
