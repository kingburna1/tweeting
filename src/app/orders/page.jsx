'use client';
import React from 'react';
import CarouselComponent from './../../component/carousel/CarouselComponent';


const page = () => {
  return (
    <div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full h-[400px] p-6">
           <div className=" ">
           <img className='' src="https://psychedelicsawarenessshop.com/wp-content/uploads/2025/01/psychedelics-awareness-shop-buy-magic-mushroom-online-magic-mushroom-for-sale-order-magic-musroom-online.webp" alt="photo i made" />
            </div>

            <div  className=" h-fit  p-2   ">
                <div className="flex flex-col justify-center align-center mt-8">
               <h2 className="text-3xl md:text-5xl font-semibold text-gray-800">About Us</h2> 
               <p className="text-md mt-2 text-gray-600">Welcome to Psychedelics Awareness Shop </p>

               <p className="mt-4 text-sm">We are one of the industry's premier online sellers when it comes to Psychedelic Products. Be sure to read reviews on each item; these were written by real customers who have experienced them firsthand. Our passion lies in offering excellent products and legal distribution of Psychedelic Magic Mushrooms and DMT VAPE CARTRIDGES, bringing a level of professional commerce, responsibility, and innovation into an unregulated sector that previously didn't exist. It can be challenging to offer money-back guarantees On Psychedelic Products but that is exactly why we do — because we love what we do and what Psychedelic Products available all over and everyone should have the awareness.</p>
               </div>
            
            </div>

        </div>
             
             {/* the why chose us section */}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full h-vh p-6 mt-63 md:mt-5">

          <div>
            <h2 className="text-3xl md:text-5xl font-semibold text-gray-800">Why Choose Us</h2>
            <p className="text-lg mt-2 text-gray-600">BUY MAGIC MUSHROOMS , DMT VAPE,LSD BLOTTERS ONLINE SAFELY WITH US </p>
            <p className="mt-4 text-sm font-bold text-gray-600">At Psychedelics Awareness Shop Ordering Magic mushrooms or Dmt Vape Pen Online, we have assembled an experienced and highly professional team that is eager to provide top service to our Clients. Each member of our team is fully dedicated to ensuring top satisfaction for each and every one of them.</p>
             {/* main div */}
            <div className="mt-5 flex flex-col gap-10">
              {/* child one  */}
            <div className="flex gap-4">
                <div>
                <img className='w-15' src="/aboutimage3.jpg" alt="photo i made" />
                </div>
                <div>
                <h3 className="text-xl font-semibold text-gray-700">Free Shipping</h3>
                 <p className="mt-2 text-sm text-gray-600">We offer free express shipping for all order above $450</p>
                </div>
                
             </div>
                {/* child two  */}
                <div className="flex gap-4">
                <div>
                <img className='w-20' src="https://psychedelicsawarenessshop.com/wp-content/uploads/2023/02/24-7-services-logo-design-template-abd47f9c8c3f6509ede5e9a70dd124e3_screen.jpg" alt="photo i made" />
                </div>
                <div>
                <h3 className="text-2xl font-semibold text-gray-700">24/7 Support</h3>
                 <p className="mt-2 text-sm text-gray-600">Our standards of commitment to our customers are one of the highest in the industry. That is why we offer 24/7 customers services support via our live chat.</p>
                </div>
                
             </div>
               {/* child three  */}
               <div className="flex gap-4">
                <div>
                <img className='w-50' src="https://psychedelicsawarenessshop.com/wp-content/uploads/2023/02/360_F_473026422_k3XjtqTh0Br3Iw8IfhlB9c72n9dqi9n5.jpg" alt="photo i made" />
                </div>
                <div>
                <h3 className="text-2xl font-semibold text-gray-700">DELIVERY</h3>
                 <p className="mt-2 text-sm  text-gray-600">Your mail-order product is packaged discreetly & sent with care to your doorstep . Our delivery is Very safe and discreet in area where it isn't legal to shipped , We guaranteed shipping, and quick turnarounds of 1-3 days with Express Delivery. With swift and safe delivery, you can trust our services.</p>
                </div>
                
             </div>





                
            </div>
          

          </div>


          <div>
          <img className='' src="/aboutimage2.jpeg" alt="photo i made" />

          </div>

          </div>

          <div className="w-full">
             <div className="flex  flex-col justify-center items-center">
                <p>Our Testimonial</p>
             <h3 className="text-4xl font-bold text-gray-800">Our Clients Say </h3>
             <p className="mt-2 text-sm text-gray-600 text-center">Vivamus tortor velit, porta nec mauris quis, lacinia non nisl volutpat arcu semper. </p>
             <p  className="mt-2 text-sm text-gray-600">Proin mollis est ac vestibulum eleifend consequat tristique. </p>
             </div>
            
          </div>

          <div className="h-full mx-10">
           <CarouselComponent/>
          </div>

    </div>
  );
}

export default page;
