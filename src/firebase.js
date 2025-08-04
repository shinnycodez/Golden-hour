// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage';



const firebaseConfig = {
  apiKey: "AIzaSyDu9588DVLMOJPIRyq3Ch7lKOmZY0--fqU",
  authDomain: "maheen-e677a.firebaseapp.com",
  projectId: "maheen-e677a",
  storageBucket: "maheen-e677a.firebasestorage.app",
  messagingSenderId: "639719481320",
  appId: "1:639719481320:web:f06b65a6daed5485248e5d",
  measurementId: "G-EBEB6DXP11"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const db = getFirestore(app);
export const storage = getStorage(app);

// ✅ Export the db
export { db };