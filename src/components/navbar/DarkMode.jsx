// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
import LightPng from '../../assets/website/light-mode-button.png'
import DarkPng from '../../assets/website/dark-mode-button.png';



const DarkMode = () => {
    const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") :"light");
  const element = document.documentElement

    useEffect(() => {
        if (theme === "dark") {
          element.classList.add('dark');
          localStorage.setItem('theme', 'dark');
        } else {
          element.classList.remove('dark');
          localStorage.setItem('theme', 'light');
        }
    },[theme])
       
          
  return (
    <>
      <div className='relative'>
        <img
          src={LightPng}
          alt=''
          className={`w-12 cursor-pointer
         drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)
          transition-all duration-300 
          absolute right-0 z-10
          ${theme === 'dark' ? 'opacity-0' : 'opacity-100'}`}
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        />
        <img
          src={DarkPng}
          alt=''
          className='w-12 cursor-pointer
         drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)
          transition-all duration-300 '
        onClick={()=>setTheme(theme === "dark" ? "light" : "dark")}
        />
      </div>
    </>
  );
}

export default DarkMode