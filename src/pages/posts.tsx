import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Img from "gatsby-image"
import styled, { withTheme } from "styled-components"

// TODO combine the post styles here and the post styles for the portfolio into

const PostContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`

const PostHeader = styled.h2`
  color: ${props => props.theme.pink};
`

const PostLink = styled(AniLink)`
  color: ${props => props.theme.pink};
`

const H1 = styled.h1`
  color: ${props => props.theme.green};
  text-align: ${props => (props.centered ? "center" : "left")};
  font-family: ${props => props.theme.font};
  font-size: 4rem;
`

const PostCard = styled.div`
  background-color: ${props => props.theme.backgroundSecondary};
  transition: all 600ms ease-in;
  padding: 2rem;
  margin: 2rem;
  border-radius: 8px;
  box-shadow: 2px 2px 13px black;
`

export const Posts = ({ theme }) => {
  const data = useStaticQuery(postsQuery)
  console.log(theme)

  return (
    <div>
      <H1 centered>Blog</H1>
      <PostContainer>
        {data.allMdx.edges.map(({ node }, index) => {
          return (
            <PostCard key={index}>
              <PostHeader>
                <PostLink
                  paintDrip
                  hex={theme.backgroundSecondary}
                  duration={1.2}
                  to={"blog/" + node.frontmatter.slug}
                >
                  <Img
                    fluid={node.frontmatter.featuredImage.childImageSharp.fluid}
                  />
                  {node.frontmatter.title}
                </PostLink>
              </PostHeader>
            </PostCard>
          )
        })}
      </PostContainer>
    </div>
  )
}

const postsQuery = graphql`
  query postsQuery {
    allMdx(filter: { frontmatter: { type: { eq: "post" } } }, limit: 10) {
      edges {
        node {
          frontmatter {
            title
            slug
            date
            featuredImage {
              id
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          excerpt
          body
          tableOfContents
        }
      }
    }
  }
`

export default withTheme(Posts)
