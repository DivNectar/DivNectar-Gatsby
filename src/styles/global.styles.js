import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  :root {
    font-size: 16px;
    font-family: "Open Sans";
    --text-primary: #b6b6b6;
    --text-secondary: #ececec;
    --bg-primary: #23232e;
    --bg-secondary: #141418;
    --transition-speed: 600ms;
    --nav-primary: #44475a;
    --logo-primary: #ff79c6;
    --logo-secondary: #50fa7b;
  }
  .dracula {
  --text-primary: #b6b6b6;
  --text-secondary: #ececec;
  --bg-primary: #23232e;
  --bg-secondary: #141418;
  --nav-primary: #44475a;
  --logo-primary: #ff79c6;
  --logo-secondary: #50fa7b;
}

.light {
  --text-primary: #1f1f1f;
  --text-secondary: #000000;
  --bg-primary: #ffffff;
  --bg-secondary: #e4e4e4;
}

.solar {
  --text-primary: #576e75;
  --text-secondary: #35535c;
  --bg-primary: #fdf6e3;
  --bg-secondary: #f5e5b8;
}

@media (prefers-color-scheme: dark) {
  :root {
    --text-color: #b6b6b6;
    --background: #ececec;
  }
}

@media (prefers-color-scheme: light) {
  :root {
    --text-color: #1f1f1f;
    --background: #000000;
  }
}

body {
  /* color: black; */
  /* background-color: white; */
  margin: 0;
  padding: 0;
  color: var(--text-primary);
  background: var(--bg-primary);
}

body::-webkit-scrollbar {
  width: 0.25rem;
}

body::-webkit-scrollbar-track {
  background: #1e1e24;
}

body::-webkit-scrollbar-thumb {
  background: #6649b8;
}

main {
  margin-left: 5rem;
  padding: 0;
  color: var(--text-primary);
}

a {
  color: var(--logo-primary);
}

pre.prism-code {
  font-family: OperatorMono Nerd Font;
}


.fa-primary {
  color: #bd93f9;
}

.fa-secondary {
  color: #ff79c6;
}

.fa-primary,
.fa-secondary {
  transition: var(--transition-speed);
}
`
