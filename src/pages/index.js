import React from "react"

import Layout from "../components/layout"
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

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <PolyDiv>
      <WelcomeText>welcome to</WelcomeText>
      <SiteTitle>Div/Nectar</SiteTitle>
    </PolyDiv>
  </Layout>
)

export default IndexPage
