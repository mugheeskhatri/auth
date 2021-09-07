// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import 'firebase/database';
import 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_ZDdxacOwYdFv7O2emHEzxK2-OXY50OE",
  authDomain: "mughees-todo-app.firebaseapp.com",
  databaseURL: "https://mughees-todo-app-default-rtdb.firebaseio.com",
  projectId: "mughees-todo-app",
  storageBucket: "mughees-todo-app.appspot.com",
  messagingSenderId: "1018789350831",
  appId: "1:1018789350831:web:b28c9a993d02d0c4cb335a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;