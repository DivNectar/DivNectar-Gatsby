import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"

import { draculaTheme } from "../styles/themes.js"

import CodeBlock from "../components/elements/codeblock.js"

import styled from "styled-components"

const components = {
  pre: props => <div {...props} />,
  code: props => <CodeBlock {...props} />,
  h1: styled.h1`
    color: ${draculaTheme.pink};
    font-family: ${draculaTheme.headerFont};
    font-weight: bold;
    font-size: 3rem;
    text-decoration: none;
  `,
  h2: styled.h2`
    color: ${draculaTheme.green};
    font-family: ${draculaTheme.headerFont};
    font-weight: bold;
    font-size: 2rem;
    text-decoration: none;
  `,
  h4: styled.h4`
    color: ${draculaTheme.green};
    font-family: ${draculaTheme.headerFont};
    font-weight: bold;
    text-decoration: none;
  `,
  h6: styled.h6`
    color: ${draculaTheme.blue};
    font-family: ${draculaTheme.headerFont};
    font-weight: bold;
    font-size: 0.8rem;
    margin: 0.3rem 1.2rem;
    text-decoration: none;
  `,
}

const PostContainer = styled.div`
  display: flex;
  width: 85%;
  flex-direction: column;
  justify-content: center;
  margin: auto;
`

const PostTemplate = ({ data }) => {
  return (
    <div>
      <PostContainer>
        <MDXProvider components={components}>
          <Img
            style={{ maxWidth: "250px" }}
            fluid={data.mdx.frontmatter.featuredImage.childImageSharp.fluid}
          />
          <MDXRenderer>{data.mdx.body}</MDXRenderer>
        </MDXProvider>
      </PostContainer>
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
