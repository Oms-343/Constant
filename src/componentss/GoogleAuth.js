import React from "react";
import { FaGoogle } from "react-icons/fa";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

//
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";
import { database } from "../firebaseInit";

const GoogleAuth = () => {
  const navigate = useNavigate();

  async function onGoogleClick() {
    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      // console.log(user);

      // checking if user already exists in database
      const docRef = doc(database, "users", user.uid);
      const docSnap = await getDoc(docRef);
      if (!docSnap.exists()) {
        await setDoc(docRef, {
          email: user.email,
          timestamp: serverTimestamp(),
        });
      }

      navigate("/home");
    } catch (e) {
      toast.error(" failed to authorize with google");
      console.log(e);
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={onGoogleClick}
        className="flex items-center justify-center  p-2 border border-gray-600 rounded-full  focus:ring-2   hover:text-red-700 transition duration-500 ease-in-out "
      >
        <FaGoogle />
      </button>
    </>
  );
};

export default GoogleAuth;
