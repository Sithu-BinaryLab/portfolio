"use client";
import React, { useEffect, useState } from "react";

function Spotlight() {
  const [spotlightSize, setSpotlightSize] = useState(
    "transparent 20%, rgba(0, 0, 0, 0.8) 30%"
  );
  const [spotlightPosition, setSpotlightPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateSpotlight = (e) => {
      const x = (e.pageX / window.innerWidth) * 100;
      const y = (e.pageY / window.innerHeight) * 100;
      setSpotlightPosition({ x, y });
    };

    const handleMouseMove = (e) => {
      updateSpotlight(e);
    };

    const handleMouseDown = (e) => {
      setSpotlightSize("transparent 10%, rgba(0, 0, 0, 0.9) 25%");
      updateSpotlight(e);
    };

    const handleMouseUp = (e) => {
      setSpotlightSize("transparent 20%, rgba(0, 0, 0, 0.7) 30%");
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
    <div
      className="relative h-screen bg-cover bg-no-repeat bg-center"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1487525219605-eadb39ae229c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=982&q=80)",
      }}
    >
      <div
        className="spotlight absolute h-full w-full"
        style={spotlightStyle}
      ></div>
    </div>
  );
}

export default Spotlight;
