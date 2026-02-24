"use client";

import { useState } from "react";
import RichTextEditor from "@/app/components/RichTextEditer";
import Form from "@/app/components/Form";
import AddUser from "@/app/components/AddUser";
import AddForm from "@/app/components/AddForm";
import { Menu } from "lucide-react";

export default function TaskPage(){
    const [updateStatus,setUpdateStatus] = useState(false)
    const [openSidebar , setOpensidebar] = useState(true)
const [status, setStatus] = useState("");
    const [formData, setFormData] = useState({
      startDate: "",
      endDate: "",
      estimatedTime: "",
      completionPercentage: "",
      attachments: [],
      approach: ""
    });

const [content, setContent] = useState("");
const [commentInput, setCommentInput] = useState("");
const [comments, setComments] = useState([]);

    const handleAddComment = () => {
  if (!commentInput.trim()) return;

  const newComment = {
    id: Date.now(),
    text: commentInput,
    author: "Pankaj Bagauli", // later from logged-in user
    date: new Date().toLocaleString()
  };

  setComments([newComment, ...comments]);
  setCommentInput("");
};

const handleSidebar = () => {
      setOpensidebar(!openSidebar)
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
          Task List
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
            <div className="flex justify-between items-start mb-3">
            <h1 className="text-white text-lg font-semibold">
              Task Title {item}
            </h1>

            <span className="px-3 py-1 text-xs font-medium bg-purple-500/20 text-purple-400 rounded-full">
              Testing
            </span>

          </div>

          <div className="mb-3">
            <span className="px-3 py-1 text-xs font-medium bg-red-500/20 text-red-400 rounded-full">
              High
            </span>
          </div>

          <p className="text-gray-400 text-sm mb-2">
            Assigned by: Pankaj
          </p>

          <div>
            <div className="flex justify-between text-xs text-gray-400 mb-1">
              <span>Progress</span>
              <span>50%</span>
            </div>

            <div className="w-full bg-gray-700 rounded-full h-2">
              <div className="bg-green-600 h-2 rounded-full w-[50%]"></div>
            </div>
          </div>

          </div>
        ))}

      </div>
    </div>
  
  }

  {/* RIGHT SIDE - TASK DETAILS */}
  <div className="flex-1 overflow-y-auto">

    <div>
    <div className=" flex p-4.5 border-b border-gray-700">
      {!openSidebar && 
                <button className="mr-3"
                onClick={() => handleSidebar()}
                >
                  <Menu color="white"/>
                </button>
              }
      <h2 className="text-white text-lg font-semibold">
        Task Detail
      </h2>
    </div>
  <div className="bg-gray-800/80 backdrop-blur-lg shadow-2xl p-5 sm:p-8 border border-gray-700">

    <div className="flex flex-col lg:flex-row lg:justify-between gap-6">

      <div>
        <h1 className="text-white text-lg sm:text-lg font-semibold">
          Task Management System
        </h1>

        <div className="mt-2 flex items-center gap-4 flex-wrap">
          <span className="px-3 py-1 text-xs bg-red-500/20 text-red-400 rounded-full border border-red-500">
            🔴 High Priority
          </span>

          <span className="text-gray-400 text-xs">
             12 Jan 2026 | 02:20 AM
          </span>
        </div>
      </div>

    </div>

    <div className="mt-6">
      <h2 className="text-gray-300 font-sm mb-2">Description</h2>
      <p className="text-gray-400 leading-relaxed text-xs sm:text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, itaque rem ea ullam dolorem repellat dolor porro iusto cupiditate fuga molestias labore veritatis accusantium laudantium saepe ducimus numquam sint libero!
      </p>
    </div>

    <div className="border-t border-gray-700 my-6"></div>

    <div className="flex flex-col sm:flex-row sm:justify-between gap-6">

      <div className="bg-gray-900/60 p-4 rounded-xl flex-1 border border-gray-700 flex">
        <h2 className="text-white text-sm mb-2">Assigned To :</h2>
        <p className="text-gray-300 text-sm ml-1"> Pankaj Bagauli</p>
        {/* <p className="text-gray-400 text-xs">Frontend Developer</p> */}
      </div>

      <div className="bg-gray-900/60 p-4 rounded-xl flex-1 border border-gray-700 flex">
        <h2 className="text-gray-300 text-sm mb-2">Attachments : </h2>
        <p className="text-indigo-400 text-sm cursor-pointer hover:underline ml-1">
          attachement.pdf
        </p>
      </div>

    </div>

    {/* Action Buttons */}
    <div className="mt-8 flex flex-col sm:flex-row gap-4">

      <button className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white p-2 w-fit rounded-xl font-medium transition duration-300 shadow-lg">
        Mark as Completed
      </button>

      <button className="flex-1 bg-purple-500 hover:bg-purple-600 text-white p-2 w-fit rounded-xl font-medium transition duration-300 shadow-lg " onClick={() => setUpdateStatus(true)}>
        Edit Tasks
      </button>

    </div>

  </div>
        {updateStatus && (
  <div className="mt-6 bg-linear-to-br from-gray-800 to-gray-900 rounded-2xl p-6 sm:p-6 border border-gray-700 shadow-2xl">

    <h2 className="text-white text-lg font-semibold mb-6">
      Edit Task 
    </h2>

    {/* <AddUser /> */}
    <AddForm  editing={true} role={1} cancel={false}/>
    {/* <Form /> */}
  </div>
)}</div>

  </div>

{/* </div> */}



    {/* </div> */}
  
  

  </div>

    </>    
    )
}