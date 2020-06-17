import React, { FunctionComponent } from 'react';
import { Link } from 'gatsby';

export const CompactBio: FunctionComponent = () => (
  <div className="flex items-center pt-6 mt-6 mb-8 border-t-2 md:mt-12 md:mb-16">
    <Link to="/" title="Read More" className="mr-4">
      <img src="https://github.com/joshmanders.png" className="w-24 h-24 rounded-lg md:w-16 md:h-16" />
    </Link>
    <div className="flex-1 leading-relaxed md:text-lg">
      Written by <strong>Josh Manders</strong> who is building{' '}
      <a
        href="https://startaudience.com"
        title="Connect with your Audience"
        className="border-b-2 border-audience hover:text-audience"
      >
        Audience
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
    <img src="https://github.com/joshmanders.png" className="hidden w-32 h-32 mr-4 rounded-lg md:block" />
    <div className="flex-1 leading-relaxed md:text-lg">
      <p className="text-2xl">Hi, I&apos;m Josh 👋</p>
      <p>
        I build simple solutions to complex problems. You can find me on{' '}
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
        <a href="/uses" title="My setup" className="border-b-2 border-joshmanders hover:text-joshmanders">
          my setup
        </a>{' '}
        or what I am{' '}
        <a
          href="/now"
          title="What I am currently doing"
          className="border-b-2 border-joshmanders hover:text-joshmanders"
        >
          currently doing
        </a>
        .
      </p>
    </div>
  </div>
);
