import React, { useState } from "react"

export const myContext = React.createContext()

const Provider = props => {
  const [isAuthed, setAuth] = useState(false)

  return (
    <myContext.Provider
      value={{
        isAuthed,
        changeAuth: () => setAuth(!isAuthed),
      }}
    >
      {props.children}
    </myContext.Provider>
  )
}

export default ({ element }) => <Provider>{element}</Provider>
