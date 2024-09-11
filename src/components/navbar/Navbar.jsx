// eslint-disable-next-line no-unused-vars
import React from 'react'
import logo from '../../assets/website/logo.png'
import { FaCaretDown } from 'react-icons/fa';
import { FaCartShopping } from 'react-icons/fa6';
import DarkMode from './DarkMode';

const Menu = [
  {
    id: 1,
    name: 'Home',
    link: '/#',
  },
  {
    id: 1,
    name: 'Best Seller',
    link: '/#',
  },
 
];
const DropdownLinks = [
  {
    name: 'Trending Books',
    link: '/#',
  },
  {
    name: 'Best Selling',
    link: '/#',
  },
  {
    name: 'Authors',
    link: '/#',
  },
];



const Navbar = ({handleOrderPopup}) => {
  return (
    <div className='shadow-lg bg-white
     dark:bg-gray-900
     dark:text-white duration-200'>
      <div className='container py-3 sm:py=0'>
        <div className='flex justify-between items-center'>
          <div className='font-bold text-2xl sm:text-3xl
           flex gap--2'>
            <a href='#'>
              <img src={logo} alt='' className='w-10' />
            </a>
            Books
          </div>
          <DarkMode/>
          <div className='flex items-center 
          justify-between gap-4'>
            <ul
              className=' items-center gap-4 
            hidden sm:flex'
            >
              {Menu.map((menu, index) => {
                return (
                  // eslint-disable-next-line react/jsx-key
                  <li key={index}>
                    <a
                      href={menu.link}
                      className='inline-block py-4 px-4
                       hover:text-primary duration-200'
                    >
                      {menu.name}
                    </a>
                  </li>
                );
              })}
              <li className='group relative cursor-pointer'>
                <a href='/#'>
                  Quick Links
                  <span>
                    <FaCaretDown className='' />
                  </span>
                </a>
                {/*Dropdown link section */}
                <div
                  className='absolute -left-9 z-[10] hidden 
                group-hover:block
                 text-black bg-white p-2 
                 shadow-md w-[150px]'
                >
                  <ul>
                    {DropdownLinks.map((data, index) => {
                      return (
                        // eslint-disable-next-line react/jsx-key
                        <li key={index}>
                          <a
                            href={data.link}
                            className='inline-block w-full rounded-md p-2 hover:bg-primary/20'
                          >
                            {data.name}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </li>
              {/*dropdown link section */}
            </ul>
            <button
              onClick={()=>handleOrderPopup(false)}
              className='bg-gradient-to-r
                   from-primary to-secondary
                   text-white px-4 py-1 
                  rounded-full flex items-center '
              
            >
              Order
              <FaCartShopping className='drop-shadow-sm 
              cursor-pointer
              text-xl text-white'/>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar