import React, { useContext, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'; 
import { AuthContext } from '../context/auth.context'; 
import { FaEye, FaEyeSlash } from 'react-icons/fa';


const Login = () => {
  const { authenticateUser } = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false); // Add loading state
  const [showPassword, setShowPassword] = useState(false); //Adding state to show password visible
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true); // Set loading to true
    await authenticateUser(username, password); 
    setLoading(false); // Reset loading state after authentication
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[rgb(255,250,236)]">
      <div className='w-96 p-6 rounded-lg shadow-lg bg-[rgb(255,250,236)]'> 
        <h1 className='text-3xl font-semibold text-center text-green-900'>Login</h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label className='label p-2 mt-6'>
              <span className='text-green-900 label-text'>Username</span>
            </label>
            <input type='text'  placeholder='Enter Username' className='w-full input input-bordered h-10 ' value={username}  onChange={(e) => setUsername(e.target.value)} required/>
          </div>
          <div>
            <label className='label p-2 mt-2'>
              <span className='text-green-900 label-text'>Password</span>
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'} placeholder='Enter Password' className='w-full input input-bordered h-10 pr-10' value={password} onChange={(e) => setPassword(e.target.value)} required/>
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-green-900"
                onClick={() => setShowPassword((prev) => !prev)} // Toggle showPassword state
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />} 
              </button>
            </div>
          </div>

          <Link to='/signup' className='label p-2 text-sm hover:underline hover:text-green-900 mt-6 inline-block'>
            {"Don't"} have an account?
          </Link>
          <button className='btn btn-block btn-sm mt-2 border border-green-900 hover:bg-green-900 hover:text-white' disabled={loading}>
            {loading ? <span className='loading loading-spinner'></span> : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
