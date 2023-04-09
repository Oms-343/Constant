import React from "react";
const SuccessDays = [
  { id: "everyday", title: "Everyday" },
  { id: "some days", title: "Only Some days of week" },
  { id: "Repeat", title: "Repeating" },
];

const HabitDescribeFinal = () => {
  return (
    <>
      <div className="">
        <h1 className="text-lg  mt-4 ml-8">
          On which days you want to be successful ?
        </h1>
        <form action="" className="overflow-hidden">
          <fieldset className="mt-4">
            <legend className="sr-only">Notification method</legend>
            <div className="space-y-4 ml-8">
              {SuccessDays.map((SuccessDay) => (
                <div key={SuccessDay.id} className="flex items-center">
                  <input
                    id={SuccessDay.id}
                    name="notification-method"
                    type="radio"
                    defaultChecked={SuccessDay.id === "everyday"}
                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                  />
                  <label
                    htmlFor={SuccessDay.id}
                    className="ml-3 block text-sm font-medium text-gray-700"
                  >
                    {SuccessDay.title}
                  </label>
                </div>
              ))}
            </div>
          </fieldset>
          <h1 className="text-lg  mt-4 ml-8">
            Would you like to set a target for this habit ?
          </h1>
        </form>
      </div>
      <div className=" mt-8 relative p-6 flex-auto">
        <p className="my-8 text-slate-500 text-lg leading-relaxed">
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

export default HabitDescribeFinal;
