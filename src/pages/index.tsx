import { graphql, Link, useStaticQuery } from 'gatsby';
import React, { Fragment, FunctionComponent } from 'react';
import Helmet from 'react-helmet';
import { Bio, Shell } from '../components';

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

interface IEdgeNode {
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
        <html
          itemScope={true}
          itemType="http://schema.org/Article"
          prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# article: http://ogp.me/ns/article#"
          lang="en"
        />
        <title>Thoughts, Stories &amp; Ideas - Josh Manders</title>
        <meta name="description" content="From the mind of Josh Manders" />
        <meta itemProp="name" content="Thoughts, Stories &amp; Ideas" />
        <meta itemProp="description" content="From the mind of Josh Manders" />
        <meta itemProp="image" content="https://github.com/joshmanders.png" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@joshmanders" />
        <meta name="twitter:title" content="Thoughts, Stories &amp; Ideas" />
        <meta name="twitter:description" content="From the mind of Josh Manders" />
        <meta name="twitter:creator" content="@joshmanders" />
        <meta name="twitter:image" content="https://github.com/joshmanders.png" />
        <meta property="og:url" content="https://joshmanders.com/" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Thoughts, Stories &amp; Ideas" />
        <meta property="og:description" content="From the mind of Josh Manders" />
        <meta property="og:image" content="https://github.com/joshmanders.png" />
      </Helmet>
      <Fragment>
        <h1 className="text-2xl md:text-5xl font-semibold mb-8">Thoughts, Stories &amp; Ideas</h1>
        <Bio className="mb-8 md:mb-16" />
        <section>
          <h3 className="text-xl md:text-3xl font-semibold mb-4">Things I Wrote</h3>
          {posts.edges.map(({ node: post }) => {
            const [, , slug] = /^(\d{4}-\d{2}-\d{2})-(.+)$/.exec(post.parent.name);
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
      </Fragment>
    </Shell>
  );
};

export default IndexPage;
