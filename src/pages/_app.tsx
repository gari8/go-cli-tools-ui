import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const colors = {
  brand: {},
};

const theme = extendTheme({ colors });

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
