import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Timer = ({ time, value }) => {
	return (
		<Box
			sx={{
				backgroundColor: "#fff",
				p: { md: "1.3rem 2rem", sm: "1rem", xs: "0.5rem" },
				color: "#000",
				borderRadius: "0.5rem",
			}}
		>
			<Typography
				variant="h4"
				sx={{
					fontWeight: 700,
				}}
			>
				{value}
			</Typography>
			<Typography
				variant="body1"
				sx={{
					textTransform: "capitalize",
				}}
			>
				{time}
			</Typography>
		</Box>
	);
};

export default Timer;
