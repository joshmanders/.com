import React from 'react';
import Link from 'gatsby-link';
import typography from '../utils/typography';

const Template = ({location, children, data}) => {
  const styles =
    location.pathname === '/'
      ? {
          ...typography.scale(1.2),
          marginBottom: typography.rhythm(1.5),
          marginTop: 0,
        }
      : {
          ...typography.scale(0.3),
          marginBottom: typography.rhythm(-1),
          marginTop: 0,
        };

  return (
    <div
      style={{
        marginLeft: 'auto',
        marginRight: 'auto',
        maxWidth: typography.rhythm(24),
        padding: `${typography.rhythm(1.5)} ${typography.rhythm(3 / 4)}`,
      }}
    >
      <h1 style={styles}>
        <Link
          style={{
            boxShadow: 'none',
            textDecoration: 'none',
            color: 'inherit',
          }}
          to="/"
        >
          {data.site.meta.title}
        </Link>
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
