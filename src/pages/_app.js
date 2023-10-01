import "@/styles/globals.css";

import { NextUIProvider } from "@nextui-org/react";
import { Poppins } from "next/font/google";
import Head from "next/head";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>The Blog | Professional Free Space</title>
        <meta name="title" content="The Blog | Professional Free Space" />
        <meta
          name="description"
          content="Tell anything about you that you can't tell at work!"
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://metatags.io/" />
        <meta
          property="og:title"
          content="The Blog | Professional Free Space"
        />
        <meta
          property="og:description"
          content="Tell anything about you that you can't tell at work!"
        />
        <meta
          property="og:image"
          content="https://metatags.io/images/meta-tags.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://metatags.io/" />
        <meta
          property="twitter:title"
          content="The Blog | Professional Free Space"
        />
        <meta
          property="twitter:description"
          content="Tell anything about you that you can't tell at work!"
        />
        <meta
          property="twitter:image"
          content="https://metatags.io/images/meta-tags.png"
        />
      </Head>
      <NextUIProvider>
        <style jsx global>
          {`
            :root {
              --font-poppins: ${poppins.style.fontFamily};
            }
          `}
        </style>
        <Component {...pageProps} />
      </NextUIProvider>
    </>
  );
}
