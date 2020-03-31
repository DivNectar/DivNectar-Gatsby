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
        Welcome to my modest little site. Navigation to the left, take a look
        around if you care to learn a little about me. Visit the blog if you
        like to learn about web development.
      </IntroParagraph>
    </PolyDiv>
  </div>
)

export default IndexPage
