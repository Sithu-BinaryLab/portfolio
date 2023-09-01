import React from "react";

export const AboutComponent = () => {
  return (
    <div className="pt-24 px-4" id="about">
      <p className="text-primaryColor">
        Back in 2012, I decided to try my hand at creating custom Tumblr themes
        and tumbled head first into the rabbit hole of coding and web
        development. Fast-forward to today, and I’ve had the privilege of
        building software for an{" "}
        <span className="text-highLightColor">advertising agency</span>, a
        <span className="text-highLightColor"> start-up</span>, a student-led
        design studio, and a{" "}
        <span className="text-highLightColor"> huge corporation</span>.
      </p>
      <p className="text-primaryColor pt-6">
        My main focus these days is building products and leading projects for
        our clients at <span className="text-highLightColor"> Upstatement</span>
        . In my free time I've also released an{" "}
        <span className="text-secondPrimaryColor"> online video course </span>
        that covers everything you need to know to build a web app with the
        Spotify API.
      </p>
      <p className="text-primaryColor pt-6">
        When I’m not at the computer, I’m usually rock climbing, hanging out
        with my wife and two cats, or running around Hyrule searching for Korok
        seeds <span className="text-highLightColor"> Korokseeds </span> .
      </p>
    </div>
  );
};
