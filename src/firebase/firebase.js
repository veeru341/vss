import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAszdQMI3ZHbZKQn72WNNLd6mgHFTZ13Co",
  authDomain: "myapp-bf669.firebaseapp.com",
  projectId: "myapp-bf669",
  storageBucket: "myapp-bf669.appspot.com",
  messagingSenderId: "822311608796",
  appId: "1:822311608796:web:b2faf3a0ce4b331d012f19"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth }