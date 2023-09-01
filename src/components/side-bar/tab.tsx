import React from "react";

export const TabComponent = () => {
  return (
    <div className="pt-20">
      <div className="flex space-x-4">
        <button className="w-24 h-[0.05px] rounded-full bg-tabActive my-auto"></button>
        <button className="text-xs text-seconTitleColor">
          <a href="#about">ABOUT</a>
        </button>
      </div>
      <div className="flex space-x-4">
        <button className="w-10 h-[0.05px] rounded-full bg-tabActive my-auto"></button>
        <button className="text-xs text-seconTitleColor py-5">
          <a href="#experience">EXPERIENCE</a>
        </button>
      </div>
      <div className="flex space-x-4">
        <button className="w-10 h-[0.05px] rounded-full bg-tabActive my-auto"></button>
        <button className="text-xs text-seconTitleColor">
          {" "}
          <a href="#projects">PROJECTS</a>
        </button>
      </div>
    </div>
  );
};
