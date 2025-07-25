"use client"
import React from 'react'
import { useState } from "react";
import Link from 'next/link';
import { FaTwitter } from "react-icons/fa"; 
import { SignInButton } from '@clerk/nextjs'
import { ToastContainer, toast } from 'react-toastify';
import axios from "axios";
import { redirect, useRouter } from "next/navigation";


 const page = () => {
    //  const [formData, setFormData] = useState({
    
    //      email: "",
    //      password: "",
         
         
    //    });
    //    const [errors, setErrors] = useState({});
    //    const [showPassword, setShowPassword] = useState(false);
    //    const [showConfirm, setShowConfirm] = useState(false);
     
    //    const validate = () => {
    //      const newErrors = {};
    //      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
     
    //      if (!emailRegex.test(formData.email)) {
    //        newErrors.email = "Please enter a valid email.";
    //      }
     
    //      if (formData.password.length < 4) {
    //        newErrors.password = "Password must be at least 4 characters.";
    //      }
     
    //      if (formData.password !== formData.confirm) {
    //        newErrors.confirm = "Passwords do not match.";
    //      }
     
    //      setErrors(newErrors);
    //      return Object.keys(newErrors).length === 0;
    //    };
     
    //    const handleSubmit = (e) => {
    //      e.preventDefault();
    //      if (validate()) {
    //        alert("Sign up successful!");
    //        // Add your signup logic (e.g., send data to backend) here.
    //      }
    //    };

   const [isLoading, setIsLoading] = React.useState(false);
    const [Email , setEmail] = React.useState("");
    const [Password , setPassword] = React.useState("");
    const router = useRouter();

    const validation =()=>{
        if( !Email || !Password){
         setIsLoading(false);
         toast.error("Please fill all fields");
         return;
        }
   }

   const Payload = {
        Email,
        Password
     }

     const handleSignIn = async() => {
      console.log("Sign In Payload: ", Payload);
        setIsLoading(true);
        validation();
       await axios.post("http://localhost:3000/api/users/authentication", Payload).then(result=>{
         toast.success("Signed In Successfully")
          localStorage.setItem("user", JSON.stringify(result.data));
         console.log(result.data);
        setIsLoading(false);
        router.push("/")
       }).catch(error => {
          setIsLoading(false);
          toast.error("Failed to Sign In. Please try again.");
        console.log(error)
       })

     }

     const [formData, setFormData] = useState({
         email: '',
         password: '',
         confirmPassword: '',
       });
     
       const [errors, setErrors] = useState({});
       const [showPassword, setShowPassword] = useState(false);
       const [showConfirm, setShowConfirm] = useState(false);
     
       const handleChange = (e) => {
         setFormData({ ...formData, [e.target.name]: e.target.value });
         setErrors({ ...errors, [e.target.name]: '' }); // clear error
       };
     
       const validate = () => {
         const newErrors = {};
     
         // Email validation
         if (!formData.email.trim()) {
           newErrors.email = 'Email is required';
         } else if (
           !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
         ) {
           newErrors.email = 'Enter a valid email';
         }
     
         // Password validation
         if (!formData.password.trim()) {
           newErrors.password = 'Password is required';
         } else if (formData.password.length < 6) {
           newErrors.password = 'Password must be at least 6 characters';
         }
     
         // Confirm password
         if (formData.confirmPassword !== formData.password) {
           newErrors.confirmPassword = 'Passwords do not match';
         }
     
         setErrors(newErrors);
         return Object.keys(newErrors).length === 0;
       };
     
       const handleSubmit = (e) => {
         e.preventDefault();
         if (validate()) {
           console.log('Form submitted:', formData);
           // Handle form submission here (API call, redirect, etc.)
         }
       };

      
       

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('https://npr.brightspotcdn.com/dims3/default/strip/false/crop/2116x1417+0+0/resize/1100/quality/50/format/jpeg/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2Fdb%2F3b%2F2c7c463649f49f9c67ef94fb269f%2Fgettyimages-2160300581.jpg')" }}
    >
      <div className="bg-white/10 backdrop-blur-lg shadow-xl p-10 rounded-2xl w-full max-w-md border border-white/30">
               <h2 className="flex items-center gap-2 text-2xl font-semibold mb-6 text-black"><FaTwitter size={28} className='text-[#1DA1F2]'/>Sign in</h2>

                  
                      <div className='flex justify-between gap-4 text-gray-600'>
               
                       <SignInButton mode="redirect" redirect_url="/">
                         <div className='bg-white/30 rounded-sm py-1 w-[33%] shadow-md flex items-center justify-center cursor-pointer'>
                           <img src='/google.png' alt='google' className='w-4.5'/>
                         </div>
                         </SignInButton>
               
                            <SignInButton mode="redirect" redirect_url="/">
                         <div className='bg-white/30 rounded-sm py-1 w-[33%] shadow-md flex items-center justify-center cursor-pointer'>
                           <img src='/facebook.png' alt='facebook' className='w-4.5'/>
                         </div>
                         </SignInButton>
               
                            <SignInButton mode="redirect" redirect_url="/">
                         <div className='bg-white/30 rounded-sm py-1 w-[33%] shadow-md flex items-center justify-center cursor-pointer'>
                           <img src='/instagram.png' alt='insta' className='w-7.5'/>
                         </div>   
                         </SignInButton>
                       </div>
               
                       <div className='relative flex items-center justify-between text-black/30 pt-4 pb-2'>
                         <hr className='border-1 border-black/10 w-[46%]'/>
                         <p className='text-sm mt-[-2px]'>or</p>
                         <hr className='border-1 border-black/10 w-[46%]'/>
                       </div>

        <form className="space-y-5" >
         <ToastContainer position="top-center" />
           
           <div>
            <label className="block mb-1 text-sm text-black">Email</label>
            <input
              name="email"
              type="email"
              value={Email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="burna@gmail.com"
              className="w-full text-[15px] px-4 py-2 rounded-md bg-white/30 text-black placeholder-gray-600 border border-white/40 focus:outline-none focus:ring-2 focus:ring-[#1DA1F2]"
            />
           
          </div>

           <div>
            <label className="block mb-1 text-sm text-black">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={Password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full text-[15px] px-4 py-2 rounded-md bg-white/30 text-black placeholder-gray-600 border border-white/40 focus:outline-none focus:ring-2 focus:ring-[#1DA1F2]"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-3 flex items-center text-sm text-gray-700"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

         

         <button
            type="button"
             onClick={() => handleSignIn()}
            className="w-full bg-[#1DA1F2]  text-white py-2 rounded-md font-medium"
          >
            {isLoading ? "Registering.....": "Sign In"} 
          </button>
        </form>

        <p className="text-sm text-center text-gray-700 mt-4">
          SingUp to create account?{" "}
          <Link href="/logpages" className="text-[#1DA1F2] hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default page;