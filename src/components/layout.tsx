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
  children?: Element
}

const Container = styled.div<Props & React.HTMLProps<HTMLInputElement>>`
  display: ${props => (props.center ? "flex" : "block")};
  justify-content: ${props => (props.center ? "center" : "none")};
  width: ${props => (props.center ? "75%" : "100%")};
  margin: ${props => (props.center ? "auto" : "none")};
`

const Layout = ({ children, center }: Props) => {
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
      <!-- Global site tag (gtag.js) - Google Analytics -->
      <script async src="https://www.googletagmanager.com/gtag/js?id=UA-141602114-1"></script>
      <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments)}
        gtag('js', new Date());

        gtag('config', 'UA-141602114-1');
      </script>

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
        <Container center={false}>{children}</Container>
      </main>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  center: PropTypes.bool,
}

export default Layout
