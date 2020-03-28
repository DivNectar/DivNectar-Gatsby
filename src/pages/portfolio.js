import React from "react"
import Layout from "../components/layout"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

const PostContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`

const PostHeader = styled.h2`
  color: ${props => props.theme.pink};
`

const PostLink = styled(Link)`
  color: ${props => props.theme.pink};
`

const H1 = styled.h1`
  color: ${props => props.theme.green};
  text-align: ${props => (props.centered ? "center" : "left")};
  font-family: ${props => props.theme.font};
  font-size: 4rem;
`

const PostCard = styled.div`
  background-color: ${props => props.theme.background};
  padding: 2rem;
  margin: 2rem;
  border-radius: 8px;
  box-shadow: 2px 2px 13px black;
`

export const Posts = () => {
  const data = useStaticQuery(portfolioQuery)

  return (
    <Layout>
      <H1 centered>Portfolio</H1>
      <PostContainer>
        {data.allMdx.edges.map(({ node }, index) => {
          return (
            <PostCard key={index}>
              <PostHeader>
                <PostLink to={"portfolio/" + node.frontmatter.slug}>
                  <Img
                    fluid={node.frontmatter.featuredImage.childImageSharp.fluid}
                  />
                  {node.frontmatter.title}
                </PostLink>
              </PostHeader>
            </PostCard>
          )
        })}
      </PostContainer>
    </Layout>
  )
}

const portfolioQuery = graphql`
  query portfolioQuery {
    allMdx(filter: { frontmatter: { type: { eq: "portfolio" } } }, limit: 10) {
      edges {
        node {
          frontmatter {
            title
            slug
            date
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
