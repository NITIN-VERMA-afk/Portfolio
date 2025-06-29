import React from "react";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from "next/link"

const icons = [
  {
    id: 1,
    icon: <FaLinkedin />,
    url:"https://www.linkedin.com/in/nitin-verma-7978b51b8/"
  },
  {
    id: 2,
    icon: <FaGithub />,
    url:"https://github.com/NITIN-VERMA-afk"
  },
  {
    id: 3,
    icon: <FaXTwitter />,
    url:"https://twitter.com/RAJPUT_NITIN_V"
  },
  {
    id: 4,
    icon: <FaInstagram />,
    url:"https://www.instagram.com/coder_s_nest/"
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
      <p className="text-white">&copy; 2024 Nitin Verma. All rights reserved.</p>
      </div>
      <div className="flex gap-4 ">
        {icons.map((item) => (
          <div className="w-12 h-12 border border-gray-300 bg-gradient-to-br from-blue-600 to-blue-500 rounded flex justify-center items-center" key={item.id}>
            <ul  className="w-12 h-12 border bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-100 hover:to-purple-500 transition-colors rounded flex justify-center items-center">
              <li className={` hover:to-purple-500 transition-colors`}> <Link href={item.url}> {item.icon}</Link>   </li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;
