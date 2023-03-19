import React from "react";

const HabitDetailsCard = ({ text }) => {
  return (
    <>
      <a
        href="#"
        className="relative block rounded-sm mr-8 ml-8 mt-8 border-t-4  border-pink-600 p-4 shadow-lg sm:p-6 lg:p-8"
      >
        {text}
      </a>
    </>
  );
};

export default HabitDetailsCard;
