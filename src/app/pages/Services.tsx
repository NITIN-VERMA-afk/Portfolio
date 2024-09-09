"use client"
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const cardData = [
  {
    id: 1,
    title: "Web App Development",
    description: "Create beautiful and attractive web apps",
    content: "We create beautiful, attractive, and responsive websites and web apps tailored to your specific needs.",
    image: "/img/web dev.webp",
    link: "/services/web-development",
  },
  {
    id: 2,
    title: "Mobile App Development",
    description: "Develop engaging mobile apps for iOS and Android",
    content: "Our team crafts beautiful and intuitive mobile applications for both Android and iOS platforms.",
    image: "/img/app.avif",
    link: "/services/mobile-development",
  },
  {
    id: 3,
    title: "Search Engine Optimization",
    description: "Boost your online visibility",
    content: "We help improve your SEO performance by optimizing your website for search engines, increasing your online presence.",
    image: "/img/SEOog.avif",
    link: "/services/seo",
  },
  {
    id: 4,
    title: "Website Maintenance",
    description: "Keep your website running smoothly",
    content: "Our maintenance services ensure your websites stay up-to-date, secure, and perform optimally.",
    image: "/img/seo.webp",
    link: "/services/maintenance",
  },
];

const ServiceCard = ({ title, description, content, image, link }:any) => (
  <Card className="flex flex-col h-full transition-shadow hover:shadow-lg bg-blue-600">
    <CardHeader>
      <CardTitle className="text-xl font-semibold text-white">{title}</CardTitle>
      <CardDescription className="text-white">{description}</CardDescription>
    </CardHeader>
    <CardContent className="flex-1">
      <div className="relative h-48 mb-4 overflow-hidden rounded-md">
        <Image 
          src={image} 
          alt={title} 
          layout="fill" 
          objectFit="cover"
          className="transition-transform duration-300 ease-in-out hover:scale-105"
        />
      </div>
      <p className="text-sm text-white">{content}</p>
    </CardContent>
    <CardFooter>
      <Link href={link} passHref>
        <Button className="w-full bg-blue-700 group">
          Learn More
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Button>
      </Link>
    </CardFooter>
  </Card>
);

const Services = () => {
  return (
    <section id="services" className="py-16 bg-blue-400">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-center font-bold text-3xl md:text-4xl text-white mb-12"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Our Services
        </motion.h2>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {cardData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <ServiceCard {...item} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

