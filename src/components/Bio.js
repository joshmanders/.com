import React from 'react';
import {StaticQuery, graphql} from 'gatsby';
import styled from 'react-emotion';

const Wrapper = styled('div')`
  display: flex;
  margin-bottom: 4.2rem;
`;

const Avatar = styled('img')`
  border-radius: 9999px;
  margin-right: 0.84rem;
  margin-bottom: 0;
  width: 3.36rem;
  height: 3.36rem;
`;

const Bio = ({author}) => (
  <Wrapper>
    <Avatar src="/images/avatar.png" alt={author.name} />
    <p>
      Written by <strong>{author.name}</strong> who builds useful things at his company{' '}
      <a href="https://aniftyco.com">NiftyCo</a>. You should follow him on <a href={author.url}>Twitter</a>.
    </p>
  </Wrapper>
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
