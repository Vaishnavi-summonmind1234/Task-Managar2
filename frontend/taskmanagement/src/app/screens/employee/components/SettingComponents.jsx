"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@/app/contexts/userContext";

export default function SettingComponent() {
  const router = useRouter();
  const { userDetail } = useUser();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    role: "",
  });

  const [errors, setErrors] = useState({});

  // ✅ Sync userDetail into formData
  useEffect(() => {
    if (userDetail) {
      setFormData({
        fullName: userDetail.fullName || "",
        email: userDetail.email || "",
        password: "",
        role: userDetail.role || "",
      });
    }
  }, [userDetail]);

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

    // ❌ If errors exist → stop
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // ✅ No errors
    setErrors({});
    console.log("Form Data:", formData);

    if (formData.role === "Manager") {
      router.replace("/screens/manager");
    }

    if (formData.role === "Employee") {
      router.replace("/screens/employee");
    }
  }

  return (
    <div className="p-6 sm:p-10">

      <h1 className="text-2xl font-bold text-white mb-8">
        User Profile
      </h1>

      <form onSubmit={handleSubmit} className="space-y-6">

        {[
          { name: "fullName", label: "Name", type: "text" },
          { name: "email", label: "Email", type: "email" },
          { name: "password", label: "Password", type: "password" },
        ].map((field) => (
          <div key={field.name} className="flex flex-col sm:flex-row sm:items-center">

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
                className="w-full px-4 py-3 rounded-lg border border-gray-700 
                bg-gray-900 text-white outline-none 
                focus:ring-2 focus:ring-purple-500"
              />

              {errors[field.name] && (
                <p className="text-red-400 text-sm mt-1">
                  {errors[field.name]}
                </p>
              )}
            </div>

          </div>
        ))}


        {/* Submit */}
        <div className="sm:ml-[25%]">
          <button
            type="submit"
            className="px-6 py-2 bg-indigo-600 text-white 
            rounded-lg hover:bg-indigo-700 transition"
          >
            Save Changes
          </button>
        </div>

      </form>

    </div>
  );
}