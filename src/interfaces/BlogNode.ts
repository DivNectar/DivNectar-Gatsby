import { ImageDataLike } from "gatsby-plugin-image";

interface BlogNode {
  node: {
    frontmatter: {
      title: string
      slug: string
      date: string
      tags: string[]
      featuredImage: {
        id: string
        childImageSharp: {
          gatsbyImageData?: ImageDataLike | undefined,
          width: 200
          placeholder: string
          formats: string[]
        }
      }
    }
    excerpt: string
    body: string
    tableOfContents: unknown
  }
}

export default BlogNode
