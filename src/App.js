import { ToastContainer } from "react-toastify";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import customTheme from "./config/themeConfig";
import BaseRoutes from "./views/routes/BaseRoutes";
import "react-toastify/dist/ReactToastify.css";

function App() {
	return (
		<ThemeProvider theme={customTheme}>
			<CssBaseline />
			<ToastContainer />
			<div className="App">
				<BaseRoutes />
			</div>
		</ThemeProvider>
	);
}

export default App;
