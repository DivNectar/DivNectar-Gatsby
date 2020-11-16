import React from "react"
import { graphql } from "gatsby"
import Img, { FluidObject } from "gatsby-image"


import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { MDXStyles } from "../styles/mdx-styles"

import ContentStyles from "../styles/content-card.styles"

interface PortfolioProps {
  data: {
    mdx: {
      frontmatter: {
        id: string
        slug: string
        title: string
        type: string
        date: string
        featuredImage: {
          childImageSharp: {
            fluid: FluidObject
            resize: {
              width: number
              height: number
              src: string
            }
          }
        }
      }
      id: string
      body: string
      excerpt: string
      tableOfContents: {
        items: [
          {
            url: string
            title: string
            items?: [
              {
                url: string
                title: string
                items?: [
                  {
                    url: string
                    title: string
                    items?: [
                      {
                        url: string
                        title: string
                        items?: [
                          {
                            url: string
                            title: string
                            items?: [
                              {
                                url: string
                                title: string
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    }
  }
}

const PostTemplate: React.FC<PortfolioProps> = ({ data }) => {
  return (
    <div>
      <ContentStyles.PostsContainer>
        <MDXProvider components={MDXStyles}>
          <Img
            fluid={data.mdx.frontmatter.featuredImage.childImageSharp.fluid}
            style={{ maxWidth: "250px" }}
          />
          <MDXRenderer>{data.mdx.body}</MDXRenderer>
        </MDXProvider>
      </ContentStyles.PostsContainer>
    </div>
  )
}

export const pageQuery = graphql`
  query PortfoliosQuery($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        slug
        title
        type
        date
        featuredImage {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      id
      body
    }
  }
`

export default PostTemplate
