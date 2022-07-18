import { BrowserRouter, Route, Routes } from "react-router-dom";
import ComingSoon from "../pages/ComingSoon";
import Github from "../pages/Github";

const BaseRoute = () => (
	<BrowserRouter>
		<Routes>
			<Route path="/github" element={<Github />} />
			<Route path="/" element={<ComingSoon />} />
		</Routes>
	</BrowserRouter>
);

export default BaseRoute;
