import { Box, Container, Flex, Stack, Text } from "@chakra-ui/react";
import { useState } from "react";

import Youtube from "react-youtube";

export function Media() {
  const [videoPlaying, setVideoPlaying] = useState(false);

  return (
    <Flex id="media" direction="column" overflow="hidden">
      <Container
        borderTop="1px solid"
        borderBottom="1px solid"
        borderColor="gray.200"
        maxW="container.xl"
        py={{
          base: "16",
          md: "24",
        }}
      >
        <Box
          w="full"
          h="full"
          bg="black"
          left="0"
          top="0"
          position="absolute"
          opacity={videoPlaying ? "0.9" : "0"}
          visibility={videoPlaying ? "visible" : "hidden"}
          transition="all 500ms ease-in-out"
          zIndex="5"
        />
        <Flex direction="column" gap="8" mb="16" position="relative">
          <Text
            color="primary.default"
            fontSize="2rem"
            fontWeight="bold"
            maxW="container.md"
            textAlign="center"
            mx="auto"
            data-aos="fade"
          >
            Assista o depoimento de quem já passou pelo transtorno
          </Text>
          <Box
            as={Youtube}
            videoId="EDFsTPcckwA"
            borderRadius="xl"
            position="relative"
            w="full"
            h={{
              base: "md",
              md: "xl",
            }}
            data-aos="zoom-out"
            zIndex={20}
            onPlay={() => setVideoPlaying(true)}
            onPause={() => setVideoPlaying(false)}
          />
          <Text
            color="white"
            fontWeight="semibold"
            position="absolute"
            bottom={{
              base: "-70px",
              md: "-50px",
            }}
            left="50%"
            transform="translateX(-50%)"
            zIndex="10"
            visibility={videoPlaying ? "visible" : "hidden"}
            textAlign={{
              base: "center",
              md: "left",
            }}
          >
            Pause o vídeo para clarear
          </Text>
        </Flex>
        <Flex
          direction={{
            base: "column",
            md: "row",
          }}
          align="flex-start"
          gap={{
            base: "8",
            md: "16",
          }}
        >
          <Text
            fontSize="2rem"
            fontWeight="bold"
            color="primary.default"
            flex="1"
            data-aos="fade"
          >
            Recursos informativos adicionais sobre o transtorno:
          </Text>

          <Flex flex="1">
            <Flex
              direction="column"
              bg="neutral.default"
              borderRadius="xl"
              p="8"
            >
              <Stack
                borderBottom="1px solid"
                borderColor="gray.300"
                pb="4"
                spacing="1"
              >
                <Text
                  as="a"
                  href="https://forbes.com.br/principal/2020/04/7-iniciativas-de-empresas-para-apoiar-os-colaboradores-em-meio-a-pandemia-do-coronavirus/#foto5"
                  target="_blank"
                  fontWeight="semibold"
                  data-aos="fade-up"
                >
                  7 iniciativas de empresas para apoiar os colaboradores em meio
                  à pandemia do coronavírus
                </Text>
                <Text fontSize="sm" data-aos="fade-up">
                  Fonte: Forbes
                </Text>
              </Stack>
              <Stack
                borderBottom="1px solid"
                borderColor="gray.300"
                py="4"
                spacing="1"
              >
                <Text
                  as="a"
                  href="https://www.cnnbrasil.com.br/business/maioria-dos-trabalhadores-essenciais-diz-nao-ter-atencao-correta-das-empresas/#:~:text=Para%20a%20maioria%20dos%20profissionais,durante%20a%20pandemia%20at%C3%A9%20aqui."
                  target="_blank"
                  fontWeight="semibold"
                  data-aos="fade-up"
                >
                  Maioria dos trabalhadores essenciais diz não ter atenção
                  correta das empresas
                </Text>
                <Text fontSize="sm" data-aos="fade-up">
                  Fonte: CNN
                </Text>
              </Stack>
              <Stack
                borderBottom="1px solid"
                borderColor="gray.300"
                py="4"
                spacing="1"
              >
                <Text
                  as="a"
                  href="https://www.cnnbrasil.com.br/saude/entenda-a-sindrome-de-burnout-reconhecida-como-fenomeno-ocupacional-pela-oms/"
                  target="_blank"
                  fontWeight="semibold"
                  data-aos="fade-up"
                >
                  Entenda a síndrome de Burnout, reconhecida como fenômeno
                  ocupacional pela OMS
                </Text>
                <Text fontSize="sm" data-aos="fade-up">
                  Fonte: CNN
                </Text>
              </Stack>
              <Stack pt="4" spacing="1">
                <Text
                  as="a"
                  href="https://g1.globo.com/sp/presidente-prudente-regiao/blog/psicoblog/post/2022/01/24/burnout-e-o-esgotamento-no-trabalho.ghtml"
                  target="_blank"
                  fontWeight="semibold"
                  data-aos="fade-up"
                >
                  Burnout e o esgotamento no trabalho
                </Text>
                <Text fontSize="sm" data-aos="fade-up">
                  Fonte: G1
                </Text>
              </Stack>
            </Flex>
          </Flex>
        </Flex>
      </Container>
    </Flex>
  );
}
