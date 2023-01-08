import React from "react";
import { useState } from "react";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { Link } from "react-router-dom";
import GoogleAuth from "../componentss/GoogleAuth";
import GuestAuth from "../componentss/GuestAuth";
import TwitterAuth from "../componentss/TwitterAuth";

const SignInform = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  function onChange(e) {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
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

        <form action="" class="mt-6 mb-0 space-y-4 rounded-lg p-8 shadow-2xl">
          <p class="text-lg font-medium">Sign In to constant</p>

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
            class="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white focus:ring-2  hover:bg-indigo-500 transition duration-200 ease-in-out"
          >
            Sign in
          </button>

          <div class="flex justify-between items-center ">
            <p class="text-center text-sm text-gray-500">
              <Link to="/forgotpassword" class="underline ">
                Forgot Password?
              </Link>
            </p>
            <Link to="/" class="text-center text-sm text-gray-500 ">
              Sign Up
            </Link>
          </div>

          <div class="flex mt-4 gap-x-6 justify-center">
            <GoogleAuth />
            <GuestAuth />
            <TwitterAuth />
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignInform;
