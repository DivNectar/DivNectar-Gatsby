import React, { useState, useEffect } from "react"

import useFirebase from "../utility/useFirebase"
export const myContext = React.createContext()

const Provider = props => {
  const [currentUser, setAuth] = useState(null)
  const firebase = useFirebase()
  console.log(firebase)
  let signInWithGoogle = null

  useEffect(() => {
    if (!firebase) return

    // i think i can do things here.

    return firebase.instance.auth().onAuthStateChanged(user => {
      setAuth(user)
      console.log("User:", user)
    })
  }, [firebase])

  return (
    <myContext.Provider
      value={{
        currentUser,
        changeAuth: () => setAuth(this.currentUser),
        signIn: () => firebase.signInWithGoogle(),
        signOut: () => firebase.auth.signOut(),
      }}
    >
      {props.children}
    </myContext.Provider>
  )
}

export default ({ element }) => <Provider>{element}</Provider>
