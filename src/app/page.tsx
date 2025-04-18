"use client";
import React, { useEffect, useRef, useState } from "react";
import TawkMessengerReact from "@tawk.to/tawk-messenger-react";
import Head from "next/head";

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
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>Si Thu Lwin | Senior Frontend Developer</title>
        <meta name="title" content="Si Thu Lwin | Senior Frontend Developer" />
        <meta
          name="description"
          content="Senior Frontend Developer with 5 years of experience specializing in modern web technologies. Check out my portfolio and projects."
        />
        <meta name="author" content="Si Thu Lwin" />
        <meta
          name="keywords"
          content="frontend developer, react, typescript, portfolio, web developer, Si Thu Lwin"
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://sithulwin.dev/" // Replace with your actual URL
        />
        <meta
          property="og:title"
          content="Si Thu Lwin | Senior Frontend Developer"
        />
        <meta
          property="og:description"
          content="Senior Frontend Developer with 5 years of experience specializing in modern web technologies."
        />
        <meta
          property="og:image"
          content="https://sithulwin.dev/profile.jpg" // Updated to point to profile.jpg
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Si Thu Lwin - Profile Photo" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://sithulwin.dev/" // Replace with your actual URL
        />
        <meta
          property="twitter:title"
          content="Si Thu Lwin | Senior Frontend Developer"
        />
        <meta
          property="twitter:description"
          content="Senior Frontend Developer with 5 years of experience specializing in modern web technologies."
        />
        <meta
          property="twitter:image"
          content="https://sithulwin.dev/profile.jpg" // Updated to point to profile.jpg
        />
        <meta
          property="twitter:image:alt"
          content="Si Thu Lwin - Profile Photo"
        />

        {/* Security Headers */}
        <meta
          httpEquiv="Content-Security-Policy"
          content="default-src 'self'; script-src 'self' 'unsafe-inline' https://*.tawk.to; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self'; connect-src 'self' https://*.tawk.to; frame-src https://*.tawk.to;"
        />
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-Frame-Options" content="DENY" />
        <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
        <meta
          httpEquiv="Strict-Transport-Security"
          content="max-age=31536000; includeSubDomains"
        />
        <meta name="referrer" content="strict-origin-when-cross-origin" />
      </Head>

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
    </>
  );
}

export default Spotlight;
