import { Search } from 'lucide-react';
import React from 'react';

const ProfileDetailsComponent = () => {
  return (

    <div className='w-full  h-[600px] overflow-y-auto  '>

    <div className='py-4  w-full fixed mx-1 z-20 bg-background '>
         <div className='flex  border rounded-xl w-[300px] h-fit p-2'>
         <Search color='gray' size={25} /> 
         <input className='outline-none w-full' type="text" placeholder='search tweet' />
   
         </div>
       </div>





    <div className='w-full  mt-20 flex flex-col justify-center p-4'>
         <div className="bg-gray-300 w-full h-fit p-2 rounded-2xl ">
        <h3 className='font-bold py-4 text-black'>who to follow</h3>
            

            
      <div className='w-full flex justify-between mt-10 border-b-1 border-gray-600 py-1'>

               <div className='flex gap-2'>
               <div>
                   <img className='w-10 h-10 rounded-full' src="/wansi5.jpg" alt="photo i made" />
               </div>
               
               <div>
                   <h3 className='font-bold text-black'>jerome bell</h3>
                   <h5 className='text-gray-800'>@jagabanpopi</h5>
               </div>
               
               </div>
               
               <div>
                  <button className='bg-white text-blue-500 px-2 border border-blue-500 rounded-2xl'>Follow</button>
               </div>
               
               </div>

                 <div className='w-full flex justify-between mt-10 border-b-1 border-gray-600 py-1'>

               <div className='flex gap-2'>
               <div>
                   <img className='w-10 h-10 rounded-full' src="/wansi5.jpg" alt="photo i made" />
               </div>
               
               <div>
                   <h3 className='font-bold text-black'>jerome bell</h3>
                   <h5 className=' text-gray-800'>@jagabanpopi</h5>
               </div>
               
               </div>
               
               <div>
                  <button className='bg-white text-blue-500 px-2 border border-blue-500 rounded-2xl'>Follow</button>
               </div>
               
               </div>

               <div className='p-2'>
            <p><span className='text-blue-400'>Show more</span></p>
            </div>



      </div>

      <div className='bg-gray-300 w-full h-fit p-1 rounded-2xl mt-2'>
            <h3 className='font-bold py-4 text-black'>What's happening</h3>

            <div className='border-t-1 border-b-1 p-2 border-gray-400 grid grid-cols-3 gap-2'>
                <div className='col-span-2'>
                    <p className="text-gray-800 text-xs">COVID19. Last night</p>
                    <p className="text-gray-800">Keep moving boy. I know that you have a wanderful manager i named Detez </p>
                    <p className="text-gray-800"> trending with <span className='text-blue-400'>#convid19</span></p>
                </div>
                <div>
                    <img className='w-15 h-15 rounded-xl' src="man3.jpg" alt="photo i made" />
                </div>
            </div>

            <div className=' border-b-1 p-2 border-gray-400 grid grid-cols-3 gap-2'>
                <div className='col-span-2'>
                    <p className="text-gray-500 text-xs">US News . 4h ago</p>
                    <p className="text-gray-800">"Trum" likely refers to Traffic and Road Use Mana </p>
                    <p className="text-gray-800"> trending with <span className='text-blue-400'>#convid19</span></p>
                </div>
                <div>
                    <img className='w-15 h-15 rounded-xl' src="spaceman.jpg" alt="photo i made" />
                </div>
            </div>

            <div className=' border-b-1 p-2 border-gray-400 grid grid-cols-3 gap-2'>
                <div className='col-span-2'>
                    <p className="text-black text-xs">india. 1h ago</p>
                    <p className="text-gray-800">"Trum" likely refers to Traffic and Road Use Mana </p>
                    <p className="text-gray-800"> trending with <span className='text-blue-400'>#convid19</span></p>
                </div>
                <div>
                    <img className='w-15 h-15 rounded-xl' src="vercel.svg" alt="photo i made" />
                </div>
            </div>

            <div className='p-2'>
            <p><span className='text-blue-400'>Show more</span></p>
            </div>
         
        </div>

        <p className='text-xs text-gray-800'>
      This Privacy Policy is meant to help you understand what information we collect, why we collect it, and how you can update, manage, export, and delete your 
      </p>
      
    </div>
    </div>
  );
}

export default ProfileDetailsComponent;
