const { join } = require('path');
const each = require('lodash/each');
const Promise = require('bluebird');
const { createFilePath } = require('gatsby-source-filesystem');

exports.createPages = ({ graphql, actions }) => {
  return new Promise((resolve, reject) => {
    resolve(
      graphql(`
        query GetBlogPosts {
          posts: allMarkdownRemark(sort: { fields: [fields___slug], order: DESC }) {
            edges {
              node {
                fields {
                  slug
                }
                parent {
                  ... on File {
                    name
                  }
                }
                frontmatter {
                  title
                }
              }
              previous {
                fields {
                  slug
                }
                parent {
                  ... on File {
                    name
                  }
                }
                frontmatter {
                  title
                }
              }
              next {
                fields {
                  slug
                }
                parent {
                  ... on File {
                    name
                  }
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
          const [, date, path] = /^(\d{4}-\d{2}-\d{2})-(.+)$/.exec(post.node.parent.name);

          return actions.createPage({
            path: `/${path}`,
            component: join(__dirname, 'src/components/Post.tsx'),
            context: {
              slug: post.node.fields.slug,
              date,
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
