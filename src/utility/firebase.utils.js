import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyC7a1ZBldF3KYetGUG04MJ_6mcSbCSUCxQ",
  authDomain: "divnectar-b8c6a.firebaseapp.com",
  databaseURL: "https://divnectar-b8c6a.firebaseio.com",
  projectId: "divnectar-b8c6a",
  storageBucket: "divnectar-b8c6a.appspot.com",
  messagingSenderId: "563847961751",
  appId: "1:563847961751:web:a2e5bc349fd2d858",
}

export const auth = firebase.auth()
export const firestore = firebase.firestore()

// auth utility
const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: "select_account" })
export const SignInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
