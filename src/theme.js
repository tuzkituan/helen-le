import { extendTheme, theme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

// import "@fontsource/inter"; // yarn add @fontsource/inter
import "@fontsource/inter";

const overrides = {
  colors: { ...theme.colors, brand: theme.colors.teal }, // main color
  // fonts: {
  //   heading: "Inter, -apple-system, system-ui, sans-serif",
  //   body: "Inter, -apple-system, system-ui, sans-serif",
  // },
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
  },
};

export default extendTheme(overrides);
