import classNames from 'classnames';
import React, { FunctionComponent } from 'react';

interface IBioProps {
  className?: string;
}

export const Bio: FunctionComponent<IBioProps> = ({ className }) => (
  <div className={classNames('flex items-center', className)}>
    <img src="https://github.com/joshmanders.png" className="rounded-full w-16 h-16 mr-4" />
    <p className="text-lg">
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
    </p>
  </div>
);
