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

export const ArchBackground = (props) => (
  <svg width={929} height={378} fill="none" {...props}>
    <g filter="url(#a)">
      <path
        fill="#FFF8F0"
        d="M20.38 1.321c-.317 46.627 11.076 89.21 33.448 132.397 22.372 43.186 55.317 82.456 96.929 115.541 41.612 33.084 91.065 59.325 145.499 77.204 54.434 17.88 112.768 27.044 171.628 26.961 58.86-.082 117.078-9.409 171.286-27.44 54.208-18.032 103.331-44.411 144.527-77.611 41.196-33.2 73.647-72.562 95.477-115.81C901.003 89.315 911.813 46.7 910.91.075L462.211.702l-441.83.62Z"
      />
    </g>
    <defs>
      <filter
        id="a"
        width={958.586}
        height={421.352}
        x={-13.625}
        y={-33.926}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feGaussianBlur in="BackgroundImageFix" stdDeviation={17} />
        <feComposite
          in2="SourceAlpha"
          operator="in"
          result="effect1_backgroundBlur_1108_27718"
        />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy={4} />
        <feGaussianBlur stdDeviation={10} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0.976471 0 0 0 0 0.976471 0 0 0 0 0.976471 0 0 0 1 0" />
        <feBlend
          in2="effect1_backgroundBlur_1108_27718"
          result="effect2_dropShadow_1108_27718"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect2_dropShadow_1108_27718"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);
