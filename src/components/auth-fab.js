import React from "react"

import { myContext } from "../utility/provider"
import styled from "styled-components"

const FAB = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: center;

  background: ${props => props.theme.pink};
  color: ${props => props.theme.backgroundSecondary};

  border-radius: 50%;

  position: fixed;
  right: 50px;
  bottom: 50px;
  z-index: 10;

  width: 70px;
  height: 70px;

  box-shadow: 0 6px 10px 0 ${props => props.theme.background};
  transition: all 0.6s ease-in-out;
  .info-text {
    display: none;
    font-size: 0.5rem;
    transition: all 2s;
  }
  &:hover {
    box-shadow: 0 6px 14px 0 ${props => props.theme.background};
    transform: scale(1.05);

    /* lets see */
    border-radius: 5px;
    width: 130px;
    height: 90px;
    .info-text {
      display: block;
      transition: display 0.2s 1s ease;
    }
  }
`

const Insides = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: center;
`

export const AuthFab = () => {
  return (
    <myContext.Consumer>
      {context => (
        <FAB>
          {context.currentUser ? (
            <Insides onClick={context.signOut}>
              <i className="fa fa-user fa-3x"></i>
              <span className="info-text">
                Welcome, {context.currentUser.displayName}.
              </span>
            </Insides>
          ) : (
            <Insides onClick={context.signIn}>
              <i className="fa fa-user-secret fa-3x"></i>
              <span className="info-text">You're anonymous to me.</span>
            </Insides>
          )}
        </FAB>
      )}
    </myContext.Consumer>
  )
}
