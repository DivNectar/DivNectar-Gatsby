import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { Disqus, CommentCount } from "gatsby-plugin-disqus"

import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { MDXStyles } from "../styles/mdx-styles"

import ContentStyles from "../styles/content-card.styles"

const PostTemplate = ({ data }) => {
  const frontmatter = data.mdx.frontmatter

  let disqusConfig = {
    url: `${"https://divnectar.com/" + frontmatter.slug}`,
    identifier: frontmatter.id,
    title: frontmatter.title,
  }

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

        <CommentCount config={disqusConfig} placeholder={"..."} />
        <Disqus config={disqusConfig} />
      </ContentStyles.PostsContainer>
    </div>
  )
}

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
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
