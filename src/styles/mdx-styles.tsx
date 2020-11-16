import React from "react"

import styled from "styled-components"
import CodeBlock from "../components/elements/codeblock"

// this removes the svg icon that the plugin for
// post header ID's makes...
export const AutoLink = `
  a {
    float: left;
    padding-right: 4px;
    margin-left: -20px;
  }
  svg {
    visibility: hidden;
  }
  &:hover {
    a {
      svg {
        visibility: visible;
      }
    }
  }

`

const components = {
  pre: (props: any) => <div {...props} />,
  code: (props: any) => <CodeBlock {...props} />,
  p: styled.p`
    margin: 3px;
    line-height: 1.9rem;
    font-size: 1.1rem;
  `,
  h1: styled.h1`
    color: ${props => props.theme.pink};
    font-family: ${props => props.theme.headerFont};
    font-weight: bold;
    font-size: 3rem;
    text-decoration: none;
    padding-bottom: 1.5rem;
    border-bottom: 2px dashed ${props => props.theme.textPrimary};
    ${AutoLink}
  `,
  h2: styled.h2`
    color: ${props => props.theme.green};
    font-family: ${props => props.theme.headerFont};
    font-weight: bold;
    font-size: 2rem;
    text-decoration: none;
    margin-bottom: 0.4rem;
    padding-bottom: 1.2rem;
    border-bottom: 2px dashed ${props => props.theme.textPrimary};
    ${AutoLink}
  `,
  h3: styled.h3`
    color: ${props => props.theme.blue};
    font-family: ${props => props.theme.headerFont};
    font-weight: bold;
    font-size: 1.3rem;
    text-decoration: none;
    margin-bottom: 0px;
    padding-bottom: 0.9rem;
    ${AutoLink}
  `,
  h4: styled.h4`
    color: ${props => props.theme.green};
    font-family: ${props => props.theme.headerFont};
    font-weight: bold;
    text-decoration: none;
    margin-left: 1.4rem;
    ${AutoLink}
  `,
  h6: styled.h6`
    color: ${props => props.theme.blue};
    font-family: ${props => props.theme.headerFont};
    font-weight: bold;
    font-size: 0.8rem;
    margin: 0.3rem 1.2rem;
    text-decoration: none;
    margin-left: 1.6rem;
    ${AutoLink}
  `,
}

const MDXStyles = () => {
  return components
}

export { MDXStyles }
