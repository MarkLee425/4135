"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Button from "../../../components/buttons/Button";
import Link from "next/link";
import { AiFillGoogleCircle } from "react-icons/ai";
import { signIn } from "next-auth/react";

const Signup = () => {
  const requiredInputArray = ["firstName", "lastName", "username", "email", "password"];

  const checkRequire = (txt: string) => requiredInputArray.includes(txt);

  const router = useRouter();

  const clickHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    router.push("/dashboard");
  };

  return (
    <div className="max-container padding-container flex flex-col gap-5 py-10 items-center justify-center mt-10 border-2 rounded-lg">
      <img src="/icon.svg" key="icon" id="icon" />
      <form className="w-full max-w-sm">
        <div className="header">
          <h1 className="text-center pb-10 font-bold text-lg">
            Create your Inspectron Account
          </h1>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="inline-first-name"
              key="first_name_label"
            >
              First Name {checkRequire("firstName") && "*"}
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-first-name"
              type="text"
              key="first_name_input"
              placeholder="First name"
              required={checkRequire("firstName")}
            />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="inline-last-name"
              key="last_name_label"
            >
              Last Name {checkRequire("lastName") && "*"}
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-last-name"
              type="text"
              key="last_name_input"
              placeholder="Last name"
              required={checkRequire("lastName")}
            />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="inline-username"
              key="username_label"
            >
              Username {checkRequire("username") && "*"}
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-username"
              type="text"
              key="username_input"
              placeholder="Username"
              required={checkRequire("username")}
            />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="inline-email"
              key="email_label"
            >
              Email Address {checkRequire("email") && "*"}
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-email"
              type="email"
              key="email_input"
              placeholder="E-mail address"
              required={checkRequire("email")}
            />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="inline-password"
              key="password_label"
            >
              Password {checkRequire("password") && "*"}
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-password"
              type="password"
              key="password_input"
              placeholder="*********"
              required={checkRequire("password")}
            />
          </div>
        </div>
        <div>
          <Link href="/login">
            <h1 className="font-bold text-blue-500 text-xs flex ">
              Have an account? Sign In
            </h1>
          </Link>
        </div>
        <div className="md:flex md:items-center">
          <div className="md:w-1/3"></div>
          <div className="md:w-2/3">
            <Button
              variant="bg-buttons-submit-bg text-center text-sm text-white min-w-[100%] mt-5 py-3 rounded-md hover:bg-buttons-submit-hover"
              type="submit"
              txt="Sign Up"
              onSubmit={clickHandler}
              icon={""}
            />
          </div>
        </div>
        <div className="text-[#9f9f9f] text-center mt-7 text-sm">
          <p>or you can sign in with</p>
          <button
            className="mt-3 px-[20] py-[20] rounded-full mb-5"
            onClick={(e) => {
              e.preventDefault();
              signIn("google");
            }}
          >
            <AiFillGoogleCircle size={20} />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
