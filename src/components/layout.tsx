import React, { useState } from "react"
import PropTypes from "prop-types"

// custom components
import Navbar from "./navbar"

// style providers
import { ThemeProvider } from "styled-components"
import styled from "styled-components"
import { dark, light } from "../styles/themes"
import { GlobalStyle } from "../styles/global.styles"
import { AuthFab } from "./auth-fab"
import SEO from "./seo"

interface Props {
  center: boolean
  children: Element
}

const Layout = ({ children, center }: Props) => {
  const Container = styled.div`
    display: ${props => (center ? "flex" : "block")};
    justify-content: ${props => (center ? "center" : "none")};
    width: ${props => (center ? "75%" : "100%")};
    margin: ${props => (center ? "auto" : "none")};
  `

  const [theme, setTheme] = useState("light")

  // The function that toggles between themes
  const toggleTheme = () => {
    console.log("toggled the theme")
    // if the theme is not light, then set it to dark
    if (theme === "light") {
      setTheme("dark")
      // otherwise, it should be light
    } else {
      setTheme("light")
    }
  }

  return (
    <ThemeProvider theme={theme === "light" ? light : dark}>
      <SEO title="DivNectar" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      ></meta>
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
      <Navbar activeTheme={theme} themeToggle={toggleTheme} />
      <main>
        <Container>{children}</Container>
      </main>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  center: PropTypes.bool,
}

export default Layout
