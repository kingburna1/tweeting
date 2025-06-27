// import DetailsNavbarComponent from "@/component/detailsnavbar/DetailsNavbarComponent";
import HomeComponent from "@/component/home/HomeComponent";
import MoreDetailsComponent from "@/component/moredetails/MoreDetailsComponent";
// import NavbarComponent from "@/component/navbar/NavbarComponent";
import ProfileInfoComponent from "@/component/profileinfo/ProfileInfoComponent";

import {auth, currentUser} from '@clerk/nextjs/server'
// import ProfileNavbarComponent from "@/component/profilenavbar/ProfileNavbarComponent";
import Image from "next/image";

import { redirect, RedirectType } from 'next/navigation'
   

export default async function Home() {
  const { userId } = await auth()
  if(!userId){
    redirect('/signIn', RedirectType.replace)
  }

  return (
   <div className="h-[500px]">
    <div className="grid md:grid-cols-4 px-8">

      <div  className="hidden md:block sticky top-0">
        

         <div>
            {/* <ProfileNavbarComponent/> */}
         </div>

         <div>
         <ProfileInfoComponent/>
          </div>
        
          </div>

      <div className="col-span-2 border-r-1 border-l-1 w-full"> 
        <div>
           {/* <NavbarComponent/> */}
           </div>
       
        <div>
          <HomeComponent/>
        </div>
       
      </div>

      <div  className=" w-full hidden md:block">
        {/* <DetailsNavbarComponent/> */}

        <div>
          <MoreDetailsComponent/>
        </div>
      </div>

    </div>
   </div>
  );
}
