
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBmwaYctXUVz0eabDwFVDfgl0TPw7PmvAU",
  authDomain: "chat-ba6ed.firebaseapp.com",
  projectId: "chat-ba6ed",
  storageBucket: "chat-ba6ed.appspot.com",
  messagingSenderId: "1053124550045",
  appId: "1:1053124550045:web:09129355d7947f3e39a374"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()