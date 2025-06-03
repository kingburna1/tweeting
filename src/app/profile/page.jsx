// import DetailsNavbarComponent from '@/component/detailsnavbar/DetailsNavbarComponent';
import MoreDetailsComponent from '@/component/moredetails/MoreDetailsComponent';
import ProfileDetailsComponent from '@/component/profiledetails/ProfileDetailsComponent';
import ProfileInfoComponent from '@/component/profileinfo/ProfileInfoComponent';
// import ProfileNavbarComponent from '@/component/profilenavbar/ProfileNavbarComponent';
import React from 'react';
import ProfileHomeComponent from './profilehome/ProfileHomeComponent';
// import PNavbaComponent from './pnavbar/PNavbaComponent';

export default function page() {
  return (
    <div>
        <div className='grid md:grid-cols-4 px-8' >

            <div className="hidden md:block sticky top-0" >
                 <div>
                          {/* <ProfileNavbarComponent/> */}
                       </div>
              
                       <div>
                       <ProfileInfoComponent/>
                        </div>
            </div>


            <div className=' col-span-2  border-r-1 border-l-1'>
           <div>
            {/* <PNavbaComponent/> */}
           </div>

           <div><ProfileHomeComponent/></div>
            </div>



            <div  className="hidden md:block">

                 {/* <DetailsNavbarComponent/> */}

        <div>
          <ProfileDetailsComponent/>
        </div> 
            </div>
        </div>

      
    </div>
  );
}
