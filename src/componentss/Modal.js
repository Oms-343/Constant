import React, { useState, useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { habits } from "./data";
import ModelContent from "./ModelContent";

export default function Modal() {
  const location = useLocation();
  const loc = location.pathname;
  const navigate = useNavigate();
  const [popular, arts, health, money, workAndStudy, social] = habits.map(
    (item) => item.options
  );

  //   const diffHabits = [popular, arts, health, money, workAndStudy, social, other]
  const [data, setData] = useState(popular);

  const [selectedType, setSelectedType] = useState("Most Popular");

  const onChange = (e) => {
    setSelectedType(e.target.value);
  };

  {
    useEffect(() => {
      if (selectedType === "Most Popular") setData(popular);
      if (selectedType === "arts") setData(arts);
      if (selectedType === "health") setData(health);
      if (selectedType === "workAndStudy") setData(workAndStudy);
      if (selectedType === "money") setData(money);
      if (selectedType === "social") setData(social);
    }, [selectedType]);
  }

  return (
    <>
      <div className="  justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
              <h3 className=" text-black text-3xl font-semibold">
                what type of habit do you want to build ?
              </h3>

              <button
                className="p-1 ml-auto bg-transparent border-0 text-black  float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={() => navigate(-1)}
              >
                <span className="bg-transparent text-black  h-6 w-6 text-2xl block outline-none focus:outline-none">
                  X
                </span>
              </button>
            </div>

            {loc === "/modal" ? (
              <ModelContent
                selectedType={selectedType}
                onChange={onChange}
                data={data}
              />
            ) : (
              <Outlet />
            )}
            {/*footer*/}
            <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
              <button
                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => navigate(-1)}
              >
                Close
              </button>
              <button
                className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => navigate(-1)}
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
      // <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
}
