module.exports = {
  siteMetadata: {
    siteName: 'Thoughts, Stories & Ideas',
  },
  plugins: [
    'gatsby-plugin-typescript',
    'gatsby-plugin-postcss',
    'gatsby-plugin-catch-links',
    // 'gatsby-plugin-robots-txt',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-offline',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/posts`,
        name: 'posts',
      },
    },
    {
      resolve: 'gatsby-plugin-fathom',
      options: {
        siteId: 'POZBIVIH',
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        gatsbyRemarkPlugins: [
          'gatsby-remark-smartypants',
          {
            resolve: 'gatsby-remark-vscode',
            // options: {
            //   injectStyles: false,
            //   languageAliases: {
            //     shell: 'bash',
            //   },
            //   colorTheme: {
            //     defaultTheme: 'Dracula',
            //     prefersDarkTheme: 'Dracula',
            //   },
            //   extensions: [
            //     {
            //       identifer: 'dracula-theme.theme-dracula',
            //       version: '2.18.1',
            //     },
            //   ],
            // },
          },
        ],
      },
    },
  ],
};
