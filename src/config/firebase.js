import firebase from 'firebase/app';
import 'firebase/database'; // If using Firebase database
import * as admin from 'firebase-admin';

//https://firebase.google.com/docs/admin/setup

const fir = {
    apiKey: "AIzaSyCc4t_4QhuXPN6OUU9zU9QqfSFKCOam4-U",
    authDomain: "mood-calendar-2020.firebaseapp.com",
    databaseURL: "https://mood-calendar-2020.firebaseio.com",
    projectId: "mood-calendar-2020",
    storageBucket: "mood-calendar-2020.appspot.com",
    messagingSenderId: "744517838298",
    appId: "1:744517838298:web:cb81a79c7b8dec58260ce3",
    measurementId: "G-7X3608W1X9"
};


admin.initializeApp({
    credential: admin.credential.applicationDefault(),
    databaseURL: fir.databaseURL
});

const app = firebase.initializeApp(fir);
export const db = app.database();
