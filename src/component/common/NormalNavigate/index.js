import { Link } from "@mui/material";
import React from "react";
import { useLocation } from "react-router-dom";
import { conditionalLoad } from "service/helperFunctions";
import { history } from "service/helpers";
import "./style.scss";

const NavigateHistory = ({ data, index, paramSize, arrowStyle, linkStyle }) => {
  return (
    <>
      <Link
        key={index}
        sx={{ textTransform: "capitalize" }}
        className={`
         ${linkStyle}`}
        href={data.replace(" ", "-")}
        underline="hover"
        onClick={() => history.push(data.replace(" ", "-"))}
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

  const { children, arrowStyle, linkStyle } = props;
  return (
    <>
      <div>
        {paramPath.map((val, index) => (
          <>
            <NavigateHistory
              arrowStyle={arrowStyle}
              linkStyle={linkStyle}
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
