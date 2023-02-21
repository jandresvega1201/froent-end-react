// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCghd65uS_sicOrWBB9Pn8jMP-SaSc9f14",
    authDomain: "login-user-71644.firebaseapp.com",
    projectId: "login-user-71644",
    storageBucket: "login-user-71644.appspot.com",
    messagingSenderId: "790309743296",
    appId: "1:790309743296:web:57112d28d8091b1a939b25",
    measurementId: "G-KPSXZVM1V0"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
