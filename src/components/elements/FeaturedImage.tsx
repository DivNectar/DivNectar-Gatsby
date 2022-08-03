import styled from "styled-components";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";

const FeaturedImage = styled(GatsbyImage)<{image: IGatsbyImageData | undefined}>`
  filter: ${props => props.theme.name == "dark" ? "invert(100%)" : "invert(0%)"}
`
export default FeaturedImage