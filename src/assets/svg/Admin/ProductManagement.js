import * as React from "react";

const ProductManagement = (props) => (
  <svg
    width={30}
    height={30}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M14.063 1.758 26.25 7.852v15.234l-12.188 6.079-12.187-6.08V7.853l12.188-6.094Zm9.155 6.68-9.155-4.57-3.53 1.757 9.096 4.6 3.589-1.787Zm-9.155 4.57 3.486-1.729-9.111-4.6-3.53 1.758 9.154 4.57ZM3.75 9.96v11.953l9.375 4.688V14.648L3.75 9.961ZM15 26.6l9.375-4.687V9.961L15 14.648v11.954Z"
      fill={props.fill}
    />
  </svg>
);

export default ProductManagement;
