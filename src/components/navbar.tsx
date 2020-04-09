import React from "react"
import {
  Nav,
  NavbarNav,
  NavItem,
  NavLink,
  Logo,
  LogoText,
  LinkText,
  LogoContainer,
  ThemeButton,
  ThemeSwitcher,
} from "../styles/navbar.styles"

import HomeIcon from "../svg/home.svg"
import BlogIcon from "../svg/blog.svg"
import PortfolioIcon from "../svg/portfolio.svg"
import ResumeIcon from "../svg/resume.svg"

import MoonIcon from "../svg/moon.svg"
import SunIcon from "../svg/sun.svg"

import { withTheme } from "styled-components"

export const Navbar = ({ themeToggle, activeTheme, theme }) => {
  const transitionColor = theme.backgroundSecondary

  return (
    <Nav style={{ zIndex: 100 }}>
      <link
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        rel="stylesheet"
      />
      <NavbarNav>
        <Logo>
          <LogoContainer>
            <LogoText>DivNectar</LogoText>
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fad"
              data-icon="angle-double-right"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              className="svg-inline--fa logoarrows fa-angle-double-right fa-w-14 fa-5x"
            >
              <g className="fa-group">
                <path
                  fill="currentColor"
                  d="M224 273L88.37 409a23.78 23.78 0 0 1-33.8 0L32 386.36a23.94 23.94 0 0 1 0-33.89l96.13-96.37L32 159.73a23.94 23.94 0 0 1 0-33.89l22.44-22.79a23.78 23.78 0 0 1 33.8 0L223.88 239a23.94 23.94 0 0 1 .1 34z"
                  className="fa-secondary"
                ></path>
                <path
                  fill="currentColor"
                  d="M415.89 273L280.34 409a23.77 23.77 0 0 1-33.79 0L224 386.26a23.94 23.94 0 0 1 0-33.89L320.11 256l-96-96.47a23.94 23.94 0 0 1 0-33.89l22.52-22.59a23.77 23.77 0 0 1 33.79 0L416 239a24 24 0 0 1-.11 34z"
                  className="fa-primary"
                ></path>
              </g>
            </svg>
          </LogoContainer>
        </Logo>

        <NavItem>
          <NavLink
            cover
            direction="right"
            duration={0.6}
            bg={transitionColor}
            to="/"
          >
            <HomeIcon />
            <LinkText className="link-text">Home</LinkText>
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink
            cover
            direction="right"
            duration={0.6}
            bg={transitionColor}
            to="/blog/"
          >
            <BlogIcon />
            <LinkText className="link-text">Blog</LinkText>
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink
            cover
            direction="right"
            bg={transitionColor}
            duration={0.6}
            to="/portfolio/"
          >
            <PortfolioIcon />
            <LinkText className="link-text">Portfolio</LinkText>
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink
            cover
            bg={transitionColor}
            duration={0.6}
            direction="right"
            to="/resume/"
          >
            <ResumeIcon />
            <LinkText className="link-text">Resume</LinkText>
          </NavLink>
        </NavItem>

        <ThemeButton onClick={() => themeToggle()} id="themeButton">
          <ThemeSwitcher activeTheme={activeTheme}>
            <SunIcon />
            <MoonIcon />
            <LinkText
              style={{ marginLeft: "75px", cursor: "default" }}
              className="link-text"
            >
              Theme
            </LinkText>
          </ThemeSwitcher>
        </ThemeButton>
      </NavbarNav>
    </Nav>
  )
}

export default withTheme(Navbar)
