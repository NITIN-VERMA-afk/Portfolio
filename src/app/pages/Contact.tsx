"use client"
import React from "react";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLocation } from "react-icons/io5";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useForm, SubmitHandler } from "react-hook-form";

interface Detail {
  id: number;
  icon: JSX.Element;
  details: string;
}

const contactDetails: Detail[] = [
  {
    id: 1,
    icon: <FaPhoneSquareAlt aria-label="phone" />,
    details: "9015308881",
  },
  {
    id: 2,
    icon: <MdEmail aria-label="email" />,
    details: "nitinvermanv61506@gmail.com",
  },
  {
    id: 3,
    icon: <IoLocation aria-label="location" />,
    details: "Bilaspur, H.P.",
  },
];

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const Contact: React.FC = () => {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:nitinvermanv61506@gmail.com?subject=${formData.subject}&body=
        Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`;
  };
  return (
    <div id="contact" className="pt-52">
      <div className="sm:rounded-sm  md:rounded-sm lg:rounded-lg bg-blue-600">
        <h1 className="text-white text-bold text-center text-2xl font-bold">Contact</h1>
        <div className="flex justify-around container mx-auto mt-5 pb-5  gap-4 flex-wrap">
          <div className="flex flex-col gap-5">
            <h1 className="font-bold">Drop me a message</h1>
            <p className="text-white">contact me on follow details</p>
            {contactDetails.map((item) => (
              <div key={item.id}>
                <ul className="flex gap-5">
                  <li className="w-12 h-12 border bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-100 hover:to-purple-500 transition-colors rounded flex justify-center items-center">
                  
                    {item.icon}
                  </li>
                  <li>{item.details}</li>
                </ul>
              </div>
            ))}
          </div>
          <div className=" ">
            <form className="flex flex-col gap-5 bg-blue-900 p-8 rounded-md " onSubmit={handleSubmit(onSubmit)}>
              <Input
                {...register("name")}
                className="bg-black text-white"
                type="text"
                placeholder="Enter your name"
              />
              <Input
                {...register("email")}
                className="bg-black text-white"
                type="email"
                placeholder="Enter your email"
              />
              <Input
                {...register("subject")}
                className="bg-black text-white"
                type="text"
                placeholder="Enter your subject"
              />
              <Textarea
                {...register("message")}
                className="bg-black text-white"
                placeholder="message"
              />
              <Button>Send</Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
