import * as React from "react";
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import InputBase from "@mui/material/InputBase";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import "./style.scss";
import { BellIcon, SearchIcon } from "assets/svg/Admin/Header";
import { Avatar, Badge, IconButton } from "@mui/material";
import Notification from "component/Admin/Notification";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "#F3F3F3",
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
      width: "40ch",
    },
  },
}));

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: 0,
    top: 5,
    border: `2px solid #C5CAFF`,
    backgroundColor: "#DCDEF9",
    display: "flex",
    alignItems: "center",
    width: 1,
  },
}));

export default function CustomHeader() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [notification, setNotification] = React.useState(null);
  const openNotification = Boolean(notification);
  const handleNotification = (event) => {
    setNotification(event.currentTarget);
  };
  const handleNotificationClose = () => {
    setNotification(null);
  };

  return (
    <>
      <AppBar className="px-3" position="static">
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase placeholder="Search" />
          </Search>
          <div className="d-flex align-items-center">
            <IconButton
              id="notification-button"
              aria-controls={openNotification ? "notification-list" : undefined}
              aria-expanded={openNotification ? "true" : undefined}
              aria-haspopup="true"
              onClick={handleNotification}
              aria-label="notification"
            >
              <StyledBadge badgeContent={4}>
                <BellIcon />
              </StyledBadge>
            </IconButton>
            <div className="d-flex align-items-center">
              <Avatar
                sx={{ marginLeft: "30px", width: "40px", height: "40px" }}
                src="/broken-image.jpg"
              />
              <label className="ps-2 admin-name-label">Admin User</label>
              <div className="expand-menu-icon-button">
                <IconButton
                  aria-label="more"
                  id="long-button"
                  aria-controls={open ? "long-menu" : undefined}
                  aria-expanded={open ? "true" : undefined}
                  aria-haspopup="true"
                  onClick={handleClick}
                  style={{ padding: 0 }}
                >
                  <ArrowDropDownIcon />
                </IconButton>
                <Menu
                  id="long-menu"
                  MenuListProps={{
                    "aria-labelledby": "long-button",
                  }}
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  PaperProps={{
                    style: {
                      width: "20ch",
                    },
                  }}
                >
                  <MenuItem onClick={handleClose}>Hello</MenuItem>
                </Menu>
              </div>
            </div>
          </div>
        </Toolbar>
      </AppBar>
      <Notification
        handleClose={handleNotificationClose}
        open={openNotification}
        anchorEl={notification}
      />
    </>
  );
}
