import { graphql, Link, useStaticQuery } from 'gatsby';
import React, { FunctionComponent } from 'react';
import { Page, LargeBio } from '../components';

const GET_POSTS_QUERY = graphql`
  query IndexQuery {
    posts: allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            description
          }
        }
      }
    }
  }
`;

type EdgeNode = {
  node: {
    fields: {
      slug: string;
    };
    frontmatter: {
      title: string;
      description: string;
    };
  };
};

type PostsResult = {
  posts: {
    edges: EdgeNode[];
  };
};

const Index: FunctionComponent = () => {
  const { posts } = useStaticQuery<PostsResult>(GET_POSTS_QUERY);

  return (
    <Page>
      <h1 className="mb-8 text-2xl font-semibold md:text-5xl">Thoughts, Stories &amp; Ideas</h1>
      <LargeBio />
      <section>
        <h3 className="mb-4 text-xl font-semibold md:text-3xl">Latest Writings</h3>
        {posts.edges.map(({ node: post }) => {
          return (
            <article className="mb-8" key={post.fields.slug}>
              <h2 className="mb-2 text-xl md:text-2xl">
                <Link
                  className="border-b-2 border-joshmanders hover:text-joshmanders"
                  to={post.fields.slug}
                  title={post.frontmatter.title}
                >
                  {post.frontmatter.title}
                </Link>
              </h2>
              <p className="italic md:text-lg">{post.frontmatter.description}</p>
            </article>
          );
        })}
      </section>
    </Page>
  );
};

export default Index;
