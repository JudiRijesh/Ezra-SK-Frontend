import React, { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { AuthContext } from '../context/auth.context';

const Signup = () => {
  const { signup } = useContext(AuthContext);
  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate(); 

  const handleSubmit = async (event) => {
    event.preventDefault()
  
    
    const success = await signup({ fullName, username, password, confirmPassword })
  
   
    if (success) {
      setFullName('')
      setUsername('')
      setPassword('')
      setConfirmPassword('')
      navigate('/login')
    } else {
      
      console.error('Signup failed');
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-[rgb(255,250,236)]">
      <div className='w-96 p-6 rounded-lg shadow-md bg-[rgb(255,250,236)]'> 
        <h1 className='text-3xl font-semibold text-center text-green-900'>Sign Up</h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label className='label p-2 mt-8'>
              <span className='text-green-900 label-text'>Full Name</span>
            </label>
            <input type='text' placeholder='Enter Full Name' className='w-full input input-bordered h-10' value={fullName} onChange={(e) => setFullName(e.target.value)} required/>
          </div>
          <div>
            <label className='label p-2 mt-4'>
              <span className='text-green-900 label-text'>Username</span>
            </label>
            <input
              type='text' placeholder='Enter Username'className='w-full input input-bordered h-10' value={username} onChange={(e) => setUsername(e.target.value)} required/>
          </div>
          <div>
            <label className='label p-2 mt-4'>
              <span className='text-green-900 label-text'>Password</span>
            </label>
            <input type='password' placeholder='Enter Password' className='w-full input input-bordered h-10' value={password} onChange={(e) => setPassword(e.target.value)} required/>
          </div>
          <div>
            <label className='label p-2 mt-4'>
              <span className='text-green-900 label-text'>Confirm Password</span>
            </label>
            <input type='password' placeholder='Confirm Password' className='w-full input input-bordered h-10' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
          </div>

          <Link to='/login' className='label p-2 mt-4 text-sm hover:underline hover:text-green-900 mt-2 inline-block'>
            Already have an account? Login
          </Link>
          <button className='btn btn-block btn-sm mt-2 border border-green-900 hover:bg-green-900 hover:text-white'>
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
