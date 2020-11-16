import React from "react";
import {
  Nav,
  NavbarNav,
  NavItem,
  NavLink,
  ExternalNavLink,
  Logo,
  LinkText,
  LogoContainer,
  ThemeButton,
  ThemeSwitcher,
} from "../styles/navbar.styles";

import LogoSVG from "../svg/DivNectar-Logo.svg";

import HomeIcon from "../svg/home.svg";
import BlogIcon from "../svg/blog.svg";
import PortfolioIcon from "../svg/portfolio.svg";
import ResumeIcon from "../svg/resume.svg";
import GithubIcon from "../svg/github.svg";

import MoonIcon from "../svg/moon.svg";
import SunIcon from "../svg/sun.svg";

import { withTheme } from "styled-components";

interface NavbarProps {
  themeToggle: () => void;
  activeTheme: string;
  theme: any;
}

export const Navbar = ({ themeToggle, activeTheme, theme }: NavbarProps) => {
  const transitionColor = theme.backgroundSecondary;

  return (
    <Nav>
      <link
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        rel="stylesheet"
      />
      <NavbarNav>
        <Logo>
          <LogoContainer>
            <LogoSVG className="logo-svg" />
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

        <NavItem>
          <ExternalNavLink href="https://github.com/williamjmelton/dotfiles">
            <GithubIcon />
            <LinkText className="link-text">DotFiles</LinkText>
          </ExternalNavLink>
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
  );
};

export default withTheme(Navbar);
