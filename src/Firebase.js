// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqN0pLurUp-eutvyBf_MrJodd3AmnuIig",
  authDomain: "board-54091.firebaseapp.com",
  projectId: "board-54091",
  storageBucket: "board-54091.appspot.com",
  messagingSenderId: "501470673872",
  appId: "1:501470673872:web:ab9e0a5a0ba425676757d5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth  = getAuth();