import * as React from "react";

const Ecofriendly = (props) => (
  <svg width={240} height={240} fill="none" {...props}>
    <g filter="url(#a)">
      <circle cx={120} cy={116} r={100} fill="#fff" />
    </g>
    <g clipPath="url(#b)">
      <path
        d="M119.998 166c27.614 0 50-22.386 50-50s-22.386-50-50-50-50 22.386-50 50 22.386 50 50 50Z"
        fill="#E6C156"
      />
      <path
        d="M128.236 95.174c-4.475 0-8.084 3.59-8.211 8.094h.009c1.191.696 4.298 1.014 6.964.979 2.667-.031 4.94-.3 4.94-.3 1.435-.235 1.694 1.962.246 2.067 0 0-2.365.283-5.157.318-2.254.03-4.745-.035-6.722-.695.933 3.57 4.106 6.2 7.931 6.2 9.771 0 15.941-7.798 17.639-10.078-3.006-.027-5.575-1.089-7.787-2.616-2.84-1.959-5.542-3.973-9.852-3.973v.004Zm-37.398 16.158v19.134h9.312v-19.134h-9.312Zm11.396 2.792v13.646l20.073 6.798c1.666.417 3.793.108 5.164-.813.025-.02.052-.031.081-.045l20.228-10.994.483-.277a1.703 1.703 0 0 0 .762-2.173c-.385-.911-.812-1.029-1.258-1.096a1.92 1.92 0 0 0-.798.048l-14.542 6.739a1.053 1.053 0 0 1-.443.119 4.195 4.195 0 0 1-1.161.183h-14.485v-2.083h14.485c.313 0 .604-.062.867-.171h.008a2.13 2.13 0 0 0 1.332-1.985c0-1.209-.959-2.159-2.207-2.159h-10.558l-.271-.624c-.089-.205-.2-.386-.364-.68a8.496 8.496 0 0 0-1.48-1.949 8.708 8.708 0 0 0-6.129-2.476h-9.785l-.002-.008Z"
        fill="#fff"
      />
    </g>
    <defs>
      <clipPath id="b">
        <path fill="#fff" transform="translate(70 66)" d="M0 0h100v100H0z" />
      </clipPath>
      <filter
        id="a"
        x={0}
        y={0}
        width={240}
        height={240}
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
        <feGaussianBlur stdDeviation={10} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
        <feBlend
          in2="BackgroundImageFix"
          result="effect1_dropShadow_2965_43464"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_2965_43464"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export default Ecofriendly;
