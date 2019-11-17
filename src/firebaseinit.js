import * as firebase from "firebase/app";
import "firebase/functions";
import "firebase/analytics";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
    apiKey: "AIzaSyDVQpCWhqLBF3KV-UbEHtEcPdPU9pAVyTA",
    authDomain: "boardgames-4-you.firebaseapp.com",
    databaseURL: "https://boardgames-4-you.firebaseio.com",
    projectId: "boardgames-4-you",
    storageBucket: "boardgames-4-you.appspot.com",
    messagingSenderId: "1088763625927",
    appId: "1:1088763625927:web:8a64c28ba4e7961dc7d9e2",
    measurementId: "G-K663FT4XTK"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

firebase.getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        const unsubscribe = firebase.auth().onAuthStateChanged(user => {
            unsubscribe();
            resolve(user);
        }, reject);
    })
};

export default firebase;