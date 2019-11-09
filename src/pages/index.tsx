import { graphql, Link, useStaticQuery } from 'gatsby';
import React, { Fragment, FunctionComponent } from 'react';
import Helmet from 'react-helmet';
import { Bio, Shell } from '../components';

const GET_POSTS_QUERY = graphql`
  query IndexQuery {
    posts: allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }, limit: 10) {
      edges {
        node {
          frontmatter {
            title
            description
            path
          }
        }
      }
    }
  }
`;

interface IEdgeNode {
  node: {
    exerpt: string;
    frontmatter: {
      title: string;
      description: string;
      path: string;
    };
  };
}

interface IPostsResult {
  posts: {
    edges: IEdgeNode[];
  };
}

const IndexPage: FunctionComponent = () => {
  const { posts } = useStaticQuery<IPostsResult>(GET_POSTS_QUERY);

  return (
    <Shell>
      <Helmet>
        <title>Thoughts, Stories &amp; Ideas - Josh Manders</title>
      </Helmet>
      <Fragment>
        <h1 className="text-2xl md:text-5xl font-semibold mb-8">Thoughts, Stories &amp; Ideas</h1>
        <Bio className="mb-8 md:mb-16" />
        <section>
          <h3 className="text-xl md:text-3xl font-semibold mb-4">Things I Wrote</h3>
          {posts.edges.map(({ node: post }) => {
            return (
              <article className="mb-8" key={post.frontmatter.path}>
                <h2 className="text-xl md:text-2xl mb-2">
                  <Link
                    className="border-b-2 border-brand hover:text-brand"
                    to={post.frontmatter.path}
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
      </Fragment>
    </Shell>
  );
};

export default IndexPage;
