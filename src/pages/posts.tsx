import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Img from "gatsby-image"
import { withTheme } from "styled-components"

// TODO combine the post styles here and the post styles for the portfolio into
import ContentCardStyles from "../styles/content-card.styles"

export const Posts = ({ theme }) => {
  const data = useStaticQuery(postsQuery)

  return (
    <div>
      <ContentCardStyles.H1 centered>Blog</ContentCardStyles.H1>
      <ContentCardStyles.PostContainer>
        {data.allMdx.edges.map(({ node }, index) => {
          return (
            <ContentCardStyles.PostCard key={index}>
              <ContentCardStyles.PostHeader>
                <ContentCardStyles.PostLink
                  paintDrip
                  hex={theme.backgroundSecondary}
                  duration={1.2}
                  to={"blog/" + node.frontmatter.slug}
                >
                  <Img
                    fluid={node.frontmatter.featuredImage.childImageSharp.fluid}
                  />
                  {node.frontmatter.title}
                </ContentCardStyles.PostLink>
              </ContentCardStyles.PostHeader>
            </ContentCardStyles.PostCard>
          )
        })}
      </ContentCardStyles.PostContainer>
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
