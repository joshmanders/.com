import React from 'react';
import {StaticQuery, graphql} from 'gatsby';

const Bio = ({author}) => (
  <div>
    <img src="/images/avatar.png" alt={author.name} />
    <p>
      Written by <strong>{author.name}</strong> who builds useful things at his company{' '}
      <a href="https://aniftyco.com">NiftyCo</a>. You should follow him on <a href={author.url}>Twitter</a>.
    </p>
  </div>
);

export default (props) => (
  <StaticQuery
    query={graphql`
      query {
        site {
          meta: siteMetadata {
            author {
              name
              url
            }
          }
        }
      }
    `}
    render={({site}) => <Bio author={site.meta.author} {...props} />}
  />
);
