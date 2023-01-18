import * as React from "react";
const LeadIconSVGComponent = (props) => (
  <svg
    width={30}
    height={30}
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M20 13.75V3.75H10V11.25H2.5V26.25H27.5V13.75H20ZM12.5 6.25H17.5V23.75H12.5V6.25ZM5 13.75H10V23.75H5V13.75ZM25 23.75H20V16.25H25V23.75Z"
      fill={props.fill}
    />
  </svg>
);
export default LeadIconSVGComponent;
