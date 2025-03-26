"use client";
import React, { useEffect, useRef, useState } from "react";
import TawkMessengerReact from "@tawk.to/tawk-messenger-react";

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
import { FullAboutComponent } from "@/components/full-about";

function Spotlight() {
  const aboutRef = useRef(null);
  const projectRef = useRef(null);
  const containerRef = useRef(null);
  const expRef = useRef(null);

  const [spotlightPosition, setSpotlightPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: any) => {
    setSpotlightPosition({ x: e.clientX, y: e.clientY });
  };
  const TawkChatRef = useRef<{
    toggle: () => void;
    minimize: () => void;
  } | null>(null);

  return (
    <div
      ref={containerRef}
      className="relative h-screen overflow-y-scroll"
      onMouseMove={handleMouseMove}
      style={{
        background: `radial-gradient(600px at ${spotlightPosition.x}px ${spotlightPosition.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
      }}
    >
      <div className="mx-auto flex lg:flex-row flex-col max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0 lg:gap-x-4">
        {/* Left Column - Sticky */}
        <div className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
          <ProfileComponent />
          <TabComponent
            aboutRef={aboutRef}
            projectRef={projectRef}
            expRef={expRef}
            containerRef={containerRef}
          />
          <div className="ml-1 mt-8 flex items-center">
            <ConnectLink />
          </div>
        </div>

        {/* Right Column - Scrolling */}
        <div className="pt-24 lg:w-1/2 lg:py-24">
          <AboutComponent aboutRef={aboutRef} />
          <FullAboutComponent />
          <ExperienceComponent expRef={expRef} />
          <FullResumeComponent />
          <ProjectComponent projectRef={projectRef} />
          <FullProjectComponent />

          <FooterComponent />
          <TawkMessengerReact
            propertyId="67dbc2d4286190190dbc248c"
            widgetId="1imp723ks"
            ref={TawkChatRef}
          />
        </div>
      </div>
    </div>
  );
}

export default Spotlight;
