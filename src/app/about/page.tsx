"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

const SkillsPage = () => {
  const router = useRouter();
  const [hoveredSkill, setHoveredSkill] = useState<{
    name: string;
    description: string;
    category: string;
  } | null>(null);

  const skillCategories = [
    {
      name: "Frontend Development",
      skills: [
        {
          name: "Next.js",
          description: "React framework for SSR/SSG applications",
          proficiency: 90,
        },
        {
          name: "React",
          description: "JavaScript library for building UIs",
          proficiency: 95,
        },
        {
          name: "Vue",
          description: "Progressive JavaScript framework",
          proficiency: 80,
        },
        {
          name: "TypeScript",
          description: "Typed superset of JavaScript",
          proficiency: 85,
        },
        {
          name: "JavaScript",
          description: "Programming language for the web",
          proficiency: 90,
        },
        {
          name: "Tailwind CSS",
          description: "Utility-first CSS framework",
          proficiency: 85,
        },
        {
          name: "SASS/SCSS",
          description: "CSS preprocessor with advanced features",
          proficiency: 80,
        },
        {
          name: "MUI",
          description: "React component library based on Material Design",
          proficiency: 75,
        },
        {
          name: "Redux",
          description: "Predictable state container for JavaScript apps",
          proficiency: 85,
        },
        {
          name: "React Query",
          description: "Hooks for fetching, caching and updating data",
          proficiency: 80,
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
      accent: "bg-blue-400",
    },
    {
      name: "Backend Development",
      skills: [
        {
          name: "Node.js",
          description: "JavaScript runtime built on Chrome's V8",
          proficiency: 85,
        },
        {
          name: "Express",
          description: "Minimalist web framework for Node.js",
          proficiency: 80,
        },
        {
          name: "Java",
          description: "Object-oriented programming language",
          proficiency: 75,
        },
        {
          name: "Spring Boot",
          description: "Framework for creating stand-alone Spring applications",
          proficiency: 70,
        },
        {
          name: "Python",
          description: "High-level programming language",
          proficiency: 80,
        },
        {
          name: "Django",
          description: "High-level Python web framework",
          proficiency: 75,
        },
        {
          name: "MySQL",
          description: "Relational database management system",
          proficiency: 85,
        },
        {
          name: "PostgreSQL",
          description: "Powerful open-source relational database",
          proficiency: 80,
        },
        {
          name: "MongoDB",
          description: "NoSQL document-oriented database",
          proficiency: 75,
        },
        {
          name: "GraphQL",
          description: "Query language for APIs",
          proficiency: 80,
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
            d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
          />
        </svg>
      ),
      color: "border-purple-400/30 bg-purple-900/10",
      accent: "bg-purple-400",
    },
    {
      name: "Cloud & DevOps",
      skills: [
        {
          name: "AWS Lambda",
          description: "Serverless compute service",
          proficiency: 75,
        },
        {
          name: "AWS EC2",
          description: "Scalable cloud computing service",
          proficiency: 70,
        },
        {
          name: "AWS S3",
          description: "Object storage service",
          proficiency: 80,
        },
        {
          name: "Docker",
          description: "Platform for containerizing applications",
          proficiency: 85,
        },
        {
          name: "Kubernetes",
          description: "Container orchestration system",
          proficiency: 70,
        },
        {
          name: "Terraform",
          description: "Infrastructure as code tool",
          proficiency: 65,
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
            d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
          />
        </svg>
      ),
      color: "border-green-400/30 bg-green-900/10",
      accent: "bg-green-400",
    },
    {
      name: "Blockchain",
      skills: [
        {
          name: "Ethereum",
          description: "Blockchain platform for smart contracts",
          proficiency: 70,
        },
        {
          name: "Solidity",
          description: "Programming language for Ethereum smart contracts",
          proficiency: 75,
        },
        {
          name: "Web3.js",
          description: "JavaScript library for Ethereum",
          proficiency: 70,
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
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
      color: "border-yellow-400/30 bg-yellow-900/10",
      accent: "bg-yellow-400",
    },
    {
      name: "Mobile Development",
      skills: [
        {
          name: "React Native",
          description: "Framework for building native apps with React",
          proficiency: 75,
        },
        {
          name: "Flutter",
          description: "UI toolkit for building natively compiled applications",
          proficiency: 60,
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
      accent: "bg-pink-400",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 p-4 sm:p-8">
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

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-cyan-600"
        >
          Technical Skills
        </motion.h1>

        <div className="space-y-6 sm:space-y-8">
          {skillCategories.map((category) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className={`p-5 sm:p-6 rounded-xl border ${category.color} shadow-lg`}
            >
              <div className="flex items-center mb-4">
                <div
                  className={`w-1 h-8 rounded-full ${category.accent} mr-3`}
                ></div>
                <h2 className="text-lg sm:text-xl font-semibold text-white flex items-center">
                  {category.icon}
                  {category.name}
                </h2>
              </div>

              <div className="flex flex-wrap gap-2 sm:gap-3">
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ scale: 1.05 }}
                    onMouseEnter={() =>
                      setHoveredSkill({
                        name: skill.name,
                        description: skill.description,
                        category: category.name,
                      })
                    }
                    onMouseLeave={() => setHoveredSkill(null)}
                    className="relative px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg bg-gray-800/70 text-gray-300 border border-gray-700 hover:bg-teal-400/10 hover:border-teal-400/30 hover:text-teal-300 transition-colors cursor-default group"
                  >
                    {skill.name}
                    <div
                      className="absolute bottom-0 left-0 h-1 bg-teal-400/50 rounded-b-lg"
                      style={{ width: `${skill.proficiency}%` }}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skill description panel */}
        <AnimatePresence>
          {hoveredSkill && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25 }}
              className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-4 py-3 rounded-lg shadow-xl border border-gray-700 z-50 max-w-xs sm:max-w-md w-full"
            >
              <div className="flex justify-between items-start mb-1">
                <h3 className="text-teal-400 font-medium">
                  {hoveredSkill.name}
                </h3>
                <span className="text-xs text-gray-400 bg-gray-800 px-2 py-1 rounded">
                  {hoveredSkill.category}
                </span>
              </div>
              <p className="text-sm text-gray-300">
                {hoveredSkill.description}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default SkillsPage;
