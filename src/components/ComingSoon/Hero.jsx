import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import CountDown from "../../components/ComingSoon/Countdown";
import WaitlistForm from "./WaitlistForm";

const Hero = () => {
	return (
		<Box
			sx={{
				maxWidth: "37rem",
				textAlign: "center",
				mt: "5rem",
			}}
		>
			<Typography
				variant="h3"
				sx={{
					fontWeight: 700,
					textTransform: "uppercase",
					mb: "1rem",
				}}
				gutterBottom
			>
				somthing awesome is coming soon
			</Typography>
			<Typography
				variant="body1"
				sx={{
					mb: "1rem",
					fontWeight: 300,
				}}
				gutterBottom
			>
				Your all-in-on affiliate marketing tracking software{" "}
				<strong>track, automate</strong> and <strong>optimize</strong> your
				campaigns.
			</Typography>

			<Box sx={{ mb: "2rem" }}>
				<CountDown />
			</Box>

			<Box sx={{ display: "flex", justifyContent: "center" }}>
				<WaitlistForm />
			</Box>
		</Box>
	);
};

export default Hero;
