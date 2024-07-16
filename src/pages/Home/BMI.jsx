// import React, { useState } from 'react';
// import { Dumbbell } from 'lucide-react';
// import Label from '../../components/Label/Label';
// import Input from '../../components/Form/Input';
// import SecondaryBtn from "../../components/Button/SecondaryBtn";
//
// const BMI = () => {
//     //logic to calculate bmi
//     const [weight, setWeight ] = useState("");
//     const [height, setHeight ] = useState("");
//      const [bmi, setBMI ] = useState(null);
//     //function to calculate bmi
//      const calculateBMI = () => {
//       const bmi = (weight / ((height * height)/ 10000)).toFixed(2);
//       setBMI(bmi);
//      };
//
//   return (
//     <>
//       <div className="w-full h-auto flex items-center lg:py-16 md:py-14 sm:py-12 py-10 lg:px-24 md:px-16 sm:px-6 px-4">
//         <div className="w-full h-auto flex items-center justify-center flex-col">
//           <h6 className="lg:text-lg md:text-lf sm:text-base text-base font-medium text-gray-200 flex items-center gap-x-2 bg-black/20 rounded-t-md py-2 px-4">
//             <Dumbbell className="w-4 h-4 -rotate-45 text-indigo-600" />
//             Calculate your BMI
//           </h6>
//           <div className="w-full h-auto flex items-end justify-center bg-black/20 rounded-md lg:gap-5 sm:gap-3 gap-2 py-10 lg:px-0 md:px-0 sm:px-2 px-4 flex-wrap">
//             <div className="lg:w-[25%] md:w-[40%] sm:w-[50%] w-full h-auto p-2">
//             <Label htmlfor="weight">Weight (Kg)</Label>
//               <Input
//                 id="weight"
//                 name="weight"
//                 type="text"
//                 placeholder="Enter your weight"
//                 value={weight}
//                 onChange={(e) => setWeight(e.target.value)}
//               />
//             </div>
//              <div className="lg:w-[25%] md:w-[40%] sm:w-[50%] w-full h-auto p-2">
//               <Label htmlfor="height">Height (Cm)</Label>
//                   <Input
//                             id="weight"
//                             name="weight"
//                             type="text"
//                             placeholder="Enter your Height"
//                              value={height}
//                              onChange={(e) => setHeight(e.target.value)}
//                   />
//               </div>
//               <div className="lg:w-[20%] md:w-[35%] sm:w-[50%] w-full h-auto p-2">
//                 <SecondaryBtn
//                 type="submit"
//                 claasName="w-full h-11 justify-center"
//                 onClick={calculateBMI}
//                 >Calculate BMI</SecondaryBtn>
//               </div>
//
//               {/*Display BMi */}
//               {bmi !== null && (
//                 <div className="bg-black rounded-b-md px-6 py-2.5">
//                 <p className="text-indigo-600">
//                     Your BMI:- <span className="font-bold">{bmi}</span>
//                 </p>
//                 </div>
//               )}
//
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };
//
// export default BMI;
//
import React, { useState } from 'react';
import { Dumbbell } from 'lucide-react';
import Label from '../../components/Label/Label';
import Input from '../../components/Form/Input';
import SecondaryBtn from "../../components/Button/SecondaryBtn";

const BMI = () => {
  // Logic to calculate BMI
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBMI] = useState(null);
  const [message, setMessage] = useState("");

  // Function to calculate BMI
  const calculateBMI = () => {
    const heightInMeters = height / 100;
    const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
    setBMI(bmiValue);

    if (bmiValue < 18.5) {
      setMessage('You are too lean, eat up!');
    } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
      setMessage('Your weight is normal.');
    } else if (bmiValue >= 25 && bmiValue < 29.9) {
      setMessage('You are overweight, consider burning some calories.');
    } else {
      setMessage('You are obese, burn some calories.');
    }
  };

  return (
    <>
      <div className="w-full h-auto flex items-center lg:py-16 md:py-14 sm:py-12 py-10 lg:px-24 md:px-16 sm:px-6 px-4">
        <div className="w-full h-auto flex items-center justify-center flex-col">
          <h6 className="lg:text-lg md:text-lf sm:text-base text-base font-medium text-gray-200 flex items-center gap-x-2 bg-black/20 rounded-t-md py-2 px-4">
            <Dumbbell className="w-4 h-4 -rotate-45 text-indigo-600" />
            Calculate your BMI
          </h6>
          <div className="w-full h-auto flex items-end justify-center bg-black/20 rounded-md lg:gap-5 sm:gap-3 gap-2 py-10 lg:px-0 md:px-0 sm:px-2 px-4 flex-wrap">
            <div className="lg:w-[25%] md:w-[40%] sm:w-[50%] w-full h-auto p-2">
              <Label htmlFor="weight">Weight (Kg)</Label>
              <Input
                id="weight"
                name="weight"
                type="text"
                placeholder="Enter your weight"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
              />
            </div>
            <div className="lg:w-[25%] md:w-[40%] sm:w-[50%] w-full h-auto p-2">
              <Label htmlFor="height">Height (Cm)</Label>
              <Input
                id="height"
                name="height"
                type="text"
                placeholder="Enter your height"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
              />
            </div>
            <div className="lg:w-[20%] md:w-[35%] sm:w-[50%] w-full h-auto p-2">
              <SecondaryBtn
                type="submit"
                className="w-full h-11 justify-center"
                onClick={calculateBMI}
              >
                Calculate BMI
              </SecondaryBtn>
            </div>

            {/* Display BMI */}
            {bmi !== null && (
              <div className="bg-black rounded-b-md px-6 py-2.5">
                <p className="text-indigo-600">
                  Your BMI: <span className="font-bold">{bmi}</span>
                </p>
                <p className="text-indigo-600">
                  {message}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default BMI;
