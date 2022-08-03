import React from "react"
import { useStaticQuery, graphql, } from "gatsby"
import { GatsbyImage, IGatsbyImageData, getImage} from "gatsby-plugin-image";

// TODO combine the post styles here and the post styles for the portfolio into
import ContentCardStyles from "../styles/content-card.styles"
import SEO from "../components/seo"
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import BlogNode from "src/interfaces/BlogNode";

export const Posts = () => {
  // eslint-disable-next-line @typescript-eslint/no-use-before-define
  const data = useStaticQuery(postsQuery)
  const history = useHistory();
  // this bit of styled code inverts the image if the theme is set to light
  const FeaturedImage = styled(GatsbyImage)`
    filter: ${props => props.theme.name == "dark" ? "invert(100%)" : "invert(0%)"}
    `
  console.log(history);

  return (
    <>
      <SEO title={"DivNectar Blog"} description={"Development Blog"} />
      <ContentCardStyles.H1 centered>Blog</ContentCardStyles.H1>
      <ContentCardStyles.PostContainer>
        {data.allMdx.edges.map(({ node }: BlogNode, index: number) => {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          const image: IGatsbyImageData = getImage(node.frontmatter.featuredImage.childImageSharp.gatsbyImageData);

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
                  to={node.frontmatter.slug}
                >
                  {node.frontmatter.title}
                </ContentCardStyles.PostLink>
                <div>
                {/* // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore */}
                  { image ? <FeaturedImage alt="featuredImage" image={getImage(image)} /> : null }
                </div>
              </ContentCardStyles.PostHeader>
            </ContentCardStyles.PostCard>
          );
        })}
      </ContentCardStyles.PostContainer>
    </>
  );
}

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

export default Posts
