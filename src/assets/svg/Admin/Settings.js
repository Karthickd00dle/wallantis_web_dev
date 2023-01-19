import * as React from "react";
const SVGComponent = (props) => (
  <svg
    width={30}
    height={30}
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12.1875 1.875V5.625L10.3125 6.5625L7.5 3.75L3.75 7.5L6.5625 10.3125L5.625 12.1875H1.875V17.8125H5.625L6.5625 19.6875L3.75 22.5L7.5 26.25L10.3125 23.4375L12.1875 24.375V28.125H17.8125V24.375L19.6875 23.4375L22.5 26.25L26.25 22.5L23.4375 19.6875L24.375 17.8125H28.125V12.1875H24.375L23.4375 10.3125L26.25 7.5L22.5 3.75L19.6875 6.5625L17.8125 5.625V1.875H12.1875Z"
      stroke="white"
      fill={props.fill}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15 18.75C17.0711 18.75 18.75 17.0711 18.75 15C18.75 12.9289 17.0711 11.25 15 11.25C12.9289 11.25 11.25 12.9289 11.25 15C11.25 17.0711 12.9289 18.75 15 18.75Z"
      stroke="white"
      fill={props.fill}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SVGComponent;
