import { ChakraProvider } from "@chakra-ui/react";
import "../styles/globals.css";
import "../styles/nprogress.css";
import theme from "../theme/theme";
import Router from "next/router";
import Link from "next/link";
import Head from "next/head";
import NProgress from "nprogress";
import Navbar from "../components/Navbar";
import { DefaultSeo } from "next-seo";

Router.events.on("routeChangeStart", (url) => {
  console.log(`Loading: ${url}`);
  NProgress.start();
});
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <DefaultSeo
        titleTemplate="Maanav Dalal | %s"
        defaultTitle="Maanav Dalal"
        description="Program Manager at Microsoft. Frontend developer and design enthusiast with a focus on user experience. Committed to growth both personally and professionally."
        canonical="https://www.maanavdalal.com/"
        openGraph={{
          url: "https://www.maanavdalal.com/",
          title: "Maanav Dalal",
          description:
            "Program Manager at Microsoft. Frontend developer and design enthusiast with a focus on user experience. Committed to growth both personally and professionally.",
          images: [
            {
              url: "https://i.ibb.co/hyCwDWf/Web-Splash.png",
              width: 600,
              height: 600,
              alt: "Maanav Dalal",
            },
          ],
        }}
      />
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/icons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/icons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/icons/favicon-16x16.png"
        />
        <link rel="manifest" href="/icons/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/icons/safari-pinned-tab.svg"
          color="#004255"
        />
        <link rel="shortcut icon" href="/icons/favicon.ico" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-config" content="/icons/browserconfig.xml" />
        <meta name="theme-color" content="#3182CE" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <Navbar></Navbar>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
