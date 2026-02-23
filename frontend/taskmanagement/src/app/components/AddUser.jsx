 "use client"

import { useState } from "react"

 export default function AddUser({returnFalse,edit}){
    const [formData,setFormData] = useState({
        fullName : "",
        email : "",
        password : "",
        role : ""
        })
    const [errors, setErrors] = useState({});

    function handleSubmit(e) {
    e.preventDefault();

    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    }

    if (!formData.role) {
      newErrors.role = "Please select a role";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    console.log("Form Data:", formData);

    
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
          { name: "fullName", label: "Name", type: "text" },
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

        {/* Role Selection */}
        <div className="flex flex-col sm:flex-row sm:items-center">
          <label className="sm:w-1/4 text-gray-400 text-sm mb-2 sm:mb-0">
            Role
          </label>

          <div className="sm:w-3/4 w-full flex gap-4">
            {["Manager", "Employee"].map((role) => (
              <button
                key={role}
                type="button"
                onClick={() => setFormData({ ...formData, role })}
                className={`px-4 py-2 rounded-lg text-sm transition
                ${
                  formData.role === role
                    ? "bg-indigo-600 text-white"
                    : "bg-gray-700 text-gray-300"
                }`}
              >
                {role}
              </button>
            ))}
          </div>
        </div>

        {errors.role && (
          <p className="text-red-400 text-sm sm:ml-[25%]">{errors.role}</p>
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