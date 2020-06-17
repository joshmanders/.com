import React, { FunctionComponent, Fragment } from 'react';
import { Page, LargeBio } from '../components';
import { Link } from 'gatsby';

const Now: FunctionComponent = () => (
  <Fragment>
    <Page
      title="What have I been up to lately?"
      description="What I am focused on at this point in my life."
      slug="now"
    >
      <h1 className="mb-8 text-2xl font-semibold md:text-5xl">
        <Link to="/" title="Go back">
          Thoughts, Stories &amp; Ideas
        </Link>
      </h1>
      <LargeBio />
      <section>
        <div className="mb-4 text-sm">
          Last updated June 17th, 2020. <br className="md:hidden" />(
          <a
            href="http://nownownow.com/about"
            title="What is a Now page?"
            className="border-b-2 border-joshmanders hover:text-joshmanders"
          >
            What is a Now page?
          </a>
          )
        </div>
        <h3 className="mb-4 text-xl font-semibold md:text-3xl">What have I been up to lately?</h3>
        <ul className="mb-12 leading-relaxed list-disc list-inside md:text-xl md:mb-20">
          <li className="mb-4">Left my full time job at Nelnet, Inc.</li>
          <li className="mb-4">
            Started a low-touch SaaS product company,{' '}
            <a href="https://aniftyco.com" title="NiftyCo" className="border-b-2 border-niftyco hover:text-niftyco">
              Nifty Development, LLC
            </a>
            .
          </li>
        </ul>
        <h3 className="mb-4 text-xl font-semibold md:text-3xl">What am I watching?</h3>
        <ul className="mb-12 leading-relaxed list-disc list-inside md:text-xl md:mb-20">
          <li className="mb-4">
            <a
              href="https://www.imdb.com/title/tt7604970/"
              className="border-b-2 border-joshmanders hover:text-joshmanders"
            >
              Brooklyn Nine-Nine
            </a>{' '}
            on <span className="italics">NBC</span>
          </li>
          <li className="mb-4">
            <a
              href="https://www.imdb.com/title/tt8064302/"
              className="border-b-2 border-joshmanders hover:text-joshmanders"
            >
              Dead to Me
            </a>{' '}
            on <span className="italics">Netflix</span>
          </li>
          <li className="mb-4">
            <a
              href="https://www.imdb.com/title/tt5834204/"
              className="border-b-2 border-joshmanders hover:text-joshmanders"
            >
              The Handmaid&apos;s Tale
            </a>{' '}
            on <span className="italics">Hulu</span>
          </li>
        </ul>
        <h3 className="mb-4 text-xl font-semibold md:text-3xl">What am I reading?</h3>
        <ul className="mb-12 leading-relaxed list-disc list-inside md:text-xl md:mb-20">
          <li className="mb-4">
            <a
              href="https://www.amazon.com/gp/product/0307465357/"
              className="border-b-2 border-joshmanders hover:text-joshmanders"
            >
              The 4-Hour-Work-Week
            </a>{' '}
            by <span className="italic">Timothy Ferriss</span>
          </li>
          <li className="mb-4">
            <a
              href="https://www.amazon.com/gp/product/1492180742/"
              className="border-b-2 border-joshmanders hover:text-joshmanders"
            >
              The Mom Test - How to talk to customers
            </a>{' '}
            by <span className="italic">Rob Fitzpatrick</span>
          </li>
          <li className="mb-4">
            <a
              href="https://www.amazon.com/gp/product/B003YH9MMI/"
              className="border-b-2 border-joshmanders hover:text-joshmanders"
            >
              Start Small, Stay Small
            </a>{' '}
            by <span className="italic">Rob Walling</span>
          </li>
          <li className="mb-4">
            <a
              href="https://www.amazon.com/gp/product/0143126563/"
              className="border-b-2 border-joshmanders hover:text-joshmanders"
            >
              Getting Things Done
            </a>{' '}
            by <span className="italic">David Allen</span>
          </li>
          <li className="mb-4">
            <a
              href="https://www.amazon.com/gp/product/014310960X/"
              className="border-b-2 border-joshmanders hover:text-joshmanders"
            >
              Small Giants
            </a>{' '}
            by <span className="italic">Bo Burlingham</span>
          </li>
          <li className="mb-4">
            <a
              href="https://www.amazon.com/gp/product/1544502583/"
              className="border-b-2 border-joshmanders hover:text-joshmanders"
            >
              Stand For Something
            </a>{' '}
            by <span className="italic">Brian Burkhart</span>
          </li>
          <li className="mb-4">
            <a
              href="https://www.amazon.com/gp/product/1328972356/"
              className="border-b-2 border-joshmanders hover:text-joshmanders"
            >
              Company of One
            </a>{' '}
            by <span className="italic">Paul Jarvis</span>
          </li>
          <li className="mb-4">
            <a
              href="https://www.amazon.com/gp/product/0578012812/"
              className="border-b-2 border-joshmanders hover:text-joshmanders"
            >
              Getting Real
            </a>{' '}
            by <span className="italic">Jason Fried &amp; DHH</span>
          </li>
          <li className="mb-4">
            <a
              href="https://www.amazon.com/gp/product/0062874780/"
              className="border-b-2 border-joshmanders hover:text-joshmanders"
            >
              It Doesn&apos;t Have To Be Crazy At Work
            </a>{' '}
            by <span className="italic">Jason Fried &amp; DHH</span>
          </li>
          <li className="mb-4">
            <a
              href="https://www.amazon.com/gp/product/0804137501/"
              className="border-b-2 border-joshmanders hover:text-joshmanders"
            >
              Remote
            </a>{' '}
            by <span className="italic">Jason Fried &amp; DHH</span>
          </li>
          <li className="mb-4">
            <a
              href="https://www.amazon.com/gp/product/0307463745/"
              className="border-b-2 border-joshmanders hover:text-joshmanders"
            >
              Rework
            </a>{' '}
            by <span className="italic">Jason Fried &amp; DHH</span>
          </li>
        </ul>
      </section>
    </Page>
  </Fragment>
);

export default Now;
