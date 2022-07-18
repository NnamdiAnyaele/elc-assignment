import * as React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import logo from "../../assets/icons/metricks-white.png";

const appBarStyles = {
	backgroundColor: "#1e0040",
};

export default function ButtonAppBar() {
	const [anchorEl, setAnchorEl] = React.useState(null);

	const isMenuOpen = Boolean(anchorEl);

	const handleMenuClose = () => {
		setAnchorEl(null);
	};

	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static" elevation={0} sx={appBarStyles}>
				<Toolbar>
					<IconButton
						size="large"
						edge="start"
						color="inherit"
						aria-label="menu"
						sx={{ mr: 2, display: "flex", flexDirection: "column" }}
					>
						<Box sx={{ height: "1.5rem" }}>
							<img
								src={logo}
								height="100%"
								width="100%"
								alt="Smart Deals Logo"
							/>
						</Box>
						<Typography
							variant="body2"
							color="inherit"
							sx={{ textTransform: "uppercase", fontWeight: 700 }}
						>
							metricks
						</Typography>
					</IconButton>
					<Box sx={{ flexGrow: 1 }} />
					<Box sx={{ display: { xs: "none", md: "flex" } }}>
						<Button
							color="inherit"
							variant="text"
							component={Link}
							to="/about-us"
							sx={{ fontSize: "0.8rem" }}
						>
							about us
						</Button>
						<Button
							color="inherit"
							variant="text"
							component={Link}
							to="/blog"
							sx={{ fontSize: "0.8rem", m: "0 1.5rem" }}
						>
							blog
						</Button>
						<Button
							variant="contained"
							component={Link}
							to="/contact-us"
							sx={{
								fontSize: "0.8rem",
								backgroundColor: "#271AC1",
								p: "0.7rem 1.7rem",
								borderRadius: "1.5rem",
							}}
						>
							contact us
						</Button>
					</Box>

					<Box sx={{ display: { xs: "flex", md: "none" } }}>
						<IconButton
							color="inherit"
							onClick={(e) => setAnchorEl(e.currentTarget)}
						>
							<MenuIcon />
						</IconButton>
					</Box>
				</Toolbar>
			</AppBar>
			<Menu
				id="basic-menu"
				anchorEl={anchorEl}
				open={isMenuOpen}
				onClose={handleMenuClose}
				MenuListProps={{
					"aria-labelledby": "basic-button",
				}}
			>
				<MenuItem
					component={Link}
					sx={{ textTransform: "capitalize" }}
					to="/about-us"
				>
					about us
				</MenuItem>
				<MenuItem
					component={Link}
					sx={{ textTransform: "capitalize" }}
					to="/blog"
				>
					blog
				</MenuItem>
				<MenuItem
					component={Link}
					sx={{ textTransform: "capitalize" }}
					to="/contact-us"
				>
					contact us
				</MenuItem>
			</Menu>
		</Box>
	);
}
