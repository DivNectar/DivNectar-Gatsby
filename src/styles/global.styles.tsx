import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    font-size: ${(props) => props.theme.fontSize};
    font-family: ${(props) => props.theme.font};
    --text-primary: #b6b6b6;
    --text-secondary: #ececec;
    --bg-primary: #23232e;
    --bg-secondary: #141418;
    --transition-speed: 600ms;
    --nav-primary: #44475a;
    --logo-primary: #ff79c6;
    --logo-secondary: #50fa7b;
  }

  .tl-edges {
    overflow-x: visible;
    overflow: visible;
  }

  li::marker {
    color: ${(props) => props.theme.blue};
  }

@media only screen and (max-width: 600px) {
  :root{
    font-size: 12px;
  }
}
body {
  margin: 0;
  padding: 0;
  width: 100%;
  overflow: visible;
  height: 100%;
  color: ${(props) => props.theme.textPrimary};
  background: ${(props) => props.theme.background};
  ${"" /* TODO: make variable for theme transition speed */}
  transition: background 600ms ease-in;
}

body::-webkit-scrollbar {
  width: 0.25rem;
}

body::-webkit-scrollbar-track {
  background: #1e1e24;
}

body::-webkit-scrollbar-thumb {
  background: ${(props) => props.theme.pink};
}

main {
  margin-left: 5rem;
  padding: 0;
  color: ${(props) => props.theme.textPrimary};
  @media only screen and (max-width: 600px) {
    margin-left: 0;
    margin-top: 6rem;
  }
}

a {
  color: ${(props) => props.theme.purple};
}

pre.prism-code {
  font-family: OperatorMono Nerd Font;
  font-size: 1.2rem;
  overflow: auto;
  background: ${(props) => props.theme.backgroundSecondary} !important;
  @media only screen and (max-width: 600px) {
    font-size: 1.3rem;
  }
}

table {
  width: 70%;
  margin: 0 auto;
}

th {
  font-weight: bold;
  color: ${(props) => props.theme.green}
}

td {
  text-align: center;
}

kbd {
  padding: 4px 6px;
  border-radius: 2px;
  background: ${({ theme }) => theme.backgroundSecondary};
  color: ${({ theme }) => (theme.name === "light" ? "black" : "white")};
  font-size: 1.3rem;
}

.fa-primary {
  color: ${({ theme }) => theme.green};
}

.fa-secondary {
  color: ${({ theme }) => theme.blue};
}

.fa-primary,
.fa-secondary {
  transition: var(--transition-speed);
}
`;
