import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { Disqus, CommentCount } from "gatsby-plugin-disqus"

import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { MDXStyles } from "../styles/mdx-styles"

import ContentStyles from "../styles/content-card.styles"

import SEO from "./../components/seo"

interface PostTemplateProps {
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
            fluid: any
            resize: {
              width: number
              height: number
              src: string
            }
          }
        }
      }
      id: string
      body: any
      excerpt: string
    }
  }
}

const PostTemplate: React.FC<PostTemplateProps> = ({ data }, props) => {
  const frontmatter = data.mdx.frontmatter

  const disqusConfig = {
    url: `${"https://divnectar.com/" + frontmatter.slug}`,
    identifier: frontmatter.id,
    title: frontmatter.title,
  }

  const seoImage = data.mdx.frontmatter.featuredImage.childImageSharp.resize

  return (
    <div>
      <SEO
        title={frontmatter.title}
        description={data.mdx.excerpt}
        image={seoImage}
        // path={props.location.pathname}
      />
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
            resize(width: 800) {
              src
              height
              width
            }
          }
        }
      }
      id
      body
      excerpt
    }
  }
`

export default PostTemplate
