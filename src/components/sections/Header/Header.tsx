import Image from "next/image";

import { scroller } from "react-scroll";

import { Container, Flex, Text } from "@chakra-ui/react";

import { Navbar } from "@components/core/Navbar";

export function Header() {
  return (
    <Flex
      id="header"
      w="full"
      bgGradient="linear(to-b, primary.default, primary.dark)"
      overflow="hidden"
      height="fit-content"
    >
      <Container maxW="container.xl" mb="24">
        <Navbar />

        <Flex
          direction={{
            base: "column",
            md: "row-reverse",
          }}
          gap="16"
          align="center"
        >
          <Flex flex="1" data-aos="fade">
            <Image
              alt="Header illustration"
              src="/assets/imgs/header.svg"
              width={673}
              height={578}
              objectFit="contain"
            />
          </Flex>

          <Flex direction="column" gap="4" flex="1" data-aos="fade">
            <Text
              fontSize={{
                base: "2rem",
                md: "3rem",
              }}
              fontWeight="bold"
              color="white"
              lineHeight="shorter"
            >
              É hora de pegar leve e respeitar os limites de seus colaboradores.
            </Text>
            <Text
              fontSize={{
                base: "md",
                md: "xl",
              }}
              fontWeight="normal"
              color="white"
              mb="4"
            >
              Deixe de fazê-los perder a cabeça com o trabalho excessivo,
              aprenda mais sobre o transtorno do século e como previní-lo no
              ambiente de trabalho.
            </Text>

            <Flex
              gap="4"
              cursor="pointer"
              onClick={() => {
                scroller.scrollTo("definition", {
                  duration: 500,
                  delay: 0,
                  smooth: "easeInOutQuart",
                });
              }}
            >
              <Image
                src="/assets/imgs/arrow-white.svg"
                alt="Arrow"
                width={100}
                height={20}
              />

              <Text fontWeight="semibold" color="white">
                Clique para iniciar
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Container>
    </Flex>
  );
}
