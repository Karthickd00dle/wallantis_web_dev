import { Link } from "@mui/material";
import { historyNavigation } from "config";
import React from "react";
import { useLocation } from "react-router-dom";
import { conditionalLoad } from "service/helperFunctions";
import { history } from "service/helpers";
import "./style.scss";

const NavigateHistory = ({ data, index, paramSize, arrowStyle, linkStyle }) => {
  const routehistory = historyNavigation.filter(
    ({ label }) => label === data.replace(" ", "-")
  );
  return (
    <>
      <Link
        key={index}
        sx={{ textTransform: "capitalize" }}
        className={`
         ${linkStyle} cursor-pointer`}
        underline="hover"
        onClick={() => history.push(routehistory[0].route_to)}
      >
        {data}
      </Link>
      {conditionalLoad(
        index < paramSize - 1,
        <label className={`px-1 ${arrowStyle}`}>{`>`}</label>
      )}
    </>
  );
};

export const NormalNavigate = (props) => {
  let location = useLocation();
  let param = location.pathname.split("/").slice(1);
  let paramPath = param.map((d) => {
    if (d !== "") return `${d.replace("-", " ")}`;
  });

  const { children, arrowStyle, linkStyle, navigationStyle } = props;
  return (
    <>
      <div className={`navigation ${navigationStyle}`}>
        {paramPath.map((val, index) => (
          <>
            <NavigateHistory
              arrowStyle={`style-arrow ${arrowStyle}`}
              linkStyle={`style-link ${linkStyle}`}
              data={val}
              index={index}
              paramSize={param.length}
            />
          </>
        ))}

        {children}
      </div>
    </>
  );
};
