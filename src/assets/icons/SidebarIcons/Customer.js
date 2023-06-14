import * as React from "react";

const Customer = (props) => (
  <svg
    width={30}
    height={30}
    fill={props.fill}
    
    {...props}
  >
    <path
      d="M28.125 28.125H26.25v-4.688a4.693 4.693 0 0 0-4.688-4.687v-1.875a6.57 6.57 0 0 1 6.563 6.563v4.687Zm-7.5 0H18.75v-4.688a4.693 4.693 0 0 0-4.688-4.687H8.439a4.693 4.693 0 0 0-4.688 4.688v4.687H1.875v-4.688a6.57 6.57 0 0 1 6.563-6.562h5.624a6.57 6.57 0 0 1 6.563 6.563v4.687ZM18.75 1.875V3.75a4.688 4.688 0 0 1 0 9.375V15a6.563 6.563 0 1 0 0-13.125Zm-7.5 1.875a4.687 4.687 0 1 1 0 9.374 4.687 4.687 0 0 1 0-9.374Zm0-1.875a6.562 6.562 0 1 0 0 13.125 6.562 6.562 0 0 0 0-13.125Z"
      fill="#fff"
    />
  </svg>
);

export default Customer;
