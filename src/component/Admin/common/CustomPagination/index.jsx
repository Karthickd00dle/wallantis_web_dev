import React from 'react';
import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import PropTypes from 'prop-types';

import './custompagination.scss';

/**
 * Pagination: The Common Re-usable Pagination component across website.
 * @return {JSX.Element}
 */

export const Pagination = ({ totalPages, handlePageClick, pageNo }) => {
  const [availablePages, setAvailablePages] = useState(1);

  useEffect(() => {
    if (totalPages !== availablePages && totalPages)
      setAvailablePages(totalPages);
  }, [totalPages, availablePages]);

  if (totalPages === 1 || totalPages === 0) return null;
  return (
    <div className="d-flex justify-content-center pagination">
      <ReactPaginate
        previousLabel="Previous"
        previousClassName="pagination-previous-page"
        previousLinkClassName="pagination-previous-link"
        nextLabel="Next"
        nextClassName="pagination-previous-page"
        nextLinkClassName="pagination-previous-link"
        forcePage={pageNo}
        breakLabel="..."
        breakClassName="pagination-break"
        breakLinkClassName="pagination-break-link"
        pageCount={totalPages}
        marginPagesDisplayed={2}
        pageRangeDisplayed={1}
        itemsPerPage={1}
        disabledClassName="pagination-disable"
        onPageChange={handlePageClick}
        containerClassName={Pagination}
        pageClassName="pagination-inactive-page"
        pageLinkClassName="pagination-inactive-link"
        activeLinkClassName="pagination-active-link"
        activeClassName="pagination-active"
      />
    </div>
  );
};

Pagination.defaultProps = {
  totalPages: 0
};

Pagination.propTypes = {
  totalPages: PropTypes.number,
  pageNo: PropTypes.number.isRequired,
  handlePageClick: PropTypes.func.isRequired
};
