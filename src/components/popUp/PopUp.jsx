// eslint-disable-next-line no-unused-vars
import React from 'react';
import { IoCloseOutline } from 'react-icons/io5';

const PopUp = ({orderPopup, handleOrderPopup}) => {
  return (
    <>
      {orderPopup && (
        <div
          className='h-screen
              w-screen bg-red-500
              top-0 left-0 z-20 backdrop-blur-sm
              '
        >
          <div
            className='fixed top-1/2 left-1/2 
              -translate-x-1/2 -translate-y-1/2 bg-white
              dark:bg-gray-900 dark:text-white duration-200 p-4 rounded-md shadow-md w-[300px]'
          >
            {/*header */}
            <div className='flex items-center justify-between'>
              <h1>Order Your book</h1>
              <div className='flex items-center '>
                <IoCloseOutline
                  className='text-2xl cursor-pointer'
                  onClick={() => handleOrderPopup(false)}
                />
              </div>
            </div>
            {/*Form body */}
            <div className='mt-4'>
              <input
                type='text'
                placeholder='Name'
                className='w-full px-2 py-1 rounded-md  mb-4
                          border border-gray-300 dark:border-gray-500
                          dark:bg-gray-800'
              />
              <input
                type='email'
                placeholder='Email'
                className='w-full px-2 py-1 rounded-md  mb-4
                          border border-gray-300 dark:border-gray-500
                          dark:bg-gray-800'
              />
              <input
                type='text'
                placeholder='Address'
                className='w-full px-2 py-1 rounded-md  mb-4
                          border border-gray-300 dark:border-gray-500
                          dark:bg-gray-800'
                          />
                          <div className='flex justify-center'>
                              <button className='bg-primary text-white
                          px-4 py-2 rounded-full'>Order NOw</button>
                          </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default PopUp;
