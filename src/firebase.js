// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: "AIzaSyDwPc3zF2-Yr1Bs9XuFPKR_nHikdjGUzaU",
//     authDomain: "todo-c3fec.firebaseapp.com",
//     projectId: "todo-c3fec",
//     storageBucket: "todo-c3fec.appspot.com",
//     messagingSenderId: "88364240531",
//     appId: "1:88364240531:web:bdd4dbcee149b1cd0a8766",
//     measurementId: "G-27WGHNWE2B"
//   };

import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyDwPc3zF2-Yr1Bs9XuFPKR_nHikdjGUzaU",
        authDomain: "todo-c3fec.firebaseapp.com",
        projectId: "todo-c3fec",
        storageBucket: "todo-c3fec.appspot.com",
        messagingSenderId: "88364240531",
        appId: "1:88364240531:web:bdd4dbcee149b1cd0a8766",
        measurementId: "G-27WGHNWE2B"
})

const db = firebaseApp.firestore()



export default db;