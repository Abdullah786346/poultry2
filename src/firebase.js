// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyARktvxjrtjgwjJtj1RTfmXZUpDziBlaX0",
  authDomain: "poultryscienceorg.firebaseapp.com",
  projectId: "poultryscienceorg",
  storageBucket: "poultryscienceorg.firebasestorage.app",
  messagingSenderId: "433402554079",
  appId: "1:433402554079:web:65ee159d5553eb0760eb6a",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
