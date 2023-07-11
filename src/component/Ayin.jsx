import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import { GiRamProfile } from 'react-icons/gi';
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

const AccountMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div >
    <React.Fragment>
      <Box  className="    bg-gray-500" sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <Tooltip className='relative left-[895px] top-[40px]  ' title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >

{/* resim kontrolleri bir alt satırda */}
              <img className='konustu  w-[85px] rounded-full' src={Cat} alt="" /> 
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem >
          Erkan Kolakan
        </MenuItem>
        <MenuItem >
          İstanbul
        </MenuItem>
        <MenuItem >
          18
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <GiRamProfile className='text-[20px]' />
          </ListItemIcon>
          Profil
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Arkadaş Ekle
        </MenuItem>
      </Menu>
    </React.Fragment>
    </div>
  );
};

const Ayin = () => {
  return (
    <div className="">
      <Header />
      <div className='absolute arkplan flex justify-center items-end'>
        <div className='m-12 flex gap-10 flex justify-center items-center mb-[12px] mr-[120px] '>
          <div className=''>
            <img className='cursor-pointer  w-full h-full rounded-[50%] py-3 px-4' src={Mute} alt=""/>
          </div>
          <div className='text cursor-pointer text-[25px] font-[500] flex justify-center items-center bg-red-900 
          rounded-[10px] px-10 h-[60px]'>Ayini Bitir</div>
        </div>
      </div>
      <AccountMenu />
      
      <Chat className="bg-red-500" />
    </div>
  );
}

export default Ayin;






    // <img className='w-[85px] absolute right-[705px] top-[620px] rounded-full' src={Cat1} alt="" />
    //     <img className='w-[85px] absolute right-[920px] bottom-[175px] rounded-full' src={Cat2} alt="" />
    //     <img className='w-[85px] absolute left-[705px] bottom-[265px] rounded-full' src={Gamer} alt="" />
    //     <img className='w-[85px] absolute left-[615px] bottom-[475px] rounded-full' src={Kitty} alt="" />
    //     <img className='w-[85px] absolute left-[700px] top-[185px] rounded-full' src={Man} alt="" />
    //     <img className='w-[85px] absolute left-[915px] top-[100px] rounded-full' src={Devil} alt="" />
    //     <img className='w-[85px] absolute right-[705px] top-[185px] rounded-full' src={Circle} alt="" />