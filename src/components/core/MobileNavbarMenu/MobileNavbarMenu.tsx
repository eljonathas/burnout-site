import {
  FlexProps,
  List,
  ListItem,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { scroller } from "react-scroll";

type MobileNavbarMenuProps = FlexProps & {
  isOpen: boolean;
  onOpen: (isOpen: boolean) => void;
  onClose: () => void;
};

export function MobileNavbarMenu({
  onOpen,
  isOpen,
  onClose,
  ...rest
}: MobileNavbarMenuProps) {
  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose} {...rest}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerHeader
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          w="full"
        >
          Navegue pelo menu{" "}
          <DrawerCloseButton position="relative" top="0" right="0" />
        </DrawerHeader>
        <DrawerBody>
          <List display="flex" spacing="6" flexDir="column">
            <ListItem
              fontWeight="medium"
              onClick={() => {
                onClose();
                scroller.scrollTo("definition", {
                  duration: 500,
                  delay: 0,
                  smooth: "easeInOutQuart",
                });
              }}
            >
              Definição
            </ListItem>
            <ListItem
              fontWeight="medium"
              onClick={() => {
                onClose();
                scroller.scrollTo("enterprise", {
                  duration: 500,
                  delay: 0,
                  smooth: "easeInOutQuart",
                });
              }}
            >
              Na empresa
            </ListItem>
            <ListItem
              fontWeight="medium"
              onClick={() => {
                onClose();
                scroller.scrollTo("headship", {
                  duration: 500,
                  delay: 0,
                  smooth: "easeInOutQuart",
                });
              }}
            >
              Para a chefia
            </ListItem>
            <ListItem
              fontWeight="medium"
              onClick={() => {
                onClose();
                scroller.scrollTo("avoid", {
                  duration: 500,
                  delay: 0,
                  smooth: "easeInOutQuart",
                });
              }}
            >
              Como evitar
            </ListItem>
            <ListItem
              fontWeight="medium"
              onClick={() => {
                onClose();
                scroller.scrollTo("media", {
                  duration: 500,
                  delay: 0,
                  smooth: "easeInOutQuart",
                });
              }}
            >
              Depoimentos
            </ListItem>
          </List>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}
