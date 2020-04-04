import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Img from "gatsby-image"

import ContentCardStyles from "../styles/content-card.styles"
import { withTheme } from "styled-components"

export const Portfolio = ({ theme }) => {
  const data = useStaticQuery(portfolioQuery)

  return (
    <div>
      <ContentCardStyles.H1 centered>Portfolio</ContentCardStyles.H1>
      <ContentCardStyles.PostContainer>
        {data.allMdx.edges.map(({ node }, index) => {
          return (
            <ContentCardStyles.PostCard key={index}>
              <ContentCardStyles.PostHeader>
                <ContentCardStyles.PostLink
                  paintDrip
                  hex={theme.backgroundSecondary}
                  duration={0.6}
                  to={"portfolio/" + node.frontmatter.slug}
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

const portfolioQuery = graphql`
  query portfolioQuery {
    allMdx(filter: { frontmatter: { type: { eq: "portfolio" } } }, limit: 10) {
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

export default withTheme(Portfolio)
