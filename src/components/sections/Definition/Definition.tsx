import Image from "next/image";

import { Container, Flex, Text } from "@chakra-ui/react";
import { scroller } from "react-scroll";

export function Defition() {
  return (
    <Flex id="definition" direction="column">
      <Container
        maxW="container.xl"
        py={{
          base: "16",
          md: "24",
        }}
      >
        <Flex
          direction={{
            base: "column",
            md: "row",
          }}
          align={{
            base: "flex-start",
            md: "center",
          }}
          gridGap={{
            base: "16",
            md: "24",
          }}
        >
          <Flex direction="column" flex="1" data-aos="fade">
            <Text
              color="primary.default"
              fontSize={{
                base: "2rem",
                md: "2.25rem",
              }}
              fontWeight="bold"
              mb="4"
            >
              Você sabe o que é burnout?
            </Text>
            <Text color="black" fontSize="1rem" fontWeight="medium" mb="8">
              Conhecida como síndrome do esgotamento profissional, é um
              distúrbio psíquico caracterizado pelo estado de tensão emocional e
              estresse crônico provocado por condições de trabalho físicas,
              emocionais e psicológicas desgastantes. Suas características mais
              marcantes são negatividade constante, sentimentos de fracasso,
              sentimento de incapacidade, insegurança, cansaço físico e mental
              em excesso, dificuldade para se concentrar em atividades diárias
              do trabalho, insatisfação sobre aquilo que faz, alterações de
              humor e memória.
            </Text>
            <Flex
              display={{
                base: "none",
                md: "flex",
              }}
              gap="4"
              cursor="pointer"
              onClick={() => {
                scroller.scrollTo("enterprise", {
                  duration: 500,
                  delay: 0,
                  smooth: "easeInOutQuart",
                });
              }}
            >
              <Image
                src="/assets/imgs/arrow-yellow.svg"
                alt="Arrow"
                width={100}
                height={20}
              />

              <Text color="secondary.default" fontWeight="semibold">
                Ir para próxima guia
              </Text>
            </Flex>
          </Flex>
          <Flex flex="1" justify="flex-end" data-aos="fade">
            <Image
              src="/assets/imgs/mountain.svg"
              alt="Mountain"
              width={520}
              height={471}
              objectFit="contain"
            />
          </Flex>
        </Flex>
      </Container>
    </Flex>
  );
}
