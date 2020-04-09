import React from "react"

import styled from "styled-components"
import CodeBlock from "../components/elements/codeblock"

//TODO: I am REALLY not sure why I can't just export the objects without
// wrapping it in the react function, but I have too for some reason.
// I wanna find out why though.

const components = {
  pre: (props: any) => <div {...props} />,
  code: (props: any) => <CodeBlock {...props} />,
  p: styled.p`
    margin: 3px;
    line-height: 1.9rem;
  `,
  h1: styled.h1`
    color: ${props => props.theme.textSecondary};
    font-family: ${props => props.theme.headerFont};
    font-weight: bold;
    font-size: 3rem;
    text-decoration: none;
    padding-bottom: 1.5rem;
    border-bottom: 2px dashed ${props => props.theme.textPrimary};
  `,
  h2: styled.h2`
    color: #a9a9a9;
    font-family: ${props => props.theme.headerFont};
    font-weight: bold;
    font-size: 2rem;
    text-decoration: none;
    margin-bottom: 0.4rem;
    padding-bottom: 0;
  `,
  h3: styled.h3`
    color: #a9a9a9;
    font-family: ${props => props.theme.headerFont};
    font-weight: bold;
    font-size: 1.1rem;
    text-decoration: none;
    margin-bottom: 0px;
  `,
  h4: styled.h4`
    color: ${props => props.theme.green};
    font-family: ${props => props.theme.headerFont};
    font-weight: bold;
    text-decoration: none;
    margin-left: 1.4rem;
  `,
  h6: styled.h6`
    color: ${props => props.theme.blue};
    font-family: ${props => props.theme.headerFont};
    font-weight: bold;
    font-size: 0.8rem;
    margin: 0.3rem 1.2rem;
    text-decoration: none;
    margin-left: 1.6rem;
  `,
}

const MDXStyles = props => {
  return components
}

export { MDXStyles }
