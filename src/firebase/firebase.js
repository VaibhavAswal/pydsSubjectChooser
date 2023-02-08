import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyDHMVDZwUX4EwkBkl-2UPsaUhKYTb9RS0U",
	authDomain: "pyds-4d3b2.firebaseapp.com",
	projectId: "pyds-4d3b2",
	storageBucket: "pyds-4d3b2.appspot.com",
	messagingSenderId: "799115540946",
	appId: "1:799115540946:web:e2c73a8932bcd80a05300b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);

export { app, auth, db };
