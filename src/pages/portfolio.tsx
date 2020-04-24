import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import ContentCardStyles from "../styles/content-card.styles"
import { DefaultTheme, withTheme } from "styled-components"

interface PortfolioProps {
  theme: DefaultTheme,
  data: {
    allMDX: {
      edges: [{
        node: {
          frontmatter: {
            title: string,
            slug: string,
            featuredImage: {
              id: string,
              childImageSharp: {
                fluid: any
              }
            }
          }
        }
      }],
    }
  }
}

interface PostNode {
  node: {
    frontmatter: {
      title: string,
      slug: string,
      featuredImage: {
        id: string,
        childImageSharp: {
          fluid: any
        }
      }
    }
  }
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

export const Portfolio: React.FC<PortfolioProps> = ({ theme }) => {
  const data = useStaticQuery(portfolioQuery)

  return (
    <div>
      <ContentCardStyles.H1 centered>Portfolio</ContentCardStyles.H1>
      <ContentCardStyles.PostContainer>
        {data.allMdx.edges.map(({ node }: PostNode, index: number) => {
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

export default withTheme(Portfolio)
