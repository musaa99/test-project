/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";
import Vector from "../../assets/Vector.svg";
import Call1 from "../../assets/call1.svg";
import Call2 from "../../assets/call2.svg";
import Call3 from "../../assets/call3.svg";

const Hero = () => {
  return (
    <div className="bg-white min-h-screen">
      <header className="text-center py-16">
        <h1 className="text-[70px]   leading-tight">
          Medical Software To Attract <br /> And{" "}
          <span className="font-bold">Retain Patients</span>
        </h1>
        <p className="mt-4 w-[50%] m-auto">
          Patientgrid's communication platform helps improve patient experience
          while staff hours.
        </p>
        <button className="text-[22px]">Start For Free</button>
      </header>

      {/* Table Section */}
      <div className="flex bg-white border p-8  shadow-lg shadow-gred-500/50 rounded-[20px]">
        {/* Sidebar */}
        <aside className="w-1/5  border-r-2 border-gray-200">
          <div className="p-6">
            <h1 className="text-lg font-bold text-gray-900">patientgrid</h1>
            <p className="mt-8 text-sm font-medium text-gray-700">
              Amanda Charles
            </p>
          </div>
          <div className="mt-6">
            <ul className="space-y-4">
              <li>
                <button className="flex items-center space-x-4 w-full px-6 py-2 text-gray-700 hover:bg-blue-100 rounded-md">
                  <span className="w-4 h-4 bg-blue-500 rounded-full"></span>
                  <span>Inbox</span>
                </button>
              </li>
              {/* Additional menu items (placeholders) */}
              <li className="px-6 py-2 text-gray-400">Other menu</li>
              <li className="px-6 py-2 text-gray-400">Other menu</li>
            </ul>
          </div>
        </aside>

        <main className="flex-1 p-6 ">
          <header className="flex items-center justify-between pb-4 border-b">
            <h2 className="text-xl font-semibold text-gray-800">Inbox</h2>
          </header>

          {/* Filters */}
          <div className="flex items-center gap-[9rem] mt-6">
            <div className="flex items-center space-x-2">
              <span className="text-gray-600 font-medium">Order:</span>
              <button className="px-4 py-2 text-sm font-semibold text-gray-600 bg-gray-100 rounded-md hover:bg-gray-200">
                Newest
              </button>
              <button className="px-4 py-2 text-sm font-semibold text-white bg-blue-500 rounded-md hover:bg-blue-600">
                Oldest
              </button>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-gray-600 font-medium">Filter:</span>
              <button className="px-4 py-2 text-sm font-semibold text-gray-600 bg-gray-100 rounded-md hover:bg-gray-200">
                All
              </button>
              <button className="px-4 py-2 text-sm font-semibold text-white bg-blue-500 rounded-md hover:bg-blue-600">
                Calls
              </button>
              <button className="px-4 py-2 text-sm font-semibold text-gray-600 bg-gray-100 rounded-md hover:bg-gray-200">
                SMS
              </button>
              <button className="px-4 py-2 text-sm font-semibold text-gray-600 bg-gray-100 rounded-md hover:bg-gray-200">
                Voicemails
              </button>
            </div>
          </div>

          {/* Table */}
          <div className="hero-pattern" >
            <div className="p-6">
              <div className=" flex justify-between mx-[2rem] shadow-lg shadow-gred-500/50 rounded-[20px]">
                <span className="text-sm font-medium text-gray-700">Name</span>
                <span className="text-sm font-medium text-gray-700">
                  Last Contact
                </span>
              </div>
              {/* Rows */}
              <div className="space-y-4">
                {/* Row 1 */}
                <div className="flex items-center justify-between bg-white hover:bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center space-x-4">
                    <Image
                      src={Vector}
                      width={40}
                      height={40}
                      alt="Profile Picture"
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <span className="text-gray-800">(305) 440-0858</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Image
                      src={Call1}
                      width={50}
                      height={15}
                      alt="Call Icon"
                      className=""
                    />
                  </div>
                  <span className="text-gray-600">20 Hours Ago</span>
                </div>
                {/* Row 2 */}
                <div className="flex items-center justify-between bg-white hover:bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center space-x-4">
                    <Image
                      src={Vector}
                      width={40}
                      height={40}
                      alt="Profile Picture"
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <span className="text-gray-800">(304) 450-0258</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Image
                      src={Call2}
                      width={50}
                      height={15}
                      alt="Call Icon"
                      className=""
                    />
                  </div>
                  <span className="text-gray-600">10 Hours Ago</span>
                </div>
                {/* Row 3 */}
                <div className="flex items-center justify-between bg-white hover:bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center space-x-4">
                    <Image
                      src={Vector}
                      width={40}
                      height={40}
                      alt="Profile Picture"
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <span className="text-gray-800">(325) 240-0998</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Image
                      src={Call3}
                      width={50}
                      height={15}
                      alt="Call Icon"
                      className=""
                    />
                  </div>
                  <span className="text-gray-600">01 Hour Ago</span>
                </div>
                {/* Row 4 */}
                <div className="flex items-center justify-between bg-white hover:bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center space-x-4">
                    <Image
                      src={Vector}
                      width={40}
                      height={40}
                      alt="Profile Picture"
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <span className="text-gray-800">(225) 440-0458</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Image
                      src={Call2}
                      width={50}
                      height={15}
                      alt="Call Icon"
                      className=""
                    />
                  </div>
                  <span className="text-gray-600">10 Hours Ago</span>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Hero;
