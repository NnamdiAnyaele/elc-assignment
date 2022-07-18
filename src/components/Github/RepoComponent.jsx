import { differenceInDays } from "date-fns";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

import { numberToKFormatter } from "../../utils/helpers";

const RepoComponent = ({ repo }) => {
	return (
		<Paper sx={{ p: "0.5rem", mb: "1rem", display: "flex" }} elevation={1}>
			<Box sx={{ height: "100%", width: "5.5rem", mr: "1rem" }}>
				<img
					src={repo?.owner?.avatar_url}
					alt="task"
					height="100%"
					width="100%"
					style={{ objectFit: "cover" }}
				/>
			</Box>

			<Box>
				<Typography
					variant="h6"
					gutterBottom
					sx={{ textTransform: "capitalize", fontWeight: "bold" }}
				>
					{repo.name}
				</Typography>
				<Typography
					variant="body2"
					gutterBottom
					sx={{ textTransform: "capitalize" }}
				>
					{repo.description}
				</Typography>
				<Box sx={{ display: "flex" }}>
					<Typography
						variant="body1"
						gutterBottom
						sx={{ border: "1px solid #000", p: "0.2rem", mr: "0.5rem" }}
					>
						{`Stars: ${numberToKFormatter(repo.stargazers_count)}`}
					</Typography>
					<Typography
						variant="body1"
						gutterBottom
						sx={{ border: "1px solid #000", p: "0.2rem", mr: "0.5rem" }}
					>
						{`Issues: ${numberToKFormatter(repo.open_issues_count)}`}
					</Typography>
					<Typography variant="body1" gutterBottom>
						{`Submitted ${differenceInDays(
							new Date(),
							new Date(repo.created_at)
						)} days ago by ${repo?.owner?.login}`}
					</Typography>
				</Box>
			</Box>
		</Paper>
	);
};

export default RepoComponent;
