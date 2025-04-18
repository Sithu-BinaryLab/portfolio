"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const SkillsPage = () => {
  const router = useRouter();
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const skillCategories = [
    {
      name: "Frontend Development",
      skills: [
        {
          name: "Next.js",
          description: "React framework for SSR/SSG applications",
        },
        { name: "React", description: "JavaScript library for building UIs" },
        { name: "Vue", description: "Progressive JavaScript framework" },
        { name: "TypeScript", description: "Typed superset of JavaScript" },
        { name: "JavaScript", description: "Programming language for the web" },
        { name: "Tailwind CSS", description: "Utility-first CSS framework" },
        {
          name: "SASS/SCSS",
          description: "CSS preprocessor with advanced features",
        },
        {
          name: "MUI",
          description: "React component library based on Material Design",
        },
        {
          name: "Redux",
          description: "Predictable state container for JavaScript apps",
        },
        {
          name: "React Query",
          description: "Hooks for fetching, caching and updating data",
        },
      ],
      icon: (
        <svg
          className="w-5 h-5 mr-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      color: "border-blue-400/30 bg-blue-900/10",
    },
    {
      name: "Backend Development",
      skills: [
        {
          name: "Node.js",
          description: "JavaScript runtime built on Chrome's V8",
        },
        {
          name: "Express",
          description: "Minimalist web framework for Node.js",
        },
        { name: "Java", description: "Object-oriented programming language" },
        {
          name: "Spring Boot",
          description: "Framework for creating stand-alone Spring applications",
        },
        { name: "Python", description: "High-level programming language" },
        { name: "Django", description: "High-level Python web framework" },
        { name: "MySQL", description: "Relational database management system" },
        {
          name: "PostgreSQL",
          description: "Powerful open-source relational database",
        },
        { name: "MongoDB", description: "NoSQL document-oriented database" },
        { name: "GraphQL", description: "Query language for APIs" },
      ],
      icon: (
        <svg
          className="w-5 h-5 mr-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
          />
        </svg>
      ),
      color: "border-purple-400/30 bg-purple-900/10",
    },
    {
      name: "Cloud & DevOps",
      skills: [
        { name: "AWS Lambda", description: "Serverless compute service" },
        { name: "AWS EC2", description: "Scalable cloud computing service" },
        { name: "AWS S3", description: "Object storage service" },
        {
          name: "Docker",
          description: "Platform for containerizing applications",
        },
        { name: "Kubernetes", description: "Container orchestration system" },
        { name: "Terraform", description: "Infrastructure as code tool" },
      ],
      icon: (
        <svg
          className="w-5 h-5 mr-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
          />
        </svg>
      ),
      color: "border-green-400/30 bg-green-900/10",
    },
    {
      name: "Blockchain",
      skills: [
        {
          name: "Ethereum",
          description: "Blockchain platform for smart contracts",
        },
        {
          name: "Solidity",
          description: "Programming language for Ethereum smart contracts",
        },
        { name: "Web3.js", description: "JavaScript library for Ethereum" },
      ],
      icon: (
        <svg
          className="w-5 h-5 mr-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
      color: "border-yellow-400/30 bg-yellow-900/10",
    },
    {
      name: "Mobile Development",
      skills: [
        {
          name: "React Native",
          description: "Framework for building native apps with React",
        },
        {
          name: "Flutter",
          description: "UI toolkit for building natively compiled applications",
        },
      ],
      icon: (
        <svg
          className="w-5 h-5 mr-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
          />
        </svg>
      ),
      color: "border-pink-400/30 bg-pink-900/10",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Back Button */}
        <button
          onClick={() => router.back()}
          className="mb-8 inline-flex items-center text-sm text-teal-400 hover:text-teal-300 transition-colors group"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-4 h-4 mr-2 rotate-180 group-hover:-translate-x-1 transition-transform"
          >
            <path
              fillRule="evenodd"
              d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
              clipRule="evenodd"
            />
          </svg>
          Go Back
        </button>

        <h1 className="text-4xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-cyan-600">
          Technical Skills
        </h1>

        <div className="space-y-8">
          {skillCategories.map((category) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className={`p-6 rounded-xl border ${category.color}`}
            >
              <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
                {category.icon}
                {category.name}
              </h2>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ scale: 1.05 }}
                    onMouseEnter={() => setHoveredSkill(skill.name)}
                    onMouseLeave={() => setHoveredSkill(null)}
                    className="px-4 py-2 rounded-lg bg-gray-800/70 text-gray-300 border border-gray-700 hover:bg-teal-400/10 hover:border-teal-400/30 hover:text-teal-300 transition-colors cursor-default"
                  >
                    {skill.name}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skill description panel */}
        {hoveredSkill && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-4 py-2 rounded-lg shadow-xl border border-gray-700 z-50 max-w-md text-center"
          >
            <p className="text-teal-400 font-medium">{hoveredSkill}</p>
            <p className="text-sm">
              {skillCategories
                .flatMap((c) => c.skills)
                .find((s) => s.name === hoveredSkill)?.description ||
                `Experience with ${hoveredSkill}`}
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default SkillsPage;
