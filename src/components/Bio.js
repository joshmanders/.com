import React from 'react';
import 'typeface-noto-serif';
import typography from '../utils/typography';
import avatar from './avatar.png';

const Bio = () => (
  <div
    style={{
      display: 'flex',
      marginBottom: typography.rhythm(2.5),
    }}
  >
    <img
      src={avatar}
      alt="Josh Manders"
      style={{
        borderRadius: '9999px',
        marginRight: typography.rhythm(1 / 2),
        marginBottom: 0,
        width: typography.rhythm(2),
        height: typography.rhythm(2),
      }}
    />
    <p>
      Written by <strong>Josh Manders</strong> who builds useful things at his company{' '}
      <a href="https://aniftyco.com">NiftyCo</a>. You should follow him on{' '}
      <a href="https://twitter.com/joshmanders">Twitter</a>.
    </p>
  </div>
);

export default Bio;
