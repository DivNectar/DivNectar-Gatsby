import React from "react"
import styled from "styled-components"

const FooterContainer = styled.div`
  height: 40px;
  width: 100%;
  right: 0;
  background-color: ${props => props.theme.pink};
  position: relative;
  bottom: 0;
  opacity: 1;
  box-shadow: ${props => props.theme.boxShadows.elevation2};
  display: flex;
  align-items: center;
`

const Spacer = styled.div`
  flex-grow: 1;
`

const FooterText = styled.span`
  padding: 0 1.3rem;
  color: ${props => props.theme.background};
  opacity: 1;
  font-size: 0.8rem;
`

export const Footer = () => {
  return (
    <FooterContainer>
      <Spacer />
      <FooterText>Made with ❤ | William Melton (DivNectar) 2020</FooterText>
    </FooterContainer>
  )
}
