import React, { FunctionComponent } from 'react';
import { Link } from 'gatsby';

export const CompactBio: FunctionComponent = () => (
  <div className="flex items-center mt-6 md:mt-12 mb-8 md:mb-16 pt-6 border-t-2">
    <Link to="/" title="Read More" className="mr-4">
      <img src="https://github.com/joshmanders.png" className="rounded-lg w-24 h-24 md:w-16 md:h-16" />
    </Link>
    <div className="md:text-lg leading-relaxed flex-1">
      Written by <strong>Josh Manders</strong> who is building{' '}
      <a
        href="https://appmetrics.co"
        title="App Metrics - Application Performance Monitoring"
        className="border-b-2 border-appmetrics hover:text-appmetrics"
      >
        App Metrics
      </a>{' '}
      at his company{' '}
      <a href="https://aniftyco.com" title="NiftyCo" className="border-b-2 border-niftyco hover:text-niftyco">
        NiftyCo
      </a>
      . You should follow him on{' '}
      <a
        href="https://twitter.com/joshmanders"
        title="Twitter"
        className="border-b-2 border-twitter hover:text-twitter"
      >
        Twitter
      </a>
      .
    </div>
  </div>
);

export const LargeBio: FunctionComponent = () => (
  <div className="flex mb-8 md:mb-16">
    <img src="https://github.com/joshmanders.png" className="hidden md:block rounded-lg w-32 h-32 mr-4" />
    <div className="md:text-lg flex-1 leading-relaxed">
      <p className="text-2xl">Hi, I&apos;m Josh 👋</p>
      <p>
        I am a{' '}
        <a
          href="https://full.snack.dev"
          title="Full Snack Developer"
          className="border-b-2 border-orange-500 hover:text-orange-500"
        >
          full snack developer
        </a>{' '}
        with over 20 years experience building web and mobile apps. You can find me on{' '}
        <a
          href="https://twitter.com/joshmanders"
          title="Me on Twitter"
          className="border-b-2 border-twitter hover:text-twitter"
        >
          Twitter
        </a>{' '}
        &amp;{' '}
        <a
          href="https://www.indiehackers.com/joshmanders"
          title="Indie Hackers"
          className="border-b-2 border-blue-700 hover:text-blue-700"
        >
          Indie Hackers
        </a>
        . You can also check out{' '}
        <a href="/uses" title="My setup" className="border-b-2 border-brand hover:text-brand">
          my setup
        </a>{' '}
        or what I am{' '}
        <a href="/now" title="What I am currently doing" className="border-b-2 border-brand hover:text-brand">
          currently doing
        </a>
        .
      </p>
    </div>
  </div>
);
