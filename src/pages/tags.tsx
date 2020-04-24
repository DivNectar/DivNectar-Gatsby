import React from "react"

// Utilities
import kebabCase from "lodash/kebabCase"

// Components
import { Helmet } from "react-helmet"
import { Link, graphql } from "gatsby"

interface TagsPageInterface {
  data: {
    site: {
      siteMetadata: {
        title: string
      }
    }
    allMdx: {
      group: [
        {
          fieldValue: string
          totalCount: number
        }
      ]
    }
  }
}

const TagsPage: React.FC<TagsPageInterface> = ({
  data: {
    allMdx: { group },
    site: {
      siteMetadata: { title },
    },
  },
}) => (
  <div>
    <Helmet title={title} />
    <div>
      <h1>Tags</h1>
      <ul>
        {group.map(tag => (
          <li key={tag.fieldValue}>
            <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
              {tag.fieldValue} ({tag.totalCount})
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </div>
)

export default TagsPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(limit: 2000, filter: { frontmatter: { type: { eq: "post" } } }) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
