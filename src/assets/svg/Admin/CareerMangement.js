import * as React from "react";

const CareerManagement = (props) => (
  <svg
    width={30}
    height={30}
    fill="none"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        d="M15.037 9.126 15 9.112l-.037.014L8.924 11.5l-.237.093.237.093 6.04 2.373.036.015.037-.015 6.039-2.373.237-.093-.237-.093-6.04-2.374Zm-4.27 4.093-.036-.014-.037.014-1.495.588-.237.093.237.093 5.764 2.266.037.014.037-.014 5.762-2.266.237-.093-.237-.093-1.497-.588-.036-.014-.037.014L15 14.88l-4.233-1.662Zm-.138 2.362-.037-.015-.036.015-1.357.534-.237.093.237.093 1.592.627 4.172 1.638.037.015.037-.015 4.246-1.668 1.516-.597.237-.093-.237-.093-1.357-.532-.037-.014-.036.014L15 17.3l-4.371-1.718Zm0 2.308-.037-.015-.036.015-1.357.534-.237.093.237.093 5.764 2.265.037.014.037-.014 5.762-2.265.237-.093-.237-.093-1.36-.532-.036-.015-.037.015L15 19.607l-4.371-1.718ZM15-.1C6.667-.1-.1 6.667-.1 15c0 8.333 6.767 15.1 15.1 15.1 8.333 0 15.1-6.767 15.1-15.1C30.1 6.667 23.333-.1 15-.1Zm0 1.356c7.598 0 13.746 6.146 13.746 13.744S22.598 28.746 15 28.746C7.402 28.746 1.254 22.598 1.254 15 1.254 7.402 7.402 1.256 15 1.256Z"
        fill={props.fill}
        stroke="#fff"
        strokeWidth={0.2}
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill={props.fill} d="M0 0h30v30H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default CareerManagement;
