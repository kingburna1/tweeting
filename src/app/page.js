// import DetailsNavbarComponent from "@/component/detailsnavbar/DetailsNavbarComponent";
import HomeComponent from "@/component/home/HomeComponent";
import MoreDetailsComponent from "@/component/moredetails/MoreDetailsComponent";
// import NavbarComponent from "@/component/navbar/NavbarComponent";
import ProfileInfoComponent from "@/component/profileinfo/ProfileInfoComponent";
// import ProfileNavbarComponent from "@/component/profilenavbar/ProfileNavbarComponent";
import Image from "next/image";

export default function Home() {
  return (
   <div>
    <div className="grid md:grid-cols-4 px-8">

      <div  className="hidden md:block">
        

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
