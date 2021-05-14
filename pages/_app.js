import { ChakraProvider } from "@chakra-ui/react";
import "../styles/globals.css";
import theme from "./theme";

import Navbar from "./components/Navbar";

function MyApp({ Component, pageProps }) {
	return (
		<ChakraProvider theme={theme}>
			<Navbar></Navbar>
			<Component {...pageProps} />
		</ChakraProvider>
	);
}

export default MyApp;
