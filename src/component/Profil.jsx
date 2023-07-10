import React from 'react'
import Cat2 from "../img/Cat-2.png";
import { BiUpArrow } from 'react-icons/bi';


const Profil = () => {
  return (
    <div  className='bg-black w-[100vw] h-[100vh]'>
    <div>
        <div className='w-full h-[50vh] bg-red-700'>
            <div className='w-[50%] h-full'>
                <div className='h-full    pt-[10%] pl-[10%]'>
                    <div className='  border-[5px] w-[250px] h-[260px] rounded-full'>
                        <img src={Cat2} alt=""  className='w-[250px] h-[250px] rounded-full'/>
                    </div>  
                </div>
            </div>
            <div>

                
            </div>
        </div>
    </div>
    </div>
  )
}

export default Profil
