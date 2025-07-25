  "use client"
import { AlignJustify, Download, Frown, Heart, ImageUp, Menu, MessageCircle, Repeat2, Sparkles } from 'lucide-react';
import { AiOutlineFileGif } from "react-icons/ai";
import { LuCalendarSearch } from "react-icons/lu";
import React, { useState } from 'react';
import MenuBar from '../menubar/MenuBar';
import { ModeToggle } from '../toggle/ModeToggle';
import MakePost from '../makePost/MakePost';
import CardContainer from '../CardContainer/CardContainer';


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
   
   
   const handleLogout = () => {
      localStorage.removeItem("user")
    }

   
       // const { userId } = await auth()
 const user = JSON.parse(localStorage.getItem("user"));

 if (!user) {
   redirect('/signIn')
 }

   
  return (
    <div className='w-full h-fit  md:h-[600px] overflow-y-auto '>
     
     <div className="fixed z-20 bg-background w-full md:w-full ">
   <div className='flex justify-between w-[490px] md:w-[530px] bg-background py-4 px-2'>
      <div>Home</div>
      <div className='flex gap-2 items-center justify-center'>
         <div className=''><MenuBar/></div>
         {/* <ModeToggle/> */}
         <button onClick={handleLogout} className='flex text-red-500 gap-3 font-medium hover:text-primary transition duration-3s'>
          Sign out
            </button>
         {/* <Sparkles color='blue'/> */}
         </div>
    </div>
    </div>

       <div className="mt-20"> <MakePost/></div>
       
       {/* <div className='w-full h-fit  border-t-1 border-b-1 py-2 mt-20'>

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
          
       </div> */}

     
         <CardContainer/>






    </div>
  );
}

export default HomeComponent;
