// src/app/blogs/self-hosting/page.js
import { Box, Button } from "@mui/material";
import Link from "next/link";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const SelfHostingPage = () => {
  const commonTextStyle = "text-lime-400 text-left md:text-justify";
  const tableStyle = `${commonTextStyle} border border-gray-400 px-4 py-2`;

  return (
    <Box
      sx={{
        display: "flex",
        gap: "2rem",
        flexDirection: "column",
        overflowX: "hidden",
      }}
    >
      <Box>
        <Link href="/blogs" passHref>
          <ArrowBackIcon
            sx={{
              color: "white",
              cursor: "pointer",
              "&:hover": {
                color: "#fae263",
              },
              position: "absolute",
              left: "0rem",
              marginTop: "1rem",
              display: {
                xs: "none",
                sm: "block",
              },
            }}
          />
        </Link>
        <div>
          <p
            className={`${commonTextStyle} text-2xl font-bold underline decoration-4`}
          >
            Next.js just blew my mind…
          </p>
          <p className={`${commonTextStyle} italic opacity-90 text-sm`}>
            26th Nov 2024, 4 min read
          </p>
        </div>
      </Box>

      <p className={commonTextStyle}>
        Minimalistic News was created to provide a quick and straightforward way
        to access the latest news headlines. With filtering options based on
        country, category, and language, it offers a clean and clutter-free
        experience without annoying ads.
      </p>

      <p className={commonTextStyle}>
        Go try it out yourself:
        <a
          href="https://news.shivam.foo"
          target="_blank"
          className="text-blue-400 hover:text-lime-400 hover:underline transition-colors duration-300"
        >
          https://news.shivam.foo
        </a>
      </p>

      <p className={commonTextStyle}>
        I appreciated Next.js so much that i even made this portfolio website
        using it, as you can see it has a lot of routing, and got understood the
        file-based approach better:
        <a
          href="https://shivam.foo"
          target="_blank"
          className="text-blue-400 hover:text-lime-400 hover:underline transition-colors duration-300"
        >
          https://shivam.foo
        </a>
      </p>

      <p className={commonTextStyle}>
        This was the first time I decided to use Next.js because I had heard a
        lot about it on the street.
      </p>

      <p className={commonTextStyle}>Things that blew my mind:</p>

      <p className={`${commonTextStyle} text-xl font-bold`}>1. Routing</p>
      <p className={commonTextStyle}>
        It amazed me how smartly it uses a file-based approach for defining the
        routes. Before this I have mainly worked on Single Page Application
        (SPA) only, to actually make routes, how in react we need to use
        react-router-dom, or hide/show the page component of the active tab,
        using external libraries, and my concept became more clear of why React
        is a library, and why Next.js is a React framework.
      </p>

      <p className={`${commonTextStyle} text-xl font-bold`}>
        2. Don’t need an external server to talk to an API/database.
      </p>
      <p className={commonTextStyle}>
        I don’t actually need an external server in EXPRESS, like I don’t need
        to define my own api endpoint??? That was so crazy, like everything in
        just one simple stack, also how easily I can interact with the DB, but
        before getting too ahead of myself, I decided that instead of doing all
        of this stuff on my own, I should just use an external API to get data
        from. But I will work on this as soon as I get a good idea for an app.
      </p>
      <p className={`${commonTextStyle} text-xl font-bold`}>3. Caching</p>
      <p className={commonTextStyle}>
        Also, the external API in the free tier made me look into types of
        caching done by Next.js, and how easy it is to implement, how it can
        revalidate making sure to fetch from the data source, but also having
        “no-store” cache on the client side component to make sure it fetches
        fresh data from the server tho.
      </p>
      <p className={`${commonTextStyle} text-xl font-bold`}>
        4. Time to load the page
      </p>
      <p className={commonTextStyle}>
        Also about the server and client-side components to improve the loading
        speed of the page. How efficiently this can reduce the amount of
        javascript that is needed to send to the client.
      </p>
      <p className={`${commonTextStyle} text-xl font-bold`}>
        5. Load only what is needed.
      </p>

      <p className={commonTextStyle}>
        Instead of loading all the react components on the page, when routing
        just load the part of the page which changes, making the transition feel
        smoother.
      </p>
      <p className={`${commonTextStyle} text-xl font-bold`}>6. Deployment</p>
      <p className={commonTextStyle}>
        I love you Vercel, don’t need to worry about dockerizing my application,
        setup a VM, have my domain point towards its IP address. How with the
        help of cloud functions it can easily scale depending upon load, and I
        don’t need to worry about that bullshit etc.
      </p>
      <p className={`${commonTextStyle} text-xl font-bold`}>7. Documentation</p>

      <p className={commonTextStyle}>
        Next.js documentation is very nicely written, very easy to understand
        the concepts, for the most part.
      </p>
      <p className={commonTextStyle}>
        My only mistake was using TailwindCSS + MUI, for some reason it looks
        fine in the development, but as soon as in production, MUI overwrites
        the style.
      </p>

      <p className={commonTextStyle}>
        Seeking full-time SWE roles starting May 2025, please contact me at
        sghodke@ncsu.edu if you have any leads.
      </p>

      <table>
        <thead>
          <tr>
            <th className={tableStyle}>Type</th>
            <th className={tableStyle}>Details</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className={tableStyle}>Email</td>
            <td className={tableStyle}>
              <a href="mailto:sghodke@ncsu.edu">sghodke@ncsu.edu</a>
            </td>
          </tr>
          <tr>
            <td className={tableStyle}>Github Repository</td>
            <td className={tableStyle}>
              <a href="https://github.com/nuttysunday/news" target="_blank">
                https://github.com/nuttysunday/news
              </a>
            </td>
          </tr>
          <tr>
            <td className={tableStyle}>Website</td>
            <td className={tableStyle}>
              <a href="https://shivam.foo" target="_blank">
                https://shivam.foo
              </a>
            </td>
          </tr>
          <tr>
            <td className={tableStyle}>Minimalistic News Project</td>
            <td className={tableStyle}>
              <a href="https://news.shivam.foo" target="_blank">
                https://news.shivam.foo
              </a>
            </td>
          </tr>
          <tr>
            <td className={tableStyle}>Blog</td>
            <td className={tableStyle}>
              <a
                href="https://shivam.foo/blogs/nextjs-just-blew-my-mind"
                target="_blank"
              >
                https://shivam.foo/blogs/nextjs-just-blew-my-mind
              </a>
            </td>
          </tr>
          <tr>
            <td className={tableStyle}>Github Profile</td>
            <td className={tableStyle}>
              <a href="https://github.com/nuttysunday" target="_blank">
                https://github.com/nuttysunday
              </a>
            </td>
          </tr>
          <tr>
            <td className={tableStyle}>Twitter Profile</td>
            <td className={tableStyle}>
              <a href="https://x.com/sundaycide" target="_blank">
                https://x.com/sundaycide
              </a>
            </td>
          </tr>
          <tr>
            <td className={tableStyle}>Resume</td>
            <td className={tableStyle}>
              <a
                href="https://drive.google.com/file/d/1OC_mcMHkBaDhWbKEMfsnLY-uBS8Xee7G/view"
                target="_blank"
              >
                View Resume
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </Box>
  );
};

export default SelfHostingPage;
