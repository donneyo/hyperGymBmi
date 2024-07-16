import React from 'react';
import { Dumbbell, MoveRight } from "lucide-react";
import TertiaryLink from "../../components/LinkBtn/TertiaryLink";
import SecondaryLink from "../../components/LinkBtn/SecondaryLink";
import getRandomPhoto from '../../components/RandomScrolls/RandomScroll'; // Import the function to get a random photo
import getAerobic from '../../components/RandomScrolls/RandomAerobic'; // Import the function to get a random photo
import getYoga from '../../components/RandomScrolls/RandomYoga'; // Import the function to get a random photo
import getSquat from '../../components/RandomScrolls/RandomSquats'; // Import the function to get a random photo
import getBoxing from '../../components/RandomScrolls/Randomboxing'; // Import the function to get a random photo
import getDeadlift from '../../components/RandomScrolls/RandomDeadlift'; // Import the function to get a random photo
import getTread from '../../components/RandomScrolls/RandomGym'; // Import the function to get a random photo
import getZumba from '../../components/RandomScrolls/RandomZumba'; // Import the function to get a random photo


const Services = () => {
  const services = [
    {
      id: 1,
      serviceImg: getRandomPhoto(),
      icon: Dumbbell,
      title: "Fitness",
      desc: "Get ready to burn off some serious fat with our high quality products.",
      link: "#services",
    },
    {
      id: 2,
      serviceImg: getYoga(),
      icon: Dumbbell,
      title: "Yoga",
      desc: "Get ready to burn off some serious fat with our high quality products.",
      link: "#services",
    },
    {
      id: 3,
      serviceImg: getSquat(),
      icon: Dumbbell,
      title: "Squats",
      desc: "Get ready to burn off some serious fat with our high quality products.",
      link: "#services",
    },
    {
      id: 4,
      serviceImg: getAerobic(),
      icon: Dumbbell,
      title: "Aerobics",
      desc: "Get ready to burn off some serious fat with our high quality products.",
      link: "#services",
    },
    {
      id: 5,
      serviceImg: getBoxing(),
      icon: Dumbbell,
      title: "Boxing",
      desc: "Get ready to burn off some serious fat with our high quality products.",
      link: "#services",
    },
    {
      id: 6,
      serviceImg: getDeadlift(),
      icon: Dumbbell,
      title: "Deadlifts",
      desc: "Get ready to burn off some serious fat with our high quality products.",
      link: "#services",
    },
    {
      id: 7,
      serviceImg: getTread(),
      icon: Dumbbell,
      title: "Gym",
      desc: "Get ready to burn off some serious fat with our high quality products.",
      link: "#services",
    },
    {
      id: 8,
      serviceImg: getZumba(),
      icon: Dumbbell,
      title: "Zumba",
      desc: "Get ready to burn off some serious fat with our high quality products.",
      link: "#services",
    },
  ];

  return (
  <>
    <div className="w-full h-auto flex items-center justify-center flex-col lg:py-16
    md:py-14 sm:py-12 py-10 lg:px-24 md:px-16 sm:px-6 px-4">
      <h6 className="text-lg font-medium text-gray-200 flex items-center gap-x-2 mb-6">
        <Dumbbell className="w-4 h-4 -rotate-45 text-indigo-600" />
        Our Services
      </h6>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
        {services.map((data) => (
          <div
            key={data.id}
            className="rounded-xl bg-black relative overflow-hidden cursor-pointer z-10 hover:-translate-y-2 ease-out duration-500"
            style={{
              backgroundImage: `url(${data.serviceImg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="w-full h-full bg-black/80 absolute top-0 left-0 -z-10"></div>
            <div className="w-full h-full flex items-center justify-center flex-col text-white p-4 z-50">
              <div className="w-14 h-14 rounded-full bg-indigo-600/20 border-4 border-indigo-600/80 flex items-center justify-center mb-5">
                <Dumbbell className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-xl text-gray-100 font-semibold text-center mb-4">
                {data.title}
              </h1>
              <p className="text-base text-gray-400 font-normal text-center mb-4">
                {data.desc}
              </p>
              <TertiaryLink link="#services">Read More</TertiaryLink>
            </div>
          </div>
        ))}
      </div>
       <SecondaryLink link="/services"
                       className="lg:w-[25%] md:w-[50%] sm:w-[75%] w-[85%] justify-center">
                       View All Services
                       <MoveRight className="w-4 h-4"/>
                       </SecondaryLink>
    </div>
    </>
  );
};

export default Services;
