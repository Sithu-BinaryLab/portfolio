import React from "react";
import { useRouter } from "next/navigation";

const LinkedInIcon = () => {
  const router = useRouter();

  const goToLinkedIn = () => {
    router.push("https://www.linkedin.com/in/sithulwin/");
  };
  return (
    <div onClick={goToLinkedIn} className="cursor-pointer">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="32"
        height="32"
        viewBox="0 0 24 24"
      >
        <path
          d="M18,21H6c-1.657,0-3-1.343-3-3V6c0-1.657,1.343-3,3-3h12c1.657,0,3,1.343,3,3v12	C21,19.657,19.657,21,18,21z"
          fill="#91a0b8"
          opacity="1"
        ></path>
        <path
          d="M9,17H6.477v-7H9V17z M7.694,8.717c-0.771,0-1.286-0.514-1.286-1.2s0.514-1.2,1.371-1.2c0.771,0,1.286,0.514,1.286,1.2	S8.551,8.717,7.694,8.717z M18,17h-2.442v-3.826c0-1.058-0.651-1.302-0.895-1.302s-1.058,0.163-1.058,1.302c0,0.163,0,3.826,0,3.826	h-2.523v-7h2.523v0.977C13.93,10.407,14.581,10,15.802,10S18,10.977,18,13.174V17z"
          fill="#000"
        ></path>
      </svg>
    </div>
  );
};

export default LinkedInIcon;
