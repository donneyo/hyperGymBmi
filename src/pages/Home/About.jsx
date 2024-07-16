import React from 'react'
import { Dumbbell } from "lucide-react";
import SecondaryBtn from "../../components/Button/SecondaryBtn";
import RandomPhoto from '../../components/RandomScrolls/RandomPhoto'; // Import the function to get a random photo
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

const About = () => {
  return (
    <div className="w-full h-auto flex items-center justify-between gap-7 lg:py-16 md:py-14 sm:py-12 py-10 lg:px-24 md:px-16 sm:px-6 px-4 flex-wrap-reverse">
      <div className="lg:w-[38%] md:w-full sm:w-full w-full h-auto relative overflow-hidden rounded-lg">
        {/* Render RandomPhoto Component */}
        <RandomPhoto />
      </div>
      <div className="lg:w-[50%] md:w-full sm:w-full w-full h-auto lg:text-start md:text-start sm:text-start text-center">
        <h6 className="text-lg font-medium text-gray-200 flex items-center lg:justify-start md:justify-start sm:justify-center justify-center gap-x-2 mb-3">
          <Dumbbell className="w-4 h-4 -rotate-45 text-indigo-600" />
          About Us
        </h6>
        <h1 className="lg:text-3xl md:text-3xl sm:text-2xl text-xl font semibold text-gray-200 mb-4 leading-normal lg:pe-5 md:pe-4 sm:pe-1 pe-0">
          Effortless Strength, Timely gains: Building Better Bodies, Faster
        </h1>
        <p className="lg:text-base md:text-base sm:text-sm text-sm text-gray-500 font-medium mb-8">
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim
        </p>
        <SecondaryBtn className="lg:w-auto md:w-auto sm:w-full w-full px-7 py-2 text-base font-medium uppercase justify-center">
         <ScrollLink to="contact" smooth={true} duration={500}>
                             Become A Member
                             </ScrollLink>
        </SecondaryBtn>
      </div>
    </div>
  );
};

export default About;
