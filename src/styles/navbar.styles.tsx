import styled from "styled-components";
import AniLink from "gatsby-plugin-transition-link/AniLink";

export const LinkText = styled.span`
  font-family: ${(props) => props.theme.font};
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
  display: none;
  opacity: 1;
  margin-left: 1rem;
  color: ${(props) => props.theme.textSecondary};
  color: ${(props) => props.theme.pink};
  text-align: center;
`;

export const Nav = styled.nav`
  position: fixed;
  background-color: ${(props) => props.theme.backgroundSecondary};
  transition: all 600ms;
  /* transition: width 600ms ease; */
  top: 0;
  z-index: 100;
  box-shadow: ${(props) => props.theme.boxShadows.elevation2};

  @media only screen and (max-width: 600px) {
    bottom: 0;
    width: 100vw;
    height: 5rem;
    :hover .link-text {
      display: none;
    }
  }
  @media only screen and (min-width: 600px) {
    top: 0;
    width: 5rem;
    height: 100vh;
    &:hover {
      width: 16rem;
    }
    :hover .link-text {
      display: inline;
      opacity: 1;
      transition: all 3000ms;
    }
  }
`;

export const Svg = styled.svg`
  color: ${(props) => props.theme.red};
  transform: rotate(0deg);
  transition: var(--transition-speed);
  max-height: 70px;
  @media only screen and (min-width: 600px) {
    &:hover {
      transform: rotate(-180deg);
      margin-left: 11rem;
    }
  }
`;
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
`;
export const NavItem = styled.li`
  width: 100%;
`;

export const ThemeButton = styled.li`
  width: 100%;
  margin-top: auto;
`;

export const Logo = styled.li`
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 1rem;
  text-align: center;
  color: ${(props) => props.theme.pink};
  background: ${({ theme }) => theme.background};
  font-size: 1.2rem;
  letter-spacing: 0.3ch;
  width: 100%;
  svg {
    transform: rotate(0deg);
    transition: var(--transition-speed);
  }
  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

export const NavLink = styled(AniLink)`
  display: flex;
  align-items: center;
  height: 5rem;
  color: ${(props) => props.theme.textPrimary};
  text-decoration: none;
  filter: grayscale(100%) opacity(0.7);
  transition: var(--transition-speed);
  &:hover {
    filter: grayscale(0%) opacity(1);
    background: ${(props) => props.theme.backgroundSecondary};
    color: ${(props) => props.theme.textSecondary};
  }
  svg {
    width: 2rem;
    min-width: 2rem;
    max-height: 80px;
    margin: 0 1.5rem;
  }
  @media only screen and (max-width: 600px) {
    justify-content: center;
  }
`;

export const ExternalNavLink = styled.a`
  display: flex;
  align-items: center;
  height: 5rem;
  color: ${(props) => props.theme.textPrimary};
  text-decoration: none;
  filter: grayscale(100%) opacity(0.7);
  transition: var(--transition-speed);
  &:hover {
    filter: grayscale(0%) opacity(1);
    background: ${(props) => props.theme.backgroundSecondary};
    color: ${(props) => props.theme.textSecondary};
  }
  svg {
    width: 2rem;
    min-width: 2rem;
    max-height: 80px;
    margin: 0 1.5rem;
  }
  @media only screen and (max-width: 600px) {
    justify-content: center;
  }
`;

export const ThemeSwitcher = styled.div<{ activeTheme: string }>`
  display: flex;
  align-items: center;
  height: 5rem;
  color: ${(props) => props.theme.textPrimary};
  text-decoration: none;
  filter: grayscale(100%) opacity(0.7);
  transition: var(--transition-speed);
  overflow: hidden;
  &:hover {
    filter: grayscale(0%) opacity(1);
    background: ${(props) => props.theme.backgroundSecondary};
    color: ${(props) => props.theme.textSecondary};
  }
  svg {
    width: 2rem;
    min-width: 2rem;
    margin: 0 1.5rem;
  }
  svg {
    width: 2rem;
    transition: all 0.5s ease-in-out;

    // sun icon
    &:first-child {
      transform: ${({ activeTheme }) =>
        activeTheme === "light" ? "translateY(0)" : "translateY(100px)"};
      position: absolute;
    }

    // moon icon
    &:nth-child(2) {
      transform: ${({ activeTheme }) =>
        activeTheme === "light" ? "translateY(-100px)" : "translateY(0)"};
      position: absolute;
    }
    @media only screen and (max-width: 600px) {
      justify-content: center;
    }
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  height: 5rem;
  background-color: ${({ theme }) =>
    theme.name === "light"
      ? theme.backgroundSecondary
      : theme.backgroundSecondary};
  color: ${(props) => props.theme.textPrimary};
  text-decoration: none;
  filter: grayscale(100%) opacity(0.7);
  transition: var(--transition-speed);
  &:hover {
    span {
      left: 20px;
    }
    svg {
      transform: rotate(-360deg);
      /* margin-left: 11rem; */
      justify-self: flex-end;
      width: 120px;
      height: 120px;
      transition: all 600ms ease-in-out;
    }
    filter: grayscale(0%) opacity(1);
    background: ${(props) => props.theme.backgroundSecondary};
    color: ${(props) => props.theme.textSecondary};
  }
  svg {
    width: 100px;
    height: 100px;
    /* min-width: 2rem; */
    margin: 0 auto;
    justify-self: center;
  }
  @media only screen and (max-width: 600px) {
    justify-content: center;
  }
`;

export const LogoText = styled.span`
  display: inline;
  position: absolute;
  left: -999px;
  transition: var(--transition-speed);
  cursor: default;
  &:hover {
    left: 0px;
  }
`;
