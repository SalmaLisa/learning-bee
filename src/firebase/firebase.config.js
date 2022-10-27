// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvl-8uzlz26MQstzETeAaUQCfDoJur4jA",
  authDomain: "learning-bee-client.firebaseapp.com",
  projectId: "learning-bee-client",
  storageBucket: "learning-bee-client.appspot.com",
  messagingSenderId: "754176107826",
  appId: "1:754176107826:web:fa42363d3af28de4a4e32b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;