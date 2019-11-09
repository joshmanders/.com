import { graphql, Link } from 'gatsby';
import React, { FunctionComponent } from 'react';
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
      frontmatter: { title, date },
      html,
      timeToRead,
      wordCount: { words },
    },
  },
  pageContext: { previous: prevPage, next: nextPage },
}) => {
  return (
    <Shell>
      <h3 className="text-2xl font-semibold mb-4">
        <Link to="/" title="Thoughts, Stories &amp; Ideas">
          Thoughts, Stories &amp; Ideas
        </Link>
      </h3>
      <article>
        <h1 className="text-3xl font-semibold">{title}</h1>
        <div className="my-2 italic">
          <span>{date}</span>
          <span className="mx-2">-</span>
          <span>{words} words</span>
          <span className="mx-2">-</span>
          <span>
            {timeToRead} {timeToRead === 1 ? 'minute' : 'minutes'} to read
          </span>
        </div>
        <div className="mt-6 text-xl content" dangerouslySetInnerHTML={{ __html: html }} />
      </article>
      <Bio className="mt-12 mb-16 pt-6 border-t-2" />
      <ul className="flex flex-wrap justify-between">
        {prevPage && (
          <li>
            <Link
              to={prevPage.frontmatter.path}
              className="border-b-2 border-brand hover:text-brand text-lg"
              rel="prev"
            >
              ← {prevPage.frontmatter.title}
            </Link>
          </li>
        )}
        {nextPage && (
          <li>
            <Link to={nextPage.frontmatter.path} className="border-b-2 border-brand hover:text-brand text-lg" rel="nex">
              {nextPage.frontmatter.title} →
            </Link>
          </li>
        )}
      </ul>
    </Shell>
  );
};

export default Post;
