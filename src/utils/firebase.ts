import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAKvKwVUGYmViXf97oL-qmd5OwZ1KhYxcM",
  authDomain: "gre-flash-cards-34c9f.firebaseapp.com",
  projectId: "gre-flash-cards-34c9f",
  storageBucket: "gre-flash-cards-34c9f.appspot.com",
  messagingSenderId: "482893921001",
  appId: "1:482893921001:web:78c317b3c7c1cb35824e78"
};

export const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore();

export var provider = new GoogleAuthProvider();
