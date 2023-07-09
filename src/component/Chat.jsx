import React from 'react';
import SendIcon from '@mui/icons-material/Send';
import { SiMediafire } from "react-icons/si";
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

const Chat = () => {
  return (
    <div className=''>

      <div className='absolute right-5 bottom-5 w-[400px] h-[500px] bg-[#f5f5f5] flex justify-center items-end p-3 flex-col rounded-[20px] gap-2'>
        <div className='p-5 flex justify-start items-start w-[375px] h-[500px] bg-gray-900 rounded-[10px]'>
          <div className="w-[400px] pr-2 overflow-y-auto h-[380px]">


{/* gönderilen mesajlar */}
            <div className='flex justify-start mb-4 text-white items-start w-full'>
            <img className='rounded-[50%] w-[50px] h-[50px]' src={Cat} alt="" />
              <div className='w-full bold text-left pl-2'>Lorem ipsum dolor sit Lorem Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus distinctio praesentium est eius neque voluptatum quidem molestias accusamus, saepe repellendus ex debitis animi earum quam illo aperiam magni corrupti maxime.</div>
            </div>

            <div className='flex justify-start mb-4 text-white items-start w-full'>
            <img className='rounded-[50%] w-[50px] h-[50px]' src={Kitty} alt="" />
              <div className='w-full bold text-left pl-2'>Lorem ipsum dolor sit Lorem Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus distinctio praesentium est eius neque voluptatum quidem molestias accusamus, saepe repellendus ex debitis animi earum quam illo aperiam magni corrupti maxime. </div>
            </div>

            <div className='flex justify-start  mb-4 text-white items-start w-full'>
                <img className='rounded-[50%] w-[50px] h-[50px]' src={Circle} alt="" />
                    <div className='w-full bold h-[100%] text-left pl-2   '>Lorem </div>
            </div>

{/* senin gönderdiğin mesajlar */}

            <div className='flex justify-start mb-4 text-white items-start w-full'>
              <div className='w-full bold text-right pr-2'>Lorem ipsum dolor sit Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae vel placeat sint corporis quas est ipsa repellendus veritatis nostrum praesentium, ipsum iusto, modi doloremque nemo molestiae corrupti sunt tenetur similique! amet</div>
              <img className='rounded-[50%] w-[50px] h-[50px]' src={Cat1} alt="" />
            </div>

            <div className='flex justify-start mb-4 text-white items-start w-full'>
              <div className='w-full bold text-right pr-2'>Lorem ipsum dolor sit Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae vel placeat sint corporis quas est ipsa repellendus veritatis nostrum praesentium, ipsum iusto, modi doloremque nemo molestiae corrupti sunt tenetur similique! amet</div>
              <img className='rounded-[50%] w-[50px] h-[50px]' src={Devil} alt="" />
            </div>

            <div className='flex justify-start mb-4 text-white items-start w-full'>
              <div className='w-full bold text-right pr-2'>Lorem ipsum dolor sit Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae vel placeat sint corporis quas est ipsa repellendus veritatis nostrum praesentium, ipsum iusto, modi doloremque nemo molestiae corrupti sunt tenetur similique! amet</div>
              <img className='rounded-[50%] w-[50px] h-[50px]' src={Devil} alt="" />
            </div>





          </div>
        </div>


        



        <div className='flex justify-end items-center gap-2'>
        <input type='text' className='bg-gray-300 w-[340px] h-[50px] rounded-[10px] flex justify-end items-center p-3 shadow-md' />

          <SiMediafire
            className='cursor-pointer w-[25px] h-[25px] hover:text-red-900 duration-[.5s]'
          />
        </div>
      </div>
    </div>
  );
}

export default Chat;
