// eslint-disable-next-line no-unused-vars
import React from 'react';
import { FaArrowCircleRight, FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow, FaMobileAlt } from 'react-icons/fa';
const FooterLinks = [
  {
    title: 'Home',
    link: '/#',
  },
  {
    title: 'About',
    link: '/#',
  },
  {
    title: 'Contact',
    link: '/#',
  },
  {
    title: 'Blog',
    link: '/#',
  },
];
const Footer = () => {
  return (
    <div className='bg-gray-100 dark:bg-gray-950 '>
      <div className='container'>
        <div className='grid md:grid-cols-3 py-5'>
          {/*Company Details*/}
          <div className='py-8 px-4'>
            <h1
              className='sm:text-3xl text-4xl 
                  font-bold sm:text-left
                  mb-3 text-justify'
            >
              BooksStore
            </h1>
            <p>
              Lorem His Life will forever be changed dolor sit amaet.
              consectetur adipiscing elit,sed do eimusod tempor...,
            </p>
            <div className='flex items-center gap-3'>
              <FaLocationArrow />
              <p>Lagos, Nigeria</p>
            </div>
            <div className='flex items-center gap'>
              <FaMobileAlt />
              <p>+ 234 7063408089</p>
            </div>
            <br />
            {/*Social Links */}
            <div className='flex items-center gap-3 mt-6'>
              <a href='#'>
                <FaInstagram className='text-3xl' />
              </a>
              <a href='#'>
                <FaLinkedin className='text-3xl' />
              </a>
              <a href='#'>
                <FaFacebook className='text-3xl' />
              </a>
            </div>
          </div>
          {/*Links Section*/}
          <div className='grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10'>
            <div className='py-8 px-4'>
              <h1
                className='sm:text-xl font-bold 
                      sm:text-left text-justify mb-3'
              >
                Important Links
              </h1>
              <ul className='flex flex-col gap-3'>
                {FooterLinks.map((link, index) => {
                  return (
                    <li
                      key={index}
                      className='cursor-pointer
                                    hover:translate-x-1 hover:text-primary
                                    space-x-1 text-gray-500'
                    >
                      <span>{link.title}</span>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className='py-8 px-4'>
              <h1
                className='sm:text-xl font-bold 
                      sm:text-left text-justify mb-3'
              >
                Important Links
              </h1>
              <ul className='flex flex-col gap-3'>
                {FooterLinks.map((link, index) => {
                  return (
                    <li
                      key={index}
                      className='cursor-pointer
                                    hover:translate-x-1 hover:text-primary
                                    space-x-1 text-gray-500'
                    >
                      <span>{link.title}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className='py-8 px-4'>
              <h1
                className='sm:text-xl font-bold 
                      sm:text-left text-justify mb-3'
              >
                Important Links
              </h1>
              <ul className='flex flex-col gap-3'>
                {FooterLinks.map((link, index) => {
                  return (
                    <li
                      key={index}
                      className='cursor-pointer
                                    hover:translate-x-1 hover:text-primary
                                    space-x-1 text-gray-500'
                    >
                      <span>{link.title}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
        {/*Copyright section */}
        <div>
          <div className='border-t-2 border-gray-300/50'>
          <p className='text-center py-10'>Copyright &copy; 2024. All rights reserve || Made with ❤ by KM</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
