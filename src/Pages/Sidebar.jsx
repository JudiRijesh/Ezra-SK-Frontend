import React from 'react';
import { Link } from 'react-router-dom';
import ArrowLeftSharpIcon from '@mui/icons-material/ArrowLeftSharp';
import ChatIcon from '@mui/icons-material/Chat';
import { IconButton } from '@mui/material'

function Sidebar() {
  return (
    <aside className='h-screen w-60 fixed'>
      <nav className='h-full flex flex-col bg-[rgb(255,250,236)] border-r shadow-sm p-4'>
      <div className='pb-7 flex items-center space-x-2'> 
          <img src='/Ezrah-Logo.png' className='w-32' alt='logo' />
          <IconButton>
            <ArrowLeftSharpIcon/>
          </IconButton>
        </div>
        <ul className="menu bg-[rgb(255,250,236)] rounded-box w-56 border-r text-green-900 ">
            <li>
            <ul>
            <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/helpProgram">Help Program</Link></li>
          <li><Link to="/helpProfessionals">Help Professionals</Link></li>
          <li><Link to="/become">Become a Help Partner</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          

            </ul>
        </li>
        </ul>

            <div className='border-t flex p-3 pl-10  mt-48'>
            <Link><ChatIcon sx={{ color: '#004d00', fontSize: 40 }} className="hover:text-green-700 transition-colors duration-200" /></Link>

            </div>


        
      </nav>
    </aside>
  );
}

export default Sidebar;
