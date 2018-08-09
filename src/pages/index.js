import React from 'react';
import {StaticQuery, graphql, Link} from 'gatsby';
import styled from 'react-emotion';
import Template from '../components/Template';
import Bio from '../components/Bio';

const Date = styled('small')`
  font-size: 0.87055rem;
  line-height: 1.68rem;
  display: block;
  margin-bottom: 0.5rem;
  margin-top: -1.3rem;
`;

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
          <Date>{node.frontmatter.date}</Date>
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
