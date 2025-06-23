"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaNodeJs,
  FaReact,
  FaDocker,
  FaPython,
  FaLinux,
  FaGit,
  FaAws,
  FaJenkins,
  FaTerminal,
  FaBrain,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import {
  SiMui,
  SiTailwindcss,
  SiExpress,
  SiTypescript,
  SiNextdotjs,
  SiKubernetes,
  SiTensorflow,
  SiTerraform,
  SiAnsible,
  SiFramer,
} from "react-icons/si";
import { DiMongodb } from "react-icons/di";

const experienceData = [
  { id: 1, logo: <FaHtml5 className="text-[#E34F26]" />, skill: "HTML5" },
  { id: 2, logo: <FaCss3Alt className="text-[#1572B6]" />, skill: "CSS3" },
  { id: 3, logo: <IoLogoJavascript className="text-[#F7DF1E]" />, skill: "JavaScript (ES6+)" },
  { id: 4, logo: <FaBootstrap className="text-[#7952B3]" />, skill: "Bootstrap" },
  { id: 5, logo: <SiMui className="text-[#007FFF]" />, skill: "Material-UI" },
  { id: 6, logo: <SiTailwindcss className="text-[#06B6D4]" />, skill: "Tailwind CSS" },
  { id: 7, logo: <FaNodeJs className="text-[#339933]" />, skill: "Node.js" },
  { id: 8, logo: <SiExpress className="text-black" />, skill: "Express.js" },
  { id: 9, logo: <DiMongodb className="text-[#47A248]" />, skill: "MongoDB" },
  { id: 10, logo: <SiTypescript className="text-[#3178C6]" />, skill: "TypeScript" },
  { id: 11, logo: <FaReact className="text-[#61DAFB]" />, skill: "React" },
  { id: 12, logo: <SiNextdotjs className="text-black" />, skill: "Next.js" },
  { id: 13, logo: <FaDocker className="text-[#2496ED]" />, skill: "Docker" },
  { id: 14, logo: <FaPython className="text-[#3776AB]" />, skill: "Python" },
  { id: 15, logo: <FaLinux className="text-[#FCC624]" />, skill: "Linux" },
  { id: 16, logo: <SiKubernetes className="text-[#326CE5]" />, skill: "Kubernetes" },
  { id: 17, logo: <FaBrain className="text-purple-600" />, skill: "LangChain" },
  { id: 18, logo: <SiTensorflow className="text-[#FF6F00]" />, skill: "Gen AI" },
  { id: 19, logo: <FaGit className="text-[#F1502F]" />, skill: "Git" },
  { id: 20, logo: <FaTerminal className="text-[#4EAA25]" />, skill: "Scripting" },
  { id: 21, logo: <FaAws className="text-[#FF9900]" />, skill: "AWS" },
  { id: 22, logo: <FaJenkins className="text-[#D24939]" />, skill: "Jenkins" },
  { id: 23, logo: <SiTerraform className="text-[#844FBA]" />, skill: "Terraform" },
  { id: 24, logo: <SiAnsible className="text-[#EE0000]" />, skill: "Ansible" },
  { id: 25, logo: <SiFramer className="text-[#0055FF]" />, skill: "Framer Motion" },
];

const Experience = () => {
  return (
    <section id="experience" className="bg-blue-500 py-16 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-center font-bold text-3xl sm:text-4xl text-white mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Technical Expertise
        </motion.h2>

        <motion.p
          className="text-center text-white text-base sm:text-lg mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          With a diverse skill set spanning frontend and backend technologies, I bring a comprehensive approach to web development. Here's a snapshot of my technical proficiencies:
        </motion.p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6">
          {experienceData.map((item, index) => (
            <motion.div
              key={item.id}
              className="bg-white rounded-xl shadow-md p-4 sm:p-6 flex flex-col items-center justify-center text-center transition-transform duration-300 hover:shadow-xl"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-4xl sm:text-5xl mb-2">{item.logo}</div>
              <h3 className="text-sm sm:text-base font-semibold text-gray-800">{item.skill}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

