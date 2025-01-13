/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FaHandsHelping } from "react-icons/fa";
import { FaRegHandPeace } from "react-icons/fa6";

const Home = () => {
  return (
    <div
      id="home"
      className="min-h-screen w-full px-4 sm:px-2 lg:px-8 py-2 sm:py-4 lg:py-24 flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16"
    >
      <motion.div
        className="flex flex-col items-center lg:items-start gap-4 text-center lg:text-left"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h3
          className="text-2xl sm:text-3xl lg:text-4xl text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          I&apos;m
        </motion.h3>
        <motion.h1
          className="font-bold text-white text-3xl sm:text-4xl lg:text-5xl xl:text-6xl flex items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          NITIN VERMA <FaRegHandPeace className="inline-block text-yellow-500" />
        </motion.h1>
        <motion.h1
          className="font-bold text-white text-2xl sm:text-3xl lg:text-4xl xl:text-5xl mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Building products and brands
        </motion.h1>
        <motion.div
          className="mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <Button className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center">
            <a href="#contact" className="flex items-center gap-2">
              Let&apos;s work together <FaHandsHelping />
            </a>
          </Button>
        </motion.div>
      </motion.div>
      <motion.div
        className="mt-12 lg:mt-0"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        <Image
          src="/img/img1.avif"
          alt="Developer"
          width={500}
          height={500}
          className="rounded-lg shadow-lg max-w-full h-auto"
        />
      </motion.div>
    </div>
  );
};

export default Home;