"use client";

import React from "react";
import Image from "next/image";
import Clickable from "./buttons/Clickable";
import { FaHome, FaDatabase, FaRobot, FaRegUser } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";
import { MdHistory } from "react-icons/md";
import { BiLogOut } from "react-icons/bi";
import { usePathname, useRouter } from "next/navigation";
import { ICON_SIZE, styles } from "./constant";
import Signout from "./buttons/Signout";

const Sidebar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const currentPath = pathname;
  const isOnPage = (page: string) => currentPath.includes(page);

  const pages = [
    {
      name: "Dashboard",
      route: "dashboard",
      icon: (
        <FaHome
          style={{
            color: isOnPage("dashboard")
              ? styles.color.onPage.icon
              : styles.color.outPage.icon,
          }}
          size={ICON_SIZE}
        />
      ),
    },
    {
      name: "My Inspectron",
      route: "robot",
      icon: (
        <FaRobot
          style={{
            color: isOnPage("robot")
              ? styles.color.onPage.icon
              : styles.color.outPage.icon,
          }}
          size={ICON_SIZE}
        />
      ),
    },
    {
      name: "Data Center",
      route: "data",
      icon: (
        <FaDatabase
          style={{
            color: isOnPage("data")
              ? styles.color.onPage.icon
              : styles.color.outPage.icon,
          }}
          size={ICON_SIZE}
        />
      ),
    },
    {
      name: "History",
      route: "history",
      icon: (
        <MdHistory
          style={{
            color: isOnPage("history")
              ? styles.color.onPage.icon
              : styles.color.outPage.icon,
          }}
          size={ICON_SIZE}
        />
      ),
    },
    {
      name: "Profile",
      route: "profile",
      icon: (
        <FaRegUser
          style={{
            color: isOnPage("profile")
              ? styles.color.onPage.icon
              : styles.color.outPage.icon,
          }}
          size={ICON_SIZE}
        />
      ),
    },
    {
      name: "Setting",
      route: "setting",
      icon: (
        <IoIosSettings
          style={{
            color: isOnPage("setting")
              ? styles.color.onPage.icon
              : styles.color.outPage.icon,
          }}
          size={ICON_SIZE}
        />
      ),
    },
  ];

  return (
    <>
      <div className="container relative block left-0 max-w-[15rem] flex-row rounded-r-[0.2rem] h-[calc(100vh)] shadow-blue-gray-900/5 shadow-xl p-4">
        <div
          className="flex items-center ml-4 hover:cursor-pointer mt-2"
          onClick={() => router.push("/dashboard")}
        >
          <Image
            src="/icon.svg"
            alt="logo"
            width={40}
            height={50}
            loading="lazy"
            style={{ width: "auto", height: "auto" }}
          />
          <h1 className="font-extrabold text-transparent ml-3 uppercase text-md bg-clip-text bg-gradient-to-r from-gray-800 via-gray-400 to-gray-800">
            Inspectron
          </h1>
        </div>
        <nav className="flex flex-col gap-1 max-w-[15rem] item-middle align-middle mt-5 ml-2">
          {pages.map(({ name, route, icon }) => (
            <Clickable
              key={route}
              route={route}
              text={name}
              icon={icon}
              isCurrentRoute={isOnPage(route)}
            />
          ))}
          <Signout
            key="logout"
            route="login"
            text="Logout"
            icon={<BiLogOut style={{ color: "#a1a1a1" }} size={ICON_SIZE} />}
          />
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
