import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBPTwzqipPp-lo65d1fhJB56HVSN6hC4qs",
    authDomain: "react-hotel-app-5b991.firebaseapp.com",
    projectId: "react-hotel-app-5b991",
    storageBucket: "react-hotel-app-5b991.appspot.com",
    messagingSenderId: "669822199537",
    appId: "1:669822199537:web:f20619d6c91cc2fa892b50"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export default firebase;

export const auth = firebase.auth();