import React from 'react'
import Cat2 from "../img/Cat-2.png";
import dog from "../img/Dog.png";

import { BiUpArrow } from 'react-icons/bi';

// rounded-br-[200px] rounded-bl-[200px]
const Profil = () => {
  return (
    <div  className='bg-black w-[100vw] h-[100vh]'>
      <div className='bg-red-700  rounded-br-[200px] rounded-bl-[200px]  w-full h-[40vh]  '>
        <div> 
          <div className='pt-[1%]'> 
            <div className='border-white border-4 relative z-[+1]  rounded-full inline-block '>
              <img className='w-[200px] h-[200px] rounded-full  ' src={dog} alt="profil resimi" />
            </div>
            <div className='w-full absolute top-40 h-2 bg-black'/>
            <div className=''>
                <div className='text-black text-4xl font-bold text-center'>Erkan</div>
                <div className='text-black text-2xl font-bold text-center'>LansteryaXz</div>
                <div className='text-black text-2xl font-bold text-center'>21</div>
            </div>
          </div>
        </div>
        





      </div>
    </div>
   
  )
}

export default Profil
