import React from "react";

const MailIcon = () => {
  const handleMailClick = () => {
    window.location.href = "mailto:sithulwin.devit@gmail.com";
  };

  return (
    <div onClick={handleMailClick} className="cursor-pointer">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
      >
        <path
          d="M18,21H6c-1.657,0-3-1.343-3-3V6c0-1.657,1.343-3,3-3h12c1.657,0,3,1.343,3,3v12C21,19.657,19.657,21,18,21z"
          fill="#91a0b8"
          opacity="1"
        />
        <path d="M6 8l6 4 6-4v-1H6v1zm0 2v6h12v-6l-6 4-6-4z" fill="#000" />
      </svg>
    </div>
  );
};

export default MailIcon;
