// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getDatabase } from 'firebase/database'; // Para o Realtime Database


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3yrSESg7sR3cImFOj-fKi5AZGhoN-Yr0",
  authDomain: "piw-t02-firebase-example.firebaseapp.com",
  projectId: "piw-t02-firebase-example",
  storageBucket: "piw-t02-firebase-example.firebasestorage.app",
  messagingSenderId: "576569083197",
  appId: "1:576569083197:web:4fbff43b4eeb18d640b154"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);