import React from "react";

import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { GiElectric } from "react-icons/gi";

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Quick Guide", src: "Chart_fill" },
    { title: "Accounts", src: "User" },
    { title: "Analytics", src: "Chart" },
    { title: "Setting", src: "Setting" },
  ];

  return (
    <>
      <div className="flex ">
        {/* sidebar div*/}
        <div
          className={` ${
            open ? "w-72" : "w-20 "
          } bg-indigo-600 h-screen p-5  pt-8 relative    duration-300 `}
        >
          <div className="flex items-center">
            <button
              onClick={() => setOpen(!open)}
              className={`absolute  flex  items-center justify-center   cursor-pointer  -right-6 top-3  w-12 h-12  bg-indigo-600 hover:bg-indigo-700
                        border-2 rounded-full hover:text-white    `}
            >
              <RxHamburgerMenu className=" flex text-2xl " />
            </button>

            <div className="flex gap-x-4 justify-center items-center">
              <GiElectric
                className={` duration-500 text-3xl ${
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

          <ul className="pt-6">
            {Menus.map((Menu, index) => (
              <li
                key={index}
                className={`flex  rounded-md p-2 cursor-pointer hover:bg-white text-gray-300 text-sm items-center gap-x-4 `}
              >
                <img src={`./src/assets/${Menu.src}.png`} />
                <span
                  className={`${!open && "hidden"} origin-left duration-200`}
                >
                  {Menu.title}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* navbar div*/}
        <div
          onClick={() => open && setOpen(false)}
          className=" flex justify-center items-center bg-black h-20 w-full  p-7"
        >
          <h1 className="  text-2xl font-semibold text-white ">navbar</h1>
        </div>
      </div>

      {/* hero content*/}
    </>
  );
};
export default Sidebar;
