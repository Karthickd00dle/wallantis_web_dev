import React from "react";
import { styled, alpha } from "@mui/material/styles";
import Menu from "@mui/material/Menu";
import { IconButton } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CustomButton } from "..";

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 350,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",

    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

export default function CustomMenuButton(props) {
  const {
    label,
    children,
    toggleMenu,
    isNormalButton,
    isIconButton,
    setToggleMenu,
    PaperProps,
    menuStyle,
    ...restProps
  } = props;
  const open = Boolean(toggleMenu);
  const handleClick = (event) => {
    setToggleMenu(event.currentTarget);
  };
  const handleClose = () => {
    setToggleMenu(null);
  };

  return (
    <div>
      {isNormalButton && (
        <CustomButton
          {...restProps}
          onClick={handleClick}
          id="demo-customized-button"
          aria-controls={open ? "demo-customized-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
        >
          {label}
        </CustomButton>
      )}
      {isIconButton && (
        <IconButton
          sx={{ padding: 0 }}
          aria-label="more"
          id="demo-customized-button"
          aria-controls={open ? "demo-customized-menu" : undefined}
          aria-expanded={open ? "true" : undefined}
          aria-haspopup="true"
          onClick={handleClick}
        >
          <MoreVertIcon />
        </IconButton>
      )}
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          "aria-labelledby": "demo-customized-button",
        }}
        anchorEl={toggleMenu}
        open={open}
        onClose={handleClose}
        className={`${menuStyle}`}
        PaperProps={PaperProps}
      >
        {children}
      </StyledMenu>
    </div>
  );
}
