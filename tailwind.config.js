module.exports = {
  theme: {
    extend: {
      colors: {
        brand: '#25ae60',
        appmetrics: '#6b46c1',
        niftyco: '#319795',
        twitter: '#1da1f2',
      },
      fontFamily: {
        serif: ['"Noto Serif"', 'Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
      },
    },
  },
  variants: {},
  plugins: [
    ({ addUtilities }) =>
      addUtilities({
        'article > .content > p': {
          marginBottom: '1.68rem',
        },
        'article > .content > p:last-child': {
          marginBottom: '0',
        },
        'article > .content > blockquote': {
          marginLeft: '-1.26rem',
          marginRight: '1.68rem',
          marginTop: '0',
          paddingBottom: '0',
          paddingLeft: '1.05rem',
          paddingRight: '0',
          paddingTop: '0',
          marginBottom: '1.68rem',
          fontSize: '1.1487rem',
          lineHeight: '1.68rem',
          color: 'hsla(0, 0%, 0%, 0.59)',
          fontStyle: 'italic',
          borderLeft: '0.21rem solid rgba(51, 51, 51, 0.7)',
        },
        'article > .content > blockquote *:last-child': {
          marginBottom: '0',
        },
      }),
  ],
};
