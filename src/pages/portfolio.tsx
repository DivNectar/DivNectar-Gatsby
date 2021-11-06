import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, ImageDataLike } from "gatsby-plugin-image";

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
                gatsbyImageData: ImageDataLike
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
          gatsbyImageData: ImageDataLike
        }
      }
    }
  }
}

const portfolioQuery = graphql`query portfolioQuery {
  allMdx(filter: {frontmatter: {type: {eq: "portfolio"}}}, limit: 10) {
    edges {
      node {
        frontmatter {
          title
          slug
          date
          featuredImage {
            id
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH)
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
    <>
      <ContentCardStyles.H1 centered>Portfolio</ContentCardStyles.H1>
      <ContentCardStyles.PostContainer>
        {data.allMdx.edges.map(({ node }: PostNode, index: number) => {
          return (
            <ContentCardStyles.PostCard key={index}>
              <ContentCardStyles.PostHeader>
                <ContentCardStyles.PostLink
                  to={node.frontmatter.slug}
                >
                  {/* // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                  // @ts-ignore */}
                  <GatsbyImage image={node.frontmatter.featuredImage.childImageSharp.gatsbyImageData} />
                  {node.frontmatter.title}
                </ContentCardStyles.PostLink>
              </ContentCardStyles.PostHeader>
            </ContentCardStyles.PostCard>
          );
        })}
      </ContentCardStyles.PostContainer>
    </>
  );
}

export default withTheme(Portfolio)
