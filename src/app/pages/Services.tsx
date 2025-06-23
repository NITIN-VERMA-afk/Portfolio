"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, X } from "lucide-react";

interface Service {
  title: string;
  challenge: string;
  solution: string;
  result: string[];
}

interface CardData {
  id: number;
  title: string;
  description: string;
  content: string;
  image: string;
  link: string;
}

const services: Service[] = [
  {
    title: "Web App Development",
    challenge: "Looking for a web app or website for your business",
    solution: "We create beautiful, attractive, and responsive websites and web apps tailored to your specific needs.",
    result: [
      "Websites and web apps that are visually appealing, user-friendly, and easy to navigate.",
      "40% faster than any WordPress website",
      "30% more secure than any other website",
      "10% less costly than any other website",
      "20% more traffic",
    ],
  },
  {
    title: "Mobile App Development",
    challenge: "Looking for a mobile app for your business",
    solution: "We create beautiful, attractive, and responsive mobile apps tailored to your specific needs.",
    result: [
      "Engaging and user-friendly mobile apps",
      "Seamless integration with your business ecosystem",
      "30% more secure than any other app",
      "10% less costly than any other app development company",
      "20% more traffic",
    ],
  },
  {
    title: "Search Engine Optimization",
    challenge: "Want more reach for your website",
    solution: "Our SEO experts will optimize your website to improve its visibility and ranking on search engine results pages.",
    result: [
      "Increased organic traffic and visibility on major search engines",
      "Improved search engine rankings for your target keywords",
      "Better user experience and engagement on your website",
      "Increased conversion rates and lead generation",
      "Long-term, sustainable growth for your online presence",
    ],
  },
  {
    title: "Website Maintenance",
    challenge: "Tired of paying a lot of money for SEO and not getting results",
    solution: "Our comprehensive website maintenance services will ensure your website is always up-to-date, secure, and performing optimally.",
    result: [
      "Worry-free website management and support",
      "Regular content updates and improvements",
      "Proactive security measures to protect your website",
      "Improved website performance and user experience",
      "Peace of mind knowing your online presence is in good hands",
    ],
  },
];

const cardData: CardData[] = [
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

interface ServiceCardProps extends CardData {
  onCardClick: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  content,
  image,
  onCardClick,
}) => (
  <Card className="flex flex-col h-full min-h-[500px] transition-shadow hover:shadow-lg bg-blue-600">
    <CardHeader>
      <CardTitle className="text-xl font-semibold text-white">{title}</CardTitle>
      <CardDescription className="text-white">{description}</CardDescription>
    </CardHeader>
    <CardContent className="flex-1">
      <div className="relative h-48 mb-4 overflow-hidden rounded-md">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-300 ease-in-out hover:scale-105"
        />
      </div>
      <p className="text-sm text-white">{content}</p>
    </CardContent>
    <CardFooter>
      <Button className="w-full bg-blue-700 group" onClick={onCardClick}>
        Learn More
        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
      </Button>
    </CardFooter>
  </Card>
);

interface ServiceDetailsProps {
  service: Service | null;
  onClose: () => void;
}

const ServiceDetails: React.FC<ServiceDetailsProps> = ({ service, onClose }) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 p-4 overflow-y-auto">
      <div className="bg-blue-600 text-white p-6 sm:p-8 rounded-lg w-full max-w-lg relative">
        <Button
          className="absolute top-2 right-2 p-1"
          variant="ghost"
          onClick={onClose}
        >
          <X className="h-6 w-6" />
        </Button>
        <h3 className="text-xl sm:text-2xl font-bold mb-4">{service.title}</h3>
        <p className="mb-4 text-sm sm:text-base">{service.challenge}</p>
        <p className="mb-4 text-sm sm:text-base">{service.solution}</p>
        <ul className="list-disc pl-4 text-sm sm:text-base">
          {service.result.map((item, index) => (
            <li key={index} className="mb-2">
              {item}
            </li>
          ))}
        </ul>
        <Button
          className="mt-4 w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
          onClick={onClose}
        >
          Close
        </Button>
      </div>
    </div>
  );
};

const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const handleCardClick = (service: Service) => {
    setSelectedService(service);
  };

  const handleCloseDetails = () => {
    setSelectedService(null);
  };

  return (
    <section id="services" className="py-16 px-4 sm:px-6 lg:px-12 bg-blue-400">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-center font-bold text-3xl md:text-4xl text-white mb-12"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Our Services
        </motion.h2>

        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {cardData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <ServiceCard
                {...item}
                onCardClick={() =>
                  handleCardClick(services.find((s) => s.title === item.title)!)
                }
              />
            </motion.div>
          ))}
        </div>
      </div>
      <ServiceDetails service={selectedService} onClose={handleCloseDetails} />
    </section>
  );
};

export default Services;

