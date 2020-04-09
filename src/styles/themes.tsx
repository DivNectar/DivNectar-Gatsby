import { DefaultTheme } from "styled-components"

const dark: DefaultTheme = {
  name: "dark",
  background: "#141418",
  backgroundSecondary: "#23232e",
  textPrimary: "#b6b6b6",
  textSecondary: "#ececec",
  navbarColor: "#44475a",
  pink: "#ff79c6",
  green: "#50fa7b",
  purple: "#bd93f9",
  blue: "#8be9fd",
  red: "#ff5555",
  headerFont: "Open Sans, sans serif",
  font: "Roboto, sans serif",
  fontSize: "14px",
}

const light: DefaultTheme = {
  name: "light",
  background: "#fdf6e3",
  backgroundSecondary: "#eee8d5",
  textPrimary: "#657b83",
  textSecondary: "#657f86",
  navbarColor: "#93a1a1",
  pink: "#ff79c6",
  green: "#50fa7b",
  purple: "#bd93f9",
  blue: "#8be9fd",
  red: "#ff5555",
  headerFont: "Open Sans, sans serif",
  font: "Roboto, sans serif",
  fontSize: "14px",
}

export { dark, light }
