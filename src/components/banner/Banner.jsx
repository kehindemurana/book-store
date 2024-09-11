// eslint-disable-next-line no-unused-vars
import React from 'react';
import LibraryImg from '../../assets/website/library.jpg'
import { GrSecure } from 'react-icons/gr';

const Banner = () => {
  return (
    <div className='p-10'>
      <div className='container'>
        <div
          className='grid grid-cols-1 
          sm:grid-cols-2 items-center'
        >
          {/*Image Section */}
          <div>
            <img
              src={LibraryImg}
              alt=''
              className=' h-[300px] w-full mx-auto max-w-[400px] drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover'
            />
          </div>
          {/*text content section */}
          <div
            className='flex flex-col
           justify-center gap-6 sm:mt-0'
          >
            <h1
              className='text-3xl sm:text-4xl
             justify-center font-bold'
            >
              Library at your fingertips
            </h1>
            <p
              className='text-sm text-gray-500
                       tracking-wide leading-5'
            >
              Lorem His Life will forever be changed dolor sit amaet.
              consectetur adipiscing elit,sed do eimusod tempor...
            </p>
            <div className='flex flex-col gap-4'>
              <div className='flex items-center gap-4'>
                <GrSecure
                  className='text-4xl h-12 w-12 
                              shadow-sm p-4 
                              dark:bg-gray
                               rounded-full bg-gray-300  '
                              />
                              <p>Quality Books</p>
              </div>
              <div className='flex items-center gap-4'>
                <GrSecure
                  className='text-4xl h-12 w-12 
                              shadow-sm p-4 
                              dark:bg-green-500
                               rounded-full bg-gray-300  '
                              />
                              <p>Fast Delivery</p>
              </div>
              <div className='flex items-center gap-4'>
                <GrSecure
                  className='text-4xl h-12 w-12 
                              shadow-sm p-4 
                              dark:bg-yellow-500
                               rounded-full bg-gray-300  '
                              />
                              <p>Easy Payment Method</p>
              </div>
              <div className='flex items-center gap-4'>
                <GrSecure
                  className='text-4xl h-12 w-12 
                              shadow-sm p-4 
                              dark:bg-yellow-300
                               rounded-full bg-gray-300  '
                              />
                              <p>Get Offers on books</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
