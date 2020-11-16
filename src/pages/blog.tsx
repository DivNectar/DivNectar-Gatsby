import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { FluidObject } from "gatsby-image"

// TODO combine the post styles here and the post styles for the portfolio into
import ContentCardStyles from "../styles/content-card.styles"
import SEO from "src/components/seo"

interface BlogNode {
  node: {
    frontmatter: {
      title: string
      slug: string
      date: string
      tags: string[]
      featuredImage: {
        id: string
        childImageSharp: {
          fluid: FluidObject
        }
      }
    }
    excerpt: string
    body: string
    tableOfContents: unknown
  }
}

export const Posts = () => {
  // eslint-disable-next-line @typescript-eslint/no-use-before-define
  const data = useStaticQuery(postsQuery)
  return (
    <div>
      <SEO title={"DivNectar Blog"} description={"Development Blog"} />
      <ContentCardStyles.H1 centered>Blog</ContentCardStyles.H1>
      <ContentCardStyles.PostContainer>
        {data.allMdx.edges.map(({ node }: BlogNode, index: number) => {
          return (
            <ContentCardStyles.PostCard key={index}>
              <ContentCardStyles.TagsContainer>
                {node.frontmatter.tags.map((tag: string) => {
                  return (
                    <ContentCardStyles.TagChip
                      key={index}
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

const postsQuery = graphql`
  query postsQuery {
    allMdx(filter: { frontmatter: { type: { eq: "post" } } }, limit: 10) {
      edges {
        node {
          frontmatter {
            title
            slug
            date
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
          tableOfContents
        }
      }
    }
  }
`

export default Posts
