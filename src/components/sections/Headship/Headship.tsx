import { Container, Flex, Image, Stack, Text } from "@chakra-ui/react";
import { scroller } from "react-scroll";

export function Headship() {
  return (
    <Flex id="headship" direction="column">
      <Image
        src="/assets/imgs/wave.svg"
        width="full"
        alt="Wave"
        userSelect="none"
        display={{
          base: "none",
          md: "block",
        }}
      />
      <Flex direction="column" bg="neutral.default">
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
                Responsabilidade da chefia na prevenção e identificação do
                transtorno
              </Text>
              <Flex direction="column" gap="8">
                <Stack>
                  <Text fontWeight="bold" data-aos="fade-up">
                    Prevenção
                  </Text>
                  <Text fontWeight="medium" data-aos="fade-up">
                    Melhorar a comunicação com os funcionários, esclarecendo o
                    objetivo do trabalho e o que se espera como resultado, além
                    do fornecimento, por parte da chefia, de informações
                    suficientes para que o trabalho seja realizado
                    eficientemente. <br />
                    <br />
                    Fornecer suporte para os funcionários, buscando ter
                    conhecimento sobre as suas angústias, necessidades, deixando
                    claro a presença de uma chefia presente e disposta a
                    ajudá-los. <br />
                    <br />
                    Tratar os colaboradores de modo justo e respeitoso, em que
                    as advertências sejam proporcionais às atitudes de cada um,
                    e os funcionários sejam responsabilizados individualmente.
                    <br />
                    <br />
                    Desenvolver um ambiente de trabalho pensado para a
                    experiência do funcionário, com um espaço de produção
                    adequado para cada colaborador e jornadas de trabalho que
                    visem ao menor desgaste dos funcionários possível. <br />
                    <br />
                    Ao ser identificado mudanças radicais de comportamento em
                    relação ao funcionário, dirigi-lo a um profissional da área
                    da saúde, buscando investigar o mais rápido possível o
                    problema.
                  </Text>
                </Stack>
                <Stack>
                  <Text fontWeight="bold" data-aos="fade-up">
                    Identificação
                  </Text>
                  <Text fontWeight="medium" data-aos="fade-up">
                    Estabelecer constante atenção para o comportamento dos
                    funcionários na hora do intervalo, em festas e em
                    confraternizações, buscando identificar comportamentos
                    tímidos e reclusos. <br />
                    <br />
                    Perceber o não desligamento do funcionário do ambiente de
                    trabalho, em que mesmo após a jornada de trabalho o
                    indivíduo continua realizando tarefas relacionadas.
                    <br />
                    <br />
                    Tratar os colaboradores de modo justo e respeitoso, em que
                    as advertências sejam proporcionais às atitudes de cada um,
                    e os funcionários sejam responsabilizados individualmente.
                    <br />
                    <br />
                    Ficar alerta para indícios de desinteresse total por parte
                    do trabalhador em relação às tarefas de trabalho, em que há
                    uma constante postura de desânimo.
                  </Text>
                </Stack>
              </Flex>
              <Flex
                display={{
                  base: "none",
                  md: "flex",
                }}
                align="center"
                gap="4"
                data-aos="fade-up"
                cursor="pointer"
                onClick={() => {
                  scroller.scrollTo("avoid", {
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
            <Flex direction="column" data-aos="fade">
              <Image
                src="/assets/imgs/vigilant.svg"
                width={500}
                height={471}
                alt="Arrow"
              />
            </Flex>
          </Flex>
        </Container>
      </Flex>
    </Flex>
  );
}
