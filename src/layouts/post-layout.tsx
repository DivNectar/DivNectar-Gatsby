import React from "react"
import { graphql } from "gatsby"
import Img, { FluidObject } from "gatsby-image"
import { Disqus, CommentCount } from "gatsby-plugin-disqus"

import AniLink from "gatsby-plugin-transition-link/AniLink";
import { IoIosArrowBack } from 'react-icons/io';

import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { MDXStyles } from "../styles/mdx-styles"

import styled from "styled-components"

import ContentStyles from "../styles/content-card.styles"

import SEO from "./../components/seo"
import TOC from "./../components/toc"

const DisqusContainer = styled.div`
  margin: 20px 20px;
`

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

const PostTemplate: React.FC<PostTemplateProps> = ({ data }) => {
  const frontmatter = data.mdx.frontmatter
  const toc = data.mdx.tableOfContents
  const disqusConfig = {
    url: `${"https://divnectar.com/" + frontmatter.slug}`,
    identifier: frontmatter.id,
    title: frontmatter.title,
  }

  const PostLayoutContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
  `

  const BackButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-content: center;
    width: 100px;
    height: 100px;
  `

  const seoImage = frontmatter.featuredImage.childImageSharp.resize

  return (
    <PostLayoutContainer>
      <BackButtonContainer>
        <AniLink swipe
          duration={0.6} to="/blog"><IoIosArrowBack size="3em" /></AniLink>
      </BackButtonContainer>
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
              fluid={frontmatter.featuredImage.childImageSharp.fluid}
              style={{ maxWidth: "250px" }}
            />
            <MDXRenderer>{data.mdx.body}</MDXRenderer>
          </MDXProvider>
        </ContentStyles.PostsContainer>
        <DisqusContainer>
          <CommentCount config={disqusConfig} placeholder={"..."} />
          <Disqus config={disqusConfig} />
        </DisqusContainer>
      </div>
      <TOC toc={toc} />
    </PostLayoutContainer>
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
            resize(width: 1024, height: 512) {
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
      tableOfContents
    }
  }
`

export default PostTemplate
