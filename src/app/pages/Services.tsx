import React from "react";
import Image from "next/image";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link"

const cardData = [
  {
    id: 1,
    CardTitle: "web app development",
    CardDescription: " create beautiful and attractive web apps.",
    CardContent: "we create beautiful attractive and responsive website and web apps according to your need ",
    img: "/img/web dev.webp",
    Cardfooter: "know more",
  },
  {
    id: 2,
    CardTitle: "app development",
    CardDescription: " create beautiful and attractive mobile apps",
    CardContent: "we create beautiful and attractive mobile apps for both android and ios platform",
    img: "/img/app.avif",
    Cardfooter: "know more",
  },
  {
    id: 3,
    CardTitle: "SEO",
    CardDescription: "help increasing your seo",
    CardContent: "we help increasing your seo performance by optimize your website for search engines ",
    img: "/img/SEOog.avif",
    Cardfooter: "know more",
  },
  {
    id: 4,
    CardTitle: "maintenance",
    CardDescription: "provide yearly maintenance",
    CardContent: "we help to fix and update your websites so they can run smoothly",
    img: "/img/seo.webp",
    Cardfooter: "know more",
  },
];

const Services = () => {
  return (
    <div id="services" className="container pt-24">
      <h1 className="text-center font-bold text-4xl my-7">Services</h1>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {cardData.map((item) => (
          <Card className="flex flex-col h-full" key={item.id}>
            <CardHeader>
              <CardTitle>{item.CardTitle}</CardTitle>
              <CardDescription>{item.CardDescription}</CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <div className="relative h-48">
                <Image src={item.img} alt="web apps" layout="fill" objectFit="cover" />
              </div>
              <p>{item.CardContent}</p>
            </CardContent>
            <CardFooter>
              <Button className="w-32">
                <FaArrowRight /> <Link href="/cooming">Know more </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Services;

