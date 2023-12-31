// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDj94pzITlLWMy6s9hTgzB79aabiAYFHYU",
  authDomain: "crowdchainfund.firebaseapp.com",
  projectId: "crowdchainfund",
  storageBucket: "crowdchainfund.appspot.com",
  messagingSenderId: "525874127945",
  appId: "1:525874127945:web:a7b6e2c0d532b457638b98",
  measurementId: "G-MDNVP6VSDD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);