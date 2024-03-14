import React from 'react'
import { FaPhoneSquareAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLocation } from "react-icons/io5";
import { Input } from "@/components/ui/input"
import { Button } from '@/components/ui/button';
import { Textarea } from "@/components/ui/textarea"




interface ContactDetail {
    id: number,
    icon: JSX.Element,
    details: string;
}

const contactDetails=[
    {
        id:1,
        icon:<FaPhoneSquareAlt />,
        details:"9015308881"
    },
    {
        id:2,
        icon:<MdEmail />,
        details:"nitinvermanv61506@gmail.com"
    },
    {
        id:3,
        icon:<IoLocation />,
        details:"Bilaspur,h.p"
    },
    
]

const Contact = () => {
  return (
    <div>
        <div className='sm:rounded-sm  md:rounded-t-full bg-blue-600'>
            <h1 className='text-white text-bold text-center text-2xl'>Contact</h1>
            <div className='flex justify-around container mx-auto mt-5 pb-5 flex-wrap'>
                <div className='flex flex-col gap-5'>
                    <h1>Drop me a message</h1>
                    <p className=''>contact me on follow details</p>
                    {
                        contactDetails.map(item=>(
                            <div  key={item.id}>
                                <ul className='flex gap-5'>
                                    <li className='w-12 h-12 border border-gray-300 bg-gradient-to-br from-blue-600 to-blue-500 rounded flex justify-center items-center'>{item.icon}</li>
                                    <li>{item.details}</li>
                                </ul>

                            </div>
                        )
                            
                            )
                    }
                   

                </div>
                <div className=' flex flex-col gap-5 bg-blue-900 p-8 rounded-md '>
                    <Input className='bg-black text-white' type='email' placeholder='Enter your email'/>
                    <Input className='bg-black text-white' type='password' placeholder='Enter your password'/>
                    <Textarea className='bg-black text-white' placeholder='message'/>
                    <Button>Send</Button>


                </div>
            </div>

        </div>
      
    </div>
  )
}

export default Contact
