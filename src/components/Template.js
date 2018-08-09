import React from 'react';
import Helmet from 'react-helmet';
import {StaticQuery, Link, graphql} from 'gatsby';
import {injectGlobal} from 'emotion';
import styled, {css} from 'react-emotion';
import 'typeface-noto-serif';

const Wrapper = styled('div')`
  margin-left: auto;
  margin-right: auto;
  max-width: 40.32rem;
  padding: 2.52rem 1.26rem;
`;

const largeHeading = css`
  font-size: 2.2974rem;
  line-height: 2.52rem;
  margin-bottom: 2.52rem;
  margin-top: 0;
`;

const smallHeading = css`
  font-size: 1.23114rem;
  line-height: 1.68rem;
  margin-bottom: -1.68rem;
  margin-top: 0px;
`;

const Anchor = styled(Link)`
  box-shadow: none;
  text-decoration: none;
  color: inherit;
`;

const Template = ({size = 'large', description, title, children}) => (
  <Wrapper>
    <Helmet htmlAttributes={{lang: 'en'}} meta={[{name: 'description', content: description}]} title={title} />
    <h1 className={size === 'large' ? largeHeading : smallHeading}>
      <Anchor to="/">{title}</Anchor>
    </h1>
    {children}
  </Wrapper>
);

