import React from "react";

const MainContent = () => {
  return (
    <main className=" flex justify-center items-center h-screen bg-yellow-300 text-2xl font-semibold text-white ">
      <div className="flex flex-col">
        <h1>Add your first habit</h1>
        <button className="bg-black mt-4">click me</button>
      </div>
    </main>
  );
};

export default MainContent;
