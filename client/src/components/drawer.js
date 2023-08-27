import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import GroupsIcon from "@mui/icons-material/Groups";
import HistoryIcon from "@mui/icons-material/History";
// Icon
import HomeIcon from "@mui/icons-material/Home";
import MenuIcon from "@mui/icons-material/Menu";
import SavingsIcon from "@mui/icons-material/Savings";
import WorkIcon from "@mui/icons-material/Work";
import { Avatar, Button, Menu, MenuItem, Typography } from "@mui/material";
import MuiAppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import {
	createTheme,
	styled,
	ThemeProvider,
	useTheme,
} from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
	shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
	transition: theme.transitions.create(["margin", "width"], {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	...(open && {
		width: `calc(100% - ${drawerWidth}px)`,
		marginLeft: `${drawerWidth}px`,
		transition: theme.transitions.create(["margin", "width"], {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen,
		}),
	}),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
	display: "flex",
	alignItems: "center",
	padding: theme.spacing(0, 1),
	...theme.mixins.toolbar,
	justifyContent: "flex-end",
}));

const darkTheme = createTheme({
	palette: {
		mode: "dark",
		primary: {
			main: "#1976d2",
		},
	},
});

export default function ZisDrawer() {
	const { data: session } = useSession();
	const theme = useTheme();
	const [open, setOpen] = React.useState(false);
	const [anchorElUser, setAnchorElUser] = React.useState(null);

	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};

	const handleOpenUserMenu = (event) => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};

	const handleItemClick = (text) => {
		if (text === "Home") {
			window.location.href = "/";
		} else {
			window.location.href = `/contents/${text
				.toLowerCase()
				.replace(" ", "-")}`;
		}
	};

	return (
		<ThemeProvider theme={darkTheme}>
			<CssBaseline />
			<AppBar position="fixed" open={open}>
				<Toolbar>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						onClick={handleDrawerOpen}
						edge="start"
					>
						<MenuIcon />
					</IconButton>
					<Typography
						variant="h6"
						noWrap
						component="a"
						href="/"
						sx={{
							marginRight: 2,
							display: { xs: "none", md: "flex" },
							fontFamily: "monospace",
							fontWeight: 700,
							letterSpacing: ".3rem",
							color: "inherit",
							textDecoration: "none",
						}}
					>
						Computer Science 66
					</Typography>

					{session ? (
						<Box sx={{ flexGrow: 0 }}>
							<IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
								<Avatar alt="Profile" src={session.user.image} />
							</IconButton>
							<Menu
								id="menu-appbar"
								anchorEl={anchorElUser}
								anchorOrigin={{
									vertical: "top",
									horizontal: "right",
								}}
								keepMounted
								transformOrigin={{
									vertical: "top",
									horizontal: "right",
								}}
								open={Boolean(anchorElUser)}
								onClose={handleCloseUserMenu}
							>
								<MenuItem onClick={handleCloseUserMenu}></MenuItem>
								<MenuItem onClick={() => signOut()}>Sign Out</MenuItem>
							</Menu>
						</Box>
					) : (
						<Button color="inherit" onClick={() => signIn()}>
							Login
						</Button>
					)}
				</Toolbar>
			</AppBar>
			<Drawer
				sx={{
					width: drawerWidth,
					flexShrink: 0,
					"& .MuiDrawer-paper": {
						width: drawerWidth,
						boxSizing: "border-box",
					},
				}}
				variant="persistent"
				anchor="left"
				open={open}
			>
				<DrawerHeader>
					<IconButton onClick={handleDrawerClose}>
						{theme.direction === "ltr" ? (
							<ChevronLeftIcon />
						) : (
							<ChevronRightIcon />
						)}
					</IconButton>
				</DrawerHeader>
				<Divider />
				<List>
					{["Home", "ToDo"].map((text, index) => (
						<ListItem key={text} disablePadding sx={{ display: "block" }}>
							<ListItemButton
								sx={{
									minHeight: 48,
									justifyContent: open ? "initial" : "center",
									px: 2.5,
								}}
								onClick={() => handleItemClick(text)}
							>
								<ListItemIcon
									sx={{
										minWidth: 0,
										mr: open ? 3 : "auto",
										justifyContent: "center",
									}}
								>
									{index % 2 === 0 ? <HomeIcon /> : <WorkIcon />}
								</ListItemIcon>
								<ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
							</ListItemButton>
						</ListItem>
					))}
				</List>
				<Divider />
				<List>
					{["Leader", "Finance", "History", "About"].map((text, index) => (
						<ListItem key={text} disablePadding sx={{ display: "block" }}>
							<ListItemButton
								sx={{
									minHeight: 48,
									justifyContent: open ? "initial" : "center",
									px: 2.5,
								}}
								onClick={() => handleItemClick(text)}
							>
								<ListItemIcon
									sx={{
										minWidth: 0,
										mr: open ? 4 : "auto",
										justifyContent: "center",
									}}
								>
									{index % 4 === 0 ? (
										<AccountCircleIcon />
									) : index % 4 === 1 ? (
										<SavingsIcon />
									) : index % 4 === 2 ? (
										<HistoryIcon />
									) : (
										<GroupsIcon />
									)}
								</ListItemIcon>
								<ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
							</ListItemButton>
						</ListItem>
					))}
				</List>
			</Drawer>
		</ThemeProvider>
	);
}
