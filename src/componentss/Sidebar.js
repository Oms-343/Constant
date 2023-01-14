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
        <aside
          className={` ${
            open ? "w-72" : "w-20 "
          } bg-indigo-600 h-screen p-5  pt-8 relative    duration-300 `}
        >
          <div className="  flex items-center">
            <button
              onClick={() => setOpen(!open)}
              className={`z-10  absolute  flex  items-center justify-center   cursor-pointer  -right-6 top-3  w-12 h-12  bg-indigo-600 hover:bg-indigo-700
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
        </aside>

        {/* home*/}
        <div className="  flex flex-col    bg-black  w-full h-screen   pt-0">
          <header className=" flex justify-end   bg-red-500 text-2xl font-semibold text-white h-16">
            <div className="flex items-center justify-center gap-14 mr-6">
              <div>1</div>
              <div>2</div>
              <div>3</div>
              <div>4</div>
            </div>
          </header>
          <main
            onClick={() => open && setOpen(false)}
            className="h-screen bg-yellow-300 text-2xl font-semibold text-white "
          >
            homepage
          </main>
        </div>
      </div>

      {/* hero content*/}
    </>
  );
};
export default Sidebar;
