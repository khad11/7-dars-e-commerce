import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBOQgWAqd5d_XuKFhBywXIkUPXnZ8VENzw",
  authDomain: "localshop-4727e.firebaseapp.com",
  projectId: "localshop-4727e",
  storageBucket: "localshop-4727e.firebasestorage.app",
  messagingSenderId: "313658083186",
  appId: "1:313658083186:web:5f5fd9c21bc59963e2ffeb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//
export const auth = getAuth();
