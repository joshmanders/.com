import { graphql, Link, useStaticQuery } from 'gatsby';
import React, { FunctionComponent } from 'react';
import { Shell, LargeBio } from '../components';

const GET_POSTS_QUERY = graphql`
  query IndexQuery {
    posts: allMarkdownRemark(sort: { fields: fields___slug, order: DESC }) {
      edges {
        node {
          frontmatter {
            title
            description
          }
          parent {
            ... on File {
              name
            }
          }
        }
      }
    }
  }
`;

interface EdgeNode {
  node: {
    frontmatter: {
      title: string;
      description: string;
    };
    parent: {
      name: string;
    };
  };
}

interface PostsResult {
  posts: {
    edges: EdgeNode[];
  };
}

const IndexPage: FunctionComponent = () => {
  const { posts } = useStaticQuery<PostsResult>(GET_POSTS_QUERY);

  return (
    <Shell>
      <h1 className="text-2xl md:text-5xl font-semibold mb-8">Thoughts, Stories &amp; Ideas</h1>
      <LargeBio />
      <section>
        <h3 className="text-xl md:text-3xl font-semibold mb-4">Things I Wrote</h3>
        {posts.edges.map(({ node: post }) => {
          const slug = post.parent.name.replace(/^(\d{4}-\d{2}-\d{2})-(.+)$/, '$2');
          return (
            <article className="mb-8" key={slug}>
              <h2 className="text-xl md:text-2xl mb-2">
                <Link
                  className="border-b-2 border-brand hover:text-brand"
                  to={`/${slug}`}
                  title={post.frontmatter.title}
                >
                  {post.frontmatter.title}
                </Link>
              </h2>
              <p className="md:text-lg italic">{post.frontmatter.description}</p>
            </article>
          );
        })}
      </section>
    </Shell>
  );
};

export default IndexPage;
