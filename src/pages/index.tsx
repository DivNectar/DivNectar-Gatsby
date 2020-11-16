import React from "react"
import SEO from "../components/seo"
import styled from "styled-components"

const PolyDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`

const SiteTitle = styled.h1`
  font-size: 4rem;
  color: ${props => props.theme.pink};
  margin-top: 10px;
`

const WelcomeText = styled.h6`
  font-size: 1.2rem;
  color: ${props => props.theme.green};
  margin-bottom: 0px;
`

const IntroParagraph = styled.p`
  margin: 0 auto;
  text-align: center;
  width: 85%;
`

const IndexPage = () => (
  <div>
    <SEO title="Home" />
    <PolyDiv>
      <WelcomeText>welcome to</WelcomeText>
      <SiteTitle>Div/Nectar</SiteTitle>
      <IntroParagraph>
        <p>
          Welcome to DivNectar! My name is Josh, I run and maintain DivNectar.
          I'm a developer by hobby (no formal schooling) and I absolutley love
          to create things in code!
        </p>
        <p>
          I created this site both as a resume for potential employers and to
          teach my fellow developers some of the tricks that I've learned over
          my 6 years of development.
        </p>
      </IntroParagraph>
    </PolyDiv>
  </div>
)

export default IndexPage
