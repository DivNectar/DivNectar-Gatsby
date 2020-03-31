const path = require("path")
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
      component: path.resolve(`./src/posts/post-layout.tsx`),
      // You can use the values in this context in
      // our page layout component
      context: { id: node.id },
    })
  })

  // now let's create the portfolio pages.
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
      component: path.resolve(`./src/portfolios/portfolio-layout.tsx`),
      // You can use the values in this context in
      // our page layout component
      context: { id: node.id },
    })
  })
}
