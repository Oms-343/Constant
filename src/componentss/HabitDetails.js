import React from "react";
import HabitDetailsCard from "./HabitDetailsCard";

const HabitDetails = () => {
  const text1 = (
    <h1>
      <b>With a simple yes or No each day - </b> Did i succeed today ?
    </h1>
  );
  const text2 = (
    <h1>
      <b>With a Number - </b> how many times, hours i did or have done today ?
    </h1>
  );
  return (
    <>
      <div className="">
        <HabitDetailsCard text={text1} />
        <HabitDetailsCard text={text2} />
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

export default HabitDetails;
