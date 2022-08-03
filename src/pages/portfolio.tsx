import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, IGatsbyImageData, getImage} from "gatsby-plugin-image";
import styled from "styled-components";
import ContentCardStyles from "../styles/content-card.styles"
import { DefaultTheme, withTheme } from "styled-components"
import SEO from "../components/seo"

interface PortfolioProps {
  theme: DefaultTheme,
  data: {
    allMDX: {
      edges: [{
        node: {
          frontmatter: {
            title: string,
            slug: string,
            featuredImage: {
              id: string,
              childImageSharp: {
                gatsbyImageData: ImageDataLike
              }
            }
          }
        }
      }],
    }
  }
}

interface PostNode {
  node: {
    frontmatter: {
      title: string,
      slug: string,
      featuredImage: {
        id: string,
        childImageSharp: {
          gatsbyImageData: ImageDataLike
        }
      }
    }
  }
}

const portfolioQuery = graphql`query portfolioQuery {
  allMdx(filter: {frontmatter: {type: {eq: "portfolio"}}}, limit: 10) {
    edges {
      node {
        frontmatter {
          title
          slug
          date
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

export const Portfolio: React.FC<PortfolioProps> = ({ theme }) => {
  const data = useStaticQuery(portfolioQuery)
  const FeaturedImage = styled(GatsbyImage)`
    filter: ${props => props.theme.name == "dark" ? "invert(100%)" : "invert(0%)"}
    `
  return (
    <>
      <SEO title={"DivNectar Projects"} description={"Sewdohe's past and current projects"} />
      <ContentCardStyles.H1 centered>Portfolio</ContentCardStyles.H1>
      <ContentCardStyles.PostContainer>
        {data.allMdx.edges.map(({ node }: PostNode, index: number) => {
          const image: IGatsbyImageData = getImage(node.frontmatter.featuredImage.childImageSharp.gatsbyImageData);

          return (
            <ContentCardStyles.PostCard key={index}>
              <ContentCardStyles.PostHeader>
                <ContentCardStyles.PostLink
                  to={node.frontmatter.slug}
                >
                {node.frontmatter.title}
                </ContentCardStyles.PostLink>
                <div>
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

export default Portfolio
