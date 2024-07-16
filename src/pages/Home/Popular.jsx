import React from 'react'
import { Dumbbell } from "lucide-react";

import getAerobic from '../../components/RandomScrolls/RandomAerobic'; // Import the function to get a random photo
import getYoga from '../../components/RandomScrolls/RandomYoga'; // Import the function to get a random photo
import getSquat from '../../components/RandomScrolls/RandomSquats'; // Import the function to get a random photo
import getShoulder from '../../components/RandomScrolls/RandomShoulder'; // Import the function to get a random photo

const Popular = () => {

     const exerciseData = [
        {
          id: 1,
          exerciseImg: getYoga(),
          name: "Warm up",
          duration: 15,
          sets: 3,
          calories: 100,
        },
        {
          id: 2,
          exerciseImg: getShoulder(),
          name: "Shoulder Workout",
          duration: 20,
          sets: 4,
          calories: 150,
        },
        {
          id: 3,
          exerciseImg: getYoga(),
          name: "Yoga Session",
          duration: 55,
          sets: 5,
          calories: 250,
        },
        {
          id: 4,
         exerciseImg: getSquat(),
          name: "Leg Workout",
          duration: 18,
          sets: 4,
          calories: 120,
        },
      ];


    return(
    <>
         <div className="w-full h-auto flex items-center justify-center flex-col
            lg:py-16 md:py-14 sm:py-12 py-10 lg:px-24 md:px-16 sm:px-6 px-4">
              <h6 className="text-lg font-medium text-gray-200 flex items-center gap-x-2 mb-6">
                <Dumbbell className="w-4 h-4 -rotate-45 text-indigo-600" />
                Our Popular Exercises
              </h6>
              <div className="w-full h-auto flex items-center gap-x-5 gap-y-6 lg:flex-nowrap
                 md:flex-wrap m:flex-wrap flex-wrap">
                 {exerciseData.map((data) => (
                    <div
                    key={data.id}
                        className="lg:w-[24%] md:w-[48%] sm:w-[48%] w-full h-auto rounded-lg overflow-hidden hover:shadow
                                        hover:shadow-indigo-900/40 ease-out duration-700 cursor-pointer">
                                        <img
                                             src={data.exerciseImg}
                                             alt="exercise img"
                                             className="w-full lg:h-[30vh] md:h-[33vh] sm:h-[38vh] h-[40vh] object-cover
                                             rounded-lg"
                                         />
                                         <div className="w-full h-full h-auto py-4 px-3">
                                            <h1 className="text-lg text-white font-semibold mb-1">
                                                {data.name}
                                            </h1>
                                           <div className="w-full h-auto flex items-center gap-x-2">
                                              <p className="text-sm text-gray-300">{data.duration} min</p>
                                              <span className="w-1 h-1 rounded-full bg-gray-600"/>
                                              <p className="text-sm text-gray-300">{data.sets} sets </p>
                                              <span className="w-1 h-1 rounded-full bg-gray-600"/>
                                               <p className="text-sm text-gray-300">{data.calories} calories</p>

                                           </div>
                                         </div>
                                      </div>

                 ))}
              </div>
        </div>

    </>
   );
 };

 export default Popular;
