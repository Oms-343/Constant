import React from "react";
import Header from "./Header";
import MainContent from "./MainContent";

import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { GiElectric } from "react-icons/gi";
import { MdOutlineLiveHelp, MdSettingsSuggest } from "react-icons/md";
import { FiUser } from "react-icons/fi";
import { AiOutlineBarChart } from "react-icons/ai";

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Quick Guide", src: <MdOutlineLiveHelp /> },
    { title: "Profile ", src: <FiUser /> },
    { title: " Analytics", src: <AiOutlineBarChart /> },
    { title: "Settings", src: <MdSettingsSuggest /> },
  ];

  return (
    <>
      <div className="flex ">
        {/* sidebar div*/}
        <aside
          className={` ${
            open ? "w-72" : "w-20  p-5 "
          } bg-indigo-600 h-screen   pt-6 relative    duration-300 `}
        >
          <div className="   flex items-center">
            <button
              onClick={() => setOpen(!open)}
              className={`z-10  absolute  flex  items-center justify-center   cursor-pointer  -right-6 top-3  w-12 h-12  bg-indigo-600 hover:bg-indigo-700
                        border-2 rounded-full hover:text-white    `}
            >
              <RxHamburgerMenu className=" flex text-2xl " />
            </button>

            <div className=" pb-3 flex gap-x-4 items-center  ">
              <GiElectric
                className={`   duration-500 text-3xl ${
                  open && "rotate-[360deg] text-white"
                }`}
              />

              <h1
                className={` text-white origin-left font-medium text-xl duration-200 ${
                  !open && "scale-0"
                }`}
              >
                Constant
              </h1>
            </div>
          </div>

          <ul className="pt-6  ">
            {Menus.map((Menu, index) => (
              <li
                key={index}
                className={`flex ${
                  open ? "rounded-sm" : "rounded-md justify-center "
                }  bg-black      p-3 cursor-pointer hover:bg-white text-gray-300 text-sm items-center  gap-x-4 mb-8 mt-3  border-l-4 border-red-500`}
              >
                <span className="    text-2xl">{Menu.src}</span>

                <span
                  className={`${
                    !open && "hidden"
                  } whitespace-nowrap  duration-300`}
                >
                  {Menu.title}
                </span>
              </li>
            ))}
          </ul>
        </aside>

        {/* home*/}
        <div className="  flex flex-col    bg-black  w-full h-screen   pt-0">
          <Header />
          <MainContent />
        </div>
      </div>

      {/* hero content*/}
    </>
  );
};
export default Sidebar;
