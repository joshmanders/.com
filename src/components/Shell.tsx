import React, { Fragment, FunctionComponent } from 'react';
import Helmet from 'react-helmet';
import 'tailwindcss/tailwind.css';
import 'typeface-noto-serif';

interface MetaProps {
  title: string;
  description: string;
  slug: string;
}
interface ShellProps {
  meta?: MetaProps;
  children: JSX.Element | JSX.Element[];
}

export const Shell: FunctionComponent<ShellProps> = ({
  children,
  meta: { title = 'Thoughts, Stories & Ideas', description = 'From the mind of Josh Manders', slug = '/' } = {},
}) => {
  return (
    <Fragment>
      <Helmet
        titleTemplate="%s | Thoughts, Stories &amp; Ideas - Josh Manders"
        defaultTitle="Thoughts, Stories &amp; Ideas - Josh Manders"
      >
        <html
          itemScope={true}
          itemType="http://schema.org/Article"
          prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# article: http://ogp.me/ns/article#"
          lang="en"
        />
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
      <div className="py-8 font-serif antialiased border-t-8 border-brand md:py-16">
        <div className="mx-4 md:mx-auto md:max-w-3xl">{children}</div>
      </div>
    </Fragment>
  );
};
