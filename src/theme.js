import { extendTheme, theme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

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
        // fontWeight: 700, // Normally, it is "semibold"
        borderRadius: "8px",
      },
      // 3. We can add a new visual variant
      variants: {
        // 4. We can override existing variants
        solid: () => ({
          bg: "gray.900",
          color:  "#fff",
          _hover: {
            bg: "gray.900",
            color: "#fff",
          },
          _active: {
            bg: "gray.900",
            color: "#fff",
          },
        }),
      },
      // 6. We can overwrite defaultProps
      defaultProps: {
        size: "lg", // default is md
        variant: "solid", // default is solid
        // colorScheme: "gray", // default is gray,
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
  styles: {
    global: (props) => ({
      body: {
        fontFamily: 'body',
        color: mode('#141414', 'whiteAlpha.900')(props),
        bg: mode('white', 'gray.800')(props),
        lineHeight: 'base',
      },
    }),
  },
};

export default extendTheme(overrides);
