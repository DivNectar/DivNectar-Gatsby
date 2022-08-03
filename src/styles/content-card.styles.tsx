import styled from "styled-components"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { Link } from "gatsby";
interface H1Props {
  centered: boolean
}

const ContentCardStyles = {
  PostContainer: styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    justify-items: center;
    flex-wrap: wrap;
    @media only screen and (max-width: 600px) {
      flex-direction: column;
    }
  `,
  PostsContainer: styled.div`
    display: flex;
    flex-direction: column;
    width: 70%;
    margin: 0 1.3rem;
    @media only screen and (max-width: 600px) {
      width: 85%;
      margin: 0 auto;
    }
  `,
  PostHeader: styled.h2`
    color: ${props => props.theme.pink};
    text-align: center;
  `,
  PostLink: styled(AniLink)`
    color: ${props => props.theme.pink};
    text-decoration: none;
    text-align: center;
    max-width: 300px;
    margin-bottom: 1rem;
    font-weight: bold;
    display: inline-block;
  `,
  H1: styled.h1<H1Props>`
    color: ${props => props.theme.green};
    text-align: ${props => (props.centered ? "center" : "left")};
    font-family: ${props => props.theme.font};
    font-size: 4rem;
    text-align: center;
  `,

  PostCard: styled.div`
    background-color: ${props => props.theme.backgroundSecondary};
    transition: all 600ms ease-in;
    padding: 0.8rem;
    margin: 2rem;
    border-radius: 8px;
    box-shadow: 2px 2px 13px black;
    min-width: 300px;
    max-width: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  TagChip: styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    background: ${props => props.theme.purple};
    color: ${props => props.theme.background};
    padding: 3px 12px;
    margin: 4px 2px;
    border-radius: 32px;
    font-size: 0.8rem;
    text-decoration: none;
    &.md-chip-hover:hover {
      background: #ccc;
    }
  `,
  TagsContainer: styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  `,
}

export default ContentCardStyles
