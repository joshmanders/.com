import React, { FunctionComponent, Fragment } from 'react';
import { Shell, LargeBio } from '../components';
import { Link } from 'gatsby';
import Helmet from 'react-helmet';

const NotFoundPage: FunctionComponent = () => (
  <Fragment>
    <Helmet>
      <title>Page Not Found</title>
    </Helmet>
    <Shell
      meta={{
        title: 'Page Not Found',
        description: `Sorry this page doesn't exist.`,
        slug: '404',
      }}
    >
      <h1 className="mb-8 text-2xl font-semibold md:text-5xl">
        <Link to="/" title="Go back">
          Thoughts, Stories &amp; Ideas
        </Link>
      </h1>
      <LargeBio />
      <section>
        <h3 className="mb-4 text-xl font-semibold md:text-3xl">Page Not Found</h3>
        <p>Sorry this page doesn&apos;t exist.</p>
      </section>
    </Shell>
  </Fragment>
);

export default NotFoundPage;
