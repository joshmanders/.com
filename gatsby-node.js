const path = require('path');
const _ = require('lodash');
const Promise = require('bluebird');
const {createFilePath} = require('gatsby-source-filesystem');

exports.createPages = ({graphql, boundActionCreators}) => {
  const {createPage} = boundActionCreators;

  return new Promise((resolve, reject) => {
    resolve(
      graphql(
        `
          {
            posts: allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}, limit: 1000) {
              edges {
                node {
                  fields {
                    slug
                  }
                  frontmatter {
                    title
                  }
                }
              }
            }
          }
        `
      ).then((result) => {
        if (result.errors) {
          console.log(result.errors);
          return reject(result.errors);
        }

        // Create blog posts pages.
        const posts = result.data.posts.edges;

        return _.each(posts, (post, index) => {
          const previous = index === posts.length - 1 ? null : posts[index + 1].node;
          const next = index === 0 ? null : posts[index - 1].node;

          return createPage({
            path: post.node.fields.slug,
            component: path.resolve('./src/templates/blog-post.js'),
            context: {
              slug: post.node.fields.slug,
              previous,
              next,
            },
          });
        });
      })
    );
  });
};

exports.onCreateNode = ({node, boundActionCreators, getNode}) => {
  const {createNodeField} = boundActionCreators;

  if (node.internal.type === 'MarkdownRemark') {
    const value = createFilePath({node, getNode});
    createNodeField({
      name: 'slug',
      node,
      value,
    });
  }
};
