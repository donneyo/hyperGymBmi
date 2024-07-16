// import React, { useState } from "react";
// import { Dumbbell, Menu, X } from "lucide-react";
// import { Link } from "react-router-dom";
// import PrimaryBtn from "../Button/PrimaryBtn";
//
// const Navbar = () => {
//   const [navbar, setNavbar] = useState(false);
//   const navItems = [
//     {
//       name: "Home",
//       link: "/",
//     },
//     {
//       name: "About",
//       link: "/about",
//     },
//     {
//       name: "Services",
//       link: "/services",
//     },
//     {
//       name: "Plan",
//       link: "/plan",
//     },
//     {
//       name: "Contact",
//       link: "/contact",
//     },
//   ];
//   return (
//     <>
//       <nav className="w-full h-auto bg-[#1d1d1d] shadow-none lg:px-24 md:px-16 sm:px-6 px-4 py-3">
//         <div className="justify-between mx-auto lg:w-full md:items-center md:flex">
//           {/* Navbar logo & toggle button section */}
//           <div>
//             <div className="flex items-center justify-between py-1 md:py-1 md:block">
//               {/* Logo section */}
//               <Link className="text-3xl text-indigo-600 font-semibold tracking-[0.1rem] flex items-end gap-x-1 relative">
//                 H<span className="text-xl font-bold text-gray-300">Y</span>PER <span className="text-white">GYM</span>
//                 <Dumbbell className="w-5 h-4 text-indigo-600 -rotate-45 absolute top-0 left-[18%] translate-x-[-50%]" />
//               </Link>
//               <div className="md:hidden">
//                 <button
//                   className="p-2 text-gray-700 rounded-md outline-none border border-transparent focus:border-gray-400 focus:border"
//                   onClick={() => setNavbar(!navbar)}
//                 >
//                   {navbar ? (
//                     <X className="text-gray-400 cursor-pointer" size={24} />
//                   ) : (
//                     <Menu className="text-gray-400 cursor-pointer" size={24} />
//                   )}
//                 </button>
//               </div>
//             </div>
//           </div>
//           {/* NAvbar menu items section */}
//           <div
//             className={`flex justify-between items-center md:block ${
//               navbar ? "block" : "hidden"
//             }`}
//           >
//             <ul className="list-none lg:flex md:flex sm:block block items-center gap-x-5 gap-y-16">
//               {navItems.map((item, index) => (
//                 <li key={index}>
//                   <Link
//                     to={item.link}
//                     className="text-gray-500 text-lg font-medium hover:text-indigo-600 ease-out duration-700"
//                   >
//                     {item.name}
//                   </Link>
//                 </li>
//               ))}
//               <PrimaryBtn>Become A Member</PrimaryBtn>
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// };
//
// export default Navbar;
import React, { useState } from "react";
import { Dumbbell, Menu, X } from "lucide-react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import PrimaryBtn from "../Button/PrimaryBtn";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const navItems = [
    {
      name: "Home",
      link: "home",
    },
    {
      name: "About",
      link: "about",
    },
    {
      name: "Services",
      link: "services",
    },
    {
        name: "Check BMI",
        link: "bmi",
    },
    {
      name: "Plan",
      link: "plan",
    },
    {
      name: "Contact",
      link: "contact",
    },
  ];

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <nav className="w-full h-auto bg-[#1d1d1d] shadow-none lg:px-24 md:px-16 sm:px-6 px-4 py-3">
        <div className="justify-between mx-auto lg:w-full md:items-center md:flex">
          {/* Navbar logo & toggle button section */}
          <div>
            <div className="flex items-center justify-between py-1 md:py-1 md:block">
              {/* Logo section */}
              <ScrollLink
                to="home"
                smooth={true}
                duration={1000}
                className="text-3xl text-indigo-600 font-semibold tracking-[0.1rem] flex items-end gap-x-1 relative cursor-pointer"
                onClick={toggleHome}
              >
                H<span className="text-xl font-bold text-gray-300">Y</span>PER{" "}
                <span className="text-white">GYM</span>
                <Dumbbell className="w-5 h-4 text-indigo-600 -rotate-45 absolute top-0 left-[18%] translate-x-[-50%]" />
              </ScrollLink>
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none border border-transparent focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <X className="text-gray-400 cursor-pointer" size={24} />
                  ) : (
                    <Menu className="text-gray-400 cursor-pointer" size={24} />
                  )}
                </button>
              </div>
            </div>
          </div>
          {/* Navbar menu items section */}
          <div
            className={`flex justify-between items-center md:block ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="list-none lg:flex md:flex sm:block block items-center gap-x-5 gap-y-16">
              {navItems.map((item, index) => (
                <li key={index}>
                  <ScrollLink
                    to={item.link}
                    smooth={true}
                    duration={1000}
                    className="text-gray-500 text-lg font-medium hover:text-indigo-600 ease-out duration-700 cursor-pointer"
                    onClick={() => setNavbar(false)} // Close navbar on link click
                  >
                    {item.name}
                  </ScrollLink>
                </li>
              ))}
              <PrimaryBtn>
              <ScrollLink to="contact" smooth={true} duration={500}>
                    Become A Member
               </ScrollLink>
              </PrimaryBtn>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
