import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAbuc5urdWk6ACMOB1rnp_xW_lqnREzieI",
  authDomain: "house-marketplce-app.firebaseapp.com",
  projectId: "house-marketplce-app",
  storageBucket: "house-marketplce-app.appspot.com",
  messagingSenderId: "680600272985",
  appId: "1:680600272985:web:76b2f57019dbecc4a97148"
};

// Initialize Firebase
initializeApp(firebaseConfig)
export const db = getFirestore()