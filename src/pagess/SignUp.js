import React from "react";
import { useState } from "react";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import GoogleAuth from "../componentss/GoogleAuth";
import GuestAuth from "../componentss/GuestAuth";
import TwitterAuth from "../componentss/TwitterAuth";

import { toast } from "react-toastify";

//
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { database } from "../firebaseInit";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";

const Signupform = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  async function onSubmit(e) {
    e.preventDefault();

    try {
      const auth = getAuth();
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      // console.log(user);

      // since we dont want to save the password in database
      const formDataCopy = { ...formData };
      delete formDataCopy.password;
      formDataCopy.timestamp = serverTimestamp();

      // saving users in databse
      await setDoc(doc(database, "users", user.uid), formDataCopy);

      //
      navigate("/home");
    } catch (error) {
      // email === "" && password === ""
      //   ? toast.error("please fill email and password")
      //   : toast.error("someting went wrong please try again ");
      // console.log(error);

      if (email === "" && password === "") {
        toast.error("please fill email and password");
      } else {
        toast.error(error.message);
      }
    }
  }

  return (
    <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-lg">
        <h1 class="text-center text-2xl font-bold  text-indigo-600 sm:text-3xl">
          Get started today
        </h1>

        <p class="mx-auto mt-4 max-w-md text-center text-gray-500">
          Welcome to Constant. A web app to track your habits
        </p>

        <form
          onSubmit={onSubmit}
          class="mt-6 mb-0 space-y-4 rounded-lg p-8 shadow-2xl"
        >
          <p class="text-lg font-medium">Sign up to constant</p>

          <div>
            <label for="email" class="text-sm font-medium">
              Email
            </label>

            <div class="relative mt-1">
              <input
                type="email"
                id="email"
                value={email}
                onChange={onChange}
                class="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                placeholder="Enter email"
              />

              <span class="absolute inset-y-0 right-4 inline-flex items-center">
                <AiOutlineEye class=" text-lg" />
              </span>
            </div>
          </div>

          <div>
            <label for="password" class="text-sm font-medium">
              Password
            </label>

            <div class="relative mt-1">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={onChange}
                class="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                placeholder="Enter password"
              />

              <span class="absolute inset-y-0 right-4 inline-flex items-center">
                {showPassword ? (
                  <AiOutlineEye
                    class="cursor-pointer text-lg"
                    onClick={() => setShowPassword((prevState) => !prevState)}
                  />
                ) : (
                  <AiOutlineEyeInvisible
                    class="cursor-pointer text-lg "
                    onClick={() => setShowPassword((prevState) => !prevState)}
                  />
                )}
              </span>
            </div>
          </div>

          <button
            type="submit"
            class="block w-full rounded-lg bg-indigo-500 px-5 py-3 text-sm font-medium text-white focus:ring-2  hover:bg-indigo-600 transition duration-200 ease-linear"
          >
            Sign up
          </button>

          <div>
            <p class="text-center text-sm text-gray-500">
              Have an account?
              <Link to="/sign-in" class="underline ml-1">
                Sign in
              </Link>
            </p>
            <p class="text-center text-sm text-gray-500 mt-4">
              or you can sign in with
            </p>
          </div>

          <div className="flex mt-4 gap-x-6 justify-center">
            <GoogleAuth />
            <GuestAuth />
            <TwitterAuth />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signupform;
