import * as React from "react";
import { Link } from "react-router-dom";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import ArrowLeftOutlinedIcon from "@mui/icons-material/ArrowLeftOutlined";
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";

const Search = styled("div")(({ theme }) => ({
	position: "relative",
	borderRadius: theme.shape.borderRadius,
	backgroundColor: alpha(theme.palette.common.white, 0.15),
	"&:hover": {
		backgroundColor: alpha(theme.palette.common.white, 0.25),
	},
	marginLeft: 0,
	width: "100%",
	[theme.breakpoints.up("sm")]: {
		marginLeft: theme.spacing(1),
		width: "auto",
	},
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
	padding: theme.spacing(0, 2),
	height: "100%",
	position: "absolute",
	pointerEvents: "none",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
	color: "inherit",
	"& .MuiInputBase-input": {
		padding: theme.spacing(1, 1, 1, 0),
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(4)})`,
		transition: theme.transitions.create("width"),
		width: "100%",
		[theme.breakpoints.up("sm")]: {
			width: "12ch",
			"&:focus": {
				width: "20ch",
			},
		},
	},
}));

export default function SearchAppBar({ page, setPage }) {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static">
				<Toolbar>
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
					<IconButton
						size="large"
						edge="start"
						color="inherit"
						aria-label="open drawer"
						sx={{ p: 1 }}
						component={Link}
						to="/"
					>
						<HomeOutlinedIcon />
					</IconButton>
					<Box sx={{ flexGrow: 1 }} />
					<Search>
						<SearchIconWrapper>
							<SearchIcon />
						</SearchIconWrapper>
						<StyledInputBase
							placeholder="Search Repos"
							inputProps={{ "aria-label": "search" }}
						/>
					</Search>
				</Toolbar>
			</AppBar>
		</Box>
	);
}
