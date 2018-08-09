import React from 'react';
import Link from 'gatsby-link';
import get from 'lodash/get';
import Helmet from 'react-helmet';
import Bio from '../components/Bio';

const Index = ({data}) => (
  <div>
    <Helmet
      htmlAttributes={{lang: 'en'}}
      meta={[{name: 'description', content: data.site.meta.description}]}
      title={data.site.meta.title}
    />
    <Bio author={data.site.meta.author} />
    {data.posts.edges.map(({node}) => {
      return (
        <div key={node.frontmatter.path}>
          <h3>
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

export default Index;

export const pageQuery = graphql`
  query IndexQuery {
    site {
      meta: siteMetadata {
        title
        description
        author {
          name
          url
        }
      }
    }
    posts: allMarkdownRemark(
      sort: {fields: [frontmatter___date], order: DESC}
      filter: {frontmatter: {draft: {ne: true}}}
    ) {
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
