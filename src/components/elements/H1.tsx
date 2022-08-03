import styled from "styled-components"

interface props {
    centered: boolean;
  }

export const H1 = styled.h1<props>`
  color: ${props => props.theme.green};
  text-align: ${props => (props.centered ? "center" : "left")};
  font-family: ${props => props.theme.font};
  font-size: 4rem;
  @media only screen and (max-width: 600px) {
    font-size: 2rem;
  }
`
export default H1
