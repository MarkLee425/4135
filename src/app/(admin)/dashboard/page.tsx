import Sidebar from "@/components/(admin)/sidebar/Sidebar";
import Link from "next/link";
import React from "react";
import { MdOutlinePayment } from "react-icons/md";
import { IoIosAlarm } from "react-icons/io";
import { GrResources } from "react-icons/gr";
import Image from "next/image";

const Dashboard = () => {
  return (
    <>
      {/* 
      TODO: Mobile Responsiveness
    */}
      {/* 
        1. Paymnet - Done
        2. Camera live
        3. Instances (running)
        4. Instances
        5. Floor Plan (target occasion)
        6. Alarm - Done
    */}
      <div className="grid grid-cols-5 lg:left-72 z-30 py-3 xs:left-5 mt-3 gap-x-12 justify-center">
        {/* GRID: INTRODUCTION */}
        <div className="col-start-1 col-end-4 shadow-blue-gray-900/5 shadow-xl border-2 rounded-xl row-start-1 row-end-auto flex">
          <div className="mt-5 ml-5">
            <p className=" text-orange-primary text-2xl">
              Congratulations John! 🎉
            </p>
            <p className=" text-gray-tertiary mt-8">
              You have purchased 3 robots 🤩. {/* TODO: change the robot no */}
            </p>
            <p className="text-gray-tertiary">
              Check your new raising badge in your profile.
            </p>
            {/* Redirect to /robot */}
            <Link href={"/robot"}>
              <button className="text-orange-primary bg-orange-tertiary rounded-md text-center py-[0.5rem] px-3 mb-5 mt-8">
                <p className="text-xs">VIEW INSPECTRONS</p>
              </button>
            </Link>
          </div>
          <Image
            src="/smiling.jpg"
            alt="smiling"
            width={200}
            height={200}
            className="float-right ml-auto mr-5"
          />
        </div>
        {/* GRID: PAYMENT */}
        <div className="col-start-4 col-end-5 shadow-blue-gray-900/5 shadow-xl border-2 rounded-xl row-start-auto row-end-auto">
          <div className="text-base tracking-tight text-gray-tertiary ml-6 mt-6">
            <div className="flex">
              <div className="block">
                <div className="bg-[#d8d9ff] w-10 h-10 rounded-md flex">
                  <MdOutlinePayment
                    size={27}
                    style={{
                      color: "#696CFF",
                      margin: "auto",
                    }}
                  />
                </div>
                <p className="mt-3">Payments</p>
                <p className="text-gray-primary text-2xl mt-2">$2000</p>
              </div>
              <Image
                src="/payment.png"
                alt="payment"
                width={100}
                height={100}
                className="float-right ml-auto mr-3"
              />
            </div>
            {/* Redirect to /payment */}
            <Link href={"/payment"}>
              <button className="rounded-md mt-5 py-[0.5rem] px-3 bg-blue-quarternary">
                <p className="text-xs uppercase text-blue-primary">
                  Payment History
                </p>
              </button>
            </Link>
          </div>
        </div>
        {/* GRID: ALARM */}
        <div className="col-start-5 col-end-6 shadow-blue-gray-900/5 shadow-xl border-2 rounded-xl row-start-auto row-end-auto">
          <div className="text-base tracking-tight text-gray-tertiary ml-6 mt-6">
            <div className="flex">
              <div className="block">
                <div className="bg-[#FED2D2] w-10 h-10 rounded-md flex">
                  <IoIosAlarm
                    size={27}
                    style={{
                      color: "#FE4242",
                      margin: "auto",
                    }}
                  />
                </div>
                <p className="mt-3">Alarms</p>
                <div className="flex text-center items-end">
                  <p className="text-gray-primary text-2xl mt-2">0</p>
                  <p className="text-gray-tertiary text-xs ml-1">
                    Triggered Alarm
                  </p>
                </div>
              </div>
              <Image
                src="/alarm.png"
                alt="alarm"
                width={100}
                height={100}
                className="float-right ml-auto mr-3"
              />
            </div>
            {/* Redirect to /alarm */}
            <Link href={"/alarm"}>
              <button className="rounded-md mt-5 py-[0.5rem] px-3 bg-orange-tertiary ">
                <p className="text-xs uppercase text-[#FE4242]">view alarm</p>
              </button>
            </Link>
          </div>
        </div>
      </div>
        {/* GRID: RESOURCES */}
        <div className="col-start-1 col-end-4 shadow-blue-gray-900/5 shadow-xl border-2 rounded-xl row-start-2 row-end-auto flex">
          <div className="text-base tracking-tight text-gray-tertiary ml-6 mt-6 mb-3">
            <div className="flex">
              <div className="block">
                <div className=" bg-paleBlue-tertiary w-10 h-10 rounded-md flex">
                  <GrResources
                    size={27}
                    style={{
                      color: "#01CCFE",
                      margin: "auto",
                    }}
                  />
                </div>
                <p className="mt-3">Resources</p>
                <div className="flex text-center items-end">
                  <p className="text-gray-primary text-2xl mt-2">0</p>
                  <p className="text-gray-tertiary text-xs ml-1">
                    Alarm Triggered
                  </p>
                </div>
              </div>
              <Image
                src="/alarm.png"
                alt="alarm"
                width={100}
                height={100}
                className="float-right ml-auto mr-3"
              />
            </div>
            {/* Redirect to /alarm */}
            <Link href={"/resources"}>
              <button className="rounded-md mt-5 py-[0.5rem] px-3 bg-paleBlue-quarternary ">
                <p className="text-xs uppercase text-paleBlue-primary">view resources</p>
              </button>
            </Link>
          </div>
        </div>
        {/* <div className="col-start-1 col-end-4 shadow-blue-gray-900/5 shadow-xl border-2 rounded-xl row-start-2 row-end-auto flex">
          Resources
        </div> */}
    </>
  );
};

export default Dashboard;
