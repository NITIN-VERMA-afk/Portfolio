import React from 'react'
import { Button } from '@/components/ui/button'

const Home = () => {
  return (
    <div className=''>
        <div className='flex flex-wrap flex-col justify-start align-center ml-12 pt-36 gap-5'>
          <h3 className='sm:text-9xl md:text-3xl lg-text-6xl text-gray-600'>i`m a</h3>
          <h1 className=' font-bold text-white  md:text-5xl lg:text-6xl xl:text-7xl'>FULL STACK </h1>
          <h1 className='font-bold text-white md:text-5xl lg:text-6xl xl:text-7xl'>Software</h1>
          <h1 className='font-bold text-white md:text-5xl lg:text-6xl xl:text-7xl'>Developer.</h1>

        </div>
        <div>
          <Button className='text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 mt-6 ml-12'>Previous Projects</Button>

        </div>
      
    </div>
  )
}

export default Home
