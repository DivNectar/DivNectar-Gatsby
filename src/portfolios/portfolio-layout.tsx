import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { MDXStyles } from "../styles/mdx-styles"

import ContentStyles from "../styles/content-card.styles"

const PostTemplate = ({ data }) => {
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