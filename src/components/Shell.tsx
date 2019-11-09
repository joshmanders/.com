import React, { Fragment, FunctionComponent } from 'react';
import Helmet from 'react-helmet';
import 'tailwindcss/tailwind.css';
import 'typeface-noto-serif';

interface IShellProps {
  children: JSX.Element | JSX.Element[];
}

export const Shell: FunctionComponent<IShellProps> = ({ children }) => {
  return (
    <Fragment>
      <Helmet htmlAttributes={{ lang: 'en' }} />
      <div className="border-t-8 border-brand py-8 md:py-16 font-serif antialiased">
        <div className="mx-4 md:mx-auto md:max-w-3xl">{children}</div>
      </div>
    </Fragment>
  );
};
