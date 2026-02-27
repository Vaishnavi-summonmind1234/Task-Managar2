 "use client"

import { useState } from "react"
import { addUser } from "@/services/user_detail_services";

 export default function AddUser({returnFalse,edit}){
    const [formData,setFormData] = useState({
        name : "",
        email : "",
        password : "",
        role_id: 0
        })
    const [errors, setErrors] = useState({});

    async function handleSubmit(e) {
    e.preventDefault();

    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    }

    if (!formData.role_id) {
      newErrors.role_id = "Please select a role_id";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    console.log("Form Data:", formData);
       try{
         const adduser=await addUser(formData)
         toast.success(edit ? "User updated successfully!" : "User added successfully!");
         setFormData({
        name: "",
        email: "",
        password: "",
        role_id: 0,
      });

       }catch (error) {
      console.error(error);
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
    
  }
     return(
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                <div
                  className="bg-gray-800 rounded-2xl w-full max-w-4xl 
          max-h-[90vh] overflow-y-auto p-6 shadow-2xl"
                >
                  <div className="flex justify-between items-center mb-4">
                    <h1 className="text-xl sm:text-2xl text-white font-semibold">
                      {edit ? "Edit User Detail" : "Add New User"}
                    </h1>
        
                    <button
                      onClick={returnFalse}
                      className="text-gray-400 hover:text-white text-sm"
                    >
                      ✕
                    </button>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
        {[
          { name: "name", label: "Name", type: "text" },
          { name: "email", label: "Email", type: "email" },
          { name: "password", label: "Password", type: "password" },
        ].map((field) => (
          <div
            key={field.name}
            className="flex flex-col sm:flex-row sm:items-center"
          >
            <label className="sm:w-1/4 text-gray-400 text-sm mb-2 sm:mb-0">
              {field.label}
            </label>

            <div className="sm:w-3/4 w-full">
              <input
                type={field.type}
                name={field.name}
                value={formData[field.name]}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    [field.name]: e.target.value,
                  })
                }
                className="w-full px-4 py-3 rounded-lg border border-gray-700 bg-gray-900 text-white outline-none focus:ring-2 focus:ring-purple-500"
              />

              {errors[field.name] && (
                <p className="text-red-400 text-sm mt-1">
                  {errors[field.name]}
                </p>
              )}
            </div>
          </div>
        ))}

        {/* role_id Selection */}
        <div className="flex flex-col sm:flex-row sm:items-center">
          <label className="sm:w-1/4 text-gray-400 text-sm mb-2 sm:mb-0">
            role_id
          </label>

          <div className="sm:w-3/4 w-full flex gap-4">
            {["Manager", "Employee"].map((role_id) => (
              <button
                key={role_id}
                type="button"
                onClick={() => setFormData({ ...formData, role_id })}
                className={`px-4 py-2 rounded-lg text-sm transition
                ${
                  formData.role_id === role_id
                    ? "bg-indigo-600 text-white"
                    : "bg-gray-700 text-gray-300"
                }`}
              >
                {role_id}
              </button>
            ))}
          </div>
        </div>

        {errors.role_id && (
          <p className="text-red-400 text-sm sm:ml-[25%]">{errors.role_id}</p>
        )}

        {/* Submit */}
        <div className="col-span-1 sm:col-span-2 mt-6 flex flex-col sm:flex-row sm:justify-end gap-4">
        <button
          onClick={returnFalse}
          type="button"
          className="px-6 py-3 bg-gray-700 text-gray-300 rounded-xl 
    hover:bg-gray-600 transition-all text-sm font-medium"
        >
          Cancel
        </button>

        <button
          type="submit"
          className="px-6 py-3 bg-indigo-600 text-white 
    rounded-xl shadow-lg hover:bg-indigo-700 
    transition-all text-sm font-semibold"
        >
          {edit ? "Save Changes" : "Add User"}
        </button>
      </div>
                    </form>
                </div>
            </div>
    )
 }