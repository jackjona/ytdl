import { ChakraProvider, theme } from '@chakra-ui/react';
import Navbar from './Navbar';
import Main from './Main';
import Footer from './Footer';

export const App = () => (
  <ChakraProvider theme={theme}>
    <Navbar />
    <Main />
    <Footer />
  </ChakraProvider>
);
