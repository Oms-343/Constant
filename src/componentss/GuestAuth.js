import React from "react";
import { FaUser } from "react-icons/fa";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

//
import { getAuth, signInAnonymously } from "firebase/auth";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { database } from "../firebaseInit";

const GuestAuth = () => {
  const navigate = useNavigate();
  async function onAnonymousClick() {
    try {
      const auth = getAuth();
      const result = await signInAnonymously(auth);
      // console.log(result.user);
      const user = result.user;

      // setting up user in database
      const docRef = doc(database, "users", user.uid);
      await setDoc(docRef, {
        name: "Anonymous User",
        timestamp: serverTimestamp(),
      });

      toast.success("anonymous login succesful");

      navigate("/home");
    } catch (error) {
      toast.error("some error occured");
    }
  }
  return (
    <>
      <button
        type="button"
        onClick={onAnonymousClick}
        className="flex items-center justify-center  p-2 border border-gray-600 rounded-full  focus:ring-2  hover:text-indigo-600 transition duration-200 ease-in-out "
      >
        <FaUser />
      </button>
    </>
  );
};

export default GuestAuth;
