import { extendTheme } from "@chakra-ui/react";
const config = {
	initialColorMode: "light",
	useSystemColorMode: true,
	shadows: {
		outline: "#3182CE",
	},
};
const theme = extendTheme({ config });
export default theme;
