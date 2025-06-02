import { Bell, BookmarkCheck, CircleEllipsis, Ellipsis, Hash, Home, LayoutList, Mail, UserRound, Twitter } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const ProfileInfoComponent = () => {
  return (

    <div className="w-full h-[500px]">



         <div className='flex justify-center align-center w-full py-4  '>
 
 
               <Link href="/"><Twitter  color='blue' fill='blue'/> </Link>
 
 
             </div>

    <div className='w-full mt-5 px-2 '>
      

      <div className='flex flex-col gap-7'>
        <div className='flex  justify-center align-center gap-4 '>
            <div><Home fill='blue' color="blue"/></div>
            <div className='text-blue-500 font-bold'>Home</div>
        </div>

        <div className='flex  justify-center align-center gap-4 '>
            <div><Hash /></div>
            <div className='font-bold'>Explore</div>
        </div>

        
        <div className='flex  justify-center align-center gap-4 ml-7'>
            <div><Bell /></div>
            <div className='font-bold'>Notification</div>
        </div>

        <div className='flex  justify-center align-center gap-4 ml-2'>
            <div><Mail /></div>
            <div className='font-bold'>Messages</div>
        </div>

        <div className='flex  justify-center align-center gap-4 ml-4'>
            <div><BookmarkCheck /></div>
            <div className='font-bold'>BookMarks</div>
        </div>

        <div className='flex  justify-center align-center gap-4 mr-9'>
            <div><LayoutList /></div>
            <div className='font-bold'>List</div>
        </div>

        <div className='flex  justify-center align-center gap-4 mr-5 '>
            <div><UserRound /></div>
            <Link href="/profile" className='font-bold'>Profile</Link>
        </div>

        <div className='flex  justify-center align-center gap-4  mr-5'>
            <div><CircleEllipsis /></div>
            <div className='font-bold'>More</div>
        </div>



        






      </div>

      <div className='w-full flex justify-center mt-4 '>
        <button className='font-bold bg-blue-400 text-white p-2 rounded-2xl  w-full '>Tweet</button>
      </div>




      <div className='w-full flex justify-between mt-10  '>

        <div className='flex gap-2'>
        <div>
            <img className='w-10 h-10 rounded-full' src="/wansi5.jpg" alt="photo i made" />
        </div>

        <div className=''>
            <h3 className='font-bold'>jerome bell</h3>
            <h5 className='text-gray-400'>@jagabanpopi</h5>
        </div>

        </div>

        <div>
        <Ellipsis />
        </div>

      </div>




    </div>
    </div>
  );
}

export default ProfileInfoComponent;
