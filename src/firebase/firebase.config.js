// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7HXxc-v70OqfYQXbglCdRf1DWox4ScYY",
  authDomain: "chefsavant-62096.firebaseapp.com",
  projectId: "chefsavant-62096",
  storageBucket: "chefsavant-62096.appspot.com",
  messagingSenderId: "300509048577",
  appId: "1:300509048577:web:20c5429b059d576501f500"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app