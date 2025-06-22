"use client"

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ExternalLink, Github, Code, Zap } from "lucide-react";

interface ProjectData {
  id: number;
  title: string;
  detail: string;
  tech: string;
  img: string;
  project: string;
  github?: string;
  featured?: boolean;
}

const ProjectData: ProjectData[] = [
  {
    id: 1,
    title: "pitch-pilot-ai",
    detail: "Let us help you analyze and refine your startup pitch",
    tech: "NEXT JS • TAILWIND • TYPESCRIPT",
    img: "/img/stock.png",
    project: "https://pitch-pilot-ai.vercel.app",
    github: "https://github.com/NITIN-VERMA-afk/PitchPilot-AI",
    featured: true
  },
  {
    id: 1,
    title: "stock-scope",
    detail: "analyze us stocks from 1 place",
    tech: "NEXT JS • TAILWIND • TYPESCRIPT",
    
    img: "/img/ananlyse.png",
    project: "https://stock-scope.vercel.app",
    github: "https://github.com/NITIN-VERMA-afk/StockScope",
    featured: true
  },
  {
    id: 3,
    title: "Ecosync",
    detail: "Let us help you reduce your carbon footprint with intelligent tracking and sustainable recommendations.",
    tech: "NEXT JS • TAILWIND • TYPESCRIPT",
    img: "/img/logo.jpg",
    project: "https://ecosync-mu.vercel.app",
    github: "https://github.com/NITIN-VERMA-afk/ecosync",
    featured: true
  },
  {
    id: 4,
    title: "Pokepedia",
    detail: "A comprehensive Pokémon search app with detailed stats, abilities, and evolution chains.",
    tech: "MERN • REDUX • POKEMON API",
    img: "/img/pokemon.jpg",
    project: "https://pokemon-virid-five.vercel.app",
    github: "https://github.com/NITIN-VERMA-afk/pokemon"
  },
  {
    id: 5,
    title: "jmjStudio",
    detail: "Elegant wedding photography studio website with stunning galleries and booking system.",
    tech: "NEXT JS • FRAMER MOTION • SANITY",
    img: "/img/jmj.png",
    project: "https://jmjstudio.vercel.app",
    github: "https://github.com/NITIN-VERMA-afk/jmjstudio"
  },
  {
    id: 6,
    title: "FitQuest",
    detail: "A comprehensive fitness app with workout tracking, nutrition planning, and progress analytics.",
    tech: "MERN • SOCKET.IO • CHART.JS",
    img: "/img/gym.jpg",
    project: "https://github.com/NITIN-VERMA-afk/FitQuest",
    github: "https://github.com/NITIN-VERMA-afk/FitQuest"
  },
];

const Portfolio: React.FC = () => {
  const [[page, direction], setPage] = useState([0, 0]);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        paginate(1);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [page, isAutoPlaying]);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const projectIndex = ((page % ProjectData.length) + ProjectData.length) % ProjectData.length;
  const currentProject = ProjectData[projectIndex];

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
      rotateY: direction > 0 ? 45 : -45
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
      rotateY: direction < 0 ? 45 : -45
    })
  };

  const techStack = currentProject.tech.split(" • ");

  return (
    <div className="min-h-screen bg-blue-600 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-800/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-300/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <motion.div
        id="portfolio"
        className="relative z-10 pt-20 pb-20 px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Header Section */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-blue-800/30 backdrop-blur-sm rounded-full border border-blue-300/30"
            whileHover={{ scale: 1.05 }}
          >
            <Code className="w-5 h-5 text-blue-200" />
            <span className="text-blue-100 font-medium">Featured Work</span>
          </motion.div>
          <h1 className="font-bold text-6xl md:text-7xl mb-6 text-white">
            Portfolio
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
            Explore my latest projects showcasing modern web development and innovative solutions
          </p>
        </motion.div>

        {/* Project Showcase */}
        <div className="relative max-w-7xl mx-auto">
                      <div className="relative h-[600px] md:h-[500px] overflow-hidden rounded-3xl bg-blue-800/30 backdrop-blur-xl border border-blue-400/30 shadow-2xl">
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
                  opacity: { duration: 0.3 },
                  scale: { duration: 0.3 },
                  rotateY: { duration: 0.3 }
                }}
                className="absolute w-full h-full p-8 md:p-12"
              >
                <div className="flex flex-col lg:flex-row items-center justify-between h-full gap-8">
                  {/* Project Image */}
                  <motion.div 
                    className="w-full lg:w-1/2 relative group"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                      <Image
                        src={currentProject.img}
                        alt={currentProject.title}
                        width={600}
                        height={400}
                        className="w-full h-72 md:h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      {currentProject.featured && (
                        <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1 bg-yellow-500/90 backdrop-blur-sm rounded-full">
                          <Zap className="w-4 h-4 text-yellow-900" />
                          <span className="text-yellow-900 font-semibold text-sm">Featured</span>
                        </div>
                      )}
                    </div>
                  </motion.div>

                  {/* Project Details */}
                  <div className="w-full lg:w-1/2 space-y-6">
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                        {currentProject.title}
                      </h2>
                      <p className="text-blue-100 text-lg leading-relaxed mb-6">
                        {currentProject.detail}
                      </p>
                    </motion.div>

                    {/* Tech Stack */}
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      className="space-y-3"
                    >
                      <p className="text-blue-200 font-semibold">Tech Stack:</p>
                      <div className="flex flex-wrap gap-2">
                        {techStack.map((tech, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-blue-700/40 backdrop-blur-sm rounded-full border border-blue-300/30 text-blue-100 text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </motion.div>

                    {/* Action Buttons */}
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.4 }}
                      className="flex flex-wrap gap-4 pt-4"
                    >
                      <Button asChild className="bg-blue-500 hover:bg-blue-600 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                        <Link href={currentProject.project} target="_blank" className="flex items-center gap-2">
                          <ExternalLink className="w-4 h-4" />
                          View Live
                        </Link>
                      </Button>
                      {currentProject.github && (
                        <Button asChild variant="outline" className="border-blue-400 bg-blue-800/30 hover:bg-blue-700/40 text-white hover:text-white">
                          <Link href={currentProject.github} target="_blank" className="flex items-center gap-2">
                            <Github className="w-4 h-4" />
                            Source Code
                          </Link>
                        </Button>
                      )}
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center items-center mt-8 space-x-6">
            <Button
              onClick={() => paginate(-1)}
              className="bg-blue-700 hover:bg-blue-800 backdrop-blur-sm border border-blue-400/30 text-white hover:text-white w-12 h-12 rounded-full p-0 shadow-lg hover:shadow-xl transition-all duration-300"
              aria-label="Previous project"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            {/* Project Indicators */}
            <div className="flex space-x-2">
              {ProjectData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setPage([index, index > projectIndex ? 1 : -1])}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === projectIndex
                      ? 'bg-blue-300 w-8'
                      : 'bg-blue-500 hover:bg-blue-400'
                  }`}
                  aria-label={`Go to project ${index + 1}`}
                />
              ))}
            </div>

            <Button
              onClick={() => paginate(1)}
              className="bg-blue-700 hover:bg-blue-800 backdrop-blur-sm border border-blue-400/30 text-white hover:text-white w-12 h-12 rounded-full p-0 shadow-lg hover:shadow-xl transition-all duration-300"
              aria-label="Next project"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Button asChild className="bg-blue-700 hover:bg-blue-800 text-white border-0 px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
            <Link href="https://github.com/NITIN-VERMA-afk" target="_blank" className="flex items-center gap-3">
              <Github className="w-5 h-5" />
              View All Projects
            </Link>
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Portfolio;
