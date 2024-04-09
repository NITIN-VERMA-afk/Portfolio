import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const page = () => {
  return (
    <div className="w-full h-screen bg-black flex flex-col gap-4 justify-center items-center">
      <h1 className="text-white text-3xl">Cooming soon</h1>
      <Link href='/'>
        <Button>go back to portfolio</Button>
      </Link>
    </div>
  );
};

export default page;
