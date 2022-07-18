import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import InputBase from "@mui/material/InputBase";
import Button from "@mui/material/Button";

const Email = styled("div")(({ theme }) => ({
	position: "relative",
	borderRadius: "1.6rem",
	backgroundColor: "#FAFAFA",
	"&:hover": {
		backgroundColor: "#FAFAFA",
	},
	width: "100%",
	display: "flex",
	border: "1px solid #1e0040",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
	color: "#000",
	"& .MuiInputBase-input": {
		padding: theme.spacing(1.7, 0, 1.7, 4),
		transition: theme.transitions.create("width"),
	},
	"&::placeholder": {
		color: "#000 !important",
	},
	width: "50%",
}));

const WaitListForm = () => {
	return (
		<Box
			component="form"
			noValidate
			autoComplete="off"
			sx={{ width: "100%", mb: "2rem" }}
		>
			<Box
				sx={{
					display: "flex",
					justifyContent: "Center",
				}}
			>
				<Grid container spacing={4} sx={{ mb: "2rem", width: { md: "80%" } }}>
					<Grid item xs={6} md={6}>
						<TextField
							id="firstname"
							label="First Name..."
							placeholder="First Name..."
							variant="standard"
							sx={{
								label: {
									color: "#707070 !important",
								},
								"&::placeholder": {
									color: "#707070 !important",
								},
								input: {
									color: "#707070 !important",
									borderBottom: "2px solid #473A5D !important",
									"&:focus": {
										color: "#707070 !important",
										borderBottom: "2px solid #473A5D !important",
									},
								},
							}}
							fullWidth
						/>
					</Grid>
					<Grid item xs={6} md={6}>
						<TextField
							id="lastname"
							label="Last Name..."
							placeholder="Last Name..."
							variant="standard"
							sx={{
								label: {
									color: "#707070 !important",
								},
								"&::placeholder": {
									color: "#707070 !important",
								},
								input: {
									color: "#707070 !important",
									borderBottom: "2px solid #473A5D !important",
									"&:focus": {
										color: "#707070 !important",
										borderBottom: "2px solid #473A5D !important",
									},
								},
							}}
							fullWidth
						/>
					</Grid>
				</Grid>
			</Box>

			<Email>
				<StyledInputBase
					placeholder="Enter your email address…"
					inputProps={{ "aria-label": "email" }}
				/>
				<Button
					variant="contained"
					sx={{
						fontSize: "0.8rem",
						borderRadius: "1.6rem",
						marginLeft: "auto",
						backgroundColor: "#271AC1",
						mt: "-0.1rem",
						mb: "-0.1rem",
						pl: "2.5rem",
						pr: "2.5rem",
					}}
				>
					join our waiting list
				</Button>
			</Email>
		</Box>
	);
};

export default WaitListForm;
