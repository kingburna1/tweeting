  "use client"
import { AlignJustify, Download, Frown, Heart, ImageUp, Menu, MessageCircle, Repeat2, Sparkles } from 'lucide-react';
import { AiOutlineFileGif } from "react-icons/ai";
import { LuCalendarSearch } from "react-icons/lu";
import React, { useState } from 'react';
import MenuBar from '../menubar/MenuBar';
import { ModeToggle } from '../toggle/ModeToggle';


const HomeComponent = () => {
   const [liked, setLiked] = useState(false);
   const [likesCount, setLikesCount] = useState(40); // Starting from an example value
 
   const toggleLike = () => {
     setLiked((prev) => !prev);
     setLikesCount((prev) => (liked ? prev - 1 : prev + 1));
   };

   
   const [unliked, setUnliked] = useState(false);
   const [unlikesCount, setUnlikesCount] = useState(72); 
   
   const toggleUnlike = ()=> {
       setUnliked((prev) => !prev);
       setUnlikesCount((prev) => (unliked ? prev - 1 : prev + 1));
   }
   
  return (
    <div className='w-full h-fit  md:h-[600px] overflow-y-auto '>
     
     <div className="fixed z-20 bg-background w-full md:w-full ">
   <div className='flex justify-between w-[490px] md:w-[530px] bg-background py-4 px-2'>
      <div>Home</div>
      <div className='flex gap-2 items-center justify-center'>
         <div className=''><MenuBar/></div>
         <ModeToggle/>
         {/* <Sparkles color='blue'/> */}
         </div>
    </div>
    </div>

       <div className='w-full h-fit  border-t-1 border-b-1 py-2 mt-20'>

        <div className='flex px-5 gap-2'> 
            <div><img className='w-15 h-15 rounded-full ' src="wansi2.jpg" alt="photo i made" /></div>
            <div><input className='outline-none' type="text"  placeholder='what is happening'/></div>
        </div>

        <div className='flex justify-between px-2 mt-4'>
            <div className='flex gap-4  md:ml-20'>
            <ImageUp  size={20} color='blue'/>
            <AiOutlineFileGif size={20}  color='blue'/>
            <AlignJustify size={20}   color='blue'/>
            <Frown size={20}  color='blue'/>
            <LuCalendarSearch size={20}  color='blue'/>


            </div>
            <div>
                <button className="bg-blue-400 p-2 border text-xs md:text-md rounded-2xl font-bold text-white">Tweet</button>
            </div>

        </div>
          
       </div>

       <div className='w-full border-b-2 py-2 '>
        
       <div className='flex gap-2 px-2 py py-2'>
        <div>
            <img className='w-15 h-15 rounded-full object-fill' src="/wansi3.jpg" alt="photo i made" />
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
            <img className='h-[200px] w-full object-fill  rounded-2xl' src="spaceman.jpg" alt="photo i made" />

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


       <div className='w-full border-b-2 py-2 '>
        
        <div className='flex gap-2 px-2 py py-2'>
         <div>
             <img className='w-15 h-15 rounded-full' src="/mansi.jpg" alt="photo i made" />
         </div>
 
         <div>
             <div className='flex gap-2 '>
                <h3 className='font-bold'>oracle prophet  <span className='text-gray-500'>@prophetdanie</span>  .</h3>
                 <p className='text-gray-400'>  30m</p>
             </div>
            
             <h5 className=''>are you ready for your big date?..</h5>
         </div>
 
         </div>
 
          <div className='px-3 pl-17'> 
             <img className='h-[200px] w-full object-cover  rounded-2xl' src="date1.jpg" alt="photo i made" />
 
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
             <div  onClick={toggleUnlike}><Heart  className={unliked ? 'text-red-600' : 'text-blue-700'}/></div>
              <div>
                 <p>{unlikesCount}</p>
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

export default HomeComponent;
