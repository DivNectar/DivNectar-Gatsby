import { DefaultTheme } from "styled-components";

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
  fontSize: "16px",
  boxShadows: {
    elevation1: `
      box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
      transition: all 0.3s cubic-bezier(.25,.8,.25,1);
    `,
    elevation2: `
      box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    `,
    elevation3: `
      box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
    `,
  },
};

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
  boxShadows: {
    elevation1: `
      box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
      transition: all 0.3s cubic-bezier(.25,.8,.25,1);
    `,
    elevation2: `
      box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    `,
    elevation3: `
      box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
    `,
  },
};

export { dark, light };
