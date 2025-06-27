import SignInComponent from '@/component/signin/singInComponent';
import Link from 'next/link';
import { SignUpButton } from '@clerk/nextjs'
import React from 'react';


const Page = () => {
 
  
    return (
        <div className="md:flex  gap-2  h-screen p-5">

            <div className="bg-gray-300 h-fit w-full">
                   <SignInComponent/>
            </div>

            <div  className="bg-gray-100 h-vh w-full flex flex-col  shadow=lg rounded-lg p-5">

               <div>
                  <div  className="flex  justify-between mr-0 top-9 right-10"> 
                    <Link href="/"><img className=" w-7 md:w-10" src="/twitterLogo.png" alt="twitter logo" /></Link>
                    
                    <Link href="/signIn" className="text-xs md:font-bold  border-1 rounded-md p-1 text-white bg-blue-300"> SignIn</Link>
                  </div>


                  <h1 className='text-blue-400 font-bold text-xl md:text-3xl mt-30 text-center'>
                    Welcome to twitter modify
                  </h1>

                  <p className="text-black text-center p-3">meet over 20 trillion of people everyday and get  updated news on stuffs meet over 20 trillion of people everyday and get  updated news on stuffs</p>
                    
                    {/* button 1 */}
                   <div className="text-white flex gap-2 justify-center border border-blue-400 w-1/2 mx-auto rounded-md p-2 mb-3">
                   <div>
                      <img className="w-3 md:w-5" src="/appleLogo.png" alt="" />
                    
                    </div>

                    <div className="text-black text-xs md:text-md">
                       <SignUpButton  mode='redirect' redirect_url='/'>
                       <button> SignUp with apple</button>
                        </SignUpButton>
                    
                    </div>
                    
                   </div>
                     {/* button 2 */}
                     <div className="text-white flex justify-center align-center gap-2 border border-blue-400 w-1/2 mx-auto rounded-md p-2 mb-3">
                   <div>
                       
                    <img  className="w-4 md:w-6" src="googleLogo.webp" alt="google logo" />
                   
                    </div>

                    <div className="text-black  text-xs md:text-md">
                       <SignUpButton  mode='redirect' redirect_url='/'>
                       <button>
                        signup with Google
                        </button>
                        </SignUpButton>
                    </div>
                    
                   </div>
                        {/* button 3 */}
                        <div className="text-white flex justify-center border border-blue-400 w-1/2 mx-auto rounded-md p-2 mb-3">
                   <div>
                   <img  className="w-4 md:w-6" src="facebookLogo.avif" alt="google logo" />
                    
                    </div>

                    <div className="text-black  text-xs md:text-md">
                       <SignUpButton mode='redirect' redirect_url='/'>
                       <button>
                        SignUp with Facebook
                        </button>
                        </SignUpButton>
                    </div>
                    
                   </div>

               </div>

                 <div className='text-black text-center mt-10'>
                    <h2> Already have an account ? <Link  href="/signIn" className='text-blue-300' > signIn</Link></h2>
                 </div>


            </div>
            
         
        </div>
    );
};

export default Page;