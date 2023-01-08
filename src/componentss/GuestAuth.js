import React from "react";
import { FaUser } from "react-icons/fa";

const GuestAuth = () => {
  return (
    <>
      <button className="flex items-center justify-center  p-2 border border-gray-600 rounded-full  focus:ring-2  hover:text-indigo-600 transition duration-200 ease-in-out ">
        <FaUser />
      </button>
    </>
  );
};

export default GuestAuth;
