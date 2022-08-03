import { graphql, useStaticQuery } from "gatsby"

// export const postsQuery = graphql`query postsQuery {
//   allMdx(filter: {frontmatter: {type: {eq: "post"}}}, limit: 10) {
//     edges {
//       node {
//         frontmatter {
//           title
//           slug
//           date
//           tags
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