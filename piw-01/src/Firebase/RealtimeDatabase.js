// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getDatabase } from 'firebase/database'; // Para o Realtime Database


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTHnNbAIP6_3sDMNV9s4FvVDSihvET4BI",
  authDomain: "fir-piw-t01.firebaseapp.com",
  projectId: "fir-piw-t01",
  storageBucket: "fir-piw-t01.firebasestorage.app",
  messagingSenderId: "1003575373398",
  appId: "1:1003575373398:web:109c8200fea345c4de95f7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Pega a referência para o nosso banco de dados
export const db = getDatabase(app);