"use client"

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ProjectData {
  id: number;
  title: string;
  detail: string;
  tech: string;
  img: string;
  project: string;
}

const ProjectData: ProjectData[] = [
  {
    id: 1,
    title: "Ecosync",
    detail: "Let us help you reduce your carbon footprint.",
    tech: "NEXT JS",
    img: "/img/logo.jpg",
    project: "https://ecosync-mu.vercel.app"
  },
  {
    id: 2,
    title: "Pokepedia",
    detail: "A Pokémon search app where you can find information on any Pokémon.",
    tech: "MERN",
    img: "/img/pokemon.jpg",
    project: "https://pokemon-virid-five.vercel.app"
  },
  {
    id: 3,
    title: "FitQuest",
    detail: "A comprehensive fitness app - your solution for all fitness challenges.",
    tech: "MERN",
    img: "/img/gym.jpg",
    project: "https://github.com/NITIN-VERMA-afk/FitQuest"
  },
];

const Portfolio: React.FC = () => {
  const [[page, direction], setPage] = useState([0, 0]);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  const projectIndex = ((page % ProjectData.length) + ProjectData.length) % ProjectData.length;

  const variants = {
    enter: (direction: number) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0
      };
    }
  };

  return (
    <motion.div
      id="portfolio"
      className="pt-20 pb-20 bg-blue-600 text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-center mb-12"
      >
        <h1 className="font-bold text-5xl mb-4">Portfolio</h1>
        <p className="text-xl ">Explore my latest projects</p>
      </motion.div>

      <div className="relative h-[300px] max-w-4xl mx-auto overflow-hidden">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={page}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
            className="absolute w-full h-full flex flex-col md:flex-row items-center justify-center"
          >
            <div className="w-full md:w-1/2 p-2">
              <Image
                src={ProjectData[projectIndex].img}
                alt={ProjectData[projectIndex].title}
                width={400}
                height={300}
                className="rounded-lg shadow-xl mb-1"
              />
            </div>
            <div className="w-full md:w-1/2 p-1">
              <h2 className="text-3xl font-bold mb-4">{ProjectData[projectIndex].title}</h2>
              <p className="text-gray-300 mb-4">{ProjectData[projectIndex].detail}</p>
              <p className="text-blue-400 mb-6 cursor-pointer">Tech Stack: {ProjectData[projectIndex].tech}</p>
              <Button asChild className="bg-blue-500 hover:bg-blue-600">
                <Link href={ProjectData[projectIndex].project} target="_blank">View Project</Link>
              </Button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex justify-center mt-8 space-x-4">
        <Button
          onClick={() => paginate(-1)}
          className="bg-blue-700 hover:bg-blue-800"
          aria-label="Previous project"
        >
          <ChevronLeft />
        </Button>
        <Button
          onClick={() => paginate(1)}
          className="bg-blue-700 hover:bg-blue-800"
          aria-label="Next project"
        >
          <ChevronRight />
        </Button>
      </div>

      <motion.div
        className="text-center mt-12"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Button asChild className="bg-blue-700 hover:bg-blue-800">
          <Link href="https://github.com/NITIN-VERMA-afk">View All Projects</Link>
        </Button>
      </motion.div>
    </motion.div>
  );
};

export default Portfolio;
