"use client";
import react, { useState } from "react"
import Link from "next/link";
import { useUser } from "../../contexts/userContext";
import { useRouter } from "next/navigation";
export default function SigninPage(){
    const {setUserdetail} = useUser();
    // const [firstName,setFirstName] = useState("")
    // const [email,setEmail] = useState("")
    // const [password,setPassword] = useState("")
    // const [role,setRole] = useState("")
    const [errors, setErrors] = useState({});
    const router = useRouter();
    const {userDetail} = useUser();

    const [formData,setFormData] = useState({
    //   fullName:"",
      email:"",
      password:"",
    //   role:""
    })
    console.log(userDetail);
  
    function handleSubmit(e) {
        console.log(formData);
      e.preventDefault();
      const newErrors = {};

    //   if (!formData.fullName.trim()) {
    //     newErrors.fullName = "Name is required";
    //   }

      if (!formData.email.trim()) {
        newErrors.email = "Email is required";
      }

      if (!formData.password.trim()) {
        newErrors.password = "Password is required";
      }

    //   if (!formData.role) {
    //     newErrors.role = "Please select a role";
    //   }

      // if errors exist → stop submit
      if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors);
        return;
      }

      // ✅ no errors → submit to context
      setErrors({});
      // setUserdetail(formData);

      console.log("hello world")
      console.log("SigninPage detail:",formData);

      try {
        console.log(formData)
        const data =login({email:formData.email , password:formData.password});
        console.log("login Sucess",data)
        toast.success("login Sucessfull");
      } catch (error) {
        console.log(error);
        toast.error("Signin failed. Please try again.");
      }
      if(userDetail.role === "Employee"){
        router.replace("/screens/employee")

      }
    }

    return (
  <div className="flex items-center justify-center min-h-screen bg-gray-900 p-4">

    <div className="w-full max-w-md bg-gray-800 rounded-2xl shadow-2xl p-8 transition-all hover:scale-[1.01]">

      <h1 className="mb-8 text-center text-2xl font-extrabold text-white tracking-tight">
        Signin Account
      </h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        {[
          {name:"email", label: "Email", type: "email", placeholder: "pankaj@gmail.com" },
          {name:"password", label: "Password", type: "password", placeholder: "••••••••" }
        ].map((field) => (
          <div key={field.label} className="flex flex-col">
            <label className="mb-2 ml-1 text-sm font-semibold text-gray-300">
              {field.label}
            </label>

            <input
              type={field.type}
              placeholder={field.placeholder}
              name={field.name}
              value={FormData[field.name]}
              onChange={(e)=>{
                setFormData({
                    ...formData,
                    [field.name]:e.target.value
                })
              }}
className="px-2 py-2 rounded-xl border border-gray-700 bg-gray-900 text-white placeholder-gray-500 outline-none transition-all focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm placeholder:text-sm" />
            {errors[field.name] && (
              <p className="text-red-400 text-sm mt-1">
                {errors[field.name]}
              </p>
            )}

          </div>
        ))}



        {/* Button */}
        <button
        type="submit"
          className="w-full py-3 bg-purple-600 text-white font-bold rounded-xl shadow-md hover:bg-purple-700 active:scale-95 transition-all uppercase tracking-wider text-sm"
        >
          Signin 
        </button>
      </form>
          {/* <div className="mt-3 flex text-m font-medium text-gray-300 justify-center"> 
            <h3>Create Account ? </h3>
            <Link href="/screens/signup" className="ml-2 text-blue-400"> Sign up</Link>
          </div> */}
    </div>
  </div>
);


};