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
      <div className="w-screen h-screen border border-t-8 border-brand py-16 font-serif antialiased">
        <div className="mx-auto max-w-3xl">{children}</div>
      </div>
    </Fragment>
  );
};
