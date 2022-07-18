import { BrowserRouter, Route, Routes } from "react-router-dom";
import ComingSoons from "../pages/ComingSoon";

const BaseRoute = () => (
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<ComingSoons />} />
		</Routes>
	</BrowserRouter>
);

export default BaseRoute;
