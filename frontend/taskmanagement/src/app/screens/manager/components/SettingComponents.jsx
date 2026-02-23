"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@/app/contexts/userContext";
import { AddUserForm } from "@/app/components/AddUserForm";

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

  useEffect(() => {
    if (userDetail) {
      setFormData({
        fullName: userDetail.fullName || "",
        email: userDetail.email || "",
        password: userDetail.password || "",
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

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

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
      <h1 className="text-2xl font-bold text-white mb-8">User Profile</h1>

      <AddUserForm role={2} cancel={false} edit={true}/>
    </div>
  );
}
