import * as React from "react";
const InventoryMangement = (props) => (
  <svg
    width={30}
    height={30}
    viewBox="0 0 30 30"
    fill={props.fill}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M6.25 6.25H8.75V10H21.25V6.25H23.75V12.5H26.25V3.75H18.525C18 2.3 16.625 1.25 15 1.25C13.375 1.25 12 2.3 11.475 3.75H3.75V26.25H13.75V23.75H6.25V6.25ZM15 3.75C15.6875 3.75 16.25 4.3125 16.25 5C16.25 5.6875 15.6875 6.25 15 6.25C14.3125 6.25 13.75 5.6875 13.75 5C13.75 4.3125 14.3125 3.75 15 3.75Z"
      fill={props.fill}
    />
    <path
      d="M26.25 14.375L19.3875 21.25L15.625 17.5L13.75 19.375L19.3875 25L28.125 16.25L26.25 14.375Z"
      fill={props.fill}
    />
  </svg>
);
export default InventoryMangement;
