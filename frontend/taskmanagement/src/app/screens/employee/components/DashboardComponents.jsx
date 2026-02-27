"use client"
import React from "react"
import {Check,ClipboardClock,Bug} from "lucide-react"
import { useUser } from "@/app/contexts/userContext"

export default function DashboardComonents(){
    const {userDetail} = useUser();
    console.log(userDetail);
    return(
        <div className="mt-5 flex flex-col gap-5">

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

    {/* Completed */}
    <button
      className="flex flex-col justify-center w-full h-36 bg-indigo-500 rounded-2xl shadow-lg hover:scale-105 hover:bg-indigo-600 transition-all duration-300 text-white p-4"
    >
      <Check
        className="w-8 h-8 mb-3 bg-white rounded-lg p-1"
        color="green"
        strokeWidth={2}
      />
      <h2 className="text-3xl font-bold leading-none">20</h2>
      <p className="text-sm mt-1 text-indigo-100">Completed</p>
    </button>

    {/* Pending */}
    <button
      className="flex flex-col justify-center w-full h-36 bg-yellow-500 rounded-2xl shadow-lg hover:scale-105 hover:bg-yellow-600 transition-all duration-300 text-white p-4"
    >
      <ClipboardClock
        className="w-8 h-8 mb-3 bg-white rounded-lg p-1"
        color="orange"
        strokeWidth={2}
      />
      <h2 className="text-3xl font-bold leading-none">5</h2>
      <p className="text-sm mt-1 text-yellow-100">Pending</p>
    </button>

    {/* Testing */}
    <button
      className="flex flex-col justify-center w-full h-36 bg-pink-500 rounded-2xl shadow-lg hover:scale-105 hover:bg-pink-600 transition-all duration-300 text-white p-4"
    >
      <Bug
        className="w-8 h-8 mb-3 bg-white rounded-lg p-1"
        color="red"
        strokeWidth={2}
      />
      <h2 className="text-3xl font-bold leading-none">3</h2>
      <p className="text-sm mt-1 text-pink-100">Testing</p>
    </button>

  </div>

  <div className="bg-gray-800 rounded-xl p-4 shadow-lg w-fit">
    <h1 className="text-white text-lg font-semibold mb-3">
      Recent Tasks
    </h1>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">

      <div className="bg-gray-700 rounded-xl p-4 hover:bg-gray-600 transition w-fit">
        <div>
          <h1 className="inline-block bg-yellow-500 text-xs text-white px-3 py-1 rounded-sm mb-3">
          2 Days Left
        </h1>
          <span className="px-3 py-1 text-xs font-medium bg-red-500/20 text-red-400 rounded-full ml-5">
            High
          </span>
        </div>
        
        <h2 className="text-white text-md font-semibold mb-1">
          Task Manager Dashboard
        </h2>
        
        <div className="flex">
          <h2 className="text-white text-sm mb-2">Assigned To : </h2>
          <p className="text-gray-300 text-sm ml-1">  Pankaj Bagauli</p>
        </div>
        <div>
          <div className="flex justify-between text-xs text-gray-400 mb-1">
            <span>Progress</span>
            <span>50%</span>
          </div>

          <div className="w-full bg-gray-800 rounded-full h-2">
            <div className="bg-purple-600 h-2 rounded-full w-[50%]"></div>
          </div>
        </div>
      </div>


      <div className="bg-gray-700 rounded-xl p-4 hover:bg-gray-600 transition w-fit">
        <div>
          <h1 className="inline-block bg-yellow-500 text-xs text-white px-3 py-1 rounded-sm mb-3">
          2 Days Left
        </h1>
          <span className="px-3 py-1 text-xs font-medium bg-red-500/20 text-red-400 rounded-full ml-5">
            High
          </span>
        </div>
        
        <h2 className="text-white text-md font-semibold mb-1">
          Task Manager Dashboard
        </h2>
        
        <div className="flex">
          <h2 className="text-white text-sm mb-2">Assigned To : </h2>
          <p className="text-gray-300 text-sm ml-1">  Pankaj Bagauli</p>
        </div>
        <div>
          <div className="flex justify-between text-xs text-gray-400 mb-1">
            <span>Progress</span>
            <span>50%</span>
          </div>

          <div className="w-full bg-gray-800 rounded-full h-2">
            <div className="bg-purple-600 h-2 rounded-full w-[50%]"></div>
          </div>
        </div>
      </div>

      <div className="bg-gray-700 rounded-xl p-4 hover:bg-gray-600 transition md:col-span-2 ">
        <div>
          <h1 className="inline-block bg-yellow-500 text-xs text-white px-3 py-1 rounded-sm mb-3">
          2 Days Left
        </h1>
          <span className="px-3 py-1 text-xs font-medium bg-red-500/20 text-red-400 rounded-full ml-5">
            High
          </span>
        </div>
        
        <h2 className="text-white text-md font-semibold mb-1">
          Task Manager Dashboard
        </h2>
        
        <div className="flex">
          <h2 className="text-white text-sm mb-2">Assigned To : </h2>
          <p className="text-gray-300 text-sm ml-1">  Pankaj Bagauli</p>
        </div>
        <div>
          <div className="flex justify-between text-xs text-gray-400 mb-1">
            <span>Progress</span>
            <span>50%</span>
          </div>

          <div className="w-full bg-gray-800 rounded-full h-2">
            <div className="bg-purple-600 h-2 rounded-full w-[50%]"></div>
          </div>
        </div>
      </div>

    </div>
  </div>
</div>

    )
}