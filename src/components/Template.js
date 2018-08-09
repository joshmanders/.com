import React from 'react';
import Helmet from 'react-helmet';
import {StaticQuery, Link, graphql} from 'gatsby';
import 'typeface-noto-serif';

const Template = ({description, title, children}) => (
  <div>
    <Helmet htmlAttributes={{lang: 'en'}} meta={[{name: 'description', content: description}]} title={title} />
    <h1>
      <Link to="/">{title}</Link>
    </h1>
    {children}
  </div>
);

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
