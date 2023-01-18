import * as React from "react";

const Settings = (props) => (
  <svg
    width={30}
    height={30}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12.188 1.875v3.75l-1.876.938L7.5 3.75 3.75 7.5l2.813 2.813-.938 1.874h-3.75v5.626h3.75l.938 1.875L3.75 22.5l3.75 3.75 2.813-2.813 1.874.938v3.75h5.626v-3.75l1.875-.938L22.5 26.25l3.75-3.75-2.813-2.813.938-1.875h3.75v-5.625h-3.75l-.938-1.874L26.25 7.5 22.5 3.75l-2.813 2.813-1.875-.938v-3.75h-5.625Z"
      stroke="#fff"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15 18.75a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5Z"
      stroke="#fff"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default Settings;
