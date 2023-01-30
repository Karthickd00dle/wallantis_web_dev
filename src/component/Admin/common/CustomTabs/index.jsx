import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import { styled } from "@mui/material/styles";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const StyledTabs = styled((props) => (
  <Tabs
    {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
))({
  "& .MuiTabs-indicator": {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#000000",
  },
  "& .MuiTabs-indicatorSpan": {
    width: "100%",
    backgroundColor: "#FF8C6D",
  },
});

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: "none",
    minWidth: 0,
    [theme.breakpoints.up("sm")]: {
      minWidth: 0,
    },
    fontWeight: 700,
    marginRight: theme.spacing(1),
    color: "#000000",
    fontFamily: ["Lato", "sans-serif"].join(","),
    fontSize: "16px",
    "&.Mui-selected": {
      color: "#000000",
      fontWeight: 700,
    },
    "&.Mui-focusVisible": {
      backgroundColor: "#d1eaff",
    },
  })
);

export function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ pt: 5 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

export default function CustomTabs({ tabLabel, value, onChange, children }) {
  return (
    <Box className={"p-5"} sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <StyledTabs value={value} onChange={onChange}>
          {tabLabel?.map((data) => (
            <StyledTab label={data} />
          ))}
        </StyledTabs>
      </Box>
      {children}
    </Box>
  );
}
