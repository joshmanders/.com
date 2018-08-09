const {join} = require('path');
const each = require('lodash/each');
const Promise = require('bluebird');
const {createFilePath} = require('gatsby-source-filesystem');

exports.createPages = ({graphql, boundActionCreators: action}) => {
  return new Promise((resolve, reject) => {
    resolve(
      graphql(
        `
          {
            posts: allMarkdownRemark(
              sort: {fields: [frontmatter___date], order: DESC}
              limit: 1000
              filter: {frontmatter: {draft: {ne: true}}}
            ) {
              edges {
                node {
                  frontmatter {
                    title
                    path
                    draft
                  }
                }
              }
            }
          }
        `
      ).then((result) => {
        if (result.errors) {
          process.stderr.write(`${result.errors}`);
          return reject(result.errors);
        }

        // Create blog posts pages.
        return each(result.data.posts.edges, (post, index, posts) =>
          action.createPage({
            path: post.node.frontmatter.path,
            component: join(__dirname, 'src/templates/blog-post.js'),
            context: {
              slug: post.node.frontmatter.path,
              previous: index === posts.length - 1 ? null : posts[index + 1].node,
              next: index === 0 ? null : posts[index - 1].node,
            },
          })
        );
      })
    );
  });
};

exports.onCreateNode = ({node, boundActionCreators: action, getNode}) => {
  if (node.internal.type === 'MarkdownRemark') {
    action.createNodeField({name: 'slug', node, value: createFilePath({node, getNode})});
  }
};
