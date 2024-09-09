"use client"
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface ProjectcardsProps {
  title: string;
  detail: string;
  tech: string;
  img: string;
  project: string;
  imagePosition: "left" | "right";
}

const Projectcards: React.FC<ProjectcardsProps> = ({ 
  title, 
  detail, 
  tech, 
  img, 
  project, 
  imagePosition 
}) => {
  return (
    <motion.div 
      className={`flex flex-col ${imagePosition === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'} gap-4 mb-8`}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <div className="md:w-1/2">
        <Image src={img} alt={title} width={500} height={300} className="rounded-lg" />
      </div>
      <div className="md:w-1/2 flex flex-col justify-center">
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <p className="mb-2">{detail}</p>
        <p className="mb-4">{tech}</p>
        <Button>
          <a href={project} target="_blank" rel="noopener noreferrer">View Project</a>
        </Button>
      </div>
    </motion.div>
  );
};

export default Projectcards;