import { graphql, useStaticQuery } from "gatsby";

// export const portfolioQuery = graphql`query portfolioQuery {
//   allMdx(filter: {frontmatter: {type: {eq: "portfolio"}}}, limit: 10) {
//     edges {
//       node {
//         frontmatter {
//           title
//           slug
//           date
//           featuredImage {
//             id
//             childImageSharp {
//               gatsbyImageData(layout: FULL_WIDTH)
//             }
//           }
//         }
//         excerpt
//         body
//         tableOfContents
//       }
//     }
//   }
// }
// `