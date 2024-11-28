import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import { Autoplay } from 'swiper/modules';

const projectPhotos = [
  { src: "/images/project1.jpg", alt: "Project Photo 1" },
  { src: "/images/project2.jpg", alt: "Project Photo 2" },
  { src: "/images/project3.jpg", alt: "Project Photo 3" },
  { src: "/images/project4.jpg", alt: "Project Photo 4" },
  { src: "/images/project5.jpg", alt: "Project Photo 5" },
  { src: "/images/project6.jpg", alt: "Project Photo 6" },
];

const Projects = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        loop={true} 
        autoplay={{
          delay: 0, 
          disableOnInteraction: false,
        }}
        speed={1000} 
        modules={[Autoplay]}
        className="mySwiper mt-20"
      >
        {projectPhotos.map((photo, index) => (
          <SwiperSlide key={index}>
            <Image 
            src={photo.src} 
            alt={photo.alt} 
            className="rounded-2xl hover:scale-110 transition-all duration-500" 
            width={200}
            height={200}
            style={{
              maxWidth: '100%',
              height: 'auto',
            }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
export default Projects;