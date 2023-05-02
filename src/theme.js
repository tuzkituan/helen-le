import { extendTheme, theme } from "@chakra-ui/react";

import "@fontsource/inter"; // yarn add @fontsource/inter

const overrides = {
  colors: { ...theme.colors, brand: theme.colors.red }, // main color
  fonts: {
    heading: "Inter, -apple-system, system-ui, sans-serif",
    body: "Inter, -apple-system, system-ui, sans-serif",
  },
  components: {
    Button: {
      // 1. We can update the base styles
      baseStyle: {
        fontWeight: 700, // Normally, it is "semibold"
        borderRadius: "8px",
      },
      // 3. We can add a new visual variant
      variants: {
        // 4. We can override existing variants
        solid: (props) => ({
          bg: props.colorMode === "dark" ? "#fff" : "gray.900",
          color: props.colorMode === "dark" ? "gray.900" : "#fff",
          _hover: {
            bg: props.colorMode === "dark" ? "#fff" : "gray.900",
            color: props.colorMode === "dark" ? "gray.900" : "#fff",
          },
          _active: {
            bg: props.colorMode === "dark" ? "#fff" : "gray.900",
            color: props.colorMode === "dark" ? "gray.900" : "#fff",
          },
        }),
      },
      // 6. We can overwrite defaultProps
      defaultProps: {
        size: "lg", // default is md
        variant: "solid", // default is solid
        colorScheme: "orange", // default is gray,
      },
    },
    Divider: {
      baseStyle: {
        borderColor: '#C7C7C7'
      }
    }
  },
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
};

export default extendTheme(overrides);
