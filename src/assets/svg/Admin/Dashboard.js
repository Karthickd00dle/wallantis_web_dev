import * as React from "react";

const Dashboard = (props) => (
  <svg
    width={30}
    height={30}
    fill="none"
    {...props}
  >
    <g clipPath="url(#a)" fill={props.fill}>
      <path d="m20.983 10.267-4.925 4.841a2.5 2.5 0 1 0 1.175 1.184l4.934-4.842-1.184-1.183Z" />
      <path d="M15 3.542A13.742 13.742 0 0 0 4.5 26.167l.25.291h20.5l.25-.291A13.742 13.742 0 0 0 15 3.541Zm9.45 21.25H5.55a12.025 12.025 0 0 1-2.592-6.534h2.875v-1.666H2.958a12.008 12.008 0 0 1 2.875-7.184l2.042 2.042 1.175-1.175-2.025-2.05a12.008 12.008 0 0 1 7.142-2.983v2.916h1.666V5.25A12.059 12.059 0 0 1 27 16.59h-2.9v1.667h2.942a12.025 12.025 0 0 1-2.592 6.534Z" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h30v30H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default Dashboard;
