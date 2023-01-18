import * as React from "react";
const ProductManagementSVGComponent = (props) => (
  <svg
    width={30}
    height={30}
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M14.0625 1.75781L26.25 7.85156V23.0859L14.0625 29.165L1.875 23.0859V7.85156L14.0625 1.75781ZM23.2178 8.4375L14.0625 3.86719L10.5322 5.625L19.6289 10.2246L23.2178 8.4375ZM14.0625 13.0078L17.5488 11.2793L8.4375 6.67969L4.90723 8.4375L14.0625 13.0078ZM3.75 9.96094V21.9141L13.125 26.6016V14.6484L3.75 9.96094ZM15 26.6016L24.375 21.9141V9.96094L15 14.6484V26.6016Z"
      fill={props.fill}
    />
  </svg>
);
export default ProductManagementSVGComponent;
