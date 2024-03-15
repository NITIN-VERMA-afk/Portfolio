import React from "react";
// import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FaArrowRight } from "react-icons/fa";

const cardData = [
  {
    id: 1,
    CardTitle: "web app development",
    CardDescription: " create beautiful and attractive web apps.",
    CardContent:
      "we create beautiful attractive and responsive website and web apps according to your need ",
    img: "https://miro.medium.com/v2/resize:fit:1200/1*V-Jp13LvtVc2IiY2fp4qYw.jpeg",
    Cardfooter: "know more",
  },
  {
    id: 2,
    CardTitle: "app development",
    CardDescription: " create beautiful and attractive mobile apps",
    CardContent:
      "we  create beautiful and attractive mobile apps  for both android and ios platform",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlOpD_HHESJSrCyOpiG4R3PN_uvmmqP_t1ow&usqp=CAU",
    Cardfooter: "know more",
  },
  {
    id: 3,
    CardTitle: "SEO",
    CardDescription: "help increasing your seo",
    CardContent:
      "we help increasing your seo performance by optimize your website for search engines ",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxPLD8QhOcEaygicTqLhLugp_j6V4SUQ9FjQ&usqp=CAU",
    Cardfooter: "know more",
  },
  {
    id: 4,
    CardTitle: "maintenance",
    CardDescription: "provide yearly maintenance",
    CardContent:
      "we help to fix and update your websites so they can run smoothly",
    img: "https://images.pexels.com/photos/614117/pexels-photo-614117.jpeg?auto=compress&cs=tinysrgb&w=600",
    Cardfooter: "know more",
  },
];

const Services = () => {
  return (
    <div id="services" className="container pt-24">
      <h1 className="text-center font-bold text-4xl my-7">Services</h1>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-4">
        {cardData.map((item) => (
          <Card className="" key={item.id}>
            <CardHeader>
              <CardTitle>{item.CardTitle}</CardTitle>
              <CardDescription>{item.CardDescription}</CardDescription>
            </CardHeader>
            <CardContent>
              <img src={item.img} alt="web apps" width={250} height={250} />
              <p>{item.CardContent}</p>
            </CardContent>
            <CardFooter>
              <Button className="w-32">
                <FaArrowRight /> know more
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Services;
