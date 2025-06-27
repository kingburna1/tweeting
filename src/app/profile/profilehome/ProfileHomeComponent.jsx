    "use client"
import MenuBar from '@/component/menubar/MenuBar';
import { ModeToggle } from '@/component/toggle/ModeToggle';
import { ArrowLeft, Calendar, Download, Heart, MapPin, MessageCircle, Repeat2 } from 'lucide-react';
import React, { useState } from 'react';

const ProfileHomeComponent = () => {
    const [liked, setLiked] = useState(false);
    const [likesCount, setLikesCount] = useState(40); // Starting from an example value
  
    const toggleLike = () => {
      setLiked((prev) => !prev);
      setLikesCount((prev) => (liked ? prev - 1 : prev + 1));
    };
  return (
    <div className='w-full h-fit  md:h-[600px] overflow-y-auto '>

        <div className="md:w-full bg-background w-[500px] fixed z-20 ">

      <div className='w-[300px] md:w-[550px] py-6 md:py-4 px-2  flex justify-between'>
        <div className="flex gap-3 py-4">
            <div>
            <ArrowLeft color='blue'/>
            </div>

            <div>
                <p className='font-bold'>Name</p>
                 <p className='text-gray-500'> 9 Tweet</p>
            </div>

        </div>

        <div>
        <div className='flex gap-2 justify-center align-center'>
         <div className=''><MenuBar/></div>
         <ModeToggle/>
         {/* <Sparkles color='blue'/> */}
         </div>
        </div>
      
          </div>
          </div>


        <div className='relative mt-30'>
            <div className='w-full'>
                <img className="w-full h-[230px] object-cover" src="wansi5.jpg" alt="photo i made" />
         </div>

         <div className='flex justify-between py-2 px-2'>
            <div className=''>
                <div className='absolute top-40 left-5'>
                    <img className=" w-30 h-30 rounded-full" src="wansi3.jpg" alt="photo" />
                </div>
                <div className='mt-10'>
                    <h2 className='font-bold'>wansi mathurin</h2>
                    <p className="text-gray-500">@wannsimillion</p>
                     <p>Web Developer</p>
                     
                </div>

                <div className="flex gap-2 py-3"> 
                    <div  className="flex gap-1">
                          <MapPin />
                        <p>Canada</p>
                    </div>

                    <div className="flex gap-1">
                    <Calendar />
                    <p>joined september 2011</p> 
                    </div>
                </div>

                <div className="flex gap-2"> 
                    <div  className="flex gap-1">
                         <p>6565</p>
                        <p>Following</p>
                    </div>

                    <div className="flex gap-1">
                    <p>56</p> 
                    <p>followers</p> 
                    </div>
                </div>

            </div>

            <div> 
            <button className='bg-white text-blue-500 px-2 border text-xs md:text-md border-blue-500 rounded-2xl w-full'>Edit profile</button>
            </div>
         </div>


        </div>








            <div className='w-full border-b-2 py-2 '>
        
        <div className='flex gap-2 px-2 py py-2'>
         <div>
             <img className='w-15 h-15 rounded-full' src="/wansi3.jpg" alt="photo i made" />
         </div>
 
         <div>
             <div className='flex gap-2 '>
                <h3 className='font-bold'>davon lane <span className='text-gray-500'>@macelobobinaone</span>  .</h3>
                 <p className='text-gray-400'>  23s</p>
             </div>
            
             <h5 className=''>is this big enough for you</h5>
         </div>
 
         </div>
 
          <div className='px-3 pl-17'> 
             <img className='h-[200px] w-full object-fit  rounded-2xl' src="spaceman.jpg" alt="photo i made" />
 
          <div className='flex justify-between w-full mt-2'>
 
          <div className='flex gap-2'>
          <div><MessageCircle /></div>
              <div>
                 <p>12</p>
              </div>
             
          </div>
            
 
             <div className='flex gap-2'>
             <div><Repeat2 /></div>
              <div>
                 <p>28</p>
              </div>
             
             </div>
 
 
             <div className='flex gap-2'>
             <div  onClick={toggleLike}><Heart  className={liked ? 'text-red-600' : 'text-blue-700'}/></div>
              <div>
                 <p>{likesCount}</p>
              </div>
             
             
             </div>
 
 
             <div className="flex gap-2">
                <div><Download /></div>
              <div>
                 <p>10</p>
              </div>  
             
             </div>
             
          </div>
 
          </div>
 
 
        </div>
      
    </div>
  );
}

export default ProfileHomeComponent;
