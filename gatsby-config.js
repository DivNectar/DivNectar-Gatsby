module.exports = {
  siteMetadata: {
    title: `DivNectar`,
    description: `Tech Blog / Portfolio of Josh Melton`,
    author: `@DivNectar | Josh Melton`,
    keywords: ["vim", "neovim", "emacs", "tutorials", "linux", "android", "developer", "coding"],
    siteUrl: "https://divnectar.com",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          quality: 80,
          formats: ['auto', 'webp', 'avif'],
          placeholder: 'blurred',
        },
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-image`,
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: `DivNectar`,
      },
    },
    {
      resolve: "gatsby-plugin-firebase",
      options: {
        features: {          
          auth: false,       
          database: false,  
          firestore: false,
          storage: false,    
          messaging: false, 
          functions: false,  
          performance: false, 
          analytics:true,
        },
        credentials: {
          apiKey: process.env.APIKEY,
          authDomain: process.env.AUTHDOMAIN,
          databaseURL: process.env.DATABASEURL,
          projectId: process.env.PROJECTID,
          storageBucket: process.env.STORAGEBUCKET,
          messagingSenderId: process.env.MESSAGINGSENDERID,
          appId: process.env.APPID,
          measurementId: process.env.MEASUREMENT_ID
        },
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
          "MEASUREMENT_ID"
        ],
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
        name: `DivNectar`,
        short_name: `DivNectar`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/divnectar-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "UA-141602114-1",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: [],
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 0,
        // Defers execution of google analytics script after page load
        defer: false,
        // Any additional optional fields
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        cookieDomain: "example.com",
        // defaults to false
        enableWebVitalsTracking: true,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
