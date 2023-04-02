import React from "react";
import { Link, useLocation } from "react-router-dom";

const HabitDetailsCard = ({ text }) => {
  const location = useLocation();
  return (
    <>
      <Link
        to="/modal/habit-describe"
        state={{ background: "/home" }}
        className="relative block rounded-sm mr-8 ml-8 mt-8 border-t-4  border-pink-600 p-4 shadow-lg sm:p-6 lg:p-8"
      >
        {text}
      </Link>
    </>
  );
};

export default HabitDetailsCard;
