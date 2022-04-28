
// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBzWuCKnZ9yNZeztn-iKTpH5VZqwvdQl0o",
  authDomain: "netflix-redesign-fe448.firebaseapp.com",
  projectId: "netflix-redesign-fe448",
  storageBucket: "netflix-redesign-fe448.appspot.com",
  messagingSenderId: "41485663008",
  appId: "1:41485663008:web:0c2d90b40f550ebc63b545"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }