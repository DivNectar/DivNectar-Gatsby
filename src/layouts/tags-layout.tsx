import React from "react"

interface TagTemplateProps {
  pageContext: any,
  data: {
    allMdx: {
      totalCount: number,
      excerpt: string,
      body: any,
      edges: [{
        node: {
          frontmatter: {
            title: string,
            slug: string,
            tags: string[],
            featuredImage: {
              id: string,
              childImageSharp: {
                fluid: any
              }
            }
          }
        }
      }]
    }
  }
}

// Components
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

import ContentCardStyles from "../styles/content-card.styles"

const Tags = ({ pageContext, data }: TagTemplateProps) => {
  const { tag } = pageContext
  const { totalCount } = data.allMdx

  const tagHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } tagged with "${tag}"`

  return (
    <div>
      <ContentCardStyles.H1 centered>Tag: {tag}</ContentCardStyles.H1>
      <ContentCardStyles.PostContainer>
        {data.allMdx.edges.map(({ node }, index) => {
          return (
            <ContentCardStyles.PostCard key={index}>
              <ContentCardStyles.TagsContainer>
                {node.frontmatter.tags.map((tag: string) => {
                  return (
                    <ContentCardStyles.TagChip
                      swipe
                      duration={0.6}
                      to={`/tags/${tag}`}
                    >
                      {tag}
                    </ContentCardStyles.TagChip>
                  )
                })}
              </ContentCardStyles.TagsContainer>
              <ContentCardStyles.PostHeader>
                <ContentCardStyles.PostLink
                  cover
                  duration={0.6}
                  to={"blog/" + node.frontmatter.slug}
                >
                  <Img
                    style={{ maxWidth: "200px", margin: "0 auto" }}
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

export default Tags

export const pageQuery = graphql`
  query($tag: String) {
    allMdx(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          frontmatter {
            title
            slug
            tags
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
        }
      }
    }
  }
`
