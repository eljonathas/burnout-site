import { FaBars } from "react-icons/fa";
import { scroller } from "react-scroll";

import {
  Button,
  Flex,
  List,
  ListItem,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { MobileNavbarMenu } from "@components/core/MobileNavbarMenu";

export function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex as="nav" align="center" w="full" py="6" position="relative" mb="14">
      <Flex align="center" justify="space-between" w="full">
        <Text
          fontWeight="bold"
          fontSize="1.5rem"
          color="white"
          alignItems="center"
          display="flex"
        >
          BURNOUT
          <Text
            as="span"
            fontSize="sm"
            color="white"
            fontWeight="medium"
            ml="3"
            display={{
              base: "none",
              md: "block",
            }}
          >
            O guia informativo sobre o transtorno
          </Text>
        </Text>

        <Button
          display={{
            md: "none",
          }}
          p="0"
          m="0"
          minW="auto"
          background="transparent"
          onClick={() => {
            onOpen();
          }}
          _hover={{
            bg: "transparent",
          }}
          _focus={{
            bg: "transparent",
          }}
          _active={{
            bg: "transparent",
          }}
        >
          <FaBars size="1.5rem" color="white" />
        </Button>

        <List
          display={{
            base: "none",
            md: "flex",
          }}
          align="center"
          gap="6"
        >
          <ListItem
            cursor="pointer"
            onClick={() => {
              scroller.scrollTo("definition", {
                duration: 500,
                delay: 0,
                smooth: "easeInOutQuart",
              });
            }}
          >
            <Text fontWeight="medium" fontSize="md" color="white">
              Definição
            </Text>
          </ListItem>
          <ListItem
            cursor="pointer"
            onClick={() => {
              scroller.scrollTo("enterprise", {
                duration: 500,
                delay: 0,
                smooth: "easeInOutQuart",
              });
            }}
          >
            <Text fontWeight="medium" fontSize="md" color="white">
              Na empresa
            </Text>
          </ListItem>
          <ListItem
            cursor="pointer"
            onClick={() => {
              scroller.scrollTo("headship", {
                duration: 500,
                offset: 200,
                delay: 0,
                smooth: "easeInOutQuart",
              });
            }}
          >
            <Text fontWeight="medium" fontSize="md" color="white">
              Para a chefia
            </Text>
          </ListItem>
          <ListItem
            cursor="pointer"
            onClick={() => {
              scroller.scrollTo("avoid", {
                duration: 500,
                delay: 0,
                smooth: "easeInOutQuart",
              });
            }}
          >
            <Text fontWeight="medium" fontSize="md" color="white">
              Como evitar
            </Text>
          </ListItem>
          <ListItem
            cursor="pointer"
            onClick={() => {
              scroller.scrollTo("media", {
                duration: 500,
                delay: 0,
                smooth: "easeInOutQuart",
              });
            }}
          >
            <Text fontWeight="medium" fontSize="md" color="white">
              Depoimentos
            </Text>
          </ListItem>
        </List>
      </Flex>

      <MobileNavbarMenu
        right={isOpen ? "-16px" : "-100%"}
        onOpen={onOpen}
        onClose={onClose}
        isOpen={isOpen}
        transition="all 0.3s ease-in-out"
      />
    </Flex>
  );
}
