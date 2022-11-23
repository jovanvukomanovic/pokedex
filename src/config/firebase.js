import firebase from 'firebase/app'

require("firebase/auth")
require("firebase/firestore")

export const firebaseConfig = {
    apiKey: "AIzaSyD7BIeuT4wo-_I77hN5hIxxoScxdkosTxk",
    authDomain: "pokedex-5a1a0.firebaseapp.com",
    projectId: "pokedex-5a1a0",
    storageBucket: "pokedex-5a1a0.appspot.com",
    messagingSenderId: "846385727266",
    appId: "1:846385727266:web:79112b63b8de175fd1077b"
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;