import React from 'react';
import { Link } from 'react-router-dom';
import ChatIcon from '@mui/icons-material/Chat';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../context/auth.context';



function Sidebar() {

  const navigate = useNavigate();
  const { logOutUser } = useContext(AuthContext);

  const handleLogout = () => {
    logOutUser();         
    navigate('/');           
  };

   return (
    <aside className='h-screen w-60 fixed'>
      <nav className='h-full flex flex-col bg-[rgb(255,250,236)] border-r shadow-sm p-4'>
      <div className='pb-7 flex items-center space-x-2'> 
          <img src='/Ezrah-Logo.png' className='w-48' alt='logo' />

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
          <li><Link to="/cart">Cart</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><button className='mt-5' onClick={handleLogout}>Logout</button></li>
                    
            </ul>
       


            <div className='border-t flex p-3 pl-10  mt-20'>
            <a href='https://ezrachat.netlify.app'><ChatIcon sx={{ color: '#004d00', fontSize: 40 }} className="hover:text-green-700 transition-colors duration-200" />
            </a>

            </div>

            </li>
            </ul>

        
      </nav>
    </aside>
  );
}

export default Sidebar;
