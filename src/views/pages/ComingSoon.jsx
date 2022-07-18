import Box from "@mui/material/Box";
import Navbar from "../../components/common/Navbar";
import Hero from "../../components/ComingSoon/Hero";
import Footer from "../../components/common/Footer";

const ComingSoons = () => {
	return (
		<Box
			sx={{
				backgroundColor: "#1e0040",
				color: "#fff",
				minHeight: "100vh",
				p: { md: "1rem 3rem 0 3rem", xs: 0 },
				position: "relative",
				overflow: "hidden",
			}}
		>
			<Navbar />

			<Box
				sx={{
					display: "flex",
					justifyContent: "center",
					mb: { md: "3rem", xs: "1rem" },
				}}
			>
				<Hero />
			</Box>

			<Footer />
			<Box
				sx={{
					position: "absolute",
					aspectRatio: "1 !important",
					width: "85rem !important",
					borderRadius: "50%",
					bottom: "-72rem",
					left: "50%",
					transform: "translateX(-50%)",
					backgroundColor: "#ffffff1a",
				}}
			/>
		</Box>
	);
};

export default ComingSoons;
