import React from "react";
import { IoMdAddCircleOutline } from "react-icons/io";
import { useState } from "react";
import Modal from "./Modal";

const MainContent = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <main className=" flex justify-center items-center h-screen bg-yellow-300 text-2xl font-semibold text-white ">
      <div className=" mb-14 flex flex-col pb-16 justify-center items-center">
        <h1>Add your first habit</h1>
        <IoMdAddCircleOutline
          onClick={() => setShowModal(true)}
          className="text-9xl cursor-pointer mt-3"
        />
        {showModal ? (
          <Modal showModal={showModal} setShowModal={setShowModal} />
        ) : null}
      </div>
    </main>
  );
};

export default MainContent;
