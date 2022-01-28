import { useEffect } from "react";
import type { AppProps } from "next/app";

import aos from "aos";

import { ChakraProvider } from "@chakra-ui/react";

import { theme } from "@shared/theme";

import "aos/dist/aos.css";
import "@shared/styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    aos.init({
      once: true,
      duration: 500,
      easing: "ease",
    });
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
