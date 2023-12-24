import React from "react";

interface projectProps {
  projectRef: any
}

export const ProjectComponent = ({ projectRef }: projectProps) => {
  return (
    <div id="projects" ref={projectRef}>
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0"><h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Projects</h2></div>
      <div
        className="flex flex-col lg:flex-row gap-y-4 lg:space-x-8 hover:border hover:rounded-md px-4 pt-5 pb-2 hover:bg-hoverColor"
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
        className="flex flex-col lg:flex-row  gap-y-4 lg:space-x-8 my-12 hover:border hover:rounded-md px-4 pt-5 pb-2 hover:bg-hoverColor"
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
        className="flex flex-col lg:flex-row gap-y-4 lg:space-x-8 my-12 hover:border hover:rounded-md px-4 pt-5 pb-2 hover:bg-hoverColor"
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
