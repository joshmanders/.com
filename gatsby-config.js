const {resolve} = require('path');
const pkg = require('./package.json');

module.exports = {
  siteMetadata: {
    title: pkg.title,
    description: pkg.description,
    siteUrl: pkg.homepage,
    author: pkg.author,
    contributors: pkg.contributors,
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: resolve(__dirname, '_posts'),
        name: 'posts',
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
          'gatsby-remark-smartypants',
        ],
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-55175193-7',
      },
    },
    'gatsby-plugin-feed',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: pkg.title,
        short_name: pkg.author.name,
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#2BAE60',
        display: 'minimal-ui',
        icon: 'static/images/avatar.png',
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography',
      },
    },
  ],
};
