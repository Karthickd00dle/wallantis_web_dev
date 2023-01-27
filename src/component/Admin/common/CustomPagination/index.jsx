import * as React from "react";
import Pagination from "@mui/material/Pagination";
import "./style.scss";

export default function CustomPagination({ pageCount, currentPage, onChange }) {
  return (
    <div className="d-flex justify-content-center">
      <Pagination
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
