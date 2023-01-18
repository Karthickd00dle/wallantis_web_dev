import * as React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

export default function BreadCrumbs({ crumbs }) {
  return (
    <Stack spacing={2}>
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" color="primary" />}
        aria-label="breadcrumb"
      >
        {crumbs.map((item, index) => {
          return (
            <Link underline="hover" key={index + 1} onClick={handleClick}>
              {item}
            </Link>
          );
        })}
      </Breadcrumbs>
    </Stack>
  );
}
