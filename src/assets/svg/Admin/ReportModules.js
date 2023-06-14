import * as React from "react";

const ReportModules = (props) => (
  <svg width={30} height={30}  {...props}>
    <path
      d="M9.375 16.875h7.5v1.875h-7.5v-1.875Zm0-4.688h11.25v1.876H9.375v-1.876Zm0 9.376h4.688v1.875H9.375v-1.875Z"
      fill={props.fill}
    />
    <path
      d="M23.438 4.688h-2.813V3.75a1.875 1.875 0 0 0-1.875-1.875h-7.5A1.875 1.875 0 0 0 9.375 3.75v.938H6.562a1.875 1.875 0 0 0-1.875 1.875V26.25a1.875 1.875 0 0 0 1.875 1.875h16.875a1.875 1.875 0 0 0 1.875-1.875V6.562a1.875 1.875 0 0 0-1.875-1.875ZM11.25 3.75h7.5V7.5h-7.5V3.75Zm12.188 22.5H6.563V6.562h2.812v2.813h11.25V6.562h2.813V26.25Z"
      fill={props.fill}
    />
  </svg>
);

export default ReportModules;
