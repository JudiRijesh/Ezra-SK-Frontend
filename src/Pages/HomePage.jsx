import React, { useContext, useEffect, useState } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/auth.context';

function HomePage() {
    const { authMessage, setAuthMessage } = useContext(AuthContext); 
    const [visible, setVisible] = useState(false); 

    useEffect(() => {
        if (authMessage) {
            setVisible(true);
            const timer = setTimeout(() => {
                setVisible(false); 
                setAuthMessage(''); 
            }, 3000);

            return () => clearTimeout(timer); 
        }
    }, [authMessage, setAuthMessage]);

    return (
      <div className="bg-[url('/Ezrah-Logo.png')] bg-contain bg-center h-screen flex">
      
        {visible && (
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-green-900 text-white px-4 py-2 rounded shadow-md">
            {authMessage}
          </div>
        )}

 
        <div className="flex-1">
          
        </div>
      </div>
    );
}

export default HomePage;
