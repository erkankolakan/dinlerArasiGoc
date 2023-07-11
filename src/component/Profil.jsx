import React from 'react'
import Cat2 from "../img/Cat-2.png";
import dog from "../img/Dog.png";

import { BiUpArrow } from 'react-icons/bi';

// rounded-br-[200px] rounded-bl-[200px]
const Profil = () => {
  return (
    <div  className='bg-black w-[100vw] h-[100vh]'>
        <div className='bg-red-700 rounded-br-[200px] rounded-bl-[200px]  w-full h-[40vh]  '>
            <div className='w-full h-full'>
                <div className=' w-full h-full pt-48 pb-[200px] flex justify-center items-center flex-col'> 
                <div className='w-full pt-2 absolute bg-black h-[5px]'/>
                    <img src={dog} alt="" className=' relative z-[+1] rounded-full  border-white border-8 w-[200px] h-[200px] rounded-full  ' />
                    <div className='text-3xl text-ble bold'>Erkan</div>
                    <div className='text-3xl text-ble bold'>LansteryaXz</div>
                    <div className='text-3xl text-ble bold'>21</div>



                 </div> 
                
            </div>
        </div>
   
    </div>
  )
}

export default Profil
