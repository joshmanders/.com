import React from 'react';
import {StaticQuery, graphql, Link} from 'gatsby';
import Template from '../components/Template';
import Bio from '../components/Bio';

const Index = ({posts}) => (
  <Template>
    <Bio />
    {posts.edges.map(({node}) => {
      return (
        <div key={node.frontmatter.path}>
          <h3>
            <Link style={{boxShadow: 'none'}} to={node.frontmatter.path}>
              {node.frontmatter.title}
            </Link>
          </h3>
          <small>{node.frontmatter.date}</small>
          <p dangerouslySetInnerHTML={{__html: node.excerpt}} />
        </div>
      );
    })}
  </Template>
);

export default (props) => (
  <StaticQuery
    query={graphql`
      query IndexQuery {
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
    `}
    render={(data) => <Index {...data} {...props} />}
  />
);
