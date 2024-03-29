import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, ImageDataLike } from "gatsby-plugin-image";
import styled from "styled-components";

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
            gatsbyImageData: ImageDataLike
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
  const FeaturedImage = styled(GatsbyImage)`
    filter: ${props => props.theme.name == "dark" ? "invert(100%)" : "invert(0%)"}
    `
  return (
    <div style={{marginBottom: '2rem'}}>
      <ContentStyles.PostsContainer>
        <MDXProvider components={MDXStyles}>
          <FeaturedImage
            image={data.mdx.frontmatter.featuredImage.childImageSharp.gatsbyImageData}
            style={{ maxWidth: "250px" }} />
          <MDXRenderer>{data.mdx.body}</MDXRenderer>
        </MDXProvider>
      </ContentStyles.PostsContainer>
    </div>
  );
}

export const pageQuery = graphql`query PortfoliosQuery($id: String) {
  mdx(id: {eq: $id}) {
    frontmatter {
      slug
      title
      type
      date
      featuredImage {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
    id
    body
  }
}
`

export default PostTemplate
