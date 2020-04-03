import React from "react"

import styled from "styled-components"
import CodeBlock from "../components/elements/codeblock"

//TODO: I am REALLY not sure why I can't just export the objects without
// wrapping it in the react function, but I have too for some reason.
// I wanna find out why though. 

const components = {
    pre: props => <div {...props} />,
    code: props => <CodeBlock {...props} />,
    h1: styled.h1`
      color: ${props => props.theme.pink};
      font-family: ${props => props.theme.headerFont};
      font-weight: bold;
      font-size: 3rem;
      text-decoration: none;
    `,
    h2: styled.h2`
      color: ${props => props.theme.green};
      font-family: ${props => props.theme.headerFont};
      font-weight: bold;
      font-size: 2rem;
      text-decoration: none;
    `,
    h4: styled.h4`
      color: ${props => props.theme.green};
      font-family: ${props => props.theme.headerFont};
      font-weight: bold;
      text-decoration: none;
    `,
    h6: styled.h6`
      color: ${props => props.theme.blue};
      font-family: ${props => props.theme.headerFont};
      font-weight: bold;
      font-size: 0.8rem;
      margin: 0.3rem 1.2rem;
      text-decoration: none;
    `,
  }

const MDXStyles = props => {
  return components
}

export { MDXStyles }
