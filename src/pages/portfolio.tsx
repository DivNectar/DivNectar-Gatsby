import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { IGatsbyImageData, getImage, ImageDataLike} from "gatsby-plugin-image";
import ContentCardStyles from "../styles/content-card.styles"
import { DefaultTheme } from "styled-components"
import SEO from "../components/seo"
import Card from "../components/elements/Card";
import PostNode from "../interfaces/PostNode"
// import {portfolioQuery} from "../queries/portfolio.query";

interface PortfolioProps {
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

export const PortfolioPage: React.FC<PortfolioProps> = () => {
  const data = useStaticQuery(portfolioQuery)
  return (
    <>
      <SEO title={"DivNectar Projects"} description={"Sewdohe's past and current projects"} />
      <ContentCardStyles.H1 centered>Portfolio</ContentCardStyles.H1>
      <ContentCardStyles.PostContainer>
        {data.allMdx.edges.map(({ node }: PostNode, index: number) => {
          const image: IGatsbyImageData | undefined = getImage(node.frontmatter.featuredImage.childImageSharp.gatsbyImageData);

          return (
            <Card
              title={node.frontmatter.title}
              key={index}
              slug={node.frontmatter.slug}
              image={image!} />
          );
        })}
      </ContentCardStyles.PostContainer>
    </>
  );
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

export default PortfolioPage
