import { extendTheme } from "@chakra-ui/react";
const config = {
	initialColorMode: "light",
	useSystemColorMode: true,
	shadows: {
		outline: "#47c7c1",
	},
};
const theme = extendTheme({ config });
export default theme;
