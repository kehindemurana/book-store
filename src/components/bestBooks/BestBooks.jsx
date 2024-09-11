// eslint-disable-next-line no-unused-vars
import React from 'react';
import Book1 from '../../assets/books/book1.jpg';
import Book2 from '../../assets/books/book2.jpg';
import Book3 from '../../assets/books/book3.jpg';
import { FaStar } from 'react-icons/fa';
const BooksData = [
  {
    id: 1,
    img: Book1,
    title: 'His Life will forever be changed',
    description:
      'Lorem His Life will forever be changed dolor sit amaet. consectetur adipiscing elit,sed do eimusod tempor...',
  },
  {
    id: 2,
    img: Book2,
    title: 'Who is there',
    description:
      'Who is there dolor sit amaet, consectetur adipiscing elit,sed do eimusod tempor...',
  },
  {
    id: 3,
    img: Book3,
    title: 'His Life will forever be changed',
    description:
      'Lorem His Life will forever be changed dolor sit amaet, consectetur adipiscing elit,sed do eimusod tempor...',
  },
];
const BestBooks = ({handleOrderPopup}) => {
  return (
    <div className='py-10'>
          <div className='container'>
              {/*Header Section */}
              <div className='text-center mb-20
         max-w-[400px] mx-auto '>
                  <p className='text-sm bg-clip-text text-transparent
           bg-gradient-to-r from-primary
            to-secondary'>Trending Books</p>
                  <h1 className='text-xl font-bold'>Best Books</h1>
          <p className='text-xs text-gray-400 '>
             Lorem His Life will forever be changed dolor sit amaet.
            consectetur
            adipiscing elit,sed do eimusod tempor...,
          </p>
              </div>
              {/*Card Section */}
              <div className='grid grid-cols-1 
              sm:grid-cols-2
               md:grid-cols-3 md:gap-5 place-items-center'>
                  {
                      BooksData.map((book) => {
                          return (
                            // eslint-disable-next-line react/jsx-key
                            <div
                              className='rounded-2xl
                               bg-white
                               dark:bg-gray-800
                             hover:bg-primary
                             dark:hover:bg-primary
                             hover:text-white
                              
                              relative shadow-xl duration-high
                              group max-w-[300px]'
                            >
                              <div className='h-[100px]'>
                                <img
                                  src={book.img}
                                  alt=''
                                  className='max-w-[100px] 
                                      mx-auto 
                                 block transform-translate-y-14
                                 group-hover:scale-105 duration-300
                                 shadow-md'
                                />
                              </div>
                              <div className='p-16 text-center'>
                                <div className='w-full flex items-center justify-center '>
                                  <FaStar className='text-yellow-500' />
                                  <FaStar className='text-yellow-500' />
                                  <FaStar className='text-yellow-500' />
                                  <FaStar className='text-yellow-500' />
                                </div>
                                <h1 className='text-xl font-bold '>
                                  {book.title}
                                </h1>
                                <p
                                  className='text-gray-500 
                                  hover:scale-105
                                   group-hover:text-white-900
                                   duration-300 text-sm line-clamp'
                                >
                                  {book.description}
                                </p>
                                <button
                                  onClick={handleOrderPopup}
                                  className='bg-primary to-secondary 
                                text-white px-4 py-2
                                rounded-full mt-4 hover:scale-105 duration-200'>Order Now</button>
                              </div>
                            </div>
                          );
                      })
              }
              </div>
      </div>
    </div>
  );
}

export default BestBooks;
