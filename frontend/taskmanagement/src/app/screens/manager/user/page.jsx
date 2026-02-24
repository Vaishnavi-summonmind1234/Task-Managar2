"use client";

import { useState } from "react";
import Form from "@/app/components/Form";
import { useRouter } from "next/navigation";
import AddUser from "@/app/components/AddUser";
import { AddUserForm } from "@/app/components/AddUserForm";
import { Menu } from "lucide-react";

export default function TaskPage(){
    const [updateStatus,setUpdateStatus] = useState(false)
    const [openSidebar , setOpensidebar] = useState(true)
    
    const [status, setStatus] = useState("");
    const router = useRouter();
    const handleSidebar = () => {
      setOpensidebar(!openSidebar)
    }
     
    const [formData, setFormData] = useState({
      startDate: "",
      endDate: "",
      estimatedTime: "",
      completionPercentage: "",
      attachments: [],
      approach: ""
    });
    const tasks = [
  {
    name: "Dashboard UI creations creations creations creations",
    AssignTo: "Employee1,Employee 2",
    status: "Pending",
    CreatedAt: "12 Jan 2026",
    priority: "High",
  },
{
    name: "Dashboard UI creations creations creations creations",
    AssignTo: "Employee1,Employee 2",
    status: "Testing",
    CreatedAt: "12 Jan 2026",
    priority: "Medium",
  },
  {
    name: "Dashboard UI creations creations creations creations",
    AssignTo: "Employee1,Employee 2",
    status: "Completed",
    CreatedAt: "12 Jan 2026",
    priority: "Low",
  },
  {
    name: "Dashboard UI creations creations creations creations",
    AssignTo: "Employee1,Employee 2",
    status: "Pending",
    CreatedAt: "12 Jan 2026",
    priority: "High",
  },
{
    name: "Dashboard UI creations creations creations creations",
    AssignTo: "Employee1,Employee 2",
    status: "Testing",
    CreatedAt: "12 Jan 2026",
    priority: "Medium",
  },
  {
    name: "Dashboard UI creations creations creations creations",
    AssignTo: "Employee1,Employee 2",
    status: "Completed",
    CreatedAt: "12 Jan 2026",
    priority: "Low",
  },
  {
    name: "Dashboard UI creations creations creations creations",
    AssignTo: "Employee1,Employee 2",
    status: "Pending",
    CreatedAt: "12 Jan 2026",
    priority: "High",
  },
{
    name: "Dashboard UI creations creations creations creations",
    AssignTo: "Employee1,Employee 2",
    status: "Testing",
    CreatedAt: "12 Jan 2026",
    priority: "Medium",
  },
  {
    name: "Dashboard UI creations creations creations creations",
    AssignTo: "Employee1,Employee 2",
    status: "Completed",
    CreatedAt: "12 Jan 2026",
    priority: "Low",
  },
];

  const returnFalse = () => {
    setUpdateStatus(false);
  }


    function handleSubmit(e) {
        console.log(formData);
        e.preventDefault();
        console.log("hello world")
    }
    return(
    <>
        {/* <div className="min-h-screen flex bg-linear-to-br from-gray-900 via-gray-800 to-gray-900 p-2 sm:p-2"> */}
    
    {/* <div> */}
      <div className="h-screen flex bg-linear-to-br from-gray-900 via-gray-800 to-gray-900">

  {/* LEFT SIDE - TASK LIST */}
  {openSidebar && 
    <div className="h-screen w-[320px] border-r border-gray-700 bg-gray-900 flex flex-col">

      <div className="flex justify-between p-3 border-b border-gray-700">
        <h2 className="text-white text-lg font-semibold">
          Users List
        </h2>
        <button className=" p-2"
          onClick={() => handleSidebar()}
          >
            <Menu color="white"/>
          </button>
      </div>

    <div className="flex-1 p-4 space-y-4 overflow-hidden hover:overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent">

      {[1,2,3,4,5,6,7,8].map((item) => (
        <div
          key={item}
          className="bg-gray-800 rounded-xl p-4 border border-gray-700 hover:bg-gray-700 transition cursor-pointer"
        >
          {/* <div className="flex justify-between items-start mb-3"> */}
          <h1 className="text-white text-lg font-semibold">
            User Name {item}
          </h1>

          <h1 className="text-sm my-2  font-medium text-white">
            pankaj@gmail.com
          </h1>
        {/* </div> */}

        <div className="mb-3">
          <span className="px-3 py-1 text-xs font-medium bg-red-500/20 text-red-400 rounded-full">
            Employee
          </span>
        </div>

        <p className="text-gray-400 text-sm mb-2">
           22 Jan 2026
        </p>

        </div>
      ))}

    </div>
  </div>
}

  {/* RIGHT SIDE - TASK DETAILS */}
  <div className="flex-1 overflow-y-auto">

    <div>
    <div className="flex p-4.5 border-b border-gray-700">
      {!openSidebar && 
                <button className="mr-3"
                onClick={() => handleSidebar()}
                >
                  <Menu color="white"/>
                </button>
              }
      <h2 className="text-white text-lg font-semibold">
        User Detail
      </h2>
    </div>
  <div className="bg-gray-800/80 backdrop-blur-lg shadow-2xl p-5 sm:p-8 border border-gray-700">

    <div className="flex flex-col lg:flex-row lg:justify-between gap-6">

      <div>
        <h1 className="text-white text-lg sm:text-lg font-semibold">
          User Name
        </h1>

        <h2 className="text-gray-300 font-sm my-2">pankajbagauli03@gmail.com</h2>

        <div className="mt-2 flex items-center gap-4 flex-wrap">
            {/* <span
                      className={`px-3 py-1 rounded-full text-xs font-medium
                ${
                  user.role === "manager"
                    ? "bg-green-500/20 text-green-400"
                    : user.role === "employee"
                      ? "bg-yellow-500/20 text-yellow-400"
                      : "bg-purple-500/20 text-purple-400"
                }`}
                    >
                      {user.role}
                    </span> */}
          <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-500/20 text-green-400 border border-green-500">
            Employee
          </span>

          <span className="text-gray-400 text-xs">
             12 Jan 2026 | 02:20 AM
          </span>
        </div>
      </div>

    </div>

    <div className="mt-6">
      
    </div>

    <div className="border-t border-gray-700 my-6"></div>

    {/* Action Buttons */}
    <div className="mt-8 flex flex-col sm:flex-row gap-4">

      <button className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl font-medium transition duration-300 shadow-lg">
        Delete User
      </button>

      <button className="flex-1 bg-purple-500 hover:bg-purple-600 text-white py-3 rounded-xl font-medium transition duration-300 shadow-lg" onClick={() => setUpdateStatus(true)}>
        Edit User
      </button>

    </div>

  </div>
        {updateStatus && (
  <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                <div
                  className="bg-gray-800 rounded-2xl p-6"
                >
                  <div className="flex justify-between items-center mb-4">
                    <h1 className="text-xl sm:text-2xl text-white font-semibold">
                      {/* {edit ? "Edit User Detail" : "Add New User"} */}
                      Edit User 
                    </h1>
        
                    <button
                      onClick={returnFalse}
                      className="text-gray-400 hover:text-white text-sm"
                    >
                      ✕
                    </button>
                  </div>
                  <AddUserForm role={1} cancel={true} returnFalse={returnFalse} edit={true}/>
                </div>
            </div>
)}</div>

    <div className=" flex flex-col bg-gray-800 mt-5 rounded-2xl shadow-2xl">
    
    <h1 className="text-xl sm:text-2xl text-white font-semibold my-4  ml-3">
    User Tasks
    </h1>

    <table className="min-w-full text-sm text-left text-gray-300">

      {/* Table Head */}
      <thead className="bg-gray-900 text-gray-400 sticky top-0 z-10">
        <tr>
          <th className="px-6 py-3">Task Name</th>
          <th className="px-6 py-3">Assigen To</th>
          <th className="px-6 py-3">Status</th>
          <th className="px-6 py-3">Created At</th>
          <th className="px-6 py-3">Priority</th>
          {/* <th className="px-6 py-3">Estimated Time</th>
          <th className="px-6 py-3">Completion %</th>
          <th className="px-6 py-3">Priority</th> */}
          
        </tr>
      </thead>

      {/* Table Body */}
      <tbody className="divide-y divide-gray-700">

        {tasks.map((task, index) => (
          <tr
            key={index}
            className="hover:bg-gray-700 transition duration-200"
            onClick={() => router.push("/screens/manager/task")}
          >
            <td className="px-6 py-4">{task.name}</td>
            <td className="px-6 py-4">{task.AssignTo}</td>

            <td className="px-6 py-4">
              <span className={`px-3 py-1 rounded-full text-xs font-medium
                ${
                  task.status === "Completed"
                    ? "bg-green-500/20 text-green-400"
                    : task.status === "Pending"
                    ? "bg-yellow-500/20 text-yellow-400"
                    : "bg-purple-500/20 text-purple-400"
                }`}>
                {task.status}
              </span>
            </td>

            <td className="px-6 py-4">{task.CreatedAt}</td>
            {/* <td className="px-6 py-4">{task.priority}</td> */}
            {/* <td className="px-6 py-4">{task.estimatedTime} hrs</td>
            <td className="px-6 py-4">{task.completionPercentage}%</td> */}

            <td className="px-6 py-4">
              <span className={`px-3 py-1 rounded-full text-xs
                ${
                  task.priority === "High"
                    ? "bg-red-500/20 text-red-400"
                    : task.priority === "Medium"
                    ? "bg-orange-500/20 text-orange-400"
                    : "bg-blue-500/20 text-blue-400"
                }`}>
                {task.priority}
              </span>
            </td>
          </tr>
        ))}

      </tbody>
    </table>

  </div>

  <div className="max-h-112 overflow-auto">

    

  </div>

  </div>

{/* </div> */}



    {/* </div> */}
  
  

  </div>

    </>    
    )
}