import styled from "styled-components";
import { GatsbyImage } from "gatsby-plugin-image";

const featuredimage = styled(gatsbyimage)`
  filter: ${props => props.theme.name == "dark" ? "invert(100%)" : "invert(0%)"}
`
