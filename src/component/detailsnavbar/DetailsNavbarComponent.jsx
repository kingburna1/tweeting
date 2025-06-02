import { Search } from 'lucide-react';
import React from 'react';

const DetailsNavbarComponent = () => {
  return (
    <div className='py-4 mx-4'>
      <div className='flex  border rounded-xl w-full h-fit p-2'>
      <Search color='gray' size={25} /> 
      <input className='outline-none' type="text" placeholder='search tweet' />

      </div>
    </div>
  );
}

export default DetailsNavbarComponent;
