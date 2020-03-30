import firebase from "firebase/app"
import "firebase/auth"

const firebaseConfig = {
  apiKey: process.env.APIKEY,
  authDomain: process.env.AUTHDOMAIN,
  databaseURL: process.env.DATABASEURL,
  projectId: process.env.PROJECTID,
  storageBucket: process.env.STORAGEBUCKET,
  messagingSenderId: process.env.MESSAGINGSENDERID,
  appId: process.env.APPID,
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
