"use client";

import { useState } from "react";
import RichTextEditor from "./RichTextEditer";
import Select from "react-select";

export default function AddForm({ role,editing,returnFalse,cancel}) {
  const [formData, setFormData] = useState({
    title: "",
    descriptions: "",
    startDate: "",
    endDate: "",
    estimatedTime: "",
    completionPercentage: "",
    attachments: [],
    approach: "",
    comments: [],
    status: "",
    priority: "",
    assignedTo: [],
  });
  const users = [
    { value: 1, label: "divyam Bagauli" },
    { value: 2, label: "Harsh sharma" },
    { value: 3, label: "Pankaj kumar" },
  ];
  const [status, setStatus] = useState("");
    const [priority, setPriority] = useState("");
    const [content, setContent] = useState("");
  const [commentInput, setCommentInput] = useState("");
  //   const [comments, setComments] = useState([]);
  console.log(role);

  const customStyles = {
          control: (provided,state) => ({
            ...provided,
            backgroundColor: "#101828  ",
            borderColor: state.isFocused
      ? "#7c3aed"
      : "#364153",
    boxShadow: state.isFocused
      ? "0 0 0 2px #7c3aed"
      : "none",
    "&:hover": {
      borderColor: "#7c3aed",
    },
            color: "white",
          }),
          menu: (provided) => ({
            ...provided,
            backgroundColor: "#364153",
          }),
          option: (provided, state) => ({
            ...provided,
            backgroundColor: state.isFocused
              ? "#101828"
              : "#1f2937",
            color: "white",
            cursor: "pointer",
          }),
          multiValue: (provided) => ({
            ...provided,
            backgroundColor: "#101828",
          }),
          multiValueLabel: (provided) => ({
            ...provided,
            color: "white",
          }),
        };

  const handleAddComment = () => {
    if (!commentInput.trim()) return;

    const newComment = {
      id: Date.now(),
      text: commentInput,
      author: "Pankaj Bagauli", // later from logged-in user
      date: new Date().toLocaleString(),
    };

    setFormData((prev) => ({
      ...prev,
      comments: [newComment, ...prev.comments],
    }));
    setCommentInput("");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    console.log(content)
  };
  return (
    <form onSubmit={handleSubmit}
    className="grid grid-cols-1 sm:grid-cols-2 gap-6"
    >
      {/* {[
        { name: "title", label: "Tittle", type: "text",},
        { name: "startDate", label: "Start Date", type: "date", },
        { name: "endDate", label: "End Date", type: "date", },
        {
          name: "estimatedTime",
          label: "Estimated Time (hrs)",
          type: "number",
        
        },
        { name: "completionPercentage", label: "Completion %", type: "number", },
      ].map((field) => {
        <div key={field.name} className="flex flex-col col-span-1">
        <label className="mb-2 ml-1 text-sm font-medium text-gray-300">
            {field.label}
           </label>
          <input
            type={field.type}
            name={field.name}
            value={formData[field.name] || ""}
            min={field.name === "estimatedTime" ? 0 : undefined}
            max={field.name === "completionPercentage" ? 100 : undefined}
            onChange={(e) => {
              let value = e.target.value;

              if (field.name === "estimatedTime") {
                value = Math.max(0, value);
              }

              if (field.name === "completionPercentage") {
                value = Math.min(100, Math.max(0, value));
              }

              setFormData({
                ...formData,
                [field.name]: value,
              });
            }}
             className="px-4 py-3 rounded-xl border border-gray-700 bg-gray-900 text-white placeholder-gray-500
                outline-none transition-all focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
        </div>
      })} */}

      {/* {titile} */}

        <div className="flex flex-col col-span-1">
      <label className="mb-2 ml-1 text-sm font-medium text-gray-300">
        Title
      </label>

      <input
        type="text"
        name="title"
        value={formData.title || ""}
        onChange={(e) => {
          setFormData({
            ...formData,
            [e.target.name]: e.target.value,
          });
        }}
        className="px-4 py-3 rounded-xl border border-gray-700 bg-gray-900 text-white placeholder-gray-500
        outline-none transition-all focus:ring-2 focus:ring-purple-500 focus:border-transparent"
      />
        </div>
      
        {/* startdata */}
      {role === 1 && 
        <div className="flex flex-col col-span-1">
          <label className="mb-2 ml-1 text-sm font-medium text-gray-300">
              Start Date
            </label>
          <input
          type="date"
          name="startDate"
          value={formData.startDate|| ""}
      onChange={(e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      }}
          className="px-4 py-3 rounded-xl border border-gray-700 bg-gray-900 text-white placeholder-gray-500
                  outline-none transition-all focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
        </div>
      }

      {/* endDate */}
      {role === 1 &&
        <div className="flex flex-col col-span-1">
          <label className="mb-2 ml-1 text-sm font-medium text-gray-300">
              End Date
            </label>
          <input
          type="date"
          name="endDate"
          value={formData.endDate|| ""}
      onChange={(e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      }}
          className="px-4 py-3 rounded-xl border border-gray-700 bg-gray-900 text-white placeholder-gray-500
                  outline-none transition-all focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
        </div>
      }
      {/* estimatehour */}
      {role ===1 && 
        <div className="flex flex-col col-span-1">
          <label className="mb-2 ml-1 text-sm font-medium text-gray-300">
              Estimated Time (hrs)
            </label>
          <input
          type="number"
          name="estimatedTime"
          value={formData.estimatedTime || ""}
              min={0}
              
          onChange={(e) => {
                let value = e.target.value;
                  value = Math.max(0, value);
                setFormData({
                  ...formData,
                  [e.target.name]: e.target.value,
                });
              }}
          className="px-4 py-3 rounded-xl border border-gray-700 bg-gray-900 text-white placeholder-gray-500
                  outline-none transition-all focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
        </div>
      
      }
      {/* completion percentage */}
      {role === 2 && 
        <div className="flex flex-col col-span-1">
        <label className="mb-2 ml-1 text-sm font-medium text-gray-300">
            Completion %
           </label>
        <input
        type="number"
        name="completionPercentage"
        value={formData.completionPercentage || ""}
        max={100}
        onChange={(e) => {
              let value = e.target.value;
              value = Math.min(100, Math.max(0, value));
              setFormData({
                ...formData,
                [e.target.name]: e.target.value,
              });
            }}
        className="px-4 py-3 rounded-xl border border-gray-700 bg-gray-900 text-white placeholder-gray-500
                outline-none transition-all focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
        </div>
      }


      {/* assignedTo */}
      {role === 1 && 
        <div className="flex flex-col col-span-1">
          <label className="mb-2 ml-1 text-sm font-medium text-gray-300">
            Assign To
           </label>
          <Select
  options={users}
  value={formData.assignedTo}
  placeholder="Select employee..."
  isMulti
  styles={customStyles}
  closeMenuOnSelect={false}
  onChange={(selectedOptions) =>
    setFormData(prev => ({
      ...prev,
      assignedTo: selectedOptions || [],
    }))
  }
/>
        </div>
      }
      {/* status */}
      <div>
        <h1 className="mb-2 text-sm font-medium text-gray-300">Status</h1>

        <div className="flex flex-wrap gap-3">
          {["Todo", "Doing", "Testing", "Manager Review","Done"].map((item) => (
            <button
              key={item}
              type="button"
              onClick={() =>
                setFormData({
                  ...formData,
                  status: item,
                })
              }
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all
                ${
                  formData.status === item
                    ? "bg-purple-600 text-white shadow-lg"
                    : "bg-gray-700 text-gray-300 hover:bg-gray-800"
                }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
      {/* priority */}
      {role === 1 &&  
        <div>
          <h1 className="mb-2 text-sm font-medium text-gray-300">Priority</h1>

          <div className="flex flex-wrap gap-3">
            {["High", "Medium", "Low"].map((item) => (
              <button
                key={item}
                type="button"
                onClick={() =>
                  setFormData({
                    ...formData,
                    priority: item,
                  })
                }
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all
                  ${
                    formData.priority === item
                      ? "bg-purple-600 text-white shadow-lg"
                      : "bg-gray-700 text-gray-300 hover:bg-gray-800"
                  }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>      
      }
      {/* description or approach */}
      <div className="col-span-1 sm:col-span-2">
        <h1 className="mb-2 ml-1 text-sm font-medium text-gray-300">
          {role === 1 ? "Description" : "Approach"}
        </h1>
        <RichTextEditor
  value={
    role === 1
      ? formData.descriptions
      : formData.approach
  }
  onChange={(value) =>

    setFormData(prev => ({
      ...prev,
      ...(role === 1
        ? { descriptions: value }
        : { approach: value })
    }))
  }
/>
      </div>
      {/* upload files */}
      <div className="col-span-1 sm:col-span-2 flex flex-col w-fit">
        <label className="mb-2 text-sm font-medium text-gray-300">
          Upload Files
        </label>

        <input
          type="file"
          name="attachments"
          multiple
          onChange={(e) =>
            setFormData({
              ...formData,
              attachments: Array.from(e.target.files),
            })
          }
          className="file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:bg-purple-600 file:text-white hover:file:bg-purple-700 text-gray-400 cursor-pointer"
        />

        {/* Show selected file names */}
        {formData.attachments?.length > 0 && (
          <div className="mt-2 text-sm text-gray-400 space-y-1">
            {formData.attachments.map((file, index) => (
              <p key={index}>📎 {file.name}</p>
            ))}
          </div>
        )}
      </div>
      {/* comments */}
      <div className="mt-8 bg-gray-800 rounded-2xl p-6 border border-gray-700">
        <h2 className="text-white text-lg font-semibold mb-4">Comments</h2>

        {/* Add Comment Box */}
        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <input
            type="text"
            placeholder="Write a comment..."
            value={commentInput}
            onChange={(e) => setCommentInput(e.target.value)}
            className="flex-1 px-4 py-3 rounded-xl border border-gray-700 bg-gray-900 text-white outline-none focus:ring-2 focus:ring-purple-500"
          />

          <button
            type="button"
            onClick={handleAddComment}
            className="px-6 py-3 bg-purple-600 text-white rounded-xl hover:bg-purple-700 transition-all text-sm "
          >
            Post
          </button>
        </div>

        {/* Comments List */}
        <div className="space-y-4 max-h-64 overflow-y-auto">
          {formData.comments.length === 0 && (
            <p className="text-gray-400 text-sm">No comments yet.</p>
          )}

          {formData.comments.map((comment) => (
            <div
              key={comment.id}
              className="bg-gray-900 p-4 rounded-xl border border-gray-700"
            >
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-purple-400">
                  {comment.author}
                </span>
                <span className="text-xs text-gray-500">{comment.date}</span>
              </div>

              <p className="text-gray-300 text-sm">{comment.text}</p>
            </div>
          ))}
        </div>
      </div>
      {/* button */}
      <div className="col-span-1 sm:col-span-2 mt-6 flex flex-col sm:flex-row sm:justify-end gap-4">
        {cancel ? 
        <button
          onClick={returnFalse}
          type="button"
          className="px-6 py-3 bg-gray-700 text-gray-300 rounded-xl 
    hover:bg-gray-600 transition-all text-sm font-medium"
        >
          Cancel
        </button>
        :null}

        <button
          type="submit"
          className="px-6 py-3 bg-indigo-600 text-white 
    rounded-xl shadow-lg hover:bg-indigo-700 
    transition-all text-sm font-semibold"
        >
          {editing ? "Save Changes" : "Create Task"}
        </button>
      </div>
    </form>
  );
}
