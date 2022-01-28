import type { NextPage } from "next";
import Head from "next/head";

import { Flex } from "@chakra-ui/react";
import { Header } from "@components/sections/Header";
import { Defition } from "@components/sections/Definition";
import { Enterprise } from "@components/sections/Enterprise";
import { Headship } from "@components/sections/Headship";
import { Avoid } from "@components/sections/Avoid";
import { Media } from "@components/sections/Media";
import { Footer } from "@components/core/Footer";

const Home: NextPage = () => {
  return (
    <Flex minH="100vh" w="full" direction="column">
      <Head>
        <title>Burnout - O guia informativo sobre o transtorno</title>
      </Head>

      <Header />
      <Defition />
      <Enterprise />
      <Headship />
      <Avoid />
      <Media />
      <Footer />
    </Flex>
  );
};

export default Home;
