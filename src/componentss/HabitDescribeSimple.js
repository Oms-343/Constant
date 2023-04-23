import React from "react";

const HabitDescribeSimple = () => {
  return (
    <>
      <div className="">
        <form action="" className="overflow-hidden">
          <input
            placeholder="Habit Name"
            type="text"
            className=" w-3/4  block rounded-sm mr-8 ml-8 mt-8 border-t-4  border-pink-600 p-4 shadow-lg sm:p-6 lg:p-8"
          />
          <input
            placeholder="Habit Description"
            type="text"
            className=" w-3/4  rounded-sm mr-8 ml-8 mt-8 border-t-4  border-pink-600 p-4 shadow-lg sm:p-6 lg:p-8"
          />
        </form>
      </div>
      <div className=" mt-8 relative p-6 flex-auto">
        <p className="my-2 text-slate-500 text-lg leading-relaxed">
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

export default HabitDescribeSimple;
