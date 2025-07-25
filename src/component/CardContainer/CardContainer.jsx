"use client"

import { AlignJustify, Download, Frown, Heart, ImageUp, Menu, MessageCircle, Repeat2, Sparkles } from 'lucide-react';
import { AiOutlineFileGif } from "react-icons/ai";
import { LuCalendarSearch } from "react-icons/lu";
import React, { useState } from 'react';
import MenuBar from '../menubar/MenuBar';
import { ModeToggle } from '../toggle/ModeToggle';
import MakePost from '../makePost/MakePost';
import {
    useQuery,
    } from '@tanstack/react-query'
    import { BASE_URL } from '@/lib/utils';

function CardContainer() {
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
       const { isPending, error, data } = useQuery({
        queryKey: ['posts'],
        queryFn: () =>
        fetch(`${BASE_URL}/posts/`).then((res) =>
        res.json(),
        ),
        })
        
        if (isPending) return (
         <div className="flex flex-col gap-4 px-[3%] py-[2%] animate-pulse">
         {/* Profile + Name */}
         <div className="flex gap-2 items-center">
           <div className="w-10 h-10 rounded-full bg-gray-300" />
           <div className="flex flex-col gap-2">
             <div className="h-3 w-40 bg-gray-300 rounded" />
             <div className="h-3 w-64 bg-gray-300 rounded" />
           </div>
         </div>
       
         {/* Image section */}
         <div className="pl-[7.5%] text-[.85rem] flex flex-col gap-4">
           <div className="w-full h-60 bg-gray-300 rounded-2xl border" />
       
           {/* Action icons */}
           <ul className="flex gap-6 items-center justify-between w-[80%]">
             <li className="flex gap-2 items-center">
               <div className="w-4 h-4 bg-gray-300 rounded-full" />
               <div className="w-6 h-3 bg-gray-300 rounded" />
             </li>
             <li className="flex gap-2 items-center">
               <div className="w-4 h-4 bg-gray-300 rounded-full" />
               <div className="w-6 h-3 bg-gray-300 rounded" />
             </li>
             <li className="flex gap-2 items-center">
               <div className="w-4 h-4 bg-gray-300 rounded-full" />
               <div className="w-10 h-3 bg-gray-300 rounded" />
             </li>
             <li className="flex gap-2 items-center">
               <div className="w-4 h-4 bg-gray-300 rounded-full" />
               <div className="w-6 h-3 bg-gray-300 rounded" />
             </li>
           </ul>
       
           <div className="h-3 w-32 bg-gray-300 rounded" />
         </div>
       </div>)
        
        if (error) return 'An error has occurred: ' + error.message
  return (
    <div>
        {data.map(post=>
              <div key={post?._id} className='w-full border-b-2 py-2 '>
                
              <div className='flex gap-2 px-2 py py-2'>
               <div>
                   <img className='w-15 h-15 rounded-full object-fill' src="/wansi3.jpg" alt="photo i made" />
               </div>
       
               <div>
                   <div className='flex gap-2 '>
                      <h3 className='font-bold'>{post.UserId.Name} <span className='text-gray-500'>@macelobobinaone</span>  .</h3>
                       <p className='text-gray-400'>  23s</p>
                   </div>
                  
                   <h5 className=''>{post.Content}</h5>
               </div>
       
               </div>
       
                <div className='px-3 pl-17'> 
                   <img className='h-[200px] w-full object-cover rounded-2xl' src={post?.MediaFile?.url} alt="photo i made" />
       
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
        )}
        
        
        
             
    </div>
  )
}

export default CardContainer
