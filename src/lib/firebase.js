import Firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
    apiKey: "AIzaSyBIfVE0slC4M1xhF4XdZglvASYrd83Rjbk",
    authDomain: "instagram-clone-e91a2.firebaseapp.com",
    projectId: "instagram-clone-e91a2",
    storageBucket: "instagram-clone-e91a2.appspot.com",
    messagingSenderId: "435491003222",
    appId: "1:435491003222:web:cdbb10abde3f2d9bdd14f7",
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

console.log("firebase", firebase);

export { firebase, FieldValue };
