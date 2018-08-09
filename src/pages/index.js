import React from 'react';
import Link from 'gatsby-link';
import get from 'lodash/get';
import Helmet from 'react-helmet';
import Bio from '../components/Bio';
import typography from '../utils/typography';

const Index = ({data}) => {
  return (
    <div>
      <Helmet
        htmlAttributes={{lang: 'en'}}
        meta={[{name: 'description', content: data.site.meta.description}]}
        title={data.site.meta.title}
      />
      <Bio />
      {data.posts.edges.map(({node}) => {
        return (
          <div key={node.frontmatter.path}>
            <h3
              style={{
                marginBottom: typography.rhythm(1 / 8),
              }}
            >
              <Link style={{boxShadow: 'none'}} to={node.frontmatter.path}>
                {get(node, 'frontmatter.title', node.frontmatter.path)}
              </Link>
            </h3>
            <small>{node.frontmatter.date}</small>
            <p dangerouslySetInnerHTML={{__html: node.excerpt}} />
          </div>
        );
      })}
    </div>
  );
};

export default Index;

export const pageQuery = graphql`
  query IndexQuery {
    site {
      meta: siteMetadata {
        title
        description
      }
    }
    posts: allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
      edges {
        node {
          excerpt
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
          }
        }
      }
    }
  }
`;
