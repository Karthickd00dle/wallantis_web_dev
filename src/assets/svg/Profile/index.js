import * as React from "react";

export const DeleteItemIcon = (props) => (
  <svg width={14} height={18} fill="none" {...props}>
    <path
      d="M1 16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4H1v12ZM14 1h-3.5l-1-1h-5l-1 1H0v2h14V1Z"
      fill="#F14C54"
    />
  </svg>
);

export const CheckboxChecked = (props) => (
  <svg width={24} height={24} fill="none" {...props}>
    <rect width={24} height={24} rx={2} fill="#2A71F9" />
    <path
      d="m6.578 12.203 3.281 3.281 6.563-7.03"
      stroke="#fff"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const RadioUnchecked = (props) => (
  <svg width={24} height={24} fill="none" {...props}>
    <circle cx={12} cy={12} r={11.5} stroke="#ABABAB" />
  </svg>
);

export const RadioChecked = (props) => (
  <svg width={24} height={24} fill="none" {...props}>
    <circle cx={12} cy={12} r={7} fill="#2A71F9" />
    <circle cx={12} cy={12} r={11.5} stroke="#2A71F9" />
  </svg>
);

export const LocationUnchecked = (props) => (
  <svg width={24} height={24} fill="none" {...props}>
    <circle cx={12} cy={12} r={11.5} stroke="#19AA60" />
  </svg>
);

export const LocationChecked = (props) => (
  <svg width={24} height={24} fill="none" {...props}>
    <circle cx={12} cy={12} r={7} fill="#19AA60" />
    <circle cx={12} cy={12} r={11.5} stroke="#19AA60" />
  </svg>
);
