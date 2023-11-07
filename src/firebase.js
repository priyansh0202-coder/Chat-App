import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD-MwfiTx9lhoYPEvPkK-h_Q93-R2Yke2g",
  authDomain: "react-53503.firebaseapp.com",
  projectId: "react-53503",
  storageBucket: "react-53503.appspot.com",
  messagingSenderId: "268400107383",
  appId: "1:268400107383:web:c75a9fe17b70c1560acb72"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
