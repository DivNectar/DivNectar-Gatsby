import styled from "styled-components"
import AniLink from "gatsby-plugin-transition-link/AniLink"

interface H1Props {
  centered: boolean
}

const ContentCardStyles = {
  PostContainer: styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
  `,
  PostsContainer: styled.div`
    display: flex;
    flex-direction: column;
    width: 85%;
    margin: auto;
  `,
  PostHeader: styled.h2`
    color: ${props => props.theme.pink};
  `,
  PostLink: styled(AniLink)`
    color: ${props => props.theme.pink};
  `,
  H1: styled.h1<H1Props>`
    color: ${props => props.theme.green};
    text-align: ${props => (props.centered ? "center" : "left")};
    font-family: ${props => props.theme.font};
    font-size: 4rem;
  `,
  PostCard: styled.div`
    background-color: ${props => props.theme.backgroundSecondary};
    transition: all 600ms ease-in;
    padding: 2rem;
    margin: 2rem;
    border-radius: 8px;
    box-shadow: 2px 2px 13px black;
  `,
}

export default ContentCardStyles