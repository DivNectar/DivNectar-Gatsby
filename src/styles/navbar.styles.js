import styled from "styled-components"
import { Link } from "gatsby"

export const Nav = styled.nav`
  position: fixed;
  background-color: var(--nav-primary);
  transition: width 600ms ease;
  /* Testing */
  top: 0;

  @media only screen and (max-width: 600px) {
    bottom: 0;
    width: 100vw;
    height: 5rem;
  }
  @media only screen and (min-width: 600px) {
    top: 0;
    width: 5rem;
    height: 100vh;
    &:hover {
      width: 16rem;
    }
    &:hover .logo-text {
      left: 0px;
    }
  }
`

export const Svg = styled.svg`
  color: #50fa7b;
  transform: rotate(0deg);
  transition: var(--transition-speed);
  @media only screen and (min-width: 600px) {
    &:hover {
      transform: rotate(-180deg);
      margin-left: 11rem;
    }
  }
`
export const NavbarNav = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;

  @media only screen and (max-width: 600px) {
    flex-direction: row;
  }
`
export const NavItem = styled.li`
  width: 100%;
  :last-child {
    margin-top: auto;
  }
`

export const Logo = styled.li`
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 1rem;
  text-align: center;
  color: var(--logo-secondary);
  background: var(--logo-primary);
  font-size: 1.2rem;
  letter-spacing: 0.3ch;
  width: 100%;
  svg {
    color: #50fa7b;
    transform: rotate(0deg);
    transition: var(--transition-speed);
    @media only screen and (min-width: 600px) {
    }
    :hover {
      margin-left: 11rem;
      transform: rotate(-180deg);
    }
  }
  @media only screen and (max-width: 600px) {
    display: none;
  }
`

export const LinkText = styled(Link)`
  & {
    font-family: ${props => props.theme.font};
    font-size: 1.5rem;
    font-weight: bold;
    text-decoration: none;
    display: none;
    margin-left: 1rem;
    color: ${props => props.theme.textSecondary};
    color: ${props => props.theme.pink};
    text-align: center;
  }
  &:hover {
    display: inline;
  }
  @media only screen and (min-width: 600px) {
    &:hover {
      display: inline;
    }
  }
`

export const NavLink = styled.a`
  display: flex;
  align-items: center;
  height: 5rem;
  color: var(--text-primary);
  text-decoration: none;
  filter: grayscale(100%) opacity(0.7);
  transition: var(--transition-speed);
  &:hover ${LinkText} {
    display: inline;
  }
  &:hover {
    filter: grayscale(0%) opacity(1);
    background: var(--bg-secondary);
    color: var(--text-secondary);
  }
  svg {
    width: 2rem;
    min-width: 2rem;
    margin: 0 1.5rem;
  }
  @media only screen and (max-width: 600px) {
    justify-content: center;
  }
`

export const LogoText = styled.span`
  display: inline;
  margin-left: 1rem;
  position: absolute;
  left: -999px;
  transition: var(--transition-speed);
  color: #50fa7b;
`
