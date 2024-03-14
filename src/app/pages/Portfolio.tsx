import React from "react";
import { Button } from "@/components/ui/button";
import Projectcards from "../Incomponets/Procards";

const ProjectData = [
  {
    title: "pokepedia",
    detail: "it a pokemon search app where u can search any pokemon. ",
    tech: "tech stack used in it is react",
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQKp9LBagCydG8b3KmG8j8ps2RNZhvIhSuspe4xIY98chx2RazSqleWvecyg&s"
  },
  {
    title: "fitquest",
    detail: "its a fitness app.its a solution for all your fitness problems. ",
    tach: "tech stack used in it is react",
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPxiEy-QH4nz21fR3M9zx2tMddOu4yJbCUUIaLovXgXMPK0nVSlyngxAWCew&s"
  },
];

const Portfolio = () => {
  return (
    <div id="portfolio" className="">
      <div>
        <h1 className="text-center text-bold text-5xl">Portfolio</h1>
        <ul className="flex justify-center align-middle gap-5 mt-4">
          <li>Web apps</li>
          <li>Website</li>
          <li>Desktop</li>
          <li>Other projects</li>
        </ul>
      </div>
      <div>
        {
          ProjectData.map((item)=>(
            <Projectcards key="id" title={item.title} detail={item.detail} tach={item.tach} img={item.img} />

          ))
        }
        
      </div>
      <div className="text-center">
        <Button>view all</Button>
      </div>
    </div>
  );
};

export default Portfolio;
