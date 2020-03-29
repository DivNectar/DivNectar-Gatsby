import firebase from "firebase/app"
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

let instance = null
let auth = null

export default function getFirebase() {
  // make sure we have the window object available
  if (typeof window !== "undefined") {
    // if already instantatized, don't make another
    if (instance) return { instance, auth }
    // if not instanantized, start everything up
    // and pass it on to the component who needs it
    instance = firebase.initializeApp(firebaseConfig)
    auth = firebase.auth()

    const provider = new firebase.auth.GoogleAuthProvider()
    provider.setCustomParameters({ prompt: "select_account" })
    const signInWithGoogle = () => auth.signInWithPopup(provider)

    return { instance, signInWithGoogle, auth }
  }

  return null
}
