"use client";
import { Eye } from "lucide-react";
import React, { useState } from "react";
import { SignInButton } from "@clerk/nextjs";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';

const Page = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Phone, setPhone] = useState("");
  const [Password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");
  const [DateOfBirth, setDateOfBirth] = useState("");

  const [errors, setErrors] = useState({
    Name: "",
    Email: "",
    Password: "",
    ConfirmPassword: "",
  });

  const validate = () => {
    const newErrors = {
      Name: "",
      Email: "",
      Password: "",
      ConfirmPassword: "",
      Phone:"",
    };

    if (/\d/.test(Name)) {
      newErrors.Name = "Name must not contain numbers.";
    }
    if (!DateOfBirth) {
      newErrors.DateOfBirth = "Date of birth is required.";
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(Email)) {
      newErrors.Email = "Invalid email format.";
    }

    if (!/^[0-9]+$/.test(Phone)) {
      newErrors.Phone = "Phone number should contain only digits.";
    } else if (Phone.length < 9) {
      newErrors.Phone = "Phone number is too short.";
    }
    

    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{6,}$/;
    if (!passwordRegex.test(Password)) {
      newErrors.Password =
        "Password must include uppercase, lowercase, number, and symbol.";
    }

    if (Password !== ConfirmPassword) {
      newErrors.ConfirmPassword = "Passwords do not match.";
      setIsLoading(false);
     toast.error("Please fill all fields");
      return;
    }

    setErrors(newErrors);
    return Object.values(newErrors).every((err) => err === "");

    
  };

  const handleNameChange = (e) => {
    const value = e.target.value;
    setName(value);
    setErrors((prev) => ({
      ...prev,
      Name: /\d/.test(value) ? "Name must not contain numbers." : "",
    }));
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    setErrors((prev) => ({
      ...prev,
      Email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
        ? ""
        : "Invalid email format.",
    }));
  };
     
       const handlePhoneChange = (e) => {
  const value = e.target.value;
  setPhone(value);

  setErrors((prev) => ({
    ...prev,
    Phone: /^[\d\s()+-]+$/.test(value)
      ? ""
      : "Invalid phone number format.",
  }));
};


  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{6,}$/;
    setErrors((prev) => ({
      ...prev,
      Password: passwordRegex.test(value)
        ? ""
        : "Password must include uppercase, lowercase, number, and symbol.",
    }));
  };

  const handleConfirmPasswordChange = (e) => {
    const value = e.target.value;
    setConfirmPassword(value);
    setErrors((prev) => ({
      ...prev,
      ConfirmPassword:
        value === Password ? "" : "Passwords do not match.",
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("creating your account don't close this screen!");
      // Submit form logic here
    }
  };

   const [isLoading, setIsLoading] = useState(false);
  
    const Payload = {
      Name,
      Email,
      Password,
      Phone,
      DateOfBirth,
      ConfirmPassword
    }
  
    const handleSignup = async () => {
          console.log("Sign Up", Payload);
          setIsLoading(true);
          validate();

          await axios.post(`http://localhost:3000/api/users`,Payload).then(result=>{
            toast.success("Registered Successfully")
            console.log(result.data);
            setIsLoading(false);
            }).catch(error => {
            setIsLoading(false);
            toast.error("Registration Failed. Please try again.");
            console.log(error)
            })
    }

  

 

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/Sign up.png')" }}
    >
      <div className="bg-white/10 backdrop-blur-md shadow-2xl p-10 rounded-2xl w-fit md:w-full max-w-md border border-white/30">
        <h2 className="text-3xl font-semibold mb-6 text-black">Sign up</h2>

        <form className="space-y-5" onSubmit={handleSubmit}>
            <ToastContainer position="top-center" />
          {/* Name */}
          <div className="flex justify-between gap-4">

          <div>
            <label className="block mb-1 text-sm text-black">Name</label>
            <input
              type="text"
              placeholder="king burna"
              value={Name}
              onChange={handleNameChange}
              className="w-full text-[15px] px-4 py-2 rounded-md bg-white/30 text-black placeholder-gray-600 border border-white/40 focus:outline-none focus:ring-2 focus:ring-[#1DA1F2]"
            />
            {errors.Name && (
              <p className="text-sm text-red-600 mt-1">{errors.Name}</p>
            )}
          </div>

          <div>
            <label className="block mb-1 text-sm text-black">Phone</label>
            <input
              type="text"
              placeholder="678503056"
              value={Phone}
              onChange={handlePhoneChange}
              className="w-full text-[15px] px-4 py-2 rounded-md bg-white/30 text-black placeholder-gray-600 border border-white/40 focus:outline-none focus:ring-2 focus:ring-[#1DA1F2]"
            />
            {errors.Phone && (
              <p className="text-sm text-red-600 mt-1">{errors.Phone}</p>
            )}
          </div>


          </div>

          <div className="flex justify-between gap-4">
          {/* Date of Birth */}
          <div>
            <label className="block mb-1 text-sm text-black">Date of Birth</label>
            <input
              type="date"
              value={DateOfBirth}
              onChange={(e) => setDateOfBirth(e.target.value)}
              className="w-full text-[15px] px-4 py-2 rounded-md bg-white/30 text-black placeholder-gray-600 border border-white/40 focus:outline-none focus:ring-2 focus:ring-[#1DA1F2]"
            />
            {errors.DateOfBirth && (
              <p className="text-sm text-red-600 mt-1">{errors.DateOfBirth}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block mb-1 text-sm text-black">Email</label>
            <input
              type="email"
              placeholder="user@email.com"
              value={Email}
              onChange={handleEmailChange}
              className="w-full text-[15px] px-4 py-2 rounded-md bg-white/30 text-black placeholder-gray-600 border border-white/40 focus:outline-none focus:ring-2 focus:ring-[#1DA1F2]"
            />
            {errors.Email && (
              <p className="text-sm text-red-600 mt-1">{errors.Email}</p>
            )}
          </div>
             

          </div>
          {/* Password */}
          <div>
            <label className="block mb-1 text-sm text-black">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={Password}
                onChange={handlePasswordChange}
                className="w-full text-[14px] px-4 py-2 rounded-md bg-white/30 text-black placeholder-gray-600 border border-white/40 focus:outline-none focus:ring-2 focus:ring-[#1DA1F2]"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-3 flex items-center text-sm text-gray-700 cursor-pointer"
              >
                <Eye size={16} />
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
            {errors.Password && (
              <p className="text-sm text-red-600 mt-1">{errors.Password}</p>
            )}
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block mb-1 text-sm text-black">Confirm Password</label>
            <div className="relative">
              <input
                type={showConfirm ? "text" : "password"}
                placeholder="Re-enter your password"
                value={ConfirmPassword}
                onChange={handleConfirmPasswordChange}
                className="w-full px-4 py-2 rounded-md bg-white/30 text-black placeholder-gray-600 border border-white/40 focus:outline-none focus:ring-2 focus:ring-[#1DA1F2]"
              />
              <button
                type="button"
                onClick={() => setShowConfirm(!showConfirm)}
                className="absolute inset-y-0 right-3 flex items-center text-sm text-gray-700 cursor-pointer"
              >
                <Eye size={16} />
                {showConfirm ? "Hide" : "Show"}
              </button>
            </div>
            {errors.ConfirmPassword && (
              <p className="text-sm text-red-600 mt-1">
                {errors.ConfirmPassword}
              </p>
            )}
          </div>

          <button
          onClick={() => handleSignup()}
            type="button"
            className="w-full bg-[#1DA1F2] transition text-white py-2 rounded-md font-medium cursor-pointer"
          >

           {isLoading ? "Registering.....": "Sign Up"}
          </button>
        </form>

        <p className="text-sm text-center text-gray-700 mt-4">
          Already have an account?{" "}
          <a href="/signIn" className="text-primary hover:underline">
            Sign in
          </a>
        </p>
      </div>
    </div>
  );
};

export default Page;