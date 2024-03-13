import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const cardData=[
    {
        id:1,
        CardTitle:"web app development",
        CardDescription:" create beautiful and attractive web apps.",
        CardContent:"we work together",
        Cardfooter:"know more"

    },
    {
        id:2,
        CardTitle:"app development",
        CardDescription:"i create beautiful and attractive mobile apps",
        CardContent:"we work together",
        Cardfooter:"know more"

    },
    {
        id:3,
        CardTitle:"SEO",
        CardDescription:"",
        CardContent:"we work together",
        Cardfooter:"know more"

    },
    {
        id:4,
        CardTitle:"maintenance",
        CardDescription:"i create buietiful and attractive websites in",
        CardContent:"we work together",
        Cardfooter:"know more"

    },
]

const Services = () => {
  return (
    <div>
      <h1 className="text-center font-bold">Services</h1>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-4">
      {
  cardData.map(item => (
    <Card key={item.id}> 
      <CardHeader>
        <CardTitle>{item.CardTitle}</CardTitle> 
        <CardDescription>{item.CardDescription}</CardDescription> 
      </CardHeader>
      <CardContent>
        <p>{item.CardContent}</p> 
      </CardContent>
      <CardFooter>
        <p>{item.Cardfooter}</p>
      </CardFooter>
    </Card>
  ))
}

       
      </div>
    </div>
  );
};

export default Services;
