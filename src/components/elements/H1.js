import React from "react"
import { styled } from "styled-components"

export const H1 = styled.h1`
  color: ${props => props.theme.green};
  text-align: ${props => (props.centered ? "center" : "left")};
  font-family: ${props => props.theme.font};
  font-size: 4rem;
`
export default H1
