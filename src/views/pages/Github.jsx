import axios from "axios";
import Box from "@mui/material/Box";

import Navbar from "../../components/Github/Navbar";
import RepoComponents from "../../components/Github/RepoComponent";

const Github = () => {
	return (
		<div>
			<Navbar />
			<Box
				sx={{ p: { xs: "1rem" }, display: "flex", justifyContent: "center" }}
			>
				<RepoComponents />
			</Box>
		</div>
	);
};

export default Github;
