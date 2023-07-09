import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GrGoogle } from 'react-icons/gr';
import giris from '../img/şeytann.png';
import { Link } from 'react-router-dom';
import videos from '../img/hell.mp4';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import "../css/login.css"

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <motion.div>
      <motion.div>
        <video className="background-video" autoPlay loop muted>
          <source src={videos} type="video/mp4" />
        </video>

        <motion.img
          className="girisim"
          src={giris}
          alt=""
          initial={{
            y: 0
          }}
          animate={{
            y: [-10, 0, -10]
          }}
          transition={{
            delay: 4,
            duration: 2,
            repeat: Infinity
          }}
        />

        <motion.div
          className="hover:text-gray-500 duration-200  w-[100vw] h-[100vh] flex justify-center items-center pt-[230px]"
        >
          <motion.div
            className="w-[865px] pt-[50px] h-[487px] rounded-[45px] flex flex-col gap-1  justify-center items-center"
            initial={{
              y: 0
            }}
            animate={{
              y: [-10, 0, -10]
            }}
            transition={{
              delay: 4,
              duration: 2,
              repeat: Infinity
            }}
          >
            <div className="w-full text-[25px]"></div>

            <input
              className="w-[250px] h-[50px] bg-[#95000A] rounded-[5px] text-white font-bold text-xl hover:bg-[#880009] duration-[.5s] p-3"
              id="filled-search"
              type="email"
              placeholder="Email"
            />

            <div className="password-input">
              <input
                className="w-[250px] h-[50px] bg-[#95000A] rounded-[5px] text-white font-bold text-xl hover:bg-[#880009] duration-[.5s] p-3"
                id="filled-search"
                type={showPassword ? 'text' : 'password'}
                placeholder="Şifre"
              />
              <FontAwesomeIcon
                icon={showPassword ? faEyeSlash : faEye}
                className="toggle-password"
                onClick={togglePasswordVisibility}
              />
            </div>

            <div className="hover:text-gray-500 transition-colors duration-300  cursor-pointer text-white ">
              Şifremi Unuttum
            </div>

            <button className='        
            w-[250px] h-[50px] bg-[#95000A] rounded-[5px] text-white font-bold text-xl hover:bg-[#880009] duration-[.5s] p-3
            ' >
              Giriş Yap
            </button>
            <button className="
            w-[250px] h-[50px] bg-[#95000A] rounded-[5px] text-white font-bold text-xl hover:bg-[#880009] duration-[.5s] p-3 inline flex items-center justify-center gap-2
            
            ">
              <GrGoogle className=''  />  Email ile Giriş Yap
            </button>

            <Link to="/uyeol">
              <button className="
            w-[250px] h-[50px] bg-[#95000A] rounded-[5px] text-white font-bold text-xl hover:bg-[#880009] duration-[.5s] p-3
              ">
                Üye Ol
              </button>
            </Link>

            
            
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Login;
