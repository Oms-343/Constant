import React from "react";
import { FaGoogle } from "react-icons/fa";

const GoogleAuth = () => {
  return (
    <>
      <button className="flex items-center justify-center  p-2 border border-gray-600 rounded-full  focus:ring-2   hover:text-red-700 transition duration-200 ease-in-out ">
        <FaGoogle />
      </button>
    </>
  );
};

export default GoogleAuth;
