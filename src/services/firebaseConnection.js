import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

let firebaseConfig = {
    apiKey: "AIzaSyBA6xMpiql_D1WbV-IHCn00bwOBO167ia0",
    authDomain: "sistema-f011f.firebaseapp.com",
    projectId: "sistema-f011f",
    storageBucket: "sistema-f011f.appspot.com",
    messagingSenderId: "717900926523",
    appId: "1:717900926523:web:4f65d4e889a9cbb293961e",
    measurementId: "G-21HZ87NH37"
};

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export default firebase;

