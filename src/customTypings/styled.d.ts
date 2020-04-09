// import original module declarations
import {} from "styled-components"
import { dark, light } from "../styles/themes"
import theme from "prism-react-renderer/themes/*"
// and extend them!
declare module "styled-components" {
  type Theme = typeof theme
  export interface DefaultTheme extends Theme {
    background: string
    backgroundSecondary: string
    textPrimary: string
    textSecondary: string
    navbarColor: string
    pink: string
    green: string
    purple: string
    blue: string
    red: string
    headerFont: string
    font: string
    fontSize: string
  }
}
