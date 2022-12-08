import React, { Component } from "react";
import { Toast } from "service/toast";

export class Pagination extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 0,
    };
  }

  //handle Pagination
  handlePagination = (data, page) => {
    this.setState({ currentPage: page });
    this.props.change(data);
  };

  handlePagination = (direction) => {
    try {
      let { page = 1 } = this.props.pageMeta || {};
      let pageNumber = `${page} ${direction} ${1}`;

      this.props.handleChange(pageNumber);
    } catch (err) {
      Toast({
        type: "error",
        message: err,
      });
    }
  };

  render() {
    let { totalPages = 10, page = 1 } = this.props.pageMeta || {};
    if (totalPages <= 1) {
      return "";
    }
    return (
      <div className="d-flex text-center w-100 justify-content-end pr-4 py-3 pagination">
        <p className="m-0 d-flex align-items-center">
          <button
            className="btn-effect table-left-arrow cursor_pointer_arrow"
            disabled={page === 1}
            onClick={(e) => page !== 1 && this.handlePagination("-")}
          >
            <span className="icon-page-left pr-3" />
            {"<"}
          </button>

          <span>
            {page} of {totalPages}
          </span>

          <button
            className="btn-effect table-right-arrow cursor_pointer_arrow"
            disabled={page === totalPages}
            onClick={(e) => page !== totalPages && this.handlePagination("+")}
          >
            {">"}
            <span className="pl-3 icon-page-right" />
          </button>
        </p>
      </div>
    );
  }
}
