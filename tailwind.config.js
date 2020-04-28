/* eslint-disable */
const defaultTheme = require('tailwindcss/defaultTheme');

const joshTheme = {
  colors: {
    joshmanders: '#25ae60',
    niftyco: defaultTheme.colors.teal[700],
    audience: '#FF3666',
    appmetrics: defaultTheme.colors.purple[700],
    merched: defaultTheme.colors.blue[700],
    twitter: '#1da1f2',
  },
  fontFamily: {
    serif: ['"Noto Serif"', ...defaultTheme.fontFamily['serif']],
  },
};

module.exports = {
  theme: {
    extend: joshTheme,
    typography: {
      h1: {
        fontSize: defaultTheme.fontSize['2xl'],
        fontWeight: defaultTheme.fontWeight['semibold'],
        color: defaultTheme.colors.gray[900],
        lineHeight: defaultTheme.lineHeight['none'],
      },
      'h1 + *': {
        marginTop: defaultTheme.spacing[8],
      },
      h2: {
        fontSize: defaultTheme.fontSize['xl'],
        fontWeight: defaultTheme.fontWeight['semibold'],
        color: defaultTheme.colors.gray[900],
        lineHeight: defaultTheme.lineHeight['tight'],
      },
      '* + h2': {
        marginTop: defaultTheme.spacing[8],
      },
      'h2 + *': {
        marginTop: defaultTheme.spacing[4],
      },
      p: {
        fontSize: defaultTheme.fontSize['lg'],
        lineHeight: defaultTheme.lineHeight['relaxed'],
      },
      'p + p': {
        marginTop: defaultTheme.spacing[4],
      },
      strong: {
        fontWeight: defaultTheme.fontWeight['bold'],
        color: defaultTheme.colors.gray[900],
      },
      a: {
        fontWeight: defaultTheme.fontWeight['medium'],
        borderBottom: `solid 2px ${joshTheme.colors.joshmanders}`,
        'a:hover': {
          color: joshTheme.colors.joshmanders,
        },
      },
      'a[href^="https://appmetrics.co"]': {
        borderBottomColor: joshTheme.colors['appmetrics'],
      },
      'a[href^="https://appmetrics.co"]:hover': {
        color: joshTheme.colors['appmetrics'],
      },
      'a[href^="https://aniftyco.com"]': {
        borderBottomColor: joshTheme.colors['niftyco'],
      },
      'a[href^="https://aniftyco.com"]:hover': {
        color: joshTheme.colors['niftyco'],
      },
      'a[href^="https://merched.com"]': {
        borderBottomColor: joshTheme.colors['merched'],
      },
      'a[href^="https://merched.com"]:hover': {
        color: joshTheme.colors['merched'],
      },
      code: {
        backgroundColor: defaultTheme.colors.gray[200],
        fontSize: '.875em', // Use `em` so change is relative to current font size
        paddingLeft: defaultTheme.spacing[1],
        paddingRight: defaultTheme.spacing[1],
      },
      img: {
        marginTop: defaultTheme.spacing[8],
        marginBottom: defaultTheme.spacing[8],
      },
      ol: {
        listStyleType: defaultTheme.listStyleType['decimal'],
        paddingLeft: defaultTheme.spacing[5],
      },
      '* + ol': {
        marginTop: defaultTheme.spacing[4],
      },
      'ol + *': {
        marginTop: defaultTheme.spacing[4],
      },
      'li ol': {
        marginTop: defaultTheme.spacing[2],
      },
      ul: {
        listStyleType: defaultTheme.listStyleType['disc'],
        paddingLeft: defaultTheme.spacing[5],
      },
      '* + ul': {
        marginTop: defaultTheme.spacing[4],
      },
      'ul + *': {
        marginTop: defaultTheme.spacing[4],
      },
      'li ul': {
        marginTop: defaultTheme.spacing[2],
      },
      li: {
        fontSize: defaultTheme.fontSize['base'],
        fontWeight: defaultTheme.fontWeight['normal'],
        color: defaultTheme.colors.gray[800],
        lineHeight: defaultTheme.lineHeight['relaxed'],
      },
      'li + li': {
        marginTop: defaultTheme.spacing[2],
      },
      'li p': {
        marginTop: defaultTheme.spacing[4],
      },
      'li p + p': {
        marginTop: defaultTheme.spacing[2],
      },
      'li:first-child p:first-child': {
        marginTop: defaultTheme.spacing[2],
      },
      blockquote: {
        fontStyle: 'italic',
        color: defaultTheme.colors.gray[700],
        borderLeftWidth: defaultTheme.borderWidth[4],
        borderLeftStyle: 'solid',
        borderLeftColor: defaultTheme.colors.gray[900],
        paddingLeft: defaultTheme.spacing[4],
      },
      '* + blockquote': {
        marginTop: defaultTheme.spacing[4],
      },
      'blockquote + *': {
        marginTop: defaultTheme.spacing[4],
      },
      pre: {
        backgroundColor: '#1E1E1E',
        paddingTop: defaultTheme.spacing[3],
        paddingRight: defaultTheme.spacing[4],
        paddingBottom: defaultTheme.spacing[3],
        paddingLeft: defaultTheme.spacing[4],
      },
      '* + pre': {
        marginTop: defaultTheme.spacing[4],
      },
      'pre + *': {
        marginTop: defaultTheme.spacing[4],
      },
      'pre code': {
        backgroundColor: 'inherit',
        fontSize: defaultTheme.fontSize['sm'],
        padding: defaultTheme.spacing[0],
      },
      'pre code > .grvsc-line': {
        paddingLeft: 0,
        paddingRight: 0,
      },
    },
  },
  variants: {},
  plugins: [
    ({ addComponents, theme }) =>
      addComponents({
        '.markdown-rendered': theme('typography'),
      }),
  ],
};
