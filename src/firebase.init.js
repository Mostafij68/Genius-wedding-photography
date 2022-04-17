// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAphQUtzwfAXOAPXFwXrhI3KMfVW3I6fRE",
  authDomain: "genius-wedding-photography.firebaseapp.com",
  projectId: "genius-wedding-photography",
  storageBucket: "genius-wedding-photography.appspot.com",
  messagingSenderId: "560759817615",
  appId: "1:560759817615:web:eb11fa0f55a4bb126d77fa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;