injectGlobal`
  html {
    font-family: sans-serif;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
  }

  body {
    margin: 0;
  }

  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  main,
  menu,
  nav,
  section,
  summary {
    display: block;
  }

  audio,
  canvas,
  progress,
  video {
    display: inline-block;
  }

  audio:not([controls]) {
    display: none;
    height: 0;
  }

  progress {
    vertical-align: baseline;
  }

  [hidden],
  template {
    display: none;
  }

  a {
    background-color: transparent;
    -webkit-text-decoration-skip: objects;
  }

  a:active,
  a:hover {
    outline-width: 0;
  }

  abbr[title] {
    border-bottom: none;
    text-decoration: underline;
    text-decoration: underline dotted;
  }

  b,
  strong {
    font-weight: inherit;
    font-weight: bolder;
  }

  dfn {
    font-style: italic;
  }

  h1 {
    font-size: 2em;
    margin: 0.67em 0;
  }

  mark {
    background-color: #ff0;
    color: #000;
  }

  small {
    font-size: 80%;
  }

  sub,
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }

  sub {
    bottom: -0.25em;
  }

  sup {
    top: -0.5em;
  }

  img {
    border-style: none;
  }

  svg:not(:root) {
    overflow: hidden;
  }

  code,
  kbd,
  pre,
  samp {
    font-family: monospace, monospace;
    font-size: 1em;
  }

  figure {
    margin: 1em 40px;
  }

  hr {
    box-sizing: content-box;
    height: 0;
    overflow: visible;
  }

  button,
  input,
  optgroup,
  select,
  textarea {
    font: inherit;
    margin: 0;
  }

  optgroup {
    font-weight: 700;
  }

  button,
  input {
    overflow: visible;
  }

  button,
  select {
    text-transform: none;
  }

  [type='reset'],
  [type='submit'],
  button,
  html [type='button'] {
    -webkit-appearance: button;
  }

  [type='button']::-moz-focus-inner,
  [type='reset']::-moz-focus-inner,
  [type='submit']::-moz-focus-inner,
  button::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }

  [type='button']:-moz-focusring,
  [type='reset']:-moz-focusring,
  [type='submit']:-moz-focusring,
  button:-moz-focusring {
    outline: 1px dotted ButtonText;
  }

  fieldset {
    border: 1px solid silver;
    margin: 0 2px;
    padding: 0.35em 0.625em 0.75em;
  }

  legend {
    box-sizing: border-box;
    color: inherit;
    display: table;
    max-width: 100%;
    padding: 0;
    white-space: normal;
  }

  textarea {
    overflow: auto;
  }

  [type='checkbox'],
  [type='radio'] {
    box-sizing: border-box;
    padding: 0;
  }

  [type='number']::-webkit-inner-spin-button,
  [type='number']::-webkit-outer-spin-button {
    height: auto;
  }

  [type='search'] {
    -webkit-appearance: textfield;
    outline-offset: -2px;
  }

  [type='search']::-webkit-search-cancel-button,
  [type='search']::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  ::-webkit-input-placeholder {
    color: inherit;
    opacity: 0.54;
  }

  ::-webkit-file-upload-button {
    -webkit-appearance: button;
    font: inherit;
  }

  html {
    font: 118.75%/1.68 'Noto Serif', serif;
    box-sizing: border-box;
    overflow-y: scroll;
  }

  * {
    box-sizing: inherit;
  }

  *:before {
    box-sizing: inherit;
  }

  *:after {
    box-sizing: inherit;
  }

  body {
    color: hsla(0, 0%, 0%, 0.8);
    font-family: 'Noto Serif', serif;
    font-weight: 400;
    word-wrap: break-word;
    font-kerning: normal;
    -moz-font-feature-settings: 'kern', 'liga', 'clig', 'calt';
    -ms-font-feature-settings: 'kern', 'liga', 'clig', 'calt';
    -webkit-font-feature-settings: 'kern', 'liga', 'clig', 'calt';
    font-feature-settings: 'kern', 'liga', 'clig', 'calt';
    border-top: solid 4px #2bae60;
  }

  img {
    max-width: 100%;
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.68rem;
  }

  h1 {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.68rem;
    color: inherit;
    font-family: 'Noto Serif', serif;
    font-weight: 700;
    text-rendering: optimizeLegibility;
    font-size: 2rem;
    line-height: 1.1;
  }

  h2 {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.68rem;
    color: inherit;
    font-family: 'Noto Serif', serif;
    font-weight: 700;
    text-rendering: optimizeLegibility;
    font-size: 1.51572rem;
    line-height: 1.1;
  }

  h3 {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.68rem;
    color: inherit;
    font-family: 'Noto Serif', serif;
    font-weight: 700;
    text-rendering: optimizeLegibility;
    font-size: 1.31951rem;
    line-height: 1.1;
  }

  h4 {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.68rem;
    color: inherit;
    font-family: 'Noto Serif', serif;
    font-weight: 700;
    text-rendering: optimizeLegibility;
    font-size: 1rem;
    line-height: 1.1;
  }

  h5 {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.68rem;
    color: inherit;
    font-family: 'Noto Serif', serif;
    font-weight: 700;
    text-rendering: optimizeLegibility;
    font-size: 0.87055rem;
    line-height: 1.1;
  }

  h6 {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.68rem;
    color: inherit;
    font-family: 'Noto Serif', serif;
    font-weight: 700;
    text-rendering: optimizeLegibility;
    font-size: 0.81225rem;
    line-height: 1.1;
  }

  hgroup {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.68rem;
  }

  ul {
    margin-left: 1.68rem;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.68rem;
    list-style-position: outside;
    list-style-image: none;
    list-style: disc;
  }

  ol {
    margin-left: 1.68rem;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.68rem;
    list-style-position: outside;
    list-style-image: none;
  }

  dl {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.68rem;
  }

  dd {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.68rem;
  }

  p {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.68rem;
  }

  figure {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.68rem;
  }

  pre {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.68rem;
    font-size: 0.85rem;
    line-height: 1.68rem;
  }

  table {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.68rem;
    font-size: 1rem;
    line-height: 1.68rem;
    border-collapse: collapse;
    width: 100%;
  }

  fieldset {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.68rem;
  }

  blockquote {
    margin-left: -1.26rem;
    margin-right: 1.68rem;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 1.05rem;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.68rem;
    font-size: 1.1487rem;
    line-height: 1.68rem;
    color: hsla(0, 0%, 0%, 0.59);
    font-style: italic;
    border-left: 0.21rem solid rgba(51, 51, 51, 0.7);
  }

  form {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.68rem;
  }

  noscript {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.68rem;
  }

  iframe {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.68rem;
  }

  hr {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: calc(1.68rem - 1px);
    background: hsla(0, 0%, 0%, 0.2);
    border: none;
    height: 1px;
  }

  address {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.68rem;
  }

  b {
    font-weight: 700;
  }

  strong {
    font-weight: 700;
  }

  dt {
    font-weight: 700;
  }

  th {
    font-weight: 700;
  }

  li {
    margin-bottom: calc(1.68rem / 2);
  }

  ol li {
    padding-left: 0;
  }

  ul li {
    padding-left: 0;
  }

  li > ol {
    margin-left: 1.68rem;
    margin-bottom: calc(1.68rem / 2);
    margin-top: calc(1.68rem / 2);
  }

  li > ul {
    margin-left: 1.68rem;
    margin-bottom: calc(1.68rem / 2);
    margin-top: calc(1.68rem / 2);
  }

  blockquote *:last-child {
    margin-bottom: 0;
  }

  li *:last-child {
    margin-bottom: 0;
  }

  p *:last-child {
    margin-bottom: 0;
  }

  li > p {
    margin-bottom: calc(1.68rem / 2);
  }

  code {
    font-size: 0.85rem;
    line-height: 1.68rem;
  }

  kbd {
    font-size: 0.85rem;
    line-height: 1.68rem;
  }

  samp {
    font-size: 0.85rem;
    line-height: 1.68rem;
  }

  abbr {
    border-bottom: 1px dotted hsla(0, 0%, 0%, 0.5);
    cursor: help;
  }

  acronym {
    border-bottom: 1px dotted hsla(0, 0%, 0%, 0.5);
    cursor: help;
  }

  abbr[title] {
    border-bottom: 1px dotted hsla(0, 0%, 0%, 0.5);
    cursor: help;
    text-decoration: none;
  }

  thead {
    text-align: left;
  }

  td,
  th {
    text-align: left;
    border-bottom: 1px solid hsla(0, 0%, 0%, 0.12);
    font-feature-settings: 'tnum';
    -moz-font-feature-settings: 'tnum';
    -ms-font-feature-settings: 'tnum';
    -webkit-font-feature-settings: 'tnum';
    padding-left: 1.12rem;
    padding-right: 1.12rem;
    padding-top: 0.84rem;
    padding-bottom: calc(0.84rem - 1px);
  }

  th:first-child,
  td:first-child {
    padding-left: 0;
  }

  th:last-child,
  td:last-child {
    padding-right: 0;
  }

  a {
    box-shadow: 0 1px 0 0 currentColor;
    color: #2bae60;
    text-decoration: none;
  }

  a:hover,
  a:active,
  a.gatsby-resp-image-link {
    box-shadow: none;
  }

  h5,
  h6 {
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 3.36rem;
  }

  ul,
  ol {
    margin-left: 0;
  }

  li > ol,
  li > ul {
    margin-left: 1.12rem;
    margin-bottom: 0;
  }

  blockquote > :last-child {
    margin-bottom: 0;
  }

  blockquote cite {
    font-size: 1rem;
    line-height: 1.68rem;
    color: hsla(0, 0%, 0%, 0.8);
    font-style: normal;
  }

  blockquote cite:before {
    content: '— ';
  }

  @media only screen and (max-width: 480px) {
    ul,
    ol {
      margin-left: 1.68rem;
    }

    blockquote {
      margin-left: -1.26rem;
      margin-right: 0;
      padding-left: 0.945rem;
    }
  }

`;

export default (props) => (
  <StaticQuery
    query={graphql`
      query {
        site {
          meta: siteMetadata {
            title
            description
          }
        }
      }
    `}
    render={(data) => <Template {...data.site.meta} {...props} />}
  />
);
