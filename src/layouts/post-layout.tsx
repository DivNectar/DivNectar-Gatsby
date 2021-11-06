import React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage, IGatsbyImageData, ImageDataLike } from "gatsby-plugin-image";
import { Disqus, CommentCount } from "gatsby-plugin-disqus"

import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { MDXStyles } from "../styles/mdx-styles"

import styled from "styled-components"

import ContentStyles from "../styles/content-card.styles"

import SEO from "./../components/seo"
import TOC from "./../components/toc"
import Layout from "../components/layout";

const DisqusContainer = styled.div`
  margin: 20px 20px;
`

const FeaturedImage = styled(GatsbyImage)`
  margin: 10px;
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
            gatsbyImageData: ImageDataLike,
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
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const featuredImage: IGatsbyImageData = getImage(frontmatter.featuredImage.childImageSharp.gatsbyImageData);

  const PostLayoutContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
  `

  const FeaturedImage = styled(GatsbyImage)`
    filter: ${props => props.theme.name == "light" ? "invert(100%)" : "invert(0%)"}
  `

  const seoImage = frontmatter.featuredImage.childImageSharp.resize

  return (
    <>
      <PostLayoutContainer>
        <div>
          <SEO
            title={frontmatter.title}
            description={data.mdx.excerpt}
            image={seoImage}
          // path={props.location.pathname}
          />
          <FeaturedImage style={{marginTop: '2rem', marginLeft: '1rem'}} alt="featuredImage" image={featuredImage}
              />
          <ContentStyles.PostsContainer>
            <MDXProvider components={MDXStyles}>
              {/* // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore */}
              
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
    </>
  );
}

export const pageQuery = graphql`query BlogPostQuery($id: String) {
  mdx(id: {eq: $id}) {
    frontmatter {
      slug
      title
      type
      date
      featuredImage {
        childImageSharp {
          gatsbyImageData(
                width: 200
                formats: [AUTO, WEBP, AVIF]
                )
          resize(width: 200, height: 200) {
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
