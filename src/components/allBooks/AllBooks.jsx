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
    ratings: 5.0,
    author:"Alaba"
  },
  {
    id: 2,
    img: Book2,
    title: 'Who is there',
    ratings: 4.5,
    author:"kehinde"
  },
  {
    id: 3,
    img: Book3,
    title: 'His Life will forever be changed',
    ratings: 4.7,

    author:"Taiwo"
  },
  {
    id: 4,
    img: Book3,
    title: 'His Life will forever be changed',
    ratings: 4.7,

    author:"Idowu"
  },
];

const AllBooks = () => {
  return (
    <div className='py-10'>
      <div className='container py-10'>
        {/*header */}
        <div
          data-aos='slide-up'
          className='text-center mb-20
         max-w-[400px] mx-auto '
        >
          <p
            className='text-sm bg-clip-text text-transparent
           bg-gradient-to-r from-primary
            to-secondary'
          >
            Best Books
          </p>
          <h1 className='text-xl font-bold'>Top Books</h1>
          <p className='text-xs text-gray-400 '>
            Lorem His Life will forever be changed dolor sit amaet. consectetur
            adipiscing elit,sed do eimusod tempor...,
          </p>
        </div>
        {/*Card Section */}
        <div
        data-aos="slide-up"
        >
          <div
            className='grid grid-cols-2 sm:grid-cols-3
                   md:grid-cols-4 lg:grid-cols-5 gap-5 place-items-center'
          >
            {BooksData.map((book) => {
              return (
                // eslint-disable-next-line react/jsx-key
                <div className='space-y-3'>
                  <img
                    src={book.img}
                    alt=''
                    className='h-[220px] w-[150px] 
                                      object-cover rounded-md'
                  />
                  <div>
                    <h2 className='font-semibold '>{book.title}</h2>
                    <p className='text-gray-700 dark:text-gray-200 '>
                      {book.author}
                    </p>
                    <div className='flex items-center gap-1'>
                      <FaStar className='text-yellow-500' />
                      <span>{book.ratings}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className='flex justify-center '>
            <button
              className='font-semibold text-center 
              mt-10 cursor-pointer bg-primary text-white
              rounded-full px-5 py-1'
            >
              View All Books
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllBooks;
