import React from "react";
import { useMemo } from "react";
import { Table } from "react-bootstrap";
import PropTypes from "prop-types";

import { Pagination } from "../Pagination";
import "./tableWrapper.scss";

export function TableWrapper({
  isLoading,
  children,
  headers = [],
  handleSort,
  handlePageClick,
  pageMetaData,
}) {
  const totalPages = useMemo(() => {
    if (typeof pageMetaData?.totalPages === "undefined") return 1;

    return pageMetaData.totalPages;
  }, [pageMetaData.totalPages]);

  return (
    <>
      <Table responsive className="custom-table-wrapper">
        <thead className="custom-table-header">
          <tr>
            {headers.map(({ label, isSortable }) => (
              <th key={label}>
                <div className="d-flex align-items-center">
                  <span>{label}</span>
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="custom-table-body">
          {children}

          {isLoading && (
            <div className="table-loader=">
              <div className="lds-spinner">
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
              </div>
              <span className="text-white">Loading ...</span>
            </div>
          )}
        </tbody>
      </Table>
      <div className="table-pagination">
        {/* <div className="d-flex align-items-center">
          <p>Showing</p>
          <input type="text" value={10} />
          <p>Details</p>
        </div> */}
        <div className="ms-auto">
          <Pagination
            totalPages={totalPages}
            handlePageClick={handlePageClick}
            pageNo={1}
          />
        </div>
      </div>
    </>
  );
}

TableWrapper.propTypes = {
  isLoading: PropTypes.bool,
  children: PropTypes.node.isRequired,
  handleSort: PropTypes.func,
  headers: PropTypes.shape([PropTypes.string]).isRequired,
  handlePageClick: PropTypes.func,
  pageMetaData: PropTypes.shape({
    total: PropTypes.number,
    totalPages: PropTypes.number,
    page: PropTypes.string,
    chunk: PropTypes.string,
  }),
};

TableWrapper.defaultProps = {
  isLoading: false,
  handleSort: () => null,
  handlePageClick: () => null,
  pageMetaData: {},
};
