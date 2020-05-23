module.exports = {
  siteMetadata: {
    title: 'tom-b',
    author: 'Tom Blacknell',
    description: 'A personal site and blog',
    siteUrl: 'https://www.tom.blacknell.co.uk',
    social: {
      twitter: 'tblacknell',
      github: 'tomblacknell',
      linkedin: 'tomblacknell',
    },
  },
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/blog`,
        name: 'blog',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/projects`,
        name: 'projects',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/assets`,
        name: 'assets',
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1.0725rem',
            },
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
        ],
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        // trackingId: 'ADD YOUR TRACKING ID HERE',
      },
    },
    'gatsby-plugin-feed',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Tom\'s Space',
        short_name: 'TomsSpace',
        start_url: '/',
        background_color: '#FCFCFC',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'content/assets/gatsby-icon.png',
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ],
};
