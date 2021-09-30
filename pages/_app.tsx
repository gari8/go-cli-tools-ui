import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { RecoilRoot } from "recoil";

const theme = extendTheme({
  colors: {
    brand: {
      primary: "#00ACD7",
      main: "#2DBCAF",
      secondary: "#E5E5E5",
    },
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </RecoilRoot>
  );
}

export default MyApp;
