import { graphql, Link, useStaticQuery } from 'gatsby';
import React, { Fragment, FunctionComponent } from 'react';
import { Bio, Shell } from '../components';

const GET_POSTS_QUERY = graphql`
  query IndexQuery {
    posts: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { draft: { ne: true } } }
      limit: 10
    ) {
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
      <Fragment>
        <h1 className="text-5xl font-semibold mb-8">Thoughts, Stories &amp; Ideas</h1>
        <Bio className="mb-16" />
        <section>
          <h3 className="text-3xl font-semibold mb-4">Things I Wrote</h3>
          {posts.edges.map(({ node }) => {
            return (
              <article className="mb-6" key={node.frontmatter.path}>
                <h2 className="text-3xl mb-2">
                  <Link className="border-b-2 border-brand hover:text-brand" to={node.frontmatter.path}>
                    {node.frontmatter.title}
                  </Link>
                </h2>
                <p className="text-xl italic">{node.frontmatter.description}</p>
              </article>
            );
          })}
        </section>
      </Fragment>
    </Shell>
  );
};

export default IndexPage;
