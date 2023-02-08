import * as React from "react";

const Chatmessage1 = (props) => (
  <svg width={151} height={151} fill="none" {...props}>
    <g filter="url(#a)">
      <g filter="url(#b)">
        <circle cx={75.5} cy={71.5} r={50.5} fill="#2A71F9" />
      </g>
      <path
        d="M75.904 46.744c-13.857 0-25.138 9.867-25.138 21.996 0 12.129 11.28 21.995 25.138 21.995a28.279 28.279 0 0 0 7.667-1.068l8.688 5.53a1.57 1.57 0 0 0 2.42-1.32V83.304a20.425 20.425 0 0 0 6.284-14.564c.079-12.13-11.202-21.996-25.06-21.996ZM88.473 68.74a1.57 1.57 0 0 1-1.571 1.57H64.906a1.57 1.57 0 1 1 0-3.141h21.996a1.57 1.57 0 0 1 1.57 1.57Zm-5.106 7.855a1.571 1.571 0 0 1-1.571 1.571H70.012a1.571 1.571 0 0 1 0-3.142h11.784a1.571 1.571 0 0 1 1.57 1.571Zm-19.592-15.71a1.57 1.57 0 0 1 1.571-1.572h21.116a1.571 1.571 0 0 1 0 3.142H65.346a1.571 1.571 0 0 1-1.571-1.57Z"
        fill="#fff"
      />
    </g>
    <defs>
      <filter
        id="a"
        x={0}
        y={0}
        width={151}
        height={151}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy={4} />
        <feGaussianBlur stdDeviation={12.5} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0.901961 0 0 0 0 0.756863 0 0 0 0 0.337255 0 0 0 0.32 0" />
        <feBlend
          in2="BackgroundImageFix"
          result="effect1_dropShadow_1668_42183"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_1668_42183"
          result="shape"
        />
      </filter>
      <filter
        id="b"
        x={19.05}
        y={15.75}
        width={112.9}
        height={112.9}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy={0.7} />
        <feGaussianBlur stdDeviation={2.975} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.17 0" />
        <feBlend
          in2="BackgroundImageFix"
          result="effect1_dropShadow_1668_42183"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_1668_42183"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export default Chatmessage1;
