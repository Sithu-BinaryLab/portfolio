import React from "react";

export const ProjectComponent = () => {
  return (
    <div id="projects">
      <div
        className="flex space-x-8 hover:border hover:rounded-md px-4 pt-5 pb-2 hover:bg-hoverColor"
        style={{ borderColor: "#1c2a46" }}
      >
        <img
          src="/images/project.png"
          className="border border-hoverColor rounded-md w-40 h-20"
          alt="Picture of the author"
        />

        <div>
          <h1 className="text-titleColor text-lg">Spotify Profile</h1>
          <p className="text-primaryColor text-md py-2">
            Learn how to build a full stack web app to visualize personalized
            Spotify data with the help of Node.js, React, Styled Components, and
            the Spotify Web API
          </p>
        </div>
      </div>
      <div
        className="flex space-x-8 my-12 hover:border hover:rounded-md px-4 pt-5 pb-2 hover:bg-hoverColor"
        style={{ borderColor: "#1c2a46" }}
      >
        <img
          src="/images/project3.png"
          className="border border-hoverColor rounded-md w-40 h-20"
          alt="Picture of the author"
        />

        <div>
          <h1 className="text-titleColor text-lg">
            Build a Spotify Connected App
          </h1>
          <p className="text-primaryColor text-md py-2">
            Spotify gives you instant access to millions of songs – from old
            favorites to the latest hits. Just hit play to stream anything you
            like.
          </p>
        </div>
      </div>
      <div
        className="flex space-x-8 my-12 hover:border hover:rounded-md px-4 pt-5 pb-2 hover:bg-hoverColor"
        style={{ borderColor: "#1c2a46" }}
      >
        <img
          src="/images/project2.jpeg"
          className="border border-hoverColor rounded-md w-40 h-20"
          alt="Picture of the author"
        />

        <div>
          <h1 className="text-titleColor text-lg">Halcyon Theme</h1>
          <p className="text-primaryColor text-md py-2">
            A minimal, dark blue theme for VS Code, Sublime Text, Atom, and
            more.
          </p>
        </div>
      </div>
    </div>
  );
};
