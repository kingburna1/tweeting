"use client";
import { Eye } from "lucide-react";
import React, { useState } from "react";

const Page = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const validate = () => {
    const newErrors = {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    };

    if (/\d/.test(name)) {
      newErrors.name = "Name must not contain numbers.";
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Invalid email format.";
    }

    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{6,}$/;
    if (!passwordRegex.test(password)) {
      newErrors.password =
        "Password must include uppercase, lowercase, number, and symbol.";
    }

    if (password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match.";
    }

    setErrors(newErrors);
    return Object.values(newErrors).every((err) => err === "");
  };

  const handleNameChange = (e) => {
    const value = e.target.value;
    setName(value);
    setErrors((prev) => ({
      ...prev,
      name: /\d/.test(value) ? "Name must not contain numbers." : "",
    }));
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    setErrors((prev) => ({
      ...prev,
      email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
        ? ""
        : "Invalid email format.",
    }));
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{6,}$/;
    setErrors((prev) => ({
      ...prev,
      password: passwordRegex.test(value)
        ? ""
        : "Password must include uppercase, lowercase, number, and symbol.",
    }));
  };

  const handleConfirmPasswordChange = (e) => {
    const value = e.target.value;
    setConfirmPassword(value);
    setErrors((prev) => ({
      ...prev,
      confirmPassword:
        value === password ? "" : "Passwords do not match.",
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("creating your account dont close this screen!");
      // Submit form logic here
    }
  };

 

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/Sign up.png')" }}
    >
      <div className="bg-white/10 backdrop-blur-md shadow-2xl p-10 rounded-2xl w-fit md:w-full max-w-md border border-white/30">
        <h2 className="text-3xl font-semibold mb-6 text-black">Sign up</h2>

        <form className="space-y-5" onSubmit={handleSubmit}>
          {/* Name */}
          <div>
            <label className="block mb-1 text-sm text-black">Name</label>
            <input
              type="text"
              placeholder="king burna"
              value={name}
              onChange={handleNameChange}
              className="w-full text-[15px] px-4 py-2 rounded-md bg-white/30 text-black placeholder-gray-600 border border-white/40 focus:outline-none focus:ring-2 focus:ring-[#1DA1F2]"
            />
            {errors.name && (
              <p className="text-sm text-red-600 mt-1">{errors.name}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block mb-1 text-sm text-black">Email</label>
            <input
              type="email"
              placeholder="user@email.com"
              value={email}
              onChange={handleEmailChange}
              className="w-full text-[15px] px-4 py-2 rounded-md bg-white/30 text-black placeholder-gray-600 border border-white/40 focus:outline-none focus:ring-2 focus:ring-[#1DA1F2]"
            />
            {errors.email && (
              <p className="text-sm text-red-600 mt-1">{errors.email}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block mb-1 text-sm text-black">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
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
            {errors.password && (
              <p className="text-sm text-red-600 mt-1">{errors.password}</p>
            )}
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block mb-1 text-sm text-black">Confirm Password</label>
            <div className="relative">
              <input
                type={showConfirm ? "text" : "password"}
                placeholder="Re-enter your password"
                value={confirmPassword}
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
            {errors.confirmPassword && (
              <p className="text-sm text-red-600 mt-1">
                {errors.confirmPassword}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-[#1DA1F2] transition text-white py-2 rounded-md font-medium cursor-pointer"
          >
            Sign up
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