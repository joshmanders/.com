import React, { FunctionComponent, Fragment } from 'react';
import { Shell, LargeBio } from '../components';
import { Link } from 'gatsby';
import Helmet from 'react-helmet';

const NowPage: FunctionComponent = () => (
  <Fragment>
    <Helmet>
      <title>My Setup</title>
    </Helmet>
    <Shell
      meta={{
        title: 'My Setup',
        description: 'The tools that get me through my days.',
        slug: 'uses',
      }}
    >
      <h1 className="mb-8 text-2xl font-semibold md:text-5xl">
        <Link to="/" title="Go back">
          Thoughts, Stories &amp; Ideas
        </Link>
      </h1>
      <LargeBio />
      <section>
        <div className="mb-4 text-sm">Last updated March 5th, 2020.</div>
        <h3 className="mb-4 text-xl font-semibold md:text-3xl">My Setup</h3>
        <p className="mb-6 text-xl">
          This is a complete list of the tools, apps, services and hardware I use on a regular basis. The list contains
          tools I use in my work as a web and mobile app developer but also tools I use offline.
        </p>
        <h3 className="mb-4 text-xl font-semibold md:text-2xl">Hardware</h3>
        <ul className="mb-12 leading-relaxed list-disc list-inside md:text-xl md:mb-20">
          <li className="mb-4">
            <span>MacBook Pro (16-inch, 2019)</span>
            <ul className="ml-3 list-disc list-inside md:text-lg">
              <li className="my-2 ml-2">
                <strong>Processor:</strong> 2.6 Ghz 6-Core Intel Core i7
              </li>
              <li className="mb-2 ml-2">
                <strong>Memory:</strong> 16 GB 2667 MHz DDR4
              </li>
              <li className="mb-2 ml-2">
                <strong>Graphics:</strong> AMD Radeon Pro 5300M 4 GB (2048x1280)
              </li>
              <li className="mb-2 ml-2">
                <strong>External Display 1:</strong> 27-inch Dell P2715Q (3840x2160)
              </li>
              <li className="mb-2 ml-2">
                <strong>External Display 2:</strong> 27-inch Dell P2715Q (3840x2160)
              </li>
            </ul>
          </li>
          <li className="mb-4">
            <span>MacBook Pro (Retina, 15-inch, Mid 2015)</span>
            <ul className="ml-3 list-disc list-inside md:text-lg">
              <li className="my-2 ml-2">
                <strong>Processor:</strong> 2.5 Ghz Quad-Core Intel Core i7
              </li>
              <li className="mb-2 ml-2">
                <strong>Memory:</strong> 16 GB 1600 MHz DDR3
              </li>
              <li className="mb-2 ml-2">
                <strong>Graphics:</strong> AMD Radeon R9 M370X 2 GB (1920x1200)
              </li>
            </ul>
          </li>
          <li className="mb-4">iPhone 11 Pro Max (256GB)</li>
          <li className="mb-4">iPad Air 2 (16GB)</li>
          <li className="mb-4">Apple Watch (Series 5, 44mm Space Gray)</li>
          <li className="mb-4">AirPods (2nd Generation)</li>
        </ul>
        <h3 className="mb-4 text-xl font-semibold md:text-2xl">Software</h3>
        <ul className="mb-12 leading-relaxed list-disc list-inside md:text-xl md:mb-20">
          <li className="mb-4">
            <span>
              <a href="https://brave.com/" title="Brave Browser" className="border-b-2 border-brand hover:text-brand">
                Brave Browser
              </a>{' '}
              - Brave is my primary browser. I choose it because it is built on Chromium so it gives me the best of
              Chrome but with better privacy.
            </span>
            <div className="ml-4 text-lg font-semibold">Extensions:</div>
            <ul className="ml-3 list-disc list-inside md:text-lg">
              <li className="my-2 ml-2">
                <a
                  href="https://chrome.google.com/webstore/detail/1password-x-%E2%80%93-password-ma/aeblfdkhhhdcdjpifhhbdiojplfjncoa"
                  title="1Password X"
                  className="border-b-2 border-brand hover:text-brand"
                >
                  1Password X
                </a>{' '}
                - I don&apos;t sign up for anything without passwords being generated through 1Password.
              </li>
              <li className="my-2 ml-2">
                <a
                  href="https://chrome.google.com/webstore/detail/hckr-news/mnlaodleonmmfkdhfofamacceeikgecp"
                  title="hckr news"
                  className="border-b-2 border-brand hover:text-brand"
                >
                  hckr news
                </a>{' '}
                - Overall the Hacker News interface really isn&apos;t all that bad. This just enhances it with some
                extra stuff.
              </li>
              <li className="my-2 ml-2">
                <a
                  href="https://chrome.google.com/webstore/detail/honey/bmnlcjabgnpnenekpadlanbbkooimhnj"
                  title="Honey"
                  className="border-b-2 border-brand hover:text-brand"
                >
                  Honey
                </a>{' '}
                - Saving money is always good, right?
              </li>
              <li className="my-2 ml-2">
                <a
                  href="https://chrome.google.com/webstore/detail/imgur-uploader/lcpkicdemehhmkjolekhlglljnkggfcf"
                  title="Imgur Uploader"
                  className="border-b-2 border-brand hover:text-brand"
                >
                  Imgur Uploader
                </a>{' '}
                - Right click &gt; Upload to Imgur, enough said.
              </li>
              <li className="my-2 ml-2">
                <a
                  href="https://chrome.google.com/webstore/detail/json-formatter/bcjindcccaagfpapjjmafapmmgkkhgoa"
                  title="JSON Formatter"
                  className="border-b-2 border-brand hover:text-brand"
                >
                  JSON Formatter
                </a>{' '}
                - Looking at blobs of JSON in the browser can be daunting. This makes it easier.
              </li>
              <li className="my-2 ml-2">
                <a
                  href="https://chrome.google.com/webstore/detail/minimal-twitter/pobhoodpcipjmedfenaigbeloiidbflp"
                  title="Minimal Twitter"
                  className="border-b-2 border-brand hover:text-brand"
                >
                  Minimal Twitter
                </a>{' '}
                - The new Twitter redesign is not bad, some things could be changed. This extension is how I wish the
                actual interface would be.
              </li>
              <li className="my-2 ml-2">
                <a
                  href="https://chrome.google.com/webstore/detail/octolinker/jlmafbaeoofdegohdhinkhilhclaklkp"
                  title="OctoLinker"
                  className="border-b-2 border-brand hover:text-brand"
                >
                  OctoLinker
                </a>{' '}
                - Links things up on GitHub repos.
              </li>
              <li className="my-2 ml-2">
                <a
                  href="https://privacy.com/join/229LX"
                  title="Pay by Privacy.com"
                  className="border-b-2 border-brand hover:text-brand"
                >
                  Pay by Privacy.com
                </a>{' '}
                - Like 1Password I also don&apos;t use my actual credit cards online. Privacy allows me to generate
                burner cards for all online transactions.
              </li>
              <li className="my-2 ml-2">
                <a
                  href="https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi"
                  title="React Developer Tools"
                  className="border-b-2 border-brand hover:text-brand"
                >
                  React Developer Tools
                </a>{' '}
                - I work with React all day, need these tools to do my job better.
              </li>
              <li className="my-2 ml-2">
                <a
                  href="https://chrome.google.com/webstore/detail/reader-mode/llimhhconnjiflfimocjggfjdlmlhblm"
                  title="Reader Mode"
                  className="border-b-2 border-brand hover:text-brand"
                >
                  Reader Mode
                </a>{' '}
                - Some sites are terrible to read on, this fixes that.
              </li>
              <li className="my-2 ml-2">
                <a
                  href="https://chrome.google.com/webstore/detail/reddit-enhancement-suite/kbmfpngjjgdllneeigpgjifpgocmfgmb"
                  title="Reddit Enhancement Suite"
                  className="border-b-2 border-brand hover:text-brand"
                >
                  Reddit Enhancement Suite
                </a>{' '}
                - Does anyone use Reddit without RES?
              </li>
              <li className="my-2 ml-2">
                <a
                  href="https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd"
                  title="Redux DevTools"
                  className="border-b-2 border-brand hover:text-brand"
                >
                  Redux DevTools
                </a>{' '}
                - In the event that I am working with Redux this makes it easier.
              </li>
              <li className="my-2 ml-2">
                <a
                  href="https://chrome.google.com/webstore/detail/smile-always/jgpmhnmjbhgkhpbgelalfpplebgfjmbf"
                  title="Smile Always"
                  className="border-b-2 border-brand hover:text-brand"
                >
                  Smile Always
                </a>{' '}
                - Makes me feel good knowing the FCC is getting a percentage of my transactions on Amazon.
              </li>
              <li className="my-2 ml-2">
                <a
                  href="https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo"
                  title="Tampermonkey"
                  className="border-b-2 border-brand hover:text-brand"
                >
                  Tampermonkey
                </a>{' '}
                - For using My Fitness Pal script for Keto.
              </li>
            </ul>
          </li>
          <li className="mb-4">
            <a href="https://cleanmymac.com/" title="CleanMyMac X" className="border-b-2 border-brand hover:text-brand">
              CleanMyMac X
            </a>{' '}
            - I use CleanMyMac X to keep my macOS clean from clutter.
          </li>
          <li className="mb-4">
            <a href="https://discordapp.com/" title="Discord" className="border-b-2 border-brand hover:text-brand">
              Discord
            </a>{' '}
            - Discord allows me to sit in a voice channel with friends and talk while as if we&apos;re in the same
            office working together.
          </li>
          <li className="mb-4">
            <a
              href="https://www.docker.com/products/docker-desktop/"
              title="Docker Desktop"
              className="border-b-2 border-brand hover:text-brand"
            >
              Docker Desktop
            </a>{' '}
            - Self explainatory. For running Docker on macOS.
          </li>
          <li className="mb-4">
            <a href="https://dropbox.com/" title="Dropbox" className="border-b-2 border-brand hover:text-brand">
              Dropbox
            </a>{' '}
            - Most of my documents are now being synced via iCloud, but some stuff uses Dropbox for settings.
          </li>
          <li className="mb-4">
            <a href="https://www.figma.com/" title="Figma" className="border-b-2 border-brand hover:text-brand">
              Figma
            </a>{' '}
            - I recently switched to Figma from Sketch to see what all the hubbub is about.
          </li>
          <li className="mb-4">
            <a href="https://firefox.com/" title="Firefox" className="border-b-2 border-brand hover:text-brand">
              Firefox
            </a>{' '}
            - I&apos;m a web developer, need to make sure everything works in Firefox too.
          </li>
          <li className="mb-4">
            <a
              href="https://google.com/chrome/"
              title="Googe Chrome"
              className="border-b-2 border-brand hover:text-brand"
            >
              Googe Chrome
            </a>{' '}
            - Same reason as Firefox even though Brave is Chromium.
          </li>
          <li className="mb-4">
            <a href="https://www.apple.com/macos/" title="Mail" className="border-b-2 border-brand hover:text-brand">
              Mail
            </a>{' '}
            - I use the default Mail.app in macOS / iOS as it works for what I need.
          </li>
          <li className="mb-4">
            <a
              href="https://www.microsoftedgeinsider.com/"
              title="Microsoft Edge (Dev)"
              className="border-b-2 border-brand hover:text-brand"
            >
              Microsoft Edge (Dev)
            </a>{' '}
            - Microsoft recently ditched their own engine for Edge in favor of Chromium so now I can test my websites on
            macOS.
          </li>
          <li className="mb-4">
            <a
              href="https://lightpillar.com/mosaic.html"
              title="Mosaic"
              className="border-b-2 border-brand hover:text-brand"
            >
              Mosaic
            </a>{' '}
            - This software is glorious. I use it to tile my windows how I want them. I highly suggest you use this too.
          </li>
          <li className="mb-4">
            <a href="https://www.apple.com/music/" title="Music" className="border-b-2 border-brand hover:text-brand">
              Music
            </a>{' '}
            - Apple Music and Spotify are basically on par for musical selection. I choose Apple Music because I already
            have it on all my devices, and Verizon gave me a free lifetime subscription.
          </li>
          <li className="mb-4">
            <a href="https://www.apple.com/macos/" title="Notes" className="border-b-2 border-brand hover:text-brand">
              Notes
            </a>{' '}
            - I use the default notes app to keep track of any notes I may need to take.
          </li>
          <li className="mb-4">
            <a href="https://www.apple.com/macos/" title="Photos" className="border-b-2 border-brand hover:text-brand">
              Photos
            </a>{' '}
            - All my photos from my iPhone sync to iCloud so I can view them and share them with my family.
          </li>
          <li className="mb-4">
            <a
              href="https://www.apple.com/macos/"
              title="Podcasts"
              className="border-b-2 border-brand hover:text-brand"
            >
              Podcasts
            </a>{' '}
            - Self explainatory.
          </li>
          <li className="mb-4">
            <a
              href="https://github.com/avibrazil/RDM/"
              title="RDM"
              className="border-b-2 border-brand hover:text-brand"
            >
              RDM
            </a>{' '}
            - This fantastic tool allows me to set my 4K Dell displays to be in Retina mode even though macOS won&apos;t
            natively do it. I also use it to change my resolution for streaming.
          </li>
          <li className="mb-4">
            <a
              href="https://www.apple.com/macos/"
              title="Reminders"
              className="border-b-2 border-brand hover:text-brand"
            >
              Reminders
            </a>{' '}
            - The recent massive update to Reminders for iOS 13 &amp; macOS Catalina has made it a heck of a contender
            with other todo apps.
          </li>
          <li className="mb-4">
            <a href="https://www.apple.com/safari/" title="Safari" className="border-b-2 border-brand hover:text-brand">
              Safari
            </a>{' '}
            - Testing of websites but also to take beautiful screenshots of them with the browser wrapping it.
          </li>
          <li className="mb-4">
            <a href="https://slack.com/" title="Slack" className="border-b-2 border-brand hover:text-brand">
              Slack
            </a>{' '}
            - Majority of my community communication comes from Slack teams.
          </li>
          <li className="mb-4">
            <a href="https://cordlessdog.com/stay/" title="Stay" className="border-b-2 border-brand hover:text-brand">
              Stay
            </a>{' '}
            - Use in conjunction with Mosaic to keep my windows tiled how I want them depending on what configuration I
            have set for the displays connected.
          </li>
          <li className="mb-4">
            <a href="https://symless.com/synergy/" title="Synergy" className="border-b-2 border-brand hover:text-brand">
              Synergy
            </a>{' '}
            - I have my mid 2015 MacBook Pro clamshelled and tucked away with two displays hooked up as my main
            workhorse, and my 2017 MacBook Pro is propped up next to my displays and I use Synergy to share a keyboard
            &amp; mouse between them.
          </li>
          <li className="mb-4">
            <a href="https://tableplus.com/" title="TablePlus" className="border-b-2 border-brand hover:text-brand">
              TablePlus
            </a>{' '}
            - To handle all my administrational needs for databases such as MySQL, PostgreSQL and Redis.
          </li>
          <li className="mb-4">
            <a href="https://telegram.org/" title="Telegram" className="border-b-2 border-brand hover:text-brand">
              Telegram
            </a>{' '}
            - Used for real-time chat with the one and only{' '}
            <a href="https://getmakerlog.com" title="Makerlog" className="border-b-2 border-brand hover:text-brand">
              Makerlog
            </a>{' '}
            community.
          </li>
          <li className="mb-4">
            <span>
              <a
                href="https://www.apple.com/macos/"
                title="Terminal"
                className="border-b-2 border-brand hover:text-brand"
              >
                Terminal
              </a>{' '}
              - I don&apos;t need anything fancy in my terminal choice, so I stick to default macOS terminal. Below are
              all the terminal based software I use.
            </span>
            <div className="ml-4 text-lg font-semibold">Tools:</div>
            <ul className="ml-3 list-disc list-inside md:text-lg">
              <li className="my-2 ml-2">
                <a
                  href="https://fishshell.com/"
                  title="Fish Shell"
                  className="border-b-2 border-brand hover:text-brand"
                >
                  Fish Shell
                </a>{' '}
                - Recently switched from ZSH to Fish as it has more out of the box and looks really nice.
              </li>
              <li className="my-2 ml-2">
                <a href="https://git-scm.com/" title="Git" className="border-b-2 border-brand hover:text-brand">
                  Git
                </a>{' '}
                - Git is the only version control I need in my life.
              </li>
              <li className="my-2 ml-2">
                <a
                  href="https://stedolan.github.io/jq/"
                  title="jq"
                  className="border-b-2 border-brand hover:text-brand"
                >
                  jq
                </a>{' '}
                - I use this to slice and dice JSON.
              </li>
              <li className="my-2 ml-2">
                <a href="https://brew.sh/" title="Homebrew" className="border-b-2 border-brand hover:text-brand">
                  Homebrew
                </a>{' '}
                - How all applications be it GUI or command line based get installed.
              </li>
              <li className="my-2 ml-2">
                <a
                  href="https://github.com/Homebrew/homebrew-cask/"
                  title="Homebrew Cask"
                  className="border-b-2 border-brand hover:text-brand"
                >
                  Homebrew Cask
                </a>{' '}
                - The GUI application installer side of Homebrew. If they have a Cask to install, it gets installed from
                Cask.
              </li>
              <li className="my-2 ml-2">
                <a href="https://httpie.org/" title="Httpie" className="border-b-2 border-brand hover:text-brand">
                  Httpie
                </a>{' '}
                - Just easier to make &quot;curl&quot; requests with Httpie.
              </li>
              <li className="my-2 ml-2">
                <a
                  href="https://github.com/mas-cli/mas/"
                  title="MAS"
                  className="border-b-2 border-brand hover:text-brand"
                >
                  MAS
                </a>{' '}
                - Great addition to Homebrew to keep all my macOS App Store applications updated too.
              </li>
            </ul>
          </li>
          <li className="mb-4">
            <a
              href="https://www.codeux.com/textual/"
              title="Textual"
              className="border-b-2 border-brand hover:text-brand"
            >
              Textual
            </a>{' '}
            - If and when I ever need to go into IRC this is my application of choice.
          </li>
          <li className="mb-4">
            <a
              href="https://www.virtualbox.org/"
              title="VirtualBox"
              className="border-b-2 border-brand hover:text-brand"
            >
              VirtualBox
            </a>{' '}
            - Used to spin up a VM for Debian/Ubuntu flavors of Linux and Windows VM&apos;s for testing things.
          </li>
          <li className="mb-4">
            <a
              href="https://code.visualstudio.com/"
              title="Visual Studio Code"
              className="border-b-2 border-brand hover:text-brand"
            >
              Visual Studio Code
            </a>{' '}
            - My absolutely favorite and probably never going to be topped code editor.
          </li>
          <li className="mb-4">
            <a href="https://zoom.us/" title="Zoom" className="border-b-2 border-brand hover:text-brand">
              Zoom
            </a>{' '}
            - Use to meet with clients.
          </li>
        </ul>
      </section>
    </Shell>
  </Fragment>
);

export default NowPage;
