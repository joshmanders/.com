const {join} = require('path');
const each = require('lodash/each');
const Promise = require('bluebird');
const {createFilePath} = require('gatsby-source-filesystem');

exports.createPages = ({graphql, actions}) => {
  return new Promise((resolve, reject) => {
    resolve(
      graphql(
        `
          query {
            posts: allMarkdownRemark(
              sort: {fields: [frontmatter___date], order: DESC}
              filter: {frontmatter: {draft: {ne: true}}}
              limit: 1000
            ) {
              edges {
                node {
                  frontmatter {
                    title
                    path
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
          actions.createPage({
            path: post.node.frontmatter.path,
            component: join(__dirname, 'src/components/BlogPost.js'),
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

exports.onCreateNode = ({node, actions, getNode}) => {
  if (node.internal.type === 'MarkdownRemark') {
    actions.createNodeField({name: 'slug', node, value: createFilePath({node, getNode})});
  }
};
