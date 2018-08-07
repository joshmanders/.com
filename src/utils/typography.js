import Typography from 'typography';
import gray from 'gray-percentage';
import {MOBILE_MEDIA_QUERY} from 'typography-breakpoint-constants';

const colors = {
  primary: '#2BAE60',
};

const theme = new Typography({
  title: 'Thoughts, Stories & Ideas Theme',
  baseFontSize: '19px',
  baseLineHeight: 1.68,
  googleFonts: [
    {
      name: 'Noto Serif',
      styles: ['400', '700'],
    },
  ],
  headerFontFamily: ['Noto Serif', 'serif'],
  bodyFontFamily: ['Noto Serif', 'serif'],
  bodyColor: 'hsla(0,0%,0%,0.8)',
  headerWeight: '700',
  bodyWeight: 400,
  boldWeight: 700,
  overrideStyles: ({adjustFontSizeTo, scale, rhythm}, options) => ({
    body: {
      borderTop: `solid 4px ${colors.primary}`,
    },
    a: {
      boxShadow: '0 1px 0 0 currentColor',
      color: colors.primary,
      textDecoration: 'none',
    },
    'a:hover, a:active, a.gatsby-resp-image-link': {
      boxShadow: 'none',
    },
    'h5, h6': {
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
    },
    'h1, h2, h3, h4, h5, h6': {
      marginTop: rhythm(2),
    },
    ul: {
      listStyle: 'disc',
    },
    'ul, ol': {
      marginLeft: 0,
    },
    // children ol, ul
    'li > ol, li > ul': {
      marginLeft: rhythm(2 / 3),
      marginBottom: 0,
    },
    // Blockquote.
    blockquote: {
      ...scale(1 / 5),
      color: gray(41),
      fontStyle: 'italic',
      paddingLeft: rhythm(5 / 8),
      marginLeft: rhythm(-6 / 8),
      borderLeft: `${rhythm(1 / 8)} solid rgba(51, 51, 51, 0.7)`,
    },
    'blockquote > :last-child': {
      marginBottom: 0,
    },
    'blockquote cite': {
      ...adjustFontSizeTo(options.baseFontSize),
      color: options.bodyColor,
      fontStyle: 'normal',
    },
    'blockquote cite:before': {
      content: '"— "',
    },
    [MOBILE_MEDIA_QUERY]: {
      'ul, ol': {
        marginLeft: rhythm(1),
      },
      blockquote: {
        marginLeft: rhythm(-3 / 4),
        marginRight: 0,
        paddingLeft: rhythm(9 / 16),
      },
    },
  }),
});

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  theme.injectStyles();
}

export default theme;
