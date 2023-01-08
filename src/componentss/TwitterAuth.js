import React from "react";
import { FaTwitter } from "react-icons/fa";

const TwitterAuth = () => {
  return (
    <>
      <button className="flex items-center justify-center  p-2 border border-gray-600 rounded-full  focus:ring-2  hover:text-blue-500 transition duration-200 ease-in-out  ">
        <FaTwitter />
      </button>
    </>
  );
};

export default TwitterAuth;
