import * as React from "react";

const LeadManagement = (props) => (
  <svg
    width={30}
    height={30}
    fill={props.fill}
    
    {...props}
  >
    <path
      d="M20 13.75v-10H10v7.5H2.5v15h25v-12.5H20Zm-7.5-7.5h5v17.5h-5V6.25ZM5 13.75h5v10H5v-10Zm20 10h-5v-7.5h5v7.5Z"
      fill={props.fill}
    />
  </svg>
);

export default LeadManagement;
