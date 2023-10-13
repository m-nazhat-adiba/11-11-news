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
