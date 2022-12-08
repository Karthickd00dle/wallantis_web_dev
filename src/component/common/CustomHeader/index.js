import React from "react";
import "./navbar.scss";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { history } from "service/helpers";
import {
  conditionalLoad,
  getUserDetailsBasedToken,
} from "service/helperFunctions";

const Theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#FFFFFF",
    },
  },
});

export const CustomHeader = () => {
  const [optionItems, setoptionItems] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setoptionItems(event.currentTarget);
  };

  const handleCloseUserMenu = (changeUrl, titleLabel) => {
    setoptionItems(null);
    if (titleLabel === "Logout") {
      localStorage.clear();
    }
    conditionalLoad(changeUrl, history.push(changeUrl));
  };

  const userDetails = getUserDetailsBasedToken();
  const { name: userName } = userDetails;

  return (
    <ThemeProvider theme={Theme}>
      <AppBar className="navbar-appbar" position="fixed">
        <Container maxWidth="xxl">
          <Toolbar disableGutters>
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "flex" } }} />
            <div className="d-flex align-items-center">
              <Box
                sx={{
                  flexGrow: 0,
                  display: "flex",
                  flexDirection: "column",
                  marginBottom: "2px",
                  padding: "8px",
                }}
              >
                <label className="user-name my-2">{userName}</label>
                <label className="user-access">Access:</label>
              </Box>
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Profile Picture">
                  <IconButton sx={{ p: 0 }}>
                    <Avatar className="avatar" alt="Sharp" />
                  </IconButton>
                </Tooltip>
                <Tooltip title="More Options">
                  <IconButton sx={{ p: 1 }}>
                    <ExpandMoreRoundedIcon
                      className="expand-icon"
                      height={100}
                      width={100}
                      onClick={handleOpenUserMenu}
                    />
                  </IconButton>
                </Tooltip>
                <Menu
                  className="listed-menu"
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={optionItems}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(optionItems)}
                  onClose={handleCloseUserMenu}
                >
                  <MenuItem>
                    <label></label>
                  </MenuItem>
                </Menu>
              </Box>
            </div>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
};
