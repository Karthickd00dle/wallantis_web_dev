import * as React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";

export default function StarRating() {
  const [value, setValue] = React.useState(2);

  return (
    <Box>
      <Rating
        name="custom-no-value"
        sx={{
          "& .MuiRating-iconFilled": {
            color: "#FFD900",
            fontSize: "2rem",
            borderRadius: "3rem",
          },
          "& .MuiRating-iconEmpty": {
            fontSize: "2rem",
            color: "#D9D9D9",
            borderRadius: "3rem",
          },
          "& .MuiRating-iconHover": {
            color: "#FFD900",
            fontSize: "2rem",
            borderRadius: "3rem",
          },
        }}
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
    </Box>
  );
}
