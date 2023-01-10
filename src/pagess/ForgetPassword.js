import React from "react";
import { useState } from "react";
import { AiOutlineEye } from "react-icons/ai";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import GoogleAuth from "../componentss/GoogleAuth";
import GuestAuth from "../componentss/GuestAuth";
import TwitterAuth from "../componentss/TwitterAuth";

//
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  function onChange(e) {
    setEmail(e.target.value);
  }

  async function onSubmit(e) {
    e.preventDefault();
    try {
      const auth = getAuth();
      await sendPasswordResetEmail(auth, email);
      toast.success("reset password email sent");
    } catch (error) {
      toast.error("could not complete reset password ");
    }
  }

  return (
    <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-lg">
        <h1 class="text-center text-2xl font-bold  text-indigo-600 sm:text-3xl">
          Sign In to continue..
        </h1>

        <p class="mx-auto mt-4 max-w-md text-center text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati
          sunt dolores deleniti inventore quaerat mollitia?
        </p>

        <form
          onSubmit={onSubmit}
          class=" mt-6 mb-0 space-y-4 rounded-lg p-8 shadow-2xl"
        >
          <p class="flex justify-center  text-lg font-medium">
            <span>Enter your email</span>
          </p>

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

          <button
            type="submit"
            class="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white focus:ring-2  hover:bg-indigo-500 transition duration-200 ease-in-out"
          >
            Reset password
          </button>

          <div className="flex justify-end items-center ">
            <Link to="/" class="text-center text-sm text-gray-500 ">
              Sign Up
            </Link>
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

export default ForgotPassword;
