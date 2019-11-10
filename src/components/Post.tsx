import { format } from 'date-fns';
import { graphql, Link } from 'gatsby';
import React, { FunctionComponent } from 'react';
import Helmet from 'react-helmet';
import { Bio } from './Bio';
import { Shell } from './Shell';

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    post: markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        description
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
      };
      html: string;
      timeToRead: number;
      wordCount: {
        words: number;
      };
    };
  };
  pageContext: {
    slug: string;
    date: string;
    previous?: {
      parent: {
        name: string;
      };
      frontmatter: {
        title: string;
      };
    };
    next?: {
      parent: {
        name: string;
      };
      frontmatter: {
        title: string;
      };
    };
  };
}

const Post: FunctionComponent<IPostProps> = ({
  data: {
    post: {
      frontmatter: { title, description },
      html,
      timeToRead,
      wordCount: { words },
    },
  },
  pageContext: { slug, date, previous, next },
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
        <meta property="og:url" content={`https://joshmanders.com/${slug}`} />
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
          <span>{format(new Date(`${date} 00:00`), 'LLLL do, yyyy')}</span>
          <span className="mx-2">-</span>
          <span>{words} words</span>
          <span className="mx-2">-</span>
          <span>
            {timeToRead} {timeToRead === 1 ? 'minute' : 'minutes'} to read
          </span>
        </div>
        <div className="mt-4 md:mt-6 markdown-rendered" dangerouslySetInnerHTML={{ __html: html }} />
      </article>
      <Bio className="mt-6 md:mt-12 mb-8 md:mb-16 pt-6 border-t-2" />
      <ul className="mb-4 md:mb-6 flex flex-col md:flex-row md:flex-wrap md:justify-between">
        <li className="mb-2 md:mb-0 self-center md:self-auto">
          {previous && (
            <Link
              to={previous.parent.name.replace(/^(\d{4}-\d{2}-\d{2})-(.+)$/, '/$2')}
              className="border-b-2 border-brand hover:text-brand text-sm md:text-lg"
              title={`Previous: ${previous.frontmatter.title}`}
            >
              ← {previous.frontmatter.title}
            </Link>
          )}
        </li>
        <li className="mt-2 md:mt-0 self-center md:self-auto">
          {next && (
            <Link
              to={next.parent.name.replace(/^(\d{4}-\d{2}-\d{2})-(.+)$/, '/$2')}
              className="border-b-2 border-brand hover:text-brand text-sm md:text-lg"
              title={`Next: ${next.frontmatter.title}`}
            >
              {next.frontmatter.title} →
            </Link>
          )}
        </li>
      </ul>
    </Shell>
  );
};

export default Post;
