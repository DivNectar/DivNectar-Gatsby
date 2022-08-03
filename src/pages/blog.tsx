import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { IGatsbyImageData, getImage} from "gatsby-plugin-image";

// TODO combine the post styles here and the post styles for the portfolio into
import ContentCardStyles from "../styles/content-card.styles"
import SEO from "../components/seo"
import BlogNode from "src/interfaces/BlogNode";
import Card from "../components/elements/Card";
// import {postsQuery} from "../queries/post.query";

const postsQuery = graphql`query postsQuery {
  allMdx(filter: {frontmatter: {type: {eq: "post"}}}, limit: 10) {
    edges {
      node {
        frontmatter {
          title
          slug
          date
          tags
          featuredImage {
            id
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH)
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

export const BlogPage = () => {
  const data = useStaticQuery(postsQuery)

  return (
    <>
      <SEO title={"DivNectar Blog"} description={"Development Blog"} />
      <ContentCardStyles.H1 centered>Blog</ContentCardStyles.H1>
      <ContentCardStyles.PostContainer>
        {data.allMdx.edges.map(({ node }: BlogNode, index: number) => {
          const image: IGatsbyImageData | undefined = getImage(node.frontmatter.featuredImage.childImageSharp.gatsbyImageData!);

          return (
            <Card
              title={node.frontmatter.title}
              key={index}
              slug={node.frontmatter.slug}
              image={image!}
              tags={node.frontmatter.tags} />
          );
        })}
      </ContentCardStyles.PostContainer>
    </>
  );
}

export default BlogPage
