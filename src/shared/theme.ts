import { extendTheme } from "@chakra-ui/react";

const colors = {
  primary: {
    default: "#FF3D68",
    dark: "#B82848",
  },
  secondary: {
    default: "#FFB61D",
  },
  neutral: {
    default: "#F2F2F2",
  },
};

export const fonts = {
  body: "Poppins, sans-serif",
};

export const theme = extendTheme({
  colors,
  fonts,
});
