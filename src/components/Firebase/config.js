import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
    apiKey: "AIzaSyD9oLvNHSxFXd8pvfmlEm-eMWZrpRbL3Ts",
    authDomain: "reactdb-aff00.firebaseapp.com",
    projectId: "reactdb-aff00",
    storageBucket: "reactdb-aff00.appspot.com",
    messagingSenderId: "975679762979",
    appId: "1:975679762979:web:3ae347d4f60f0832a7f796"
};

const app = initializeApp(firebaseConfig);

export const database = getFirestore(app);