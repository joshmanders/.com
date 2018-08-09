import React from 'react';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';
import Bio from '../components/Bio';
import typography from '../utils/typography';

const BlogPostTemplate = ({data, pathContext}) => {
  const {frontmatter, html, excerpt} = data.post;
  const {title} = data.site.meta;

  return (
    <div>
      <Helmet
        htmlAttributes={{lang: 'en'}}
        meta={[{name: 'description', content: excerpt}]}
        title={`${data.post.frontmatter.title} | ${title}`}
      />
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
      <Bio />

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
        author
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
