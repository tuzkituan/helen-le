import { extendTheme, theme } from '@chakra-ui/react';

import '@fontsource/inter'; // yarn add @fontsource/inter

const overrides = {
  colors: { ...theme.colors, brand: theme.colors.red }, // main color
  fonts: {
    heading: 'Inter, -apple-system, system-ui, sans-serif',
    body: 'Inter, -apple-system, system-ui, sans-serif',
  },
  components: {
    Button: {
      // 1. We can update the base styles
      baseStyle: {
        fontWeight: 700, // Normally, it is "semibold"
        borderRadius: '8px'
      },
      // 3. We can add a new visual variant
      variants: {
        // 4. We can override existing variants
        solid: (props) => ({
          bg: props.colorMode === 'dark' ? 'white' : 'black',
          color: props.colorMode === 'dark' ? 'black' : 'white',
        }),
      },
      // 6. We can overwrite defaultProps
      defaultProps: {
        size: 'lg', // default is md
        variant: 'solid', // default is solid
        colorScheme: 'orange', // default is gray,
      },
    },
  },
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
};

export default extendTheme(overrides);