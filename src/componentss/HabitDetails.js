import React, { useState } from "react";
import HabitDetailsCard from "./HabitDetailsCard";
import { Link } from "react-router-dom";

const habitPattern = {
  SimpleTracking: " With a simple yes or No each day -  Did i succeed today ?",
  multiTracking:
    " With a Number - how many times, hours i did or have done today ?",
};

const HabitDetails = () => {
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (event) => {
    setSelectedButton(event.target.value);
  };
  return (
    <>
      <form className=" flex flex-col w-4/4">
        <button
          onClick={handleButtonClick}
          id="trackType"
          value="SimpleTracking"
          className="relative  rounded-sm mr-8 ml-8 mt-8 border-t-4 border-l-4  border-pink-600 p-4 shadow-lg sm:p-6 lg:p-8"
        >
          <Link to="/modal/habit-describe" state={{ background: "/home" }}>
            {"hello"}
          </Link>
        </button>
        <button
          onClick={handleButtonClick}
          id="trackType"
          value="multiTracking"
          className="relative  rounded-sm mr-8 ml-8 mt-8 border-t-4 border-l-4  border-pink-600 p-4 shadow-lg sm:p-6 lg:p-8"
        >
          <Link to="/modal/habit-describe" state={{ background: "/home" }}>
            {"hello"}
          </Link>
        </button>
      </form>
      <div className=" mt-8 relative p-6 flex-auto">
        <p className="my-4 text-slate-500 text-lg leading-relaxed">
          I always felt like I could do anything. That’s the main thing people
          are controlled by! Thoughts- their perception of themselves! They're
          slowed down by their perception of themselves. If you're taught you
          can’t do anything, you won’t do anything. I was taught I could do
          everything.
        </p>
      </div>
    </>
  );
};

export default HabitDetails;
