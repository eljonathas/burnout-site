import Image from "next/image";
import { Container, Flex, Text, Box } from "@chakra-ui/react";
import { scroller } from "react-scroll";

export function Enterprise() {
  return (
    <Flex id="enterprise" direction="column">
      <Container
        maxW="container.xl"
        py={{
          base: "16",
          md: "24",
        }}
        mb="8"
      >
        <Flex
          direction={{
            base: "column-reverse",
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
          <Flex direction="column" data-aos="fade">
            <Image
              src="/assets/imgs/finances.svg"
              width={520}
              height={471}
              alt="Arrow"
            />
          </Flex>
          <Flex direction="column" flex="1">
            <Text
              color="primary.default"
              fontSize={{
                base: "2rem",
                md: "2.25rem",
              }}
              fontWeight="bold"
              mb="4"
              data-aos="fade"
            >
              O que a sua empresa pode fazer para prevenir o transtorno entre os
              colaboradores?
            </Text>
            <Flex direction="column" gap="8">
              <Flex align="center" gap="8" data-aos="fade-up">
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  w="12"
                  h="12"
                  flexShrink="0"
                  bg="primary.default"
                  color="white"
                  fontWeight="bold"
                  rounded="full"
                  fontSize="xl"
                >
                  1
                </Box>
                <Text fontWeight="medium">
                  Defina objetivo alcançáveis e com curto prazo: é fundamental
                  que as metas da empresa sejam viáveis e que se efetivem num
                  período curto, evitando, assim, grandes desgastes e pressão
                  demasiada
                </Text>
              </Flex>
              <Flex align="center" gap="8" data-aos="fade-up">
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  w="12"
                  h="12"
                  flexShrink="0"
                  bg="primary.default"
                  color="white"
                  fontWeight="bold"
                  rounded="full"
                  fontSize="xl"
                >
                  2
                </Box>
                <Text fontWeight="medium">
                  Organizar happy hours: essa é uma das dicas de como evitar a
                  Síndrome de Burnout nas empresas que a sua equipe vai amar!
                  Sempre que possível, programe um momento de descontração fora
                  do ambiente de trabalho com os agentes que compõem seu grupo.
                  Essa prática também fortalece o espírito de equipe e o
                  relacionamento interpessoal
                </Text>
              </Flex>
              <Flex align="center" gap="8" data-aos="fade-up">
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  w="12"
                  h="12"
                  flexShrink="0"
                  bg="primary.default"
                  color="white"
                  fontWeight="bold"
                  rounded="full"
                  fontSize="xl"
                >
                  3
                </Box>
                <Text fontWeight="medium">
                  Valorize o trabalho da equipe:{" "}
                  <strong>reconheça o desempenho</strong> de cada integrante do
                  grupo, ressaltando suas qualidades. Não tem nada melhor do que
                  ter seu trabalho valorizado. E lembre-se: reconhecimento não
                  está relacionado apenas com aumento salarial
                </Text>
              </Flex>
              <Flex align="center" gap="8" data-aos="fade-up">
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  w="12"
                  h="12"
                  flexShrink="0"
                  bg="primary.default"
                  color="white"
                  fontWeight="bold"
                  rounded="full"
                  fontSize="xl"
                >
                  4
                </Box>
                <Text fontWeight="medium">
                  Promova reuniões semanais para discutir os desafios e os
                  resultados: uma boa prática, muito indicada para empresas que
                  buscam melhorar seus climas organizacionais, é a promoção de
                  reuniões semanais. Nelas, as equipes se reúnem para discutir
                  os resultados e os desafios do trabalho cotidiano, reforçando
                  a união entre os colaboradores
                </Text>
              </Flex>

              <Flex
                display={{
                  base: "none",
                  md: "flex",
                }}
                gap="4"
                data-aos="fade-up"
                cursor="pointer"
                onClick={() => {
                  scroller.scrollTo("headship", {
                    duration: 500,
                    delay: 0,
                    offset: 200,
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
          </Flex>
        </Flex>
      </Container>
    </Flex>
  );
}
