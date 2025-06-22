/* eslint-disable react/no-unescaped-entities */
"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FaHandsHelping, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaRegHandPeace } from "react-icons/fa6";
import { ArrowDown, Code, Sparkles, Zap } from "lucide-react";

const Home = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Mouse tracking for interactive effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const floatAnimation = {
    y: [-10, 10, -10],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  // Developer SVG Component
  const DeveloperSVG = () => (
    <svg
      viewBox="0 0 500 500"
      className="w-full h-auto"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background Circle */}
      <defs>
        <radialGradient id="bgGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#1e40af" stopOpacity="0.3" />
        </radialGradient>
        
        <linearGradient id="screenGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1f2937" />
          <stop offset="100%" stopColor="#111827" />
        </linearGradient>
        
        <linearGradient id="codeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#10b981" />
          <stop offset="50%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#8b5cf6" />
        </linearGradient>
      </defs>
      
      <circle cx="250" cy="250" r="240" fill="url(#bgGradient)" />
      
      {/* Laptop Base */}
      <motion.rect
        x="100" y="280" width="300" height="180" rx="15"
        fill="#374151" stroke="#6b7280" strokeWidth="2"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      />
      
      {/* Laptop Screen */}
      <motion.rect
        x="120" y="120" width="260" height="170" rx="12"
        fill="url(#screenGradient)" stroke="#4b5563" strokeWidth="3"
        initial={{ opacity: 0, rotateX: -90 }}
        animate={{ opacity: 1, rotateX: 0 }}
        transition={{ delay: 0.7, duration: 0.8 }}
      />
      
      {/* Screen Content - Code Lines */}
      <g opacity="0.9">
        <motion.rect
          x="140" y="140" width="80" height="4" rx="2"
          fill="#ef4444"
          initial={{ width: 0 }}
          animate={{ width: 80 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        />
        <motion.rect
          x="140" y="155" width="120" height="4" rx="2"
          fill="#10b981"
          initial={{ width: 0 }}
          animate={{ width: 120 }}
          transition={{ delay: 1.4, duration: 0.8 }}
        />
        <motion.rect
          x="140" y="170" width="60" height="4" rx="2"
          fill="#3b82f6"
          initial={{ width: 0 }}
          animate={{ width: 60 }}
          transition={{ delay: 1.6, duration: 0.8 }}
        />
        <motion.rect
          x="140" y="185" width="100" height="4" rx="2"
          fill="#f59e0b"
          initial={{ width: 0 }}
          animate={{ width: 100 }}
          transition={{ delay: 1.8, duration: 0.8 }}
        />
        <motion.rect
          x="140" y="200" width="90" height="4" rx="2"
          fill="#8b5cf6"
          initial={{ width: 0 }}
          animate={{ width: 90 }}
          transition={{ delay: 2.0, duration: 0.8 }}
        />
        <motion.rect
          x="140" y="215" width="110" height="4" rx="2"
          fill="#06b6d4"
          initial={{ width: 0 }}
          animate={{ width: 110 }}
          transition={{ delay: 2.2, duration: 0.8 }}
        />
        <motion.rect
          x="140" y="230" width="70" height="4" rx="2"
          fill="#84cc16"
          initial={{ width: 0 }}
          animate={{ width: 70 }}
          transition={{ delay: 2.4, duration: 0.8 }}
        />
      </g>
      
      {/* Terminal Cursor */}
      <motion.rect
        x="215" y="245" width="3" height="12" rx="1"
        fill="#10b981"
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 1, repeat: Infinity }}
      />
      
      {/* Floating Code Symbols */}
      <motion.g
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <text x="80" y="100" fill="#3b82f6" fontSize="24" fontFamily="monospace">{'<>'}</text>
        <text x="420" y="120" fill="#ef4444" fontSize="20" fontFamily="monospace">{'{}}'}</text>
        <text x="60" y="400" fill="#10b981" fontSize="18" fontFamily="monospace">{'[]'}</text>
        <text x="440" y="380" fill="#f59e0b" fontSize="22" fontFamily="monospace">{'()'}</text>
      </motion.g>
      
      {/* Floating Particles */}
      <motion.circle
        cx="350" cy="80" r="3"
        fill="#3b82f6"
        animate={{ y: [0, -20, 0], opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 3, repeat: Infinity, delay: 0 }}
      />
      <motion.circle
        cx="380" cy="90" r="2"
        fill="#10b981"
        animate={{ y: [0, -15, 0], opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
      />
      <motion.circle
        cx="420" cy="70" r="2.5"
        fill="#f59e0b"
        animate={{ y: [0, -18, 0], opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 2.8, repeat: Infinity, delay: 1 }}
      />
      
      {/* Binary Code Background */}
      <g fill="#3b82f6" opacity="0.1" fontSize="12" fontFamily="monospace">
        <motion.text
          x="30" y="200"
          animate={{ x: [30, 470, 30] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        >
          01001000 01100101 01101100 01101100 01101111
        </motion.text>
        <motion.text
          x="470" y="350"
          animate={{ x: [470, 30, 470] }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        >
          01010111 01101111 01110010 01101100 01100100
        </motion.text>
      </g>
      
      {/* WiFi Signal */}
      <g transform="translate(320, 140)">
        <motion.path
          d="M0,0 Q-10,-10 -20,0"
          stroke="#10b981" strokeWidth="2" fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ delay: 2.5, duration: 1, repeat: Infinity, repeatDelay: 2 }}
        />
        <motion.path
          d="M0,0 Q-15,-15 -30,0"
          stroke="#10b981" strokeWidth="2" fill="none" opacity="0.7"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ delay: 2.7, duration: 1, repeat: Infinity, repeatDelay: 2 }}
        />
        <motion.path
          d="M0,0 Q-20,-20 -40,0"
          stroke="#10b981" strokeWidth="2" fill="none" opacity="0.5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ delay: 2.9, duration: 1, repeat: Infinity, repeatDelay: 2 }}
        />
        <circle cx="0" cy="0" r="2" fill="#10b981" />
      </g>
      
      {/* Coffee Cup */}
      <motion.g
        transform="translate(450, 300)"
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <rect x="0" y="0" width="30" height="35" rx="5" fill="#8b4513" stroke="#654321" strokeWidth="2" />
        <rect x="2" y="2" width="26" height="25" rx="3" fill="#4a2c2a" />
        <path d="M30,10 Q40,10 40,20 Q40,30 30,30" stroke="#8b4513" strokeWidth="2" fill="none" />
        
        {/* Steam */}
        <motion.path
          d="M8,-5 Q10,-15 8,-25"
          stroke="#f3f4f6" strokeWidth="1.5" fill="none" opacity="0.6"
          animate={{ d: ["M8,-5 Q10,-15 8,-25", "M8,-5 Q6,-15 8,-25", "M8,-5 Q10,-15 8,-25"] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <motion.path
          d="M15,-5 Q17,-15 15,-25"
          stroke="#f3f4f6" strokeWidth="1.5" fill="none" opacity="0.6"
          animate={{ d: ["M15,-5 Q17,-15 15,-25", "M15,-5 Q13,-15 15,-25", "M15,-5 Q17,-15 15,-25"] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
        />
        <motion.path
          d="M22,-5 Q24,-15 22,-25"
          stroke="#f3f4f6" strokeWidth="1.5" fill="none" opacity="0.6"
          animate={{ d: ["M22,-5 Q24,-15 22,-25", "M22,-5 Q20,-15 22,-25", "M22,-5 Q24,-15 22,-25"] }}
          transition={{ duration: 2, repeat: Infinity, delay: 1 }}
        />
      </motion.g>
    </svg>
  );

  return (
    <div
      id="home"
      className="min-h-screen w-full relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-20 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl"
          animate={{
            x: mousePosition.x * 0.02,
            y: mousePosition.y * 0.02,
          }}
          transition={{ type: "spring", stiffness: 50, damping: 20 }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl"
          animate={{
            x: mousePosition.x * -0.01,
            y: mousePosition.y * -0.01,
          }}
          transition={{ type: "spring", stiffness: 30, damping: 20 }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-400/5 rounded-full blur-3xl"
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 text-blue-300/20"
          animate={floatAnimation}
        >
          <Code size={32} />
        </motion.div>
        <motion.div
          className="absolute top-1/3 right-1/4 text-blue-300/20"
          animate={{ ...floatAnimation, transition: { ...floatAnimation.transition, delay: 1 } }}
        >
          <Sparkles size={24} />
        </motion.div>
        <motion.div
          className="absolute bottom-1/3 left-1/3 text-blue-300/20"
          animate={{ ...floatAnimation, transition: { ...floatAnimation.transition, delay: 2 } }}
        >
          <Zap size={28} />
        </motion.div>
      </div>

      {/* Main Content */}
      <motion.div
        className="relative z-10 min-h-screen px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-24 flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Text Content */}
        <div className="flex-1 flex flex-col items-center lg:items-start gap-6 text-center lg:text-left max-w-2xl">
          <motion.div variants={itemVariants} className="space-y-2">
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 backdrop-blur-sm rounded-full border border-blue-400/30 mb-4"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-blue-100 text-sm font-medium">Available for work</span>
            </motion.div>
            
            <motion.h3
              className="text-2xl sm:text-3xl lg:text-4xl text-blue-200 font-light"
              variants={itemVariants}
            >
              Hello, I'm
            </motion.h3>
          </motion.div>

          <motion.h1
            className="font-bold text-white text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-tight"
            variants={itemVariants}
          >
            <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent">
              NITIN VERMA
            </span>
            <motion.span
              className="inline-block ml-4"
              animate={{ rotate: [0, 20, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <FaRegHandPeace className="text-yellow-400 text-4xl lg:text-5xl" />
            </motion.span>
          </motion.h1>

          <motion.div variants={itemVariants} className="space-y-4">
            <h2 className="font-bold text-white text-2xl sm:text-3xl lg:text-4xl xl:text-5xl">
              <span className="text-blue-200">Building</span>{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                products
              </span>{" "}
              <span className="text-blue-200">and</span>{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                brands
              </span>
            </h2>
            <p className="text-blue-100 text-lg lg:text-xl leading-relaxed max-w-xl">
              Full-stack developer passionate about creating innovative digital experiences 
              that make a difference. Let's bring your ideas to life!
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="flex items-center gap-4 mt-6">
            <div className="flex items-center gap-3">
              {[
                { icon: FaGithub, href: "https://github.com/NITIN-VERMA-afk", label: "GitHub" },
                { icon: FaLinkedin, href: "#", label: "LinkedIn" },
                { icon: FaTwitter, href: "#", label: "Twitter" }
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-blue-500/20 backdrop-blur-sm rounded-full border border-blue-400/30 flex items-center justify-center text-blue-200 hover:text-white hover:bg-blue-500/30 transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={label}
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 mt-8">
            <Button 
              asChild
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-0 px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <motion.a 
                href="#contact" 
                className="flex items-center gap-3"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Let's work together 
                <motion.div
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <FaHandsHelping />
                </motion.div>
              </motion.a>
            </Button>
            
            <Button 
              asChild
              variant="outline" 
              className="border-blue-400 bg-blue-500/20 hover:bg-blue-500/30 text-white hover:text-white px-8 py-6 text-lg font-semibold backdrop-blur-sm"
            >
              <motion.a 
                href="#portfolio" 
                className="flex items-center gap-3"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                View My Work
                <ArrowDown size={20} />
              </motion.a>
            </Button>
          </motion.div>
        </div>

        {/* SVG Section */}
        <motion.div
          className="flex-1 max-w-lg"
          variants={itemVariants}
        >
          <motion.div
            className="relative"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            {/* Decorative Elements */}
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-3xl blur-2xl"></div>
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full opacity-20 blur-xl"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full opacity-20 blur-xl"></div>
            
            {/* Main SVG */}
            <motion.div
              className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-2 border-blue-400/20 bg-gradient-to-br from-slate-900/50 to-slate-800/50 backdrop-blur-sm p-6"
              animate={floatAnimation}
            >
              <DeveloperSVG />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/10 to-transparent rounded-3xl"></div>
            </motion.div>

            {/* Floating Badge */}
            <motion.div
              className="absolute -bottom-4 -right-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full shadow-lg border-2 border-white/20 backdrop-blur-sm z-20"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 1.2, duration: 0.5, type: "spring" }}
              whileHover={{ scale: 1.1 }}
            >
              <span className="font-semibold text-sm">Available</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
      >
        <motion.div
          className="flex flex-col items-center gap-2 text-blue-200"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="text-sm font-medium">Scroll to explore</span>
          <ArrowDown size={20} />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Home;