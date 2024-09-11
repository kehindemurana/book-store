// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero'
import BestBooks from './components/bestBooks/BestBooks';
import Banner from './components/banner/Banner';
import AppStoreBanner from './components/appStore/AppStoreBanner';
import AllBooks from './components/allBooks/AllBooks';
import Testimonial from './components/testimonial/Testimonial';
import Footer from './components/footer/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css'
import PopUp from './components/popUp/PopUp';



const App = () => {
  const [orderPopup, setOrderPopup] = useState(true);
  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  }

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay:100,
    });
    AOS.refresh();
  },[])
  return (
    <>
      <div
        className='bg-white dark:bg-gray-900
      dark:text-white duration-200'
      >
        <Navbar handleOrderPopup={handleOrderPopup} />
        <Hero handleOrderPopup={handleOrderPopup} />
        <BestBooks handleOrderPopup={handleOrderPopup} />
        <Banner />
        <AppStoreBanner />
        <AllBooks />
        <Testimonial />
        <Footer />
        <PopUp handleOrderPopup={handleOrderPopup}
          orderPopup={orderPopup} />
      </div>
    </>
  );
};

export default App;
