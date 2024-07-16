import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import PrimaryBtn from '../../components/Button/PrimaryBtn';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import getRandomPhoto from '../../components/RandomScrolls/RandomScroll'; // Import the function to get a random photo
import { Autoplay, Navigation } from 'swiper/modules';
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

const Hero = () => {
  // dummy data for hero carousel here
  const swiperData = [
    {
      id: 1,
      bgImg: getRandomPhoto(), // Call the function to get a random photo
      slogan: "Keep your body",
      title: "Burning",
      desc: "Get ready to burn off some serious fat with our high quality products.",
    },
    {
      id: 2,
      bgImg: getRandomPhoto(), // Call the function to get a random photo
      slogan: "Just Believe In",
      title: "Yourself",
      desc: "We are here to help you achieve your goals.",
    },
    {
      id: 3,
      bgImg: getRandomPhoto(), // Call the function to get a random photo
      slogan: "Grow Your Body",
      title: "Strength",
      desc: "Make your body stronger with our high quality products.",
    },
  ];

  return (
    <div className="w-full h-auto">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper w-full h-auto"
      >
        {swiperData.map((data) => (
          <SwiperSlide
            key={data.id}
            className="w-full h-[70vh] relative"
            style={{
              backgroundImage: `url(${data.bgImg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="w-full h-full bg-black/80 absolute top-0 left-0 -z-10"></div>
            <div className="w-full h-full flex items-center justify-center flex-col z-10 lg:px-24 md:px-16 sm:px-6 px-4">
              <h5 className="lg:text-4xl md:text-3xl sm:text-2xl text-2xl text-indigo-400 font-semibold mb-2 uppercase">
                {data.slogan}
              </h5>
              <h1 className="lg:text-8xl md:text-7xl sm:text-5xl text-5xl font-bold text-white mb-4 uppercase">
                {data.title}
              </h1>
              <p className="lg:text-lg md:text-base sm:text-base text-gray-300 font-medium mb-6 text-center">
                {data.desc}
              </p>
              <PrimaryBtn className="lg:w-[15%] md:w-[35%] sm:w-[75%] w-[80%] h-14 mt-5 text-xl font-semibold rounded-full">
                 <ScrollLink to="contact" smooth={true} duration={500}>
                 Get Started
                 </ScrollLink>
              </PrimaryBtn>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="w-full h-auto flex items-center lg:justify-spaceBetween md:justify-between sm:justify-center justify-center lg:gap-7 md:gap-7 sm:gap-5 gap-5 lg:px-24 md:px-16 sm:px-6 px-6 mt-6 flex-wrap">
        <div className="flex items-center justify-center flex-col lg:w-fit md:w-[48%] sm:w-[48%] w-full lg:py-6 md:py-7 sm:py-8 py-9 px-10 bg-black/10 hover:bg-black/3 rounded-md ease-out duration-700 cursor-pointer">
          <h5 className="text-4xl text-indigo-400 font-semibold mb-2 uppercase">
            1200+
          </h5>
          <p className="text-lg text-gray-600 font-medium">Members</p>
        </div>
        <div className="flex items-center justify-center flex-col lg:w-fit md:w-[48%] sm:w-[48%] w-full lg:py-6 md:py-7 sm:py-8 py-9 px-10 bg-black/10 hover:bg-black/3 rounded-md ease-out duration-700 cursor-pointer">
          <h5 className="text-4xl text-indigo-400 font-semibold mb-2 uppercase">
            120+
          </h5>
          <p className="text-lg text-gray-600 font-medium">Expert Trainer</p>
        </div>
        <div className="flex items-center justify-center flex-col lg:w-fit md:w-[48%] sm:w-[48%] w-full lg:py-6 md:py-7 sm:py-8 py-9 px-10 bg-black/10 hover:bg-black/3 rounded-md ease-out duration-700 cursor-pointer">
          <h5 className="text-4xl text-indigo-400 font-semibold mb-2 uppercase">
            13+
          </h5>
          <p className="text-lg text-gray-600 font-medium">Years of experience</p>
        </div>
        <div className="flex items-center justify-center flex-col lg:w-fit md:w-[48%] sm:w-[48%] w-full lg:py-6 md:py-7 sm:py-8 py-9 px-10 bg-black/10 hover:bg-black/3 rounded-md ease-out duration-700 cursor-pointer">
          <h5 className="text-4xl text-indigo-400 font-semibold mb-2 uppercase">
            230+
          </h5>
          <p className="text-lg text-gray-600 font-medium">Gyms</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
