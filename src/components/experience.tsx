import React from "react";
interface experienceProps {
  expRef: any;
}
export const ExperienceComponent = ({ expRef }: experienceProps) => {
  return (
    <div id="experience" className="max-w-screen-md flex gap-y-10 flex-col mt-20" ref={expRef}>
      <div className="sticky top-0 z-20 -mx-6 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0"><h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Experience</h2></div>
      <div className="">
        <div
          className="flex flex-col lg:flex-row lg:space-x-8 space-y-2 hover:border hover:rounded-md px-4 py-6 hover:bg-hoverColor"
          style={{ borderColor: "#1c2a46" }}
        >
          <div className="text-seconTitleColor flex-none text-sm pt-1">
            2018 - PRESENT
          </div>
          <div className="">
            <h1 className="text-titleColor text-lg">
              Lead Engineer . Upstatement
            </h1>
            <h4 className="text-seconTitleColor">Senior Engineer</h4>
            <p className="text-primaryColor text-md py-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In
              adipisci temporibus nostrum praesentium laboriosam! Quaerat
              possimus, ea est velit et illum consectetur eos nisi commodi.
              Ratione impedit accusantium veniam voluptates.
            </p>
            {/* programming languages */}
            <div className="flex flex-wrap pt-3 gap-4">
              <button
                className="border border-none text-xs py-2 px-4 rounded-full text-languageColor"
                style={{ backgroundColor: "#132f4a" }}
              >
                React
              </button>
              <button
                className="border border-none text-xs py-2 px-4 rounded-full text-languageColor"
                style={{ backgroundColor: "#132f4a" }}
              >
                Javascript
              </button>
              <button
                className="border border-none text-xs py-2 px-4 rounded-full text-languageColor"
                style={{ backgroundColor: "#132f4a" }}
              >
                TypeScript
              </button>
              <button
                className="border border-none text-xs py-2 px-4 rounded-full text-languageColor"
                style={{ backgroundColor: "#132f4a" }}
              >
                Tailwind
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <div
          className="flex flex-col lg:flex-row lg:space-x-8 hover:border hover:rounded-md px-4 py-6 hover:bg-hoverColor"
          style={{ borderColor: "#1c2a46" }}
        >
          <div className="text-seconTitleColor flex-none  text-sm pt-1">
            JULY - DEC 2017
          </div>
          <div className="">
            <h1 className="text-titleColor text-lg">
              UI Engineer Co-op . Apple
            </h1>
            <h4 className="text-seconTitleColor">Senior Engineer</h4>
            <p className="text-primaryColor text-md py-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In
              adipisci temporibus nostrum praesentium laboriosam! Quaerat
              possimus, ea est velit et illum consectetur eos nisi commodi.
              Ratione impedit accusantium veniam voluptates.
            </p>
            {/* programming languages */}
            <div className="flex flex-wrap pt-3 gap-4">
              <button
                className="border border-none text-xs py-2 px-4 rounded-full text-languageColor"
                style={{ backgroundColor: "#132f4a" }}
              >
                React
              </button>
              <button
                className="border border-none text-xs py-2 px-4 rounded-full text-languageColor"
                style={{ backgroundColor: "#132f4a" }}
              >
                Javascript
              </button>
              <button
                className="border border-none text-xs py-2 px-4 rounded-full text-languageColor"
                style={{ backgroundColor: "#132f4a" }}
              >
                TypeScript
              </button>
              <button
                className="border border-none text-xs py-2 px-4 rounded-full text-languageColor"
                style={{ backgroundColor: "#132f4a" }}
              >
                Tailwind
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <div
          className="flex flex-col lg:flex-row lg:space-x-8 hover:border hover:rounded-md px-4 py-6 hover:bg-hoverColor"
          style={{ borderColor: "#1c2a46" }}
        >
          <div className="text-seconTitleColor flex-none  text-sm pt-1 w-32">
            2016 - 2017
          </div>
          <div className="">
            <h1 className="text-titleColor text-lg">
              Developer . Scout Studio
            </h1>
            <h4 className="text-seconTitleColor">Senior Engineer</h4>
            <p className="text-primaryColor text-md py-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In
              adipisci temporibus nostrum praesentium laboriosam! Quaerat
              possimus, ea est velit et illum consectetur eos nisi commodi.
              Ratione impedit accusantium veniam voluptates.
            </p>
            {/* programming languages */}
            <div className="flex flex-wrap pt-3 gap-4">
              <button
                className="border border-none text-xs py-2 px-4 rounded-full text-languageColor"
                style={{ backgroundColor: "#132f4a" }}
              >
                React
              </button>
              <button
                className="border border-none text-xs py-2 px-4 rounded-full text-languageColor"
                style={{ backgroundColor: "#132f4a" }}
              >
                Javascript
              </button>
              <button
                className="border border-none text-xs py-2 px-4 rounded-full text-languageColor"
                style={{ backgroundColor: "#132f4a" }}
              >
                TypeScript
              </button>
              <button
                className="border border-none text-xs py-2 px-4 rounded-full text-white"
                style={{ backgroundColor: "#132f4a" }}
              >
                Tailwind
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
