import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

const RepoComponent = () => {
	return (
		<Paper sx={{ p: "0.5rem", mb: "1rem", display: "flex" }} elevation={1}>
			<Box sx={{ height: "100%", width: "5.5rem", mr: "1rem" }}>
				<img
					src="https://picsum.photos/200"
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
					tensoflow
				</Typography>
				<Typography
					variant="body1"
					gutterBottom
					sx={{ textTransform: "capitalize" }}
				>
					an open source machine learning platform for tensorflow.org
				</Typography>
				<Box sx={{ display: "flex" }}>
					<Typography
						variant="body1"
						gutterBottom
						sx={{ border: "1px solid #000", p: "0.2rem", mr: "0.5rem" }}
					>
						Stars: 118k
					</Typography>
					<Typography
						variant="body1"
						gutterBottom
						sx={{ border: "1px solid #000", p: "0.2rem", mr: "0.5rem" }}
					>
						Issues: 118k
					</Typography>
					<Typography variant="body1" gutterBottom>
						Submitted 30 days ago
					</Typography>
				</Box>
			</Box>
		</Paper>
	);
};

export default RepoComponent;
