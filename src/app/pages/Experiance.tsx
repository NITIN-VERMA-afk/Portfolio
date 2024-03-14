import React from 'react'
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaBootstrap } from "react-icons/fa";
import { SiMui } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { FaDocker } from "react-icons/fa";
import { FaPython } from "react-icons/fa";




const experienceData=[
    {
        id:1,
        logo:<FaHtml5 />,
        skill:"HTML5"
    },
    {
        id:2,
        logo:<FaCss3Alt />,
        skill:"CSS3"
    },
    {
        id:3,
        logo:<IoLogoJavascript />,
        skill:"JAVASCRIPT(ES6+)"
    },
    {
        id:4,
        logo:<FaBootstrap />,
        skill:"BOOTSTRAP"
    },
    {
        id:5,
        logo:<SiMui />,
        skill:"MUI"
    },
    {
        id:6,
        logo:<SiTailwindcss />,
        skill:"TAILWIND"
    },
    {
        id:7,
        logo:<FaNodeJs />,
        skill:"node js"
    },
    {
        id:8,
        logo:<SiExpress />,
        skill:"Express"
    },
    {
        id:9,
        logo:<DiMongodb />,
        skill:"mongodb"
    },
    {
        id:10,
        logo:<SiTypescript/>,
        skill:"typescript"
    },
    {
        id:11,
        logo:<FaReact />,
        skill:"REACT"
    },
    {
        id:12,
        logo:<SiNextdotjs />,
        skill:"Next js"
    },
    {
        id:13,
        logo:<FaDocker />,
        skill:"Docker"
    },
    {
        id:14,
        logo:<FaPython />,
        skill:"python"
    },
]

const Experiance = () => {
  return (
    <div id='experiance' className='container mx-auto my-5'>
        <h1 className='text-center font-bold mt-12 mb-12 text-2xl'>Experience</h1>
        <div className=' '>
        <div className='grid sm:grid-cols-1 items-center   md:grid-cols-5  gap-5'>
        {experienceData.map(item => (
    <div className='' key={item.id}>
        <ul>
            <li className='text-3xl flex justify-center'>{item.logo}</li>
            <li className='text-center'>{item.skill}</li>
            
        </ul>
    </div>
))}

        </div>

        </div>
       

      
    </div>
  )
}

export default Experiance
