import { ImageDataLike } from "gatsby-plugin-image"

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

export default PostNode