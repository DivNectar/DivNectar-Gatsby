import React from "react";
import { useStaticQuery, graphql } from "gatsby"
import ContentCardStyles from "../styles/content-card.styles"
import BlogNode from "src/interfaces/BlogNode";
import { GatsbyImage, IGatsbyImageData, getImage} from "gatsby-plugin-image";
import styled from "styled-components";

const LatestPosts = () => {
  const data = useStaticQuery(postsQuery)

  return (
    <ContentCardStyles.PostContainer>
      {data.allMdx.edges.map(({ node }: BlogNode, index: number) => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const image: IGatsbyImageData = getImage(node.frontmatter.featuredImage.childImageSharp.gatsbyImageData);

        const FeaturedImage = styled(GatsbyImage)`
          filter: ${props => props.theme.name == "dark" ? "invert(100%)" : "invert(0%)"}
          `
        return (
          <ContentCardStyles.PostCard key={index}>
            <ContentCardStyles.TagsContainer>
              {node.frontmatter.tags.map((tag: string) => {
                return (
                  // TODO: Fix key impl here!
                  // eslint-disable-next-line react/jsx-key
                  <ContentCardStyles.TagChip
                    to={`/tags/${tag}`}
                  >
                    {tag}
                  </ContentCardStyles.TagChip>
                )
              })}
            </ContentCardStyles.TagsContainer>
            <ContentCardStyles.PostHeader>
              <ContentCardStyles.PostLink
                to={'blog/' + node.frontmatter.slug}
              >
                {node.frontmatter.title}
              </ContentCardStyles.PostLink>
              <div>
                {/* // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore */}
                {image ? <FeaturedImage alt="featuredImage" image={getImage(image)} /> : null}
              </div>
            </ContentCardStyles.PostHeader>
          </ContentCardStyles.PostCard>
        );
      })}
    </ContentCardStyles.PostContainer>
  )
}

const postsQuery = graphql`query latestPostsQuery {
  allMdx(sort: {fields: frontmatter___date, order: DESC}, limit: 2) {
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
              gatsbyImageData(
                width: 200
                height: 200
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
                )
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

export default LatestPosts
