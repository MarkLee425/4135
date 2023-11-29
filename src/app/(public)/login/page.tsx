"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { AiFillGoogleCircle } from "react-icons/ai";
import { signIn } from "next-auth/react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  useEffect(() => {
    console.log("username: ", username);
    console.log("password: ", password);
  }, [username, password]);
  return (
    <div className="max-w-md align-middle px-6 items-center justify-center mx-auto mt-20 shadow-2xl shadow-red-300">
      <img src="/inspectron.png" className="mt-5 py-3 px-3 mx-auto" />
      <form>
        <ul>
          <li>
            <input
              key={"username"}
              id="username"
              name="username"
              type="text"
              placeholder="Username or E-mail"
              required={true}
              onChange={(e) => setUsername(e.target.value)}
              className="border-[1px] border-gray-10 min-w-[100%] py-3 px-3 mt-3 rounded-md hover:border-[#3f3f3f] transition-all focus:outline-none"
            />
          </li>
          <li>
            <input
              key={"password"}
              id="password"
              name="password"
              type="password"
              placeholder="Password"
              required={true}
              className="border-[1px] border-gray-10 min-w-[100%] py-3 px-3 mt-5 rounded-md hover:border-[#3f3f3f] transition-all focus:outline-none"
              onChange={(e) => setPassword(e.target.value)}
            />
          </li>
        </ul>
        <button
          type="submit"
          className=" bg-buttons-submit-bg text-center text-sm text-white min-w-[100%] mt-5 py-3 rounded-md hover:bg-buttons-submit-hover"
          onSubmit={() => {}}
        >
          Sign In
        </button>
        <div className="flex text-sm text-[#626262] mt-5 justify-between">
          <Link href="/password/reset">
            <p>Forget Password?</p>
          </Link>
          <Link href="/signup">
            <p className="">Sign Up</p>
          </Link>
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

export default Login;
