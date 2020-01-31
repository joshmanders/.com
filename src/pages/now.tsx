import React, { FunctionComponent, Fragment } from 'react';
import { Shell, LargeBio } from '../components';
import { Link } from 'gatsby';
import Helmet from 'react-helmet';

const NowPage: FunctionComponent = () => (
  <Fragment>
    <Helmet>
      <title>What have I been up to lately?</title>
    </Helmet>
    <Shell
      meta={{
        title: 'What have I been up to lately?',
        description: 'What I am focused on at this point in my life.',
        slug: 'now',
      }}
    >
      <h1 className="mb-8 text-2xl font-semibold md:text-5xl">
        <Link to="/" title="Go back">
          Thoughts, Stories &amp; Ideas
        </Link>
      </h1>
      <LargeBio />
      <section>
        <div className="mb-4 text-sm">
          Last updated November 12th, 2019. <br className="md:hidden" />(
          <a
            href="http://nownownow.com/about"
            title="What is a Now page?"
            className="border-b-2 border-brand hover:text-brand"
          >
            What is a Now page?
          </a>
          )
        </div>
        <h3 className="mb-4 text-xl font-semibold md:text-3xl">What have I been up to lately?</h3>
        <ul className="mb-12 leading-relaxed list-disc list-inside md:text-xl md:mb-20">
          <li className="mb-4">Left my full time job at Nelnet, Inc.</li>
          <li className="mb-4">
            Began contracting / consulting for Node.js, React, React-Native and GraphQL work.{' '}
            <span className="text-sm">
              (
              <a
                href="https://full.snack.dev/for-hire"
                className="border-b-2 border-orange-500 hover:text-orange-500"
                title="Hire me!"
              >
                I&apos;m available for hire!
              </a>
              )
            </span>
          </li>
          <li className="mb-4">
            Started a low-touch SaaS product company,{' '}
            <a href="https://aniftyco.com" title="NiftyCo" className="border-b-2 border-niftyco hover:text-niftyco">
              Nifty Development, LLC
            </a>
            .
          </li>
          <li className="mb-4">
            Started building the first SaaS product for NiftyCo called{' '}
            <a
              href="https://appmetrics.co"
              title="App Metrics - Application Performance Monitoring"
              className="border-b-2 border-appmetrics hover:text-appmetrics"
            >
              App Metrics
            </a>
            , an application performance monitoring platform built on Google&apos;s Lighthouse.
          </li>
        </ul>
        <h3 className="mb-4 text-xl font-semibold md:text-3xl">What do I want to do?</h3>
        <ul className="mb-12 leading-relaxed list-disc list-inside md:text-xl md:mb-20">
          <li className="mb-4">I hope to start streaming working on stuff on Twitch/YouTube.</li>
          <li className="mb-4">Write a course on converting a REST application to GraphQL.</li>
        </ul>
        <h3 className="mb-4 text-xl font-semibold md:text-3xl">What books am I reading?</h3>
        <ul className="mb-12 leading-relaxed list-disc list-inside md:text-xl md:mb-20">
          <li className="mb-4">
            <a
              href="https://www.amazon.com/gp/product/0307465357/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=joshmanders-20&creative=9325&linkCode=as2&creativeASIN=0307465357&linkId=891d1b4f5857063b301cb0717af021eb"
              className="border-b-2 border-brand hover:text-brand"
            >
              The 4-Hour-Work-Week
            </a>{' '}
            by <span className="italic">Timothy Ferriss</span>
          </li>
          <li className="mb-4">
            <a
              href="https://www.amazon.com/gp/product/1492180742/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=1492180742&linkCode=as2&tag=joshmanders-20&linkId=929899b497fdf76d78fe2922cf183e4d"
              className="border-b-2 border-brand hover:text-brand"
            >
              The Mom Test - How to talk to customers
            </a>{' '}
            by <span className="italic">Rob Fitzpatrick</span>
          </li>
          <li className="mb-4">
            <a
              href="https://www.amazon.com/gp/product/B003YH9MMI/ref=as_li_tl?ie=UTF8&tag=joshmanders-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B003YH9MMI&linkId=dc0b2049b95053f8ee3dc993d1bbcc10"
              className="border-b-2 border-brand hover:text-brand"
            >
              Start Small, Stay Small
            </a>{' '}
            by <span className="italic">Rob Walling</span>
          </li>
        </ul>
        <h3 className="mb-4 text-xl font-semibold md:text-3xl">What books do I have left to read?</h3>
        <ul className="leading-relaxed list-disc list-inside md:text-xl">
          <li className="mb-4">
            <a
              href="https://www.amazon.com/gp/product/0143126563/ref=as_li_tl?ie=UTF8&tag=joshmanders-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0143126563&linkId=327ccff351cc6e87a562ed1a2151d88f"
              className="border-b-2 border-brand hover:text-brand"
            >
              Getting Things Done
            </a>{' '}
            by <span className="italic">David Allen</span>
          </li>
          <li className="mb-4">
            <a
              href="https://www.amazon.com/gp/product/014310960X/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=014310960X&linkCode=as2&tag=joshmanders-20&linkId=5d3ac67f23b49c148cfe8bd5c463e616"
              className="border-b-2 border-brand hover:text-brand"
            >
              Small Giants
            </a>{' '}
            by <span className="italic">Bo Burlingham</span>
          </li>
          <li className="mb-4">
            <a
              href="https://www.amazon.com/gp/product/1544502583/ref=as_li_tl?ie=UTF8&tag=joshmanders-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=1544502583&linkId=76062d19a7552d4e152d50d84e106b2b"
              className="border-b-2 border-brand hover:text-brand"
            >
              Stand For Something
            </a>{' '}
            by <span className="italic">Brian Burkhart</span>
          </li>
          <li className="mb-4">
            <a
              href="https://www.amazon.com/gp/product/1328972356/ref=as_li_tl?ie=UTF8&tag=joshmanders-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=1328972356&linkId=027632e5edeaf4ae0f3383c9a6be1958"
              className="border-b-2 border-brand hover:text-brand"
            >
              Company of One
            </a>{' '}
            by <span className="italic">Paul Jarvis</span>
          </li>
          <li className="mb-4">
            <a
              href="https://www.amazon.com/gp/product/0578012812/ref=as_li_tl?ie=UTF8&tag=joshmanders-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0578012812&linkId=ce426d3db8de27b8e9cdc86cedd16714"
              className="border-b-2 border-brand hover:text-brand"
            >
              Getting Real
            </a>{' '}
            by <span className="italic">Jason Fried &amp; DHH</span>
          </li>
          <li className="mb-4">
            <a
              href="https://www.amazon.com/gp/product/0062874780/ref=as_li_tl?ie=UTF8&tag=joshmanders-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0062874780&linkId=661e680d2db719dbc01c5faa89d9dbd2"
              className="border-b-2 border-brand hover:text-brand"
            >
              It Doesn&apos;t Have To Be Crazy At Work
            </a>{' '}
            by <span className="italic">Jason Fried &amp; DHH</span>
          </li>
          <li className="mb-4">
            <a
              href="https://www.amazon.com/gp/product/0804137501/ref=as_li_tl?ie=UTF8&tag=joshmanders-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0804137501&linkId=3c32ce7ff2bb087720f0bca5351eb752"
              className="border-b-2 border-brand hover:text-brand"
            >
              Remote
            </a>{' '}
            by <span className="italic">Jason Fried &amp; DHH</span>
          </li>
          <li className="mb-4">
            <a
              href="https://www.amazon.com/gp/product/0307463745/ref=as_li_tl?ie=UTF8&tag=joshmanders-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0307463745&linkId=d16621045e51bea7675a595db65cf8f4"
              className="border-b-2 border-brand hover:text-brand"
            >
              Rework
            </a>{' '}
            by <span className="italic">Jason Fried &amp; DHH</span>
          </li>
        </ul>
      </section>
    </Shell>
  </Fragment>
);

export default NowPage;
