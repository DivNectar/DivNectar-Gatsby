const path = require("path")
const _ = require("lodash")


//
// ─── CREATE POST PAGES ──────────────────────────────────────────────────────────
//
exports.createPages = async ({ graphql, actions, reporter }) => {
  // Destructure the createPage function from the actions object
  const { createPage } = actions
  const postsResult = await graphql(`
    query {
      allMdx(filter: { frontmatter: { type: { eq: "post" } } }) {
        edges {
          node {
            frontmatter {
              date
              slug
              title
            }
            id
            body
          }
        }
      }
    }
  `)
  if (postsResult.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query')
  }
  // Create blog post pages.
  const posts = postsResult.data.allMdx.edges
  // you'll call `createPage` for each result
  posts.forEach(({ node }, index) => {
    createPage({
      // This is the slug you created before
      // (or `node.frontmatter.slug`)
      path: "blog/" + node.frontmatter.slug,
      // This component will wrap our MDX content
      component: path.resolve(`./src/layouts/post-layout.tsx`),
      // You can use the values in this context in
      // our page layout component
      context: { id: node.id },
    })
  })

  //
  // ─── CREATE PORTFOLIO PAGES ─────────────────────────────────────────────────────
  //
  const portfolioResult = await graphql(`
    query {
      allMdx(filter: { frontmatter: { type: { eq: "portfolio" } } }) {
        edges {
          node {
            frontmatter {
              date
              slug
              title
            }
            id
            body
          }
        }
      }
    }
  `)
  if (portfolioResult.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query')
  }
  // Create portfolio post pages.
  const portfolios = portfolioResult.data.allMdx.edges
  // you'll call `createPage` for each result
  portfolios.forEach(({ node }, index) => {
    createPage({
      // This is the slug you created before
      // (or `node.frontmatter.slug`)
      path: "portfolio/" + node.frontmatter.slug,
      // This component will wrap our MDX content
      component: path.resolve(`./src/layouts/portfolio-layout.tsx`),
      // You can use the values in this context in
      // our page layout component
      context: { id: node.id },
    })
  })

  const tagsGroup = await graphql(`
    query {
      tagsGroup: allMdx(
        limit: 2000
        filter: { frontmatter: { type: { eq: "post" } } }
      ) {
        group(field: frontmatter___tags) {
          fieldValue
        }
      }
    }
  `)
  // handle errors
  if (tagsGroup.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  // Extract tag data from query
  const tags = tagsGroup.data.tagsGroup.group
  // Make tag pages
  tags.forEach(tag => {
    console.log("created tag page")
    createPage({
      path: `/tags/${_.kebabCase(tag.fieldValue)}/`,
      component: path.resolve("./src/layouts/tags-layout.tsx"),
      context: {
        tag: tag.fieldValue,
      },
    })
  })
}
