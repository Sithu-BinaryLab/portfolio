import React from "react";
import { useRouter } from "next/navigation";

interface experienceProps {
  expRef: any;
}
export const ExperienceComponent = ({ expRef }: experienceProps) => {
  const router = useRouter();
  const goToCompanyPorifle = (link: string) => {
    router.push(link);
  };

  return (
    <div
      id="experience"
      className="max-w-screen-md flex gap-y-10 flex-col mt-20"
      ref={expRef}
    >
      <div className="sticky top-0 z-20 -mx-6 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          Experience
        </h2>
      </div>
      <div className="">
        <div
          className="flex flex-col lg:flex-row lg:space-x-8  hover:border hover:rounded-md px-4 py-6 hover:bg-hoverColor cursor-pointer"
          style={{ borderColor: "#1c2a46" }}
          onClick={() => goToCompanyPorifle("https://www.merypto.com/")}
        >
          <div className="text-seconTitleColor flex-none text-sm pt-1">
            OCT 2024 - PRESENT
          </div>
          <div className="">
            <h1 className="text-titleColor text-lg">
              Frontend Developer . Merypto
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className=" hover:mb-2 inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </h1>
            <h4 className="text-seconTitleColor">Senior Frontend Developer</h4>
            <p className="text-primaryColor text-md py-2">
              Collaborated closely with design and development teams to
              implement and enhance the frontend of the Newsmast social app
              using React and Next.js. Spearheaded the development of
              Progressive Web Applications (PWAs) and websites catering to both
              end-users and administrative functionalities. Operated within the
              framework of Agile Scrum methodology, ensuring an efficient and
              collaborative development process.
            </p>
            {/* programming languages */}
            <div className="flex flex-wrap pt-3 gap-4">
              <button
                className="border border-none text-xs py-2 px-4 rounded-full text-languageColor"
                style={{ backgroundColor: "#132f4a" }}
              >
                Next JS
              </button>
              <button
                className="border border-none text-xs py-2 px-4 rounded-full text-languageColor"
                style={{ backgroundColor: "#132f4a" }}
              >
                RQuery
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
          className="flex flex-col lg:flex-row lg:space-x-8  hover:border hover:rounded-md px-4 py-6 hover:bg-hoverColor cursor-pointer"
          style={{ borderColor: "#1c2a46" }}
          onClick={() => goToCompanyPorifle("https://binarylab.io/")}
        >
          <div className="text-seconTitleColor flex-none text-sm pt-1">
            JAN 2023 - SEP 2024
          </div>
          <div className="">
            <h1 className="text-titleColor text-lg">
              Frontend Developer . Binary Lab
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className=" hover:mb-2 inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </h1>
            <h4 className="text-seconTitleColor">Senior Frontend Developer</h4>
            <p className="text-primaryColor text-md py-2">
              Collaborated closely with design and development teams to
              implement and enhance the frontend of the Newsmast social app
              using React and Next.js. Spearheaded the development of
              Progressive Web Applications (PWAs) and websites catering to both
              end-users and administrative functionalities. Operated within the
              framework of Agile Scrum methodology, ensuring an efficient and
              collaborative development process.
            </p>
            {/* programming languages */}
            <div className="flex flex-wrap pt-3 gap-4">
              <button
                className="border border-none text-xs py-2 px-4 rounded-full text-languageColor"
                style={{ backgroundColor: "#132f4a" }}
              >
                Next JS
              </button>
              <button
                className="border border-none text-xs py-2 px-4 rounded-full text-languageColor"
                style={{ backgroundColor: "#132f4a" }}
              >
                RQuery
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
          className="flex flex-col lg:flex-row lg:space-x-8 hover:border hover:rounded-md px-4 py-6 hover:bg-hoverColor cursor-pointer"
          style={{ borderColor: "#1c2a46" }}
          onClick={() => goToCompanyPorifle("https://ultimatemyanmar.com/")}
        >
          <div className="text-seconTitleColor flex-none  text-sm pt-1">
            SEP - DEC 2022
          </div>
          <div className="">
            <h1 className="text-titleColor text-lg">
              Developer . Ultimate Solutions
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className=" hover:mb-2 inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </h1>
            <h4 className="text-seconTitleColor">Mid Frontend Developer</h4>
            <p className="text-primaryColor text-md py-2">
              Implement new features in website by using especially with Next JS
              and Material UI. Develop tasks with reusable and efficiency code
              for quality control and maintenance. Creating the development
              plans daily and data analyzed for projects and code review.
              Project is a web applications for office clients
            </p>
            {/* programming languages */}
            <div className="flex flex-wrap pt-3 gap-4">
              <button
                className="border border-none text-xs py-2 px-4 rounded-full text-languageColor"
                style={{ backgroundColor: "#132f4a" }}
              >
                Next JS
              </button>
              <button
                className="border border-none text-xs py-2 px-4 rounded-full text-languageColor"
                style={{ backgroundColor: "#132f4a" }}
              >
                SWR
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
                MUI
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <div
          className="flex flex-col lg:flex-row lg:space-x-8 hover:border hover:rounded-md px-4 py-6 hover:bg-hoverColor cursor-pointer"
          style={{ borderColor: "#1c2a46" }}
          onClick={() =>
            goToCompanyPorifle("https://www.myanmarhighsociety.com/")
          }
        >
          <div className="text-seconTitleColor flex-none  text-sm pt-1 w-24">
            2020 - 2022
          </div>
          <div className="">
            <h1 className="text-titleColor text-lg">
              Developer . Myanmar High Society
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className=" hover:mb-2 inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </h1>
            <h4 className="text-seconTitleColor">Mid Frontend Developer</h4>
            <p className="text-primaryColor text-md py-2">
              Identify the requirements, scope, design and improvements with the
              teams and language used React Js, Bootstrap, Tailwind.. Develop
              all the project tasks with reusable and efficiency code for
              quality control and maintenance. Work on Agile scrum methodology
              process. The projects I have done are commerce web applications,
              education websites and office websites
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
                Redux
              </button>
              <button
                className="border border-none text-xs py-2 px-4 rounded-full text-languageColor"
                style={{ backgroundColor: "#132f4a" }}
              >
                Bootstrap
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
