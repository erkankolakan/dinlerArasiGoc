import React from 'react'
import lobilerGiris from "../img/lobilerGiris3.png"
import { motion } from "framer-motion"
import satanic from "../img/Satanic.png"
import ekle from "../img/ekle.png"
import Circle from "../img/Circle.png"
import Devil from "../img/Devil.png"
import Evil from "../img/Evil.png"
import Pentagram from "../img/Pentagram.png"
import Pentagram2 from "../img/Pentagram2.png"
import Satanism from "../img/Satanism.png"
import Satanism1 from "../img/Satanism-1.png"
import Satanism2 from "../img/Satanism2.png"
import Header from './Header'
import "../css/AyinOku.css"


const Lobiler = () => {
  return (
    <><Header/>
    <div className='bg-black p-12 '>

        <div className=' flex justify-around '>
            <motion.div className='text-white  w-[800px]  text-7xl flex justify-center items-center'
                initial={{
                    opacity:0,
                    x:-10
                }}
                animate={{
                    opacity:1,
                    x:0
                }}
                transition={{
                    delay:.5,
                    duration:1
                }}
            >
                    Hemen Arkadaş Edin ve Lobilere Katıl
            </motion.div>
            <motion.div className='w-[40rem] p-[20px]'
                     initial={{
                        translateY: 10
                      }}
                      animate={{
                        opacity: 1,
                        translateY: [0, -15, 0], // aşağı yukarı hareketin keyframe'leri
                      }}
                      transition={{
                        delay: 0.5,
                        repeat: Infinity, // hareketin sürekli tekrarlanması
                        repeatType: 'reverse', // aşağı yukarı hareketin ters yönde tekrarlanması
                        repeatDelay: 0.5, // her tekrardan önceki bekleme süresi
                        duration: 2, // hareketin süresi
                        ease: "easeInOut", // hareketin kolaylık eğrisi
                      }}
            >
                <img  src={lobilerGiris} alt="" />
            </motion.div>
        </div>

        <div className='flex gap-5 justify-around m-12'>

            <div className=' bg-gray-500 w-[35rem] p-[2rem] rounded-[25px]'>
                <div className='flex gap-10 justify-around'>
                    <img src={satanic} alt="" />
                    <div className='flex flex-col justify-center items-center'>
                        <div className='text-white text-2xl '> Sadece Sohpet</div>
                        <div className=' text-l text-left'>Mami çıldırdı gelen gelsin</div>
                    </div>
                    <div className='flex justify-center items-center relative right-0'>
                        <img className='cursor-pointer' src={ekle} alt="" />
                    </div>
                </div>
            </div>

            <div className=' bg-gray-500 w-[35rem] p-[2rem] rounded-[25px]'>
                <div className='flex gap-10 justify-around'>
                    <img src={Circle} alt="" />
                    <div className='flex flex-col justify-center items-center'>
                        <div className='text-white text-2xl '> Sadece Sohpet</div>
                        <div className=' text-l text-left'>Mami çıldırdı gelen gelsin</div>
                    </div>
                    <div className='flex justify-center items-center relative right-0'>
                        <img className='cursor-pointer' src={ekle} alt="" />
                    </div>
                </div>
            </div>

        </div>



        <div className='flex justify-around m-12'>

        <div className=' bg-gray-500 w-[35rem] p-[2rem] rounded-[25px]'>
            <div className='flex gap-10 justify-around'>
                <img src={Devil} alt="" />
                <div className='flex flex-col justify-center items-center'>
                    <div className='text-white text-2xl '> Sadece Sohpet</div>
                    <div className=' text-l text-left'>Mami çıldırdı gelen gelsin</div>
                </div>
                <div className='flex justify-center items-center relative right-0'>
                    <img className='cursor-pointer' src={ekle} alt="" />
                </div>
            </div>
        </div>

        <div className=' bg-gray-500 w-[35rem] p-[2rem] rounded-[25px]'>
            <div className='flex gap-10 justify-around'>
                <img src={Evil} alt="" />
                <div className='flex flex-col justify-center items-center'>
                    <div className='text-white text-2xl '> Sadece Sohpet</div>
                    <div className=' text-l text-left'>Mami çıldırdı gelen gelsin</div>
                </div>
                <div className='flex justify-center items-center relative right-0'>
                    <img className='cursor-pointer' src={ekle} alt="" />
                </div>
            </div>
        </div>

        </div>


        <div className='flex justify-around m-12'>

<div className=' bg-gray-500 w-[35rem] p-[2rem] rounded-[25px]'>
    <div className='flex gap-10 justify-around'>
        <img src={Satanism1} alt="" />
        <div className='flex flex-col justify-center items-center'>
            <div className='text-white text-2xl '> Sadece Sohpet</div>
            <div className=' text-l text-left'>Mami çıldırdı gelen gelsin</div>
        </div>
        <div className='flex justify-center items-center relative right-0'>
            <img className='cursor-pointer' src={ekle} alt="" />
        </div>
    </div>
</div>

<div className=' bg-gray-500 w-[35rem] p-[2rem] rounded-[25px]'>
    <div className='flex gap-10 justify-around'>
        <img src={Satanism2} alt="" />
        <div className='flex flex-col justify-center items-center'>
            <div className='text-white text-2xl '> Sadece Sohpet</div>
            <div className=' text-l text-left'>Mami çıldırdı gelen gelsin</div>
        </div>
        <div className='flex justify-center items-center relative right-0'>
            <img className='cursor-pointer' src={ekle} alt="" />
        </div>
    </div>
</div>

</div>




        <div className='flex justify-around m-12'>

        <div className=' bg-gray-500 w-[35rem] p-[2rem] rounded-[25px]'>
            <div className='flex gap-10 justify-around'>
                <img src={Pentagram} alt="" />
                <div className='flex flex-col justify-center items-center'>
                    <div className='text-white text-2xl '> Sadece Sohpet</div>
                    <div className=' text-l text-left'>Mami çıldırdı gelen gelsin</div>
                </div>
                <div className='flex justify-center items-center relative right-0'>
                    <img className='cursor-pointer' src={ekle} alt="" />
                </div>
            </div>
        </div>

        <div className=' bg-gray-500 w-[35rem] p-[2rem] rounded-[25px]'>
            <div className='flex gap-10 justify-around'>
                <img src={Pentagram2} alt="" />
                <div className='flex flex-col justify-center items-center'>
                    <div className='text-white text-2xl '> Sadece Sohpet</div>
                    <div className=' text-l text-left'>Mami çıldırdı gelen gelsin</div>
                </div>
                <div className='flex justify-center items-center relative right-0'>
                    <img className='cursor-pointer' src={ekle} alt="" />
                </div>
            </div>
        </div>

        </div>




        <div className='flex justify-around m-12'>

                <div className=' bg-gray-500 w-[35rem] p-[2rem] rounded-[25px]'>
                    <div className='flex gap-10 justify-around'>
                        <img src={Satanism} alt="" />
                        <div className='flex flex-col justify-center items-center'>
                            <div className='text-white text-2xl '> Sadece Sohpet</div>
                            <div className=' text-l text-left'>Mami çıldırdı gelen gelsin</div>
                        </div>
                        <div className='flex justify-center items-center relative right-0'>
                            <img className='cursor-pointer' src={ekle} alt="" />
                        </div>
                    </div>
                </div>


        </div>
    </div>
   </>
  )
}

export default Lobiler
