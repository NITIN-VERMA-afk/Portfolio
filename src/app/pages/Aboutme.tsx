"use client"
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FaReact, FaNodeJs, FaJs, FaHtml5, FaCss3 } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";

const AboutMe = () => {
  return (
    <div id="about" className=" text-white p-8">
      <h1 className="text-3xl font-bold mb-8">About me</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
       
        <motion.div
          className="bg-blue-600 p-6 rounded-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src="/img/my_pic.jpg"
            alt="Nitin Verma"
            width={100}
            height={100}
            className="rounded-full mb-4"
          />
          <h2 className="text-xl font-semibold mb-2">Hi, I'm Nitin Verma</h2>
          <p className="">
          With over 5 years of experience, I have refined my skills in software development, specializing in creating dynamic and responsive web apps.
          </p>
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          className="bg-blue-600 p-6 rounded-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-xl font-semibold mb-4">Tech Stack</h2>
          <p className=" mb-4">
            I specialize in a variety of languages, frameworks, and tools that allow me to build robust and scalable applications.
          </p>
          <div className="flex justify-center space-x-4">
            <FaReact className="text-4xl text-blue-400" />
            <FaNodeJs className="text-4xl text-green-500" />
            <FaJs className="text-4xl text-yellow-400" />
            <SiTypescript className="text-4xl text-yellow-600" />
            <FaHtml5 className="text-4xl text-orange-500" />
            <FaCss3 className="text-4xl text-yellow-500" />
          </div>
        </motion.div>

        {/* Location */}
        <motion.div
          className="bg-blue-600 p-6 rounded-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-xl font-semibold mb-2">Flexible with time zones & locations</h2>
          <p className=" mb-4">
            I'm based in bilaspur, Himachal Pardesh and open to remote work worldwide.
          </p>
          <Button  className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded">
            Contact Me
          </Button>
        </motion.div>

        {/* Passion for Coding */}
        <motion.div
          className="bg-blue-600 p-6 rounded-lg md:col-span-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h2 className="text-xl font-semibold mb-2">My Passion for Coding</h2>
          <p className="">
            I love solving problems and building things through code. Programming isn't just my profession—it's my passion. I enjoy exploring new technologies and enhancing my skills.
          </p>
        </motion.div>

        {/* Contact */}
        <motion.div
          className="bg-blue-600 p-6 rounded-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <h2 className="text-xl font-semibold mb-4 text-gray-300">Contact me</h2>
          <p className=" mb-2">nitinvermanv61506@gmail.com</p>
          <div className="flex justify-center space-x-2">
            {[9, 0, 1, 5, 3,0,8,8,8,1].map((num) => (
              <div key={num} className="w-8 h-8 bg-blue-800 rounded-full flex items-center justify-center">
                {num}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutMe;