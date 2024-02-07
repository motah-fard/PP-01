
import { getFirestore } from "@firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCkJsxTrKG6tT3LZrATKzNV7InMeoorAEY",
  authDomain: "chat-fc7d5.firebaseapp.com",
  projectId: "chat-fc7d5",
  storageBucket: "chat-fc7d5.appspot.com",
  messagingSenderId: "625128102513",
  appId: "1:625128102513:web:c86308f5f1059e46c919d0"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();