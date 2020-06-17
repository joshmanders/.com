/* eslint-disable */
const { join } = require('path');
const each = require('lodash/each');
const Promise = require('bluebird');
const { createFilePath } = require('gatsby-source-filesystem');

exports.createPages = ({ graphql, actions }) => {
  return new Promise((resolve, reject) => {
    resolve(
      graphql(`
        query GetBlogPosts {
          posts: allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
            edges {
              node {
                fields {
                  slug
                }
                frontmatter {
                  title
                }
              }
              previous {
                fields {
                  slug
                }

                frontmatter {
                  title
                }
              }
              next {
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
      `).then((result) => {
        if (result.errors) {
          process.stderr.write(`${result.errors}`);
          return reject(result.errors);
        }

        // Create blog posts pages.
        return each(result.data.posts.edges, (post) => {
          return actions.createPage({
            path: post.node.fields.slug,
            component: join(__dirname, 'src/components/Post.tsx'),
            context: {
              slug: post.node.fields.slug,
              previous: post.previous,
              next: post.next,
            },
          });
        });
      })
    );
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  if (node.internal.type === 'MarkdownRemark') {
    actions.createNodeField({ name: 'slug', node, value: createFilePath({ node, getNode }) });
  }
};
