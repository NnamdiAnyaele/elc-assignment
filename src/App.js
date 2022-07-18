import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import customTheme from "./config/themeConfig";
import BaseRoutes from "./views/routes/BaseRoutes";

function App() {
	return (
		<ThemeProvider theme={customTheme}>
			<CssBaseline />
			<div className="App">
				<BaseRoutes />
			</div>
		</ThemeProvider>
	);
}

export default App;
