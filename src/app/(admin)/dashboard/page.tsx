import Sidebar from "@/components/(admin)/sidebar/Sidebar";
import Link from "next/link";
import React from "react";
import { MdOutlinePayment } from "react-icons/md";


const Dashboard = () => {
  return (
    <>
    {/* 
        1. Paymnet
        2. Camera live
        3. Instances (running)
        4. Instances
        5. Floor Plan (target occasion)
        6. Alarm
    */}
      <div className="grid grid-cols-6 fixed lg:left-72 z-30 py-3 xs:left-5 mt-3 w-full gap-5">
        <div className="col-start-1 col-end-4 shadow-blue-gray-900/5 shadow-lg border-2 rounded-xl row-start-1 row-end-auto">
          <div className="mt-5 ml-5">
            <p className=" text-orange-primary text-2xl">
              Congratulations John! 🎉
            </p>
            <p className=" text-gray-tertiary mt-8">
              You have purchased 3 robots today 🤩.
            </p>
            <p className="text-gray-tertiary">
              Check your new raising badge in your profile.
            </p>
            <button className="text-orange-primary bg-orange-secondary rounded-md text-center py-[0.5rem] px-3 mb-5 mt-8">
              <p className=" text-xs">VIEW INSPECTRONS</p>
            </button>
          </div>
        </div>
        <div className="col-start-4 col-end-5 shadow-blue-gray-900/5 shadow-lg border-2 rounded-xl row-start-auto row-end-auto">
          <div className="text-base tracking-tight text-gray-tertiary ml-5 mt-5" >
            <div className="bg-[#d8d9ff] w-10 h-10 rounded-md flex">
              <MdOutlinePayment size={27} style={{
                color: "#696CFF",
                margin: "auto"
              }} />
            </div>
            <Link href={"/payment"}>
              <p className="mt-3">Payments</p>
            </Link>
          </div>
        </div>
        <div className="col-start-5 col-end-6 shadow-blue-gray-900/5 shadow-lg border-2 rounded-xl row-start-auto row-end-auto">
          asdfnkndaskfdas
        </div>
        <div className="col-span-2 bg-slate-800 row-start-auto row-end-auto">
          asdfnkndaskfdas
        </div>
      </div>
    </>
  );
};

export default Dashboard;
