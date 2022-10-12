// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth } from "@firebase/auth";
import { getStorage } from "@firebase/storage";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBvATSTU-FTx9K02XAbiLYdKC_1oFnNYnk",
    authDomain: "yongsang-web.firebaseapp.com",
    projectId: "yongsang-web",
    storageBucket: "yongsang-web.appspot.com",
    messagingSenderId: "818038973517",
    appId: "1:818038973517:web:a275933025111047656804",
    measurementId: "G-7NRXRVTSPZ",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();
const storage = getStorage();

export default app;
export { auth, db, storage };
