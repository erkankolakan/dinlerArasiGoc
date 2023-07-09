import React from 'react';
import arkaplan from "../img/arkaplan_3 copy.jpg";
import "../css/Ayin.css";
import { motion } from "framer-motion";
import Cat from "../img/Cat.png";
import Cat1 from "../img/Cat-1.png";
import Cat2 from "../img/Cat-2.png";
import Gamer from "../img/Gamer.png";
import Kitty from "../img/Kitty.png";
import Man from "../img/Man.png";
import Devil from "../img/Devil.png";
import Circle from "../img/Circle.png";
import Mute from "../img/mute.png";
import Header from './Header';
import Chat from './Chat';



const Ayin = () => {
  return (
    <>
    <Header/>
      <div className='arkplan flex justify-center items-end'>


      <div className='m-12 flex gap-10 flex justify-center items-center mb-[12px] mr-[120px] '>
          <div className=''>
            <img className=' cursor-pointer w-full h-full rounded-[50%] py-3 px-4' src={Mute} alt="" />
          </div>
          <div className='  text cursor-pointer text-[25px] font-[500] flex justify-center items-center bg-red-900 
          rounded-[10px] px-10 h-[60px] '>Ayini Bitir</div>

        </div>


      </div>

        <img className='w-[85px] absolute right-[620px] top-[400px]' src={Cat} alt="" />
        <img className='w-[85px] absolute right-[705px] top-[620px]' src={Cat1} alt="" />
        <img className='w-[85px] absolute right-[920px] bottom-[175px]' src={Cat2} alt="" />
        <img className='w-[85px] absolute left-[705px] bottom-[265px]' src={Gamer} alt="" />
        <img className='w-[85px] absolute left-[615px] bottom-[475px]' src={Kitty} alt="" />
        <img className='w-[85px] absolute left-[700px] top-[185px]' src={Man} alt="" />
        <img className='w-[85px] absolute left-[915px] top-[100px]' src={Devil} alt="" />
        <img className='w-[85px] absolute right-[705px] top-[185px]' src={Circle} alt="" />

     <Chat
          className="bg-red-500"
     />
    </>
  );
}

export default Ayin;
