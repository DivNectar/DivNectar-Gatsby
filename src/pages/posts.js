import React from "react"
import Layout from "../components/layout"
import { useStaticQuery, graphql, Link } from "gatsby"
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
  box-shadow: 2px 2px 13px ${props => props.theme.green};
`

export const Posts = () => {
  const data = useStaticQuery(postsQuery)
  console.log(data)

  return (
    <Layout>
      <H1 centered>Blog</H1>
      <PostContainer>
        {data.allMdx.edges.map(({ node }, index) => {
          return (
            <PostCard>
              <PostHeader>
                <PostLink to={node.frontmatter.slug}>
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

const postsQuery = graphql`
  query postsQuery {
    allMdx(limit: 5) {
      edges {
        node {
          frontmatter {
            title
            slug
            date
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
