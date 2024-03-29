import React from "react";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const icons = [
  {
    id: 1,
    icon: <FaLinkedin />,
  },
  {
    id: 2,
    icon: <FaGithub />,
  },
  {
    id: 3,
    icon: <FaXTwitter />,
  },
  {
    id: 4,
    icon: <FaInstagram />,
  },
];

const Footer = () => {
  return (
    <div className=" flex flex-col justify-center items-center gap-4  rounded bg-blue-600 p-6">
      <div>
        <p>
        <Avatar>
  <AvatarImage src="/img/my_pic.jpg" />
  <AvatarFallback>nv</AvatarFallback>
</Avatar>
        </p>
      </div>
      <div>
        <p>2024-2025 all right reserved</p>
      </div>
      <div className="flex gap-4 ">
        {icons.map((item) => (
          <div className="w-12 h-12 border border-gray-300 bg-gradient-to-br from-blue-600 to-blue-500 rounded flex justify-center items-center" key={item.id}>
            <ul>
              <li>{item.icon}</li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;
