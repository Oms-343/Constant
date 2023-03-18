import React from "react";
import Card from "./card";

const ModelContent = ({ selectedType, onChange, data }) => {
  return (
    <>
      <div className="flex items-center justify-center mb-8">
        <select
          class="block px-3 py-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm w-52 focus:outline-none focus:ring-primary-500 focus:border-primary-500"
          name="habits"
          value={selectedType}
          onChange={onChange}
        >
          {/* {data.map((obj) => {
          return <option key={obj.id}>{obj.type}</option>;
        })} */}

          <option value="Most Popular">"Most Popular"</option>
          <option value="arts">arts</option>
          <option value="health">Health</option>
          <option value="workAndStudy">Work and Study</option>
          <option value="money">Money</option>
          <option value="social">Social</option>
        </select>
      </div>

      {/*  different habits section*/}
      <div className="  grid grid-cols-2 gap-4 sm:grid-cols-2">
        <Card data={data} />
      </div>

      {/*body*/}
      <div className="relative p-6 flex-auto">
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

export default ModelContent;
