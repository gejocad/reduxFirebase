import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyD6Ihkf976CXqtoH5NlO8yvo57ipJwkEYM",
    authDomain: "reduxfirebase-d89eb.firebaseapp.com",
    projectId: "reduxfirebase-d89eb",
    storageBucket: "reduxfirebase-d89eb.appspot.com",
    messagingSenderId: "940823037064",
    appId: "1:940823037064:web:7fbb1fe41471c700a34b3d" };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();

export {
    db,
    googleAuthProvider,
    facebookAuthProvider,
    firebase
}