import Image from "next/image";

import { Container, Flex, Text, Grid } from "@chakra-ui/react";

export function Avoid() {
  return (
    <Flex id="avoid" direction="column">
      <Container
        maxW="container.xl"
        py={{
          base: "16",
          md: "24",
        }}
      >
        <Text
          maxW="container.md"
          textAlign="center"
          mx="auto"
          color="primary.default"
          fontSize={{
            base: "2rem",
            md: "2.25rem",
          }}
          fontWeight="bold"
          mb="8"
          data-aos="fade"
        >
          Quais ações devem ser tomadas para evitar e controlar o transtorno no
          ambiente de trabalho?
        </Text>
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            md: "repeat(3, 1fr)",
          }}
          gridGap="8"
          mb="8"
        >
          <Flex direction="column" gap="2" data-aos="fade">
            <Text color="primary.default" fontWeight="bold" fontSize="1.5rem">
              Permita que as pessoas recarreguem
            </Text>
            <Text fontWeight="medium">
              Todo mundo merece um descanso após um longo dia de trabalho, não é
              mesmo? Ajude seus colaboradores a desconectarem do trabalho, após
              o fim do expediente. Mensagens no whatsapp fora do horário de
              trabalho, demandas de última hora ao final do dia, entre outras
              ações que impedem o descanso, devem ser evitadas. Ajude-os a se
              conectarem com suas famílias e seus momentos de lazer, pois isso
              terá, certamente, um impacto positivo na vida laboral e pessoal
              deles, sem contar que será muito importante para que percebam o
              valor que cada um tem como pessoa para a instituição.
            </Text>
          </Flex>
          <Flex direction="column" gap="2" data-aos="fade" data-aos-delay="200">
            <Text color="primary.default" fontWeight="bold" fontSize="1.5rem">
              O poder do autocuidado é maior do que você imagina
            </Text>
            <Text fontWeight="medium">
              Criar uma cultura de cuidado pessoal é uma boa alternativa para
              diminuição do Burnout, em vez de esperar que as pessoas se
              esgotem, é melhor encorajá-las ao autocuidado e fornecer canais
              para que possam buscar ajuda precoce, antes de chegarem no estágio
              de exaustão. Conversar com os colaboradores, entender os
              problemas, até mesmo pessoais e profissionais é muito importante
              para identificar os primeiros sinais de burnout e depressão, por
              exemplo.
            </Text>
          </Flex>
          <Flex direction="column" gap="2" data-aos="fade" data-aos-delay="400">
            <Text color="primary.default" fontWeight="bold" fontSize="1.5rem">
              Devolva o controle para o colaborador
            </Text>
            <Text fontWeight="medium">
              Quando é identificado um crescimento no nível de estresse de um
              colaborador, permitir pequenas flexibilizações na carga horária de
              trabalho e oferta de autonomia ao trabalhador sobre como
              gerenciá-la pode aumentar seus níveis de bem-estar e sensação de
              controle sobre as suas tarefas. Para a saúde mental dos
              colaboradores, essa flexibilização é de extrema importância,
              portanto, deixe que eles tenham mais liberdade quanto aos
              horários, sem tantas cobranças. Confie nas tarefas e nas
              habilidades que cada um tem.
            </Text>
          </Flex>
        </Grid>
        <Flex justifyContent="center" data-aos="fade">
          <Image
            src="/assets/imgs/relax.svg"
            alt="Relax"
            width={620}
            height={471}
            objectFit="contain"
          />
        </Flex>
      </Container>
    </Flex>
  );
}
