"use client";

import React, { useState } from "react";
import Image from "next/image";

const Archivepages = () => {
  const [spotlightPosition, setSpotlightPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: any) => {
    setSpotlightPosition({ x: e.clientX, y: e.clientY });
  };

  const skills = [
    {
      category: "Frontend",
      description:
        "I have developed eCommerce apps, informational websites, admin dashboards, social media apps, music streaming apps, and Web3 blockchain apps as a frontend developer.",
      skills:
        "Next.js, React.js, Vue.js, TypeScript, JavaScript, Bootstrap, MUI, Tailwind, ShadCN, CSS, Three.js, Framer Motion, React Query, Redux, React Toolkit, Context API, Zustand, Jotai",
      alignment: "left",
      color: "bg-blue-500/10",
    },
    {
      category: "Backend",
      description:
        "I also have experience in backend development. I first started with databases, beginning with MySQL, then MongoDB and Firebase. I have also used Prisma for Next.js applications.",
      skills:
        "PHP, Laravel, Node.js, Express.js, Java, Spring Boot, MySQL, MongoDB, Firebase, Prisma",
      alignment: "right",
      color: "bg-purple-500/10",
    },
    {
      category: "AWS",
      description:
        "I am especially interested in cloud computing and am currently learning AWS. I have experience with CI/CD pipelines and Lambda functions.",
      skills:
        "AWS Certified, CI/CD pipelines, Lambda functions, Cloud Computing",
      alignment: "right",
      color: "bg-amber-500/10",
    },
    {
      category: "Web3",
      description:
        "I am currently working as a frontend blockchain developer. Today, having experience in Web3 technology is essential.",
      skills: "Blockchain development, Smart contracts, Ethereum, Solidity",
      alignment: "left",
      color: "bg-emerald-500/10",
    },
    {
      category: "AI",
      description:
        "My AI skills are limited, but I have used trained models from TensorFlow and developed applications. My thesis was based on AI, and I have graduated.",
      skills: "TensorFlow, Machine Learning, AI applications",
      alignment: "left",
      color: "bg-red-500/10",
    },
  ];

  return (
    <div
      className="min-h-screen w-full font-sans bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-gray-100"
      onMouseMove={handleMouseMove}
      style={{
        background: `radial-gradient(600px at ${spotlightPosition.x}px ${spotlightPosition.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
      }}
    >
      <div className="mx-auto max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:py-24">
          <a
            className="group mb-8 inline-flex items-center font-medium leading-tight text-teal-400 hover:text-teal-300 transition-colors"
            href="/"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="mr-2 h-5 w-5 rotate-180 transition-transform group-hover:-translate-x-2"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                clipRule="evenodd"
              ></path>
            </svg>
            Back to Home
          </a>

          {/* About Section */}
          <div className="flex flex-col md:flex-row gap-12 items-center mb-24">
            <div className="relative group flex-shrink-0">
              <Image
                src="/profile.jpg"
                alt="Profile"
                width={400}
                height={400}
                className="rounded-lg shadow-2xl group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 rounded-lg border-2 border-teal-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform"></div>
            </div>
            <div>
              <h1 className="text-5xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500">
                My Background
              </h1>
              <div className="prose prose-invert max-w-2xl">
                <p className="text-lg leading-relaxed mb-4">
                  I began my studies at the University of Technology in 2014,
                  majoring in Information Technology. After six years, I earned
                  my Bachelor of Engineering (BE) degree. I started my
                  professional career in 2019 and achieved third prize in the
                  Huawei Cloud and AI competition the same year.
                </p>
                <p className="text-lg leading-relaxed">
                  At the start of my career, I worked as a full-stack developer.
                  Currently, I’m working as a senior front-end developer with
                  over five years of professional experience. I am now seeking
                  new opportunities to grow my skills, advance my career, and
                  build a better future.
                </p>
              </div>
            </div>
          </div>

          {/* Skills Sections */}
          <div className="space-y-24">
            {skills.map((skill, index) => (
              <div
                key={index}
                className={`group relative p-8 rounded-2xl ${skill.color} transition-all duration-300 hover:shadow-xl hover:shadow-teal-400/10`}
                data-aos={
                  skill.alignment === "left" ? "fade-right" : "fade-left"
                }
              >
                <div
                  className={`flex flex-col ${
                    skill.alignment === "right" ? "items-end text-right" : ""
                  }`}
                >
                  <span className="text-sm font-semibold tracking-wider text-teal-400 mb-2">
                    {index + 1}.0
                  </span>
                  <h2 className="text-4xl font-bold mb-4">{skill.category}</h2>
                  <p className="text-gray-300 mb-4 max-w-2xl">
                    {skill.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {skill.skills.split(", ").map((item, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-full text-sm bg-gray-800/50 text-gray-200 border border-gray-700 hover:border-teal-400 hover:text-teal-400 transition-all"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Archivepages;
