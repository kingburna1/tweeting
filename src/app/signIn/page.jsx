"use client"
import { Eye } from 'lucide-react';
import { FaGoogle } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import React from 'react'
import { SignInButton } from '@clerk/nextjs'
import { useState } from "react";
import Link from 'next/link';

 const page = () => {
     const [showPassword, setShowPassword] = useState(false);
  // const [showConfirm, setShowConfirm] = useState(false);
  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/people.avif')" }}
    >
      <div className="bg-white/10 backdrop-blur-md shadow-2xl  p-10 rounded-2xl w-full max-w-md border border-white/30">
        <div className="flex justify-between align-center">
        <Link href="/"><img className=" w-7 md:w-10" src="/twitterLogo.png" alt="twitter logo" /></Link>

        <h2 className="text-3xl font-semibold mb-6 text-black">Sign in</h2> 

        </div>
        {/* <h2 className="text-3xl font-semibold mb-6 text-black">Sign in</h2> */}

        <div className='flex justify-between gap-4 mb-6 text-gray-600'>
        <SignInButton mode='redirect' redirect_url='/'>
          <button><FaGoogle  color="blue"/></button>
          </SignInButton>
            
          <SignInButton mode='redirect' redirect_url='/'>
            <button><FaFacebookF color="blue"/></button>
            </SignInButton>
           
            <SignInButton mode='redirect' redirect_url='/'>
           <button><FaInstagram color="blue" /></button>
           </SignInButton>
           
        </div>

        <form className="space-y-5">
          <div>
            <label className="block mb-1 text-sm text-black">Email</label>
            <input
              type="email"
              placeholder="user@email.com"
              className="w-full text-[15px] px-4 py-2 rounded-md bg-white/30 text-black placeholder-gray-600 border border-white/40 focus:outline-none focus:ring-2 focus:ring-[#1DA1F2]"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm text-black">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                // type='text'
                placeholder="Enter your password"
                className="w-full text-[14px] px-4 py-2 rounded-md bg-white/30 text-black placeholder-gray-600 border border-white/40 focus:outline-none focus:ring-2 focus:ring-[#1DA1F2]"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-3 flex items-center text-sm text-gray-700 cursor-pointer"
              ><Eye size={16}/>
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>


          <button
            type="submit"
            className="w-full bg-[#1DA1F2] transition text-white py-2 rounded-md font-medium"
          >
            Sign in
          </button>
        </form>

        <p className="text-sm text-center text-gray-400 mt-4">
          Don't have an account?{" "}
          <a href="/logpages" className=" hover:underline text-blue-300">
              Sign Up
          </a>
        </p>
      </div>
    </div>
  );
}

export default page;