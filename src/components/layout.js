import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Navbar from "./navbar"

import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "../styles/global.styles"

const draculaTheme = {
  background: "#141418",
  backgroundSecondary: "#23232e",
  textPrimary: "#b6b6b6",
  textSecondary: "#ececec",
  navbarColor: "#44475a",
  pink: "#ff79c6",
  green: "#50fa7b",
  font: "Roboto",
  fontSize: "14px",
}

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <ThemeProvider theme={draculaTheme}>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"
      />
      <GlobalStyle />
      <Navbar />
      <main>{children}</main>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
