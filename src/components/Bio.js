import React from 'react';
import 'typeface-noto-serif';
import typography from '../utils/typography';

const Bio = ({author}) => (
  <div
    style={{
      display: 'flex',
      marginBottom: typography.rhythm(2.5),
    }}
  >
    <img
      src="/images/avatar.png"
      alt={author.name}
      style={{
        borderRadius: '9999px',
        marginRight: typography.rhythm(1 / 2),
        marginBottom: 0,
        width: typography.rhythm(2),
        height: typography.rhythm(2),
      }}
    />
    <p>
      Written by <strong>{author.name}</strong> who builds useful things at his company{' '}
      <a href="https://aniftyco.com">NiftyCo</a>. You should follow him on <a href={author.url}>Twitter</a>.
    </p>
  </div>
);

export default Bio;
