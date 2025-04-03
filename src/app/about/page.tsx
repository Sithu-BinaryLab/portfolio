"use client";

import React, { useState } from "react";

const Archivepages = () => {
  const [spotlightPosition, setSpotlightPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: any) => {
    setSpotlightPosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <div
      className="min-h-screen w-full  font-sans "
      onMouseMove={handleMouseMove}
      style={{
        background: `radial-gradient(600px at ${spotlightPosition.x}px ${spotlightPosition.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
      }}
    >
      <div className="mx-auto max-w-screen-xl  px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:py-24">
          <a
            className="group mb-2 inline-flex items-center font-semibold leading-tight text-teal-300"
            href="/"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="mr-1 h-4 w-4 rotate-180 transition-transform group-hover:-translate-x-2"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                clip-rule="evenodd"
              ></path>
            </svg>
            Si Thu Lwin
          </a>
          {/* <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
            Background
          </h1> */}
          <div className="flex justify-between space-x-5">
            <div className="my-auto">
              <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
                Background
              </h1>
              <p className="text-primaryColor">
                I graduated with a Bachelor degree in Engineering, majoring in
                Information Technology, from a Technology University. Over the
                course of my 6-year program, I developed and worked on several
                tasks and projects, gaining hands-on experience in technology
                and software development.
              </p>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 500 300"
                width="500"
                height="300"
                className="rounded-md"
              >
                <circle
                  cx="100"
                  cy="100"
                  r="15"
                  fill="none"
                  stroke="#4dabf7"
                  stroke-width="3"
                >
                  <animate
                    attributeName="r"
                    values="15;20;15"
                    dur="3s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="opacity"
                    values="1;0.7;1"
                    dur="4s"
                    repeatCount="indefinite"
                  />
                </circle>
                <path
                  d="M100 85v30 M85 100h30"
                  stroke="#4dabf7"
                  stroke-width="3"
                >
                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    values="0 100 100;360 100 100"
                    dur="8s"
                    repeatCount="indefinite"
                  />
                </path>

                <rect x="150" y="120" width="200" height="100" fill="#e0e0e0" />
                <rect x="170" y="80" width="160" height="40" fill="#c0c0c0" />
                <rect x="230" y="40" width="40" height="40" fill="#a0a0a0">
                  <animate
                    attributeName="fill"
                    values="#a0a0a0;#4dabf7;#a0a0a0"
                    dur="6s"
                    repeatCount="indefinite"
                  />
                </rect>

                <path
                  d="M400 100l-20 20 20 20 20-20z"
                  fill="none"
                  stroke="#4dabf7"
                  stroke-width="3"
                >
                  <animate
                    attributeName="stroke"
                    values="#4dabf7;#ffd700;#4dabf7"
                    dur="4s"
                    repeatCount="indefinite"
                  />
                  <animateTransform
                    attributeName="transform"
                    type="scale"
                    values="1;1.1;1"
                    dur="3s"
                    repeatCount="indefinite"
                  />
                </path>

                <g transform="translate(250,30)">
                  <path d="M-30-15l30 15 30-15v10h-60z" fill="#ffd700">
                    <animateTransform
                      attributeName="transform"
                      type="translate"
                      values="0,0;0,-5;0,0"
                      dur="4s"
                      repeatCount="indefinite"
                    />
                  </path>
                  <rect x="-30" y="10" width="60" height="5" fill="#795548" />
                </g>

                <text
                  x="250"
                  y="260"
                  text-anchor="middle"
                  font-family="Arial"
                  font-size="20"
                  font-weight="bold"
                  fill="#4dabf7"
                >
                  <animate
                    attributeName="fill"
                    values="#4dabf7;#ffd700;#4dabf7"
                    dur="5s"
                    repeatCount="indefinite"
                  />
                  TECHNOLOGY UNIVERSITY
                </text>
              </svg>
            </div>
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl flex justify-start">
            Frontend
          </h1>
          <div className="text-primaryColor mt-4">
            I have developed eCommerce apps, informational websites, admin
            dashboards, social media apps, music streaming apps, and Web3
            blockchain apps as a frontend developer. My frontend skills include
            Next.js, React.js, Vue.js, TypeScript, JavaScript, Bootstrap, MUI,
            Tailwind, ShadCN, CSS, Three.js, Framer Motion, React Query, Redux,
            React Toolkit, Context API, Zustand, and Jotai.
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl flex justify-end">
            Backend
          </h1>
          <div className="text-primaryColor mt-4">
            I also have experience in backend development. I first started with
            databases, beginning with MySQL, then MongoDB and Firebase. I have
            also used Prisma for Next.js applications. My backend languages
            include PHP, Laravel, Node.js, Express.js, Java, and Spring Boot.
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl flex justify-end">
            AWS
          </h1>
          <div className="text-primaryColor mt-4">
            I am especially interested in cloud computing and am currently
            learning AWS. I have experience with CI/CD pipelines and Lambda
            functions. I have an AWS certification from the GIC training class.
            My primary goal is to become a DevOps engineer.
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl flex justify-start">
            WEB 3
          </h1>
          <div className="text-primaryColor mt-4">
            I am currently working as a frontend blockchain developer. Today,
            having experience in Web3 technology is essential.
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl flex justify-start">
            AI
          </h1>
          <div className="text-primaryColor mt-4">
            My AI skills are limited, but I have used trained models from
            TensorFlow and developed applications. My thesis was based on AI,
            and I have graduated.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Archivepages;
