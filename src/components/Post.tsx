import { graphql, Link } from 'gatsby';
import React, { FunctionComponent } from 'react';
import Helmet from 'react-helmet';
import { Bio } from './Bio';
import { Shell } from './Shell';

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    post: markdownRemark(frontmatter: { path: { eq: $slug } }) {
      frontmatter {
        title
        description
        date(formatString: "MMMM DD, YYYY")
        path
      }
      html
      timeToRead
      wordCount {
        words
      }
    }
  }
`;

interface IPostProps {
  data: {
    post: {
      frontmatter: {
        title: string;
        description: string;
        date: string;
        path: string;
      };
      html: string;
      timeToRead: number;
      wordCount: {
        words: number;
      };
    };
  };
  pageContext: {
    previous?: {
      frontmatter: {
        path: string;
        title: string;
      };
    };
    next?: {
      frontmatter: {
        path: string;
        title: string;
      };
    };
  };
}

const Post: FunctionComponent<IPostProps> = ({
  data: {
    post: {
      frontmatter: { title, description, date, path },
      html,
      timeToRead,
      wordCount: { words },
    },
  },
  pageContext: { previous: prevPage, next: nextPage },
}) => {
  return (
    <Shell>
      <Helmet>
        <html
          itemScope={true}
          itemType="http://schema.org/Article"
          prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# article: http://ogp.me/ns/article#"
          lang="en"
        />
        <title>{title} | Thoughts, Stories &amp; Ideas - Josh Manders</title>
        <meta name="description" content={description} />
        <meta itemProp="name" content={title} />
        <meta itemProp="description" content={description} />
        <meta itemProp="image" content="https://github.com/joshmanders.png" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@joshmanders" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:creator" content="@joshmanders" />
        <meta name="twitter:image" content="https://github.com/joshmanders.png" />
        <meta property="og:url" content={`https://joshmanders.com/${path}`} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content="https://github.com/joshmanders.png" />
      </Helmet>
      <h3 className="text-lg md:text-2xl font-semibold mb-4">
        <Link to="/" title="Thoughts, Stories &amp; Ideas">
          Thoughts, Stories &amp; Ideas
        </Link>
      </h3>
      <article>
        <h1 className="text-xl md:text-3xl font-semibold">{title}</h1>
        <div className="text-sm md:text-normal my-2 italic">
          <span>{date}</span>
          <span className="mx-2">-</span>
          <span>{words} words</span>
          <span className="mx-2">-</span>
          <span>
            {timeToRead} {timeToRead === 1 ? 'minute' : 'minutes'} to read
          </span>
        </div>
        <div className="mt-4 md:mt-6 text-normal md:text-xl content" dangerouslySetInnerHTML={{ __html: html }} />
      </article>
      <Bio className="mt-6 md:mt-12 mb-8 md:mb-16 pt-6 border-t-2" />
      <ul className="mb-4 md:mb-6 flex flex-col md:flex-row md:flex-wrap md:justify-between">
        <li className="mb-2 md:mb-0 self-center md:self-auto">
          {prevPage && (
            <Link
              to={prevPage.frontmatter.path}
              className="border-b-2 border-brand hover:text-brand text-sm md:text-lg"
              rel="prev"
              title={`Previous: ${prevPage.frontmatter.title}`}
            >
              ← {prevPage.frontmatter.title}
            </Link>
          )}
        </li>
        <li className="mt-2 md:mt-0 self-center md:self-auto">
          {nextPage && (
            <Link
              to={nextPage.frontmatter.path}
              className="border-b-2 border-brand hover:text-brand text-sm md:text-lg"
              rel="nex"
              title={`Next: ${nextPage.frontmatter.title}`}
            >
              {nextPage.frontmatter.title} →
            </Link>
          )}
        </li>
      </ul>
    </Shell>
  );
};

export default Post;
