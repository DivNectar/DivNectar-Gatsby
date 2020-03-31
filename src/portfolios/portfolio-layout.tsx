import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"

import { dark } from "../styles/themes"

import CodeBlock from "../components/elements/codeblock"

import styled from "styled-components"

const components = {
  pre: props => <div {...props} />,
  code: props => <CodeBlock {...props} />,
  h1: styled.h1`
    color: ${dark.pink};
    font-family: ${dark.headerFont};
    font-weight: bold;
    font-size: 3rem;
  `,
  h2: styled.h2`
    color: ${dark.green};
    font-family: ${dark.headerFont};
    font-weight: bold;
    font-size: 2rem;
    text-decoration: underline;
  `,
  h4: styled.h4`
    color: ${dark.green};
    font-family: ${dark.headerFont};
    font-weight: bold;
  `,
  h6: styled.h6`
    color: ${dark.blue};
    font-family: ${dark.headerFont};
    font-weight: bold;
    font-size: 0.8rem;
    margin: 0.3rem 1.2rem;
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
