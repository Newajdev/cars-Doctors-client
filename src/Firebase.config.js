// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDSdJCi3SZJApCvYejx9gvgyV6Bsi-Bomo",
  authDomain: "cars-doctor-dd51b.firebaseapp.com",
  projectId: "cars-doctor-dd51b",
  storageBucket: "cars-doctor-dd51b.firebasestorage.app",
  messagingSenderId: "569618642007",
  appId: "1:569618642007:web:081bd54c346bd8e2cd1f12"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;