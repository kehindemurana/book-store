// eslint-disable-next-line no-unused-vars
import React from 'react';
import Book1 from '../../assets/books/book1.jpg';
import Book2 from '../../assets/books/book2.jpg'
import Book3 from '../../assets/books/book3.jpg'
import Vector from '../../assets/website/blue-pattern.png'
import { useState } from 'react'
const ImageList = [
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

const Hero = ({handleOrderPopup}) => {
    const [imageId, setImageId] = useState(Book1);
    const [title, setTitle] = useState("His Life will forever be change");
    const [description, setDescription] = useState(" Lorem ipsum dolor sit amet consectetur adipiscing elit,dignissimos, molestiae");
    const bgImage = {
        backgroundImage: `url(${Vector})`,
        backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
        backgroundSize :"cover",
        width: "100%",
    };
    return (
      <>
        <div
          className='min-h-[550px]
         sm:min-h-[650px] bg-gray-100 flex
          justify-center
         items-center dark:bg-gray-950
         dark:text-white duration-200'
                style={bgImage}
        >
          <div className='container pb-6 sm:pb-0'>
            <div
              className='grid grid-cols-1 
                sm:grid-cols-2'
            >
              {/*text content section */}
              <div
                data-aos-once="true"
                className='flex flex-col justify-center 
                        gap-4 pt-12 sm:pt-0 text-center
                        sm:text-left order-2 sm:order-1 '>
                <h1 
                  data-aos="zoom-out"
                  data-aos-duration="500"
                  data-aos-once="true"
                  className='text-5xl sm:text-6xl 
                    lg:text-7xl font-bold '
                >
                  {title}
                  <p
                    data-aos="slide-up"
                    data-aos-duration="500"
                     data-aos-delay="100"

                    className='bg-clip-text text-transparent
                         bg-gradient-to-b from-primary  
                          text-right text-sm
                          to-secondary'
                  >
                    by Anonymous
                  </p>
                </h1>
                <p
                  data-aos="slide-up"
                  data-aos-duration="500"
                  data-aos-delay="100"
                  className='text-sm'>{description.title}</p>
                <div>
                  <button
                    onClick={handleOrderPopup}
                    data-aos="zoom-in"
                    className='bg-gradient-to-r
                     from-primary to-secondary
                      text-white px-4 py-2 rounded-md mt-4
                       hover:scale-105 duration-200'
                  >
                    Order Now
                  </button>
                </div>
              </div>
              {/*Image section */}
              <div
                className='min-h-[450px] flex 
                    justify-center items-center relative
                    order-1 sm:order-2'
              >
                <div
                  className='h-[300px] sm:h-[450px]
                        overflow-hidden flex justify-center
                        items-center'
                >
                  <img
                    
                    data-aos="zoom-in"
                    data-aos-once="true"
                    src={imageId} alt=''
                    className='w-[300px] h-[300px] 
                                    sm:[h-450px]
                     sm:w-[450px] sm:scale-125
                     object-contain mx-auto' />
                </div>
                {/*other image list */}
                <div className='flex lg:flex-col lg:-translate-y-1/2
                 lg:top-1/2 lg:py-2 justify-center gap-4 absolute
                 -bottom-[40px] lg:-right-1 bg-white rounded-full'>
                  {
                    ImageList.map((data) => {
                      return (
                        // eslint-disable-next-line react/jsx-key
                        <img
                          data-aos="zoom-in"
                          data-aos-once="true"
                          src={data.img} className='max-w-[100px] h-[100px]
                         object-contain
                        inline-block hover:scale-110 duration-200 '
                          onClick={() => {
                            setImageId(data.id === 1 ? Book1 :
                              data.id === 2 ? Book2 : Book3
                            );
                            setTitle(data.title);
                            setDescription(data.description)
}}
                        
                        />
                      )
                    })
                }
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
};
export default Hero;
