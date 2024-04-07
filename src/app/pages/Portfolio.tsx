import React from "react";
import { Button } from "@/components/ui/button";
import Projectcards from "../Incomponets/Procards";

const ProjectData = [
  {
    title: "pokepedia",
    detail: "it a pokemon search app where u can search any pokemon. ",
    tech: "tech stack used in it is react",
    img:""
  },
  {
    title: "fitquest",
    detail: "its a fitness app.its a solution for all your fitness problems. ",
    tach: "tech stack used in it is react",
    img:""
  },
];

const Portfolio = () => {
  return (
    <div id="portfolio" className="pt-20">
      <div>
        <h1 className="text-center text-bold text-5xl">Portfolio</h1>
        
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
