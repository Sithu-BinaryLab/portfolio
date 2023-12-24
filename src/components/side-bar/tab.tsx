

"use client";
import React, { useState, useEffect } from "react";
interface TabComponentProps {
  aboutRef: any;
  projectRef: any;
  expRef: any;
  containerRef: any;
}

export const TabComponent = ({ aboutRef, projectRef, expRef, containerRef }: TabComponentProps) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const range = 400;

  useEffect(() => {
    const handleScroll = () => {
      // Get the scroll position within the container
      const container = containerRef.current;
      if (container) {
        const scrollTop = container.scrollTop;
        setScrollPosition(scrollTop);
      }
    };

    // Attach scroll event listener to the container
    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
    }

    // Clean up the event listener on component unmount
    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  const isActiveTab = (currentRef: any, nextRef: any) => {
    let isActive = false;
    if (scrollPosition >= (currentRef.current?.offsetTop - range) && (nextRef ? scrollPosition < (nextRef?.current?.offsetTop - range) : true)) {
      isActive = true;
    }
    return isActive;
  }

  return (
    <div className="nav hidden lg:block">
      <div className="flex space-x-4">
        <hr className={` h-[0.05px] rounded-full bg-tabActive my-auto ${isActiveTab(aboutRef, expRef) ? "w-24" : "w-10"}`}></hr>
        <button
          className={`text-xs text-seconTitleColor tracking-widest ${isActiveTab(aboutRef, expRef) ? "text-white font-bold" : ""
            }`}
        >
          <a href="#about">ABOUT</a>
        </button>
      </div>
      <div className="flex space-x-4">
        <hr className={`h-[0.05px] rounded-full bg-tabActive my-auto ${isActiveTab(expRef, projectRef) ? "w-24" : "w-10"}`}></hr>
        <button className={` text-xs text-seconTitleColor tracking-widest py-5 ${isActiveTab(expRef, projectRef) ? "text-white font-bold" : ""
          }`}>
          <a href="#experience">EXPERIENCE</a>
        </button>
      </div>
      <div className="flex space-x-4">
        <hr className={`h-[0.05px] rounded-full bg-tabActive my-auto ${isActiveTab(projectRef, "") ? "w-24" : "w-10"}`}></hr>
        <button
          className={`text-xs text-seconTitleColor tracking-widest ${isActiveTab(projectRef, "") ? "text-white font-bold" : ""}`}
        >
          {" "}
          <a href="#projects">PROJECTS</a>
        </button>
      </div>
    </div >
  );
};
