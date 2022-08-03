import styled from "styled-components"

interface props {
    centered: boolean;
  }

export const H1 = styled.p<props>`
  color: ${props => props.theme.textPrimary};
  text-align: ${props => (props.centered ? "center" : "left")};
  font-family: ${props => props.theme.font};
  font-size: 1.0rem;
  margin: 0 auto;
  @media only screen and (max-width: 600px) {
    width: 100%;
    font-size: 1.2rem;
  }
`
export default H1
