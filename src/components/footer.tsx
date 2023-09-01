import React from "react";

export const FooterComponent = () => {
  return (
    <div className="pt-2 pb-24 px-4">
      <p className="text-primaryColor text-sm">
        Loosely designed
        <span className="text-highLightColor">in</span> Visual Studio Code by
        yours truly. Built
        <span className="text-highLightColor"> with </span> Next.js and Tailwind
        <span className="text-highLightColor"> CSS</span>, deployed{" "}
        <span className="text-highLightColor"> with</span> Vercel. All text is
        set
        <span className="text-highLightColor"> in</span> the Inter typeface.
      </p>
    </div>
  );
};
