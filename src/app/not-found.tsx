"use client"
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="flex flex-col md:flex-row items-center max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-lg">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full md:w-1/2 mb-8 md:mb-0"
        >
          <Image
            src="/img/404baby.jpg" 
            alt="404 Error"
            width={500}
            height={500}
            className="w-full h-auto"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full md:w-1/2 text-center md:text-left md:pl-8"
        >
          <h1 className="text-4xl font-bold mb-4 text-gray-800">
            Awwww.. dont cry
          </h1>
          <p className="text-xl mb-4 text-gray-600">
            Its just a 404 error
          </p>
          <p className="text-lg mb-8 text-gray-500">
            What you are looking for may have been misplaced in long-term memory
          </p>
          <Link href="/">
            <Button>Go back home</Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFoundPage;