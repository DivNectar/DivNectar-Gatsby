import React from "react"
import PropTypes from "prop-types"

// custom components
import Navbar from "./navbar"

// style providers
import { ThemeProvider } from "styled-components"
import styled from "styled-components"
import { draculaTheme } from "../styles/themes.js"
import { GlobalStyle } from "../styles/global.styles"
import { AuthFab } from "./auth-fab"

const Container = styled.div`
  display: ${props => (props.center ? "flex" : "block")};
  justify-content: ${props => (props.center ? "center" : "none")};
  width: ${props => (props.center ? "65%" : "100%")};
  margin: ${props => (props.center ? "auto" : "none")};
`

const Layout = ({ children }, props) => {
  return (
    <ThemeProvider theme={draculaTheme}>
      <link
        href="https://fonts.googleapis.com/css?family=Open+Sans:600|Roboto&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        rel="stylesheet"
      />
      <AuthFab></AuthFab>
      <GlobalStyle />
      <Navbar />
      <main>
        <Container>{children}</Container>
      </main>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
