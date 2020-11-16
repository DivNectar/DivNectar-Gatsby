require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `DivNectar`,
    description: `Tech Blog / Portfolio of Josh Melton`,
    author: `@DivNectar | Josh Melton`,
    keywords: ["vim", "neovim", "emacs", "tutorials"],
    siteUrl: "https://divnectar.com",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-tsconfig-paths`,
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: `DivNectar`,
      },
    },
    {
      resolve: "gatsby-plugin-firebase",
      options: {
        credentials: {
          apiKey: process.env.APIKEY,
          authDomain: process.env.AUTHDOMAIN,
          databaseURL: process.env.DATABASEURL,
          projectId: process.env.PROJECTID,
          storageBucket: process.env.STORAGEBUCKET,
          messagingSenderId: process.env.MESSAGINGSENDERID,
          appId: process.env.APPID,
        },
      },
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /svg/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true, // defaults to false
        jsxPragma: `React`, // defaults to "React"
        allExtensions: true, // defaults to false
      },
    },
    {
      resolve: `gatsby-plugin-env-variables`,
      options: {
        whitelist: [
          "APIKEY",
          "AUTHDOMAIN",
          "DATABASEURL",
          "PROJECTID",
          "STORAGEBUCKET",
          "MESSAGINGSENDERID",
          "APPID",
        ],
      },
    },
    {
      resolve: "gatsby-plugin-transition-link",
      options: {
        layout: require.resolve(`./src/components/layout.tsx`),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `portfolios`,
        path: `${__dirname}/src/portfolios/`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        // defaultLayouts: {
        //   posts: require.resolve("./src/posts/post-layout.tsx"),
        //   portfolios: require.resolve("./src/portfolios/portfolio-layout.tsx"),
        //   default: require.resolve("./src/components/layout.tsx"),
        // },
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
            },
          },
          'gatsby-remark-autolink-headers'
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/divnectar-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
