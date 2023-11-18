import fb from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";

const firebaseApp = fb.initializeApp({
    apiKey: "AIzaSyCMOBx00QrcnXiMShDWfATSdZSbWxcOYxM",
    authDomain: "instagram-clone-6b965.firebaseapp.com",
    projectId: "instagram-clone-6b965",
    storageBucket: "instagram-clone-6b965.appspot.com",
    messagingSenderId: "242838882870",
    appId: "1:242838882870:web:ed2fe1ed46f6d2f73d6697",
    measurementId: "G-YNN9WYLHCW",
});

const db = firebaseApp.firestore();
const auth = fb.auth();
const storage = fb.storage();

export { db, auth, storage, fb };