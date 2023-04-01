import React from "react";

import { IoMdAddCircleOutline } from "react-icons/io";
import { FiEdit } from "react-icons/fi";
import { ImAlarm } from "react-icons/im";
import { AiOutlineSetting } from "react-icons/ai";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className=" flex justify-end   bg-red-500 text-2xl font-semibold  h-20">
      <nav className="flex items-center justify-center gap-14 mr-6">
        <button className="flex flex-col  items-center text-white ">
          <IoMdAddCircleOutline className="text-2xl   " />
          <span className="text-sm">Add</span>
        </button>
        <Link to="/home/edit-habit">
          <button className="flex flex-col  items-center text-white ">
            <AiOutlineSetting className="text-2xl   " />
            <span className="text-sm">Edit</span>
          </button>
        </Link>

        <Link to="/home/note">
          <button className="flex flex-col  items-center text-white ">
            <FiEdit className="text-2xl   " />
            <span className="text-sm">Note</span>
          </button>
        </Link>
        <button className="flex flex-col  items-center text-white ">
          <ImAlarm className="text-2xl   " />
          <span className="text-sm">remind</span>
        </button>
      </nav>
    </header>
  );
};

export default Header;
