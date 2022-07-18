import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import ArrowLeftOutlinedIcon from "@mui/icons-material/ArrowLeftOutlined";
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";
import IconButton from "@mui/material/IconButton";

import Navbar from "../../components/Github/Navbar";
import RepoComponents from "../../components/Github/RepoComponent";
import { getTrendingRepos } from "../../api/github";
import { getDateXDaysAgo, newDateFormatter } from "../../utils/helpers";

const lastMonth = getDateXDaysAgo(30);

const Github = () => {
	const [page, setPage] = useState(1);
	const [repos, setRepos] = useState([]);
	const [loading, setLoading] = useState(false);
	const [searchTerm, setSearchTerm] = useState("");
	const [displayedRepos, setDisplayedRepos] = useState([]);

	useEffect(() => {
		if (repos.length) {
			let filtered = [...repos];
			if (searchTerm) {
				filtered = filtered.filter((item) => {
					return item.name?.toLowerCase().includes(searchTerm.toLowerCase());
				});
			}
			setDisplayedRepos(filtered);
		}
	}, [searchTerm, repos]);

	useEffect(() => {
		if (!loading && repos.length) {
			setDisplayedRepos(repos);
		}
	}, [repos, loading]);

	useEffect(() => {
		let isMounted = true;

		//	get all Repos
		(async () => {
			try {
				setLoading(true);
				const result = await getTrendingRepos(
					page,
					newDateFormatter(lastMonth)
				);
				if (isMounted) {
					setRepos(result?.items);
					setLoading(false);
				}
			} catch (error) {
				setLoading(false);
				if (error.response) {
					toast.error(error.response.data.message);
				} else if (error.request) {
					toast.error("Internal Server Error");
				} else {
					toast.error("Error", error.message);
				}
			}
		})();

		return () => {
			isMounted = false;
		};
	}, [page]);

	return (
		<div>
			<Navbar
				page={page}
				setPage={setPage}
				searchTerm={searchTerm}
				setSearchTerm={setSearchTerm}
			/>
			<Box
				sx={{ p: { xs: "1rem" }, display: "flex", justifyContent: "center" }}
			>
				{!loading && (
					<Box>
						<Typography
							variant="h4"
							component="h1"
							gutterBottom
							align="center"
							sx={{
								fontWeight: "bold",
								textTransform: "capitalize",
								textDecoration: "underline",
							}}
						>
							Trending Repos
						</Typography>
						<Typography variant="body1" gutterBottom align="right">
							Current Page: {page}
						</Typography>
						{displayedRepos.map((item) => (
							<Box key={item.id}>
								<RepoComponents repo={item} />
							</Box>
						))}

						<Box sx={{ mt: "2rem", display: "flex", justifyContent: "center" }}>
							<Box sx={{ mr: 2 }}>
								<IconButton
									size="large"
									edge="start"
									color="inherit"
									aria-label="open drawer"
									sx={{ p: 1 }}
									disabled={page === 1}
									onClick={() => setPage(page - 1)}
								>
									<ArrowLeftOutlinedIcon />
								</IconButton>
								<IconButton
									size="large"
									edge="start"
									color="inherit"
									aria-label="open drawer"
									sx={{ p: 1 }}
									onClick={() => setPage(page + 1)}
								>
									<ArrowRightOutlinedIcon />
								</IconButton>
							</Box>

							<Typography variant="body1" gutterBottom align="right">
								Current Page: {page}
							</Typography>
						</Box>
					</Box>
				)}

				{loading && (
					<Box
						sx={{
							display: "flex",
							justifyContent: "center",
							width: "100%",
							marginTop: "2rem",
						}}
					>
						<CircularProgress size="2rem" />
					</Box>
				)}
			</Box>
		</div>
	);
};

export default Github;
