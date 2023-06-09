import { extendTheme, theme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

// import "@fontsource/inter"; // yarn add @fontsource/inter
import "@fontsource/inter/100.css";
import "@fontsource/inter/200.css";
import "@fontsource/inter/300.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@fontsource/inter/800.css";
import "@fontsource/inter/900.css";

const overrides = {
  colors: { ...theme.colors, brand: theme.colors.teal }, // main color
  fonts: {
    heading: "Inter, -apple-system, system-ui, sans-serif",
    body: "Inter, -apple-system, system-ui, sans-serif",
  },
  components: {
    Button: {
      // 1. We can update the base styles
      baseStyle: {
        fontWeight: 500, // Normally, it is "semibold"
        borderRadius: "8px",
      },
      // 3. We can add a new visual variant
      variants: {
        // 4. We can override existing variants
        solid: () => ({
          bg: "gray.900",
          color:  "#fff",
          _hover: {
            bg: "#2C2C2C",
            color: "#fff",
          },
          _active: {
            bg: "gray.900",
            color: "#fff",
          },
        }),
        outline: () => ({
          bg: "#141414",
            borderColor: "#727272",
            color:  "#fff",
          _hover: {
            bg: "#141414",
            color: "#fff",
            borderColor: "#fff"
          },
          _active: {
            bg: "#141414",
            borderColor: "#fff",
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
  textStyles: {
    t1: {
      // you can also use responsive styles
      fontSize: '72px',
      fontWeight: '700',
      lineHeight: '86.4px',
    },
    t2: {
      fontSize: '60px',
      fontWeight: '700',
      lineHeight: '72px',
    },
    t3: {
      fontSize: '48px',
      fontWeight: '500',
      lineHeight: '57.6px',
    },
    t4: {
      fontSize: '40px',
      fontWeight: '400',
      lineHeight: '60px',
    },
    t5: {
      fontSize: '32px',
      fontWeight: '400',
      lineHeight: '48px',
    },
    t6: {
      fontSize: '24px',
      fontWeight: '400',
      lineHeight: '36px',
    },
    t7: {
      fontSize: '20px',
      fontWeight: '400',
      lineHeight: '30px',
    },
    t8: {
      fontSize: '16px',
      fontWeight: '400',
      lineHeight: '24px',
    },
    t9: {
      fontSize: '14px',
      fontWeight: '400',
      lineHeight: '21px',
    },
    t10: {
      fontSize: '12px',
      fontWeight: '400',
      lineHeight: '18px',
    },
    t11: {
      fontSize: '10px',
      fontWeight: '400',
      lineHeight: '14px',
    },
  },
};

export default extendTheme(overrides);
