import { graphql } from 'gatsby';
import React, { FunctionComponent } from 'react';
import { Shell } from './Shell';

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    post: markdownRemark(frontmatter: { path: { eq: $slug } }) {
      html
      frontmatter {
        title
        description
        date(formatString: "MMMM DD, YYYY")
        path
      }
    }
  }
`;

interface IPostProps {
  data: {
    post: {
      frontmatter: {
        title: string;
        date: string;
      };
      html: string;
    };
  };
}

const Post: FunctionComponent<IPostProps> = ({
  data: {
    post: {
      frontmatter: { title, date },
      html,
    },
  },
}) => {
  return (
    <Shell>
      <h1>{title}</h1>
      <p>{date}</p>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Shell>
  );
};

export default Post;
