import React, { useState } from "react";
import { IoMdAddCircleOutline } from "react-icons/io";

import { useLocation, Link } from "react-router-dom";
import Stepper from "./Stepper";

const MainContent = () => {
  const [page, setPage] = useState(false);
  const location = useLocation();

  return (
    <>
      {page ? (
        <main className=" flex justify-center items-center h-screen bg-yellow-300 text-2xl font-semibold text-white ">
          <div className=" mb-14 flex flex-col pb-16 justify-center items-center">
            <h1>Add your first habit</h1>
            <Link to="/modal" state={{ background: location }}>
              <IoMdAddCircleOutline className="text-9xl cursor-pointer mt-3" />
            </Link>
          </div>
        </main>
      ) : (
        <main className=" flex justify-center items-center h-screen bg-yellow-300 text-2xl font-semibold text-white ">
          <div className=" mb-14 flex flex-col pb-16 justify-center items-center w-full">
            <Stepper />
          </div>
        </main>
      )}
    </>
  );
};

export default MainContent;
