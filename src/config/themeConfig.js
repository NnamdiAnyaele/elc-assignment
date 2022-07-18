import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

const customTheme = createTheme({
	palette: {
		type: "light",
		primary: {
			main: "#1e0040",
			dark: "#002564",
			light: "#360073",
		},
		secondary: {
			light: "#3a2be3",
			main: "#271AC1",
			dark: "#19117e",
		},
		error: {
			main: red[800],
		},
	},
	status: {
		danger: red[500],
	},
	typography: {
		fontFamily: "Montserrat, sans-serif, 'Digital-7 Mono'",
	},
});

export default customTheme;
