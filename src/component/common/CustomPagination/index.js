import * as React from "react";
import { styled } from "@mui/material/styles";
import Pagination from "@mui/material/Pagination";
import "./style.scss";

const StyledPagination = styled((props) => (
  <Pagination disableRipple {...props} />
))(() => ({
  "& .MuiButtonBase-root.Mui-selected": {
    backgroundColor: "#FFFFFF",
    color: "#1890FF",
    borderColor: "#1890FF",
  },
}));

export function CustomPagination({
  pageCount,
  currentPage,
  onChange,
  className,
}) {
  return (
    <div className={`d-flex justify-content-center mt-3 ${className}`}>
      <StyledPagination
        className="pagination-style"
        count={pageCount}
        variant="outlined"
        shape="rounded"
        page={currentPage}
        onChange={onChange}
      />
    </div>
  );
}
