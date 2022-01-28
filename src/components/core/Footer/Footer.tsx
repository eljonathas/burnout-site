import { Button, Container, Flex, Stack, Text } from "@chakra-ui/react";

import { animateScroll } from "react-scroll";

import { FiArrowUp } from "react-icons/fi";

export function Footer() {
  return (
    <Flex as="footer" data-aos="fade">
      <Container maxW="container.xl" py="8">
        <Flex
          w="full"
          direction={{
            base: "column",
            md: "row",
          }}
          align="center"
          justifyContent={{
            base: "flex-start",
            md: "space-between",
          }}
          gap="8"
        >
          <Flex alignItems="center" gap="8">
            <Button
              w="fit-content"
              py="6"
              borderRadius="lg"
              bg="neutral.default"
              _hover={{
                filter: "brightness(95%)",
                bg: "neutral.default",
              }}
              _focus={{
                filter: "brightness(90%)",
                bg: "neutral.default",
              }}
              _active={{
                filter: "brightness(90%)",
                bg: "neutral.default",
              }}
              onClick={() => {
                animateScroll.scrollToTop();
              }}
            >
              <FiArrowUp size={18} />
            </Button>

            <Stack spacing="0">
              <Text fontSize="sm">Volte ao topo</Text>
              <Text fontSize="2xl" fontWeight="bold">
                #semestresse
              </Text>
            </Stack>
          </Flex>
          <Flex alignItems="center">
            <Text
              fontSize="md"
              maxW="lg"
              textAlign={{
                base: "center",
                md: "left",
              }}
            >
              Desenvolvido por <strong>Jonathas Andrade</strong>,{" "}
              <strong>Henrique Silva</strong>, <strong>Caio Gonçalves</strong> e{" "}
              <strong>Jonas Gomes</strong>.
            </Text>
          </Flex>
        </Flex>
      </Container>
    </Flex>
  );
}
