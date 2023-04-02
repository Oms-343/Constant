import React from "react";

const HabitDescribe = () => {
  return (
    <>
      <div className="">
        <form action="">
          <input
            placeholder="Habit Name"
            type="text"
            className="relative block rounded-sm mr-8 ml-8 mt-8 border-t-4  border-pink-600 p-4 shadow-lg sm:p-6 lg:p-8"
          />
          <input
            placeholder="Habit Description"
            type="text"
            className="relative block rounded-sm mr-8 ml-8 mt-8 border-t-4  border-pink-600 p-4 shadow-lg sm:p-6 lg:p-8"
          />
        </form>
      </div>
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

export default HabitDescribe;
