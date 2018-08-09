import React from 'react';
import Link from 'gatsby-link';

const Template = ({children, data}) => {
  return (
    <div>
      <h1>
        <Link to="/">{data.site.meta.title}</Link>
      </h1>
      {children()}
    </div>
  );
};

export default Template;

export const query = graphql`
  query LayoutIndexQuery {
    site {
      meta: siteMetadata {
        title
      }
    }
  }
`;
