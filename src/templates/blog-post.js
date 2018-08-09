import React from 'react';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';
import Bio from '../components/Bio';
import typography from '../utils/typography';

const BlogPostTemplate = ({data, pathContext}) => {
  const {frontmatter, html, excerpt} = data.post;
  const {author, title} = data.site.meta;

  return (
    <div>
      <Helmet>
        <html
          itemScope={true}
          itemType="http://schema.org/Article"
          prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# article: http://ogp.me/ns/article#"
          lang="en"
        />
        <title>
          {frontmatter.title} | {title}
        </title>
        <meta name="description" content={excerpt} />
        <meta itemProp="name" content={frontmatter.title} />
        <meta itemProp="description" content={excerpt} />
        <meta itemProp="image" content="https://github.com/joshmanders.png" />
        <meta name="twitter:card" value="summary" />
        <meta name="twitter:site" content="@joshmanders" />
        <meta name="twitter:title" content={frontmatter.title} />
        <meta name="twitter:description" content={excerpt} />
        <meta name="twitter:creator" content="@joshmanders" />
        <meta name="twitter:image" content="https://github.com/joshmanders.png" />
        <meta property="og:url" content={`https://joshmanders.com/${frontmatter.path}`} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={frontmatter.title} />
        <meta property="og:description" content={excerpt} />
        <meta property="og:image" content="https://github.com/joshmanders.png" />
      </Helmet>
      <h1>{frontmatter.title}</h1>
      <p
        style={{
          ...typography.scale(-1 / 5),
          display: 'block',
          marginBottom: typography.rhythm(1),
          marginTop: typography.rhythm(-0.6),
        }}
      >
        {frontmatter.date}
      </p>
      <div dangerouslySetInnerHTML={{__html: html}} />
      <hr
        style={{
          marginBottom: typography.rhythm(1),
        }}
      />
      <Bio author={author} />

      <ul
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          listStyle: 'none',
          padding: 0,
        }}
      >
        <li>
          {pathContext.previous && (
            <Link to={`/${pathContext.previous.frontmatter.path}`} rel="prev">
              ← {pathContext.previous.frontmatter.title}
            </Link>
          )}
        </li>
        <li>
          {pathContext.next && (
            <Link to={`/${pathContext.next.frontmatter.path}`} rel="next">
              {pathContext.next.frontmatter.title} →
            </Link>
          )}
        </li>
      </ul>
    </div>
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      meta: siteMetadata {
        title
        author {
          name
          url
        }
      }
    }
    post: markdownRemark(frontmatter: {path: {eq: $slug}}) {
      id
      excerpt
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        path
      }
    }
  }
`;
