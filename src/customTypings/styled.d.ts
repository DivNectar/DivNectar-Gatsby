// import original module declarations
import "styled-components"

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
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
