import React from 'react';
import Helmet from 'react-helmet';
import {Link, graphql} from 'gatsby';
import styled from 'react-emotion';
import Template from '../components/Template';
import Bio from '../components/Bio';

const Date = styled('p')`
  font-size: 0.87055rem;
  line-height: 1.68rem;
  display: block;
  margin-bottom: 1.68rem;
  margin-top: -1.008rem;
`;

const Divider = styled('hr')`
  margin-bottom: 1.68rem;
`;

const Pagination = styled('ul')`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style: none;
  padding: 0px;
`;

const BlogPost = ({data, pageContext}) => {
  const {frontmatter, html, excerpt} = data.post;
  const {title} = data.site.meta;

  return (
    <Template size="small">
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
      <Date>{frontmatter.date}</Date>
      <div dangerouslySetInnerHTML={{__html: html}} />
      <Divider />
      <Bio />
      <Pagination>
        <li>
          {pageContext.previous && (
            <Link to={`/${pageContext.previous.frontmatter.path}`} rel="prev">
              ← {pageContext.previous.frontmatter.title}
            </Link>
          )}
        </li>
        <li>
          {pageContext.next && (
            <Link to={`/${pageContext.next.frontmatter.path}`} rel="next">
              {pageContext.next.frontmatter.title} →
            </Link>
          )}
        </li>
      </Pagination>
    </Template>
  );
};

export default BlogPost;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      meta: siteMetadata {
        title
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
