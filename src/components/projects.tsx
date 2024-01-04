import React from "react";

interface projectProps {
  projectRef: any;
}

export const ProjectComponent = ({ projectRef }: projectProps) => {
  return (
    <div id="projects" ref={projectRef}>
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          Projects
        </h2>
      </div>
      <div
        className="flex flex-col lg:flex-row gap-y-4 lg:space-x-8 hover:border hover:rounded-md px-4 pt-5 pb-2 hover:bg-hoverColor"
        style={{ borderColor: "#1c2a46" }}
      >
        <img
          src="/images/newsmast_logo.jpeg"
          className="border border-hoverColor rounded-md lg:w-full w-40 h-20"
          alt="Picture of the author"
        />

        <div>
          <h1 className="text-titleColor text-lg">Newsmast Social App</h1>
          <p className="text-primaryColor text-md py-2">
            Newsmast is part of the decentralised social media network powered
            by Mastodon. Backed by a charitable foundation: the Newsmast
            Foundation.
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
            GESC Chinese Language Centre Admin Dashboard
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
          <h1 className="text-titleColor text-lg">
            MyPet | Myanmar's Best Pet Supplies!
          </h1>
          <p className="text-primaryColor text-md py-2">
            MyPet is an online Pet Store in Myanmar. Dog Food & Snack, Cat Food
            & Snack, Gromming Supplies, Pet Toys, Pet Bed and Homes, Bowls and
            Feeder, ...
          </p>
        </div>
      </div>
    </div>
  );
};
