"use client";
import React, { useEffect, useState } from "react";

// components
import { ProfileComponent } from "@/components/side-bar/profile";
import { AboutComponent } from "@/components/about";
import { ExperienceComponent } from "@/components/experience";
import { FullResumeComponent } from "@/components/resume";
import { TabComponent } from "@/components/side-bar/tab";
import { ProjectComponent } from "@/components/projects";
import ConnectLink from "@/components/side-bar/connect-link";
import { FullProjectComponent } from "@/components/full-project";
import { FooterComponent } from "@/components/footer";

function Spotlight() {
  const [spotlightSize, setSpotlightSize] = useState(
    "transparent 10%, rgba(0, 0, 0, 0.8) 30%"
  );
  const [spotlightPosition, setSpotlightPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateSpotlight = (e: any) => {
      const x = (e.pageX / window.innerWidth) * 100;
      const y = (e.pageY / window.innerHeight) * 100;
      setSpotlightPosition({ x, y });
    };

    const handleMouseMove = (e: any) => {
      updateSpotlight(e);
    };

    const handleMouseDown = (e: any) => {
      setSpotlightSize("transparent 10%, rgba(16, 28, 57, 0.9) 25%");
      updateSpotlight(e);
    };

    const handleMouseUp = (e: any) => {
      setSpotlightSize("transparent 20%, rgba(16, 28, 57,  0.7) 30%");
      updateSpotlight(e);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  const spotlightStyle = {
    backgroundImage: `radial-gradient(circle at ${spotlightPosition.x}% ${spotlightPosition.y}%, ${spotlightSize})`,
  };

  return (
    <div className="relative h-screen">
      <div className="spotlight absolute h-full  w-full" style={spotlightStyle}>
        <div
          className="w-full h-full"
          style={{ background: "rgba(16, 28, 57, 0.85)" }}
        >
          <div className="flex flex-wrap justify-center overflow-x-scroll md:space-x-3">
            <div className="w-full max-w-screen-md md:w-5/12 md:sticky  md:top-0 text-white md:pt-24 overflow-hidden">
              <ProfileComponent />
              <TabComponent />
              <div className="absolute bottom-24">
                <ConnectLink />
              </div>
            </div>
            <div className="h-screen w-full max-w-screen-md md:w-5/12">
              <AboutComponent />
              <ExperienceComponent />
              <FullResumeComponent />
              <ProjectComponent />
              <FullProjectComponent />
              <FooterComponent />
            </div>
          </div>
          ;
        </div>
      </div>
    </div>
  );
}

export default Spotlight;
