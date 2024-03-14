import React from "react";
import { Button } from '@/components/ui/button';
import Projectcards from "../Incomponets/Procards";

const Portfolio = () => {
  return (
    <div className="">
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
        <Projectcards/>

        
      </div>
      <div className="text-center">
        <Button>view all</Button>
      </div>

    </div>
  );
};

export default Portfolio;
