import React from "react";
import { Button } from "@/components/ui/button";
import Projectcards from "../Incomponets/Procards";
import Link from "next/link"

const ProjectData = [
  {
    title: "pokepedia",
    detail: "it a pokemon search app where u can search any pokemon. ",
    tech: "tech stack used in it is react",
    img:"/img/pokemon.jpg",
    project:"https://pokemon-virid-five.vercel.app/"
  },
  {
    title: "fitquest",
    detail: "its a fitness app.its a solution for all your fitness problems. ",
    tach: "tech stack used in it is react",
    img:"/img/gym.jpg",
    project:"https://github.com/NITIN-VERMA-afk/FitQuest"
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
            <Projectcards key="id" title={item.title} detail={item.detail} tach={item.tach} img={item.img} project={item.project} />

          ))
        }
        
      </div>
      <div className="text-center">
        <Button> <Link href="https://github.com/NITIN-VERMA-afk">view all </Link> </Button>
      </div>
    </div>
  );
};

export default Portfolio;
