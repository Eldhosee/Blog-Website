// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-c49fc.firebaseapp.com",
  projectId: "mern-blog-c49fc",
  storageBucket: "mern-blog-c49fc.appspot.com",
  messagingSenderId: "347909401829",
  appId: "1:347909401829:web:146ee484768c3f81a9780c",
  measurementId: "G-1WEN9GXG5M"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
