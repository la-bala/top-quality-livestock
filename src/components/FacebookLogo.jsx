import React from "react";

export const FacebookLogo = ({ color = "#B9AEA5", className }) => {
  return (
    <svg
      className={`FacebookLogo ${className}`}
      fill="none"
      height="20"
      viewBox="0 0 20 20"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className="g" clipPath="url(#clip0_1_330)">
        <path
          className="path-2"
          d="M20 10C20 4.47715 15.5229 0 10 0C4.47715 0 0 4.47715 0 10C0 14.9912 3.65684 19.1283 8.4375 19.8785V12.8906H5.89844V10H8.4375V7.79688C8.4375 5.29063 9.93047 3.90625 12.2146 3.90625C13.3084 3.90625 14.4531 4.10156 14.4531 4.10156V6.5625H13.1922C11.95 6.5625 11.5625 7.3334 11.5625 8.125V10H14.3359L13.8926 12.8906H11.5625V19.8785C16.3432 19.1283 20 14.9912 20 10Z"
          fill={color}
        />
      </g>
      <defs className="defs">
        <clipPath className="clip-path" id="clip0_1_330">
          <rect className="rect" fill="white" height="20" width="20" />
        </clipPath>
      </defs>
    </svg>
  );
};