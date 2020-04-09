import React, { useState } from "react"
import PropTypes from "prop-types"

// custom components
import Navbar from "./navbar"

// style providers
import { ThemeProvider } from "styled-components"
import styled from "styled-components"
import { dark, light } from "../styles/themes"
import { GlobalStyle } from "../styles/global.styles"
import SEO from "./seo"

interface Props {
  center: boolean
  children?: Element
}

const Container = styled.div<Props>`
  display: ${props => (props.center ? "flex" : "block")};
  justify-content: ${props => (props.center ? "center" : "none")};
  width: ${props => (props.center ? "75%" : "100%")};
  margin: ${props => (props.center ? "auto" : "none")};
`

const Layout: React.FC<Props> = ({ children, center }) => {
  const [theme, setTheme] = useState("dark")

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
      <GlobalStyle />
      <Navbar activeTheme={theme} themeToggle={toggleTheme} />
      <main>
        <Container center={false}>{children}</Container>
      </main>
    </ThemeProvider>
  )
}

export default Layout