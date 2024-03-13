import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-around'>
        <div>
            NITIN VERMA
        </div>
        <div>
            <ul className='flex space-between gap-5'>
                <li>Home</li>
                <li>About ME</li>
                <li>PORTFOLIO</li>
                <li>SERVICES</li>
                <li>contact</li>
            </ul>
        </div>
      
    </div>
  )
}

export default Navbar

