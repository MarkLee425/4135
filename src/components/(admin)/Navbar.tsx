"use client";

import React, { ReactEventHandler } from "react";
import { FaRegBell, FaSearch } from "react-icons/fa";
import SearchBar from "./SearchBar";

const Navbar = () => {
  /* Search Bar OnSubmit Handler */
  const onSubmitHandler = (e: React.KeyboardEvent<HTMLButtonElement>) => {};
  return (
    <div className="flex">
      <nav className="fixed right-5 lg:left-72 top-2 z-30 py-3 xs:left-5 shadow-blue-gray-900/5 shadow-md border-2 rounded-xl mt-3 flex">
        {/* Search Bar */}
        <div className="items-center flex">
          <button
            className="hover:bg-slate-200 py-2 px-2 rounded-full ml-5"
            type="submit"
          >
            <FaSearch size={20} style={{ color: "#777777" }} />
          </button>
          <SearchBar />
        </div>
        <div className="fixed right-10">
          {/* Notification */}
          <button className="hover:bg-slate-200 py-2 px-2 rounded-full align-middle">
            <FaRegBell size={20} style={{ color: "#777777" }} />
          </button>
          {/* Avatar */}
          <button className="hover:bg-slate-200 py-3 px-3 rounded-full ml-3 bg-slate-600 align-middle"></button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
