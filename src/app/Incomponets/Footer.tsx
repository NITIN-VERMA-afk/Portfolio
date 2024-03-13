import React from "react";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

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
    <div className="flex justify-around rounded bg-blue-600 p-6">
      <div>
        <p>nitin verma</p>
      </div>
      <div>
        <p>2024-2025 all right reserved</p>
      </div>
      <div className="flex gap-4">
        {icons.map((item) => (
          <div  key={item.id}>
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
