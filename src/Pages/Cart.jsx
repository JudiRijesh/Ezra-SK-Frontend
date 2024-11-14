import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/auth.context';
import toast from 'react-hot-toast'
import { IoSaveSharp } from "react-icons/io5";
import { useNavigate } from 'react-router-dom'


function Cart() {
  const [cartItems, setCartItems] = useState([])
  const [loading, setLoading] = useState(true)
  const { isLoggedIn } = useContext(AuthContext)
  const [timeUpdates, setTimeUpdates] = useState({})
  const navigate = useNavigate()
 
 
  useEffect(() => {

    if (!isLoggedIn) {
      toast.error("Please log in to see your cart.");
      navigate('/login');
      return;
  }

  //Get
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/cart/cart`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`, 
        },
      })
      .then((res) => {
        console.log(res)
        setCartItems(res.data || []);
        setLoading(false)
      })
      .catch((err) => {
        console.error("Error fetching cart items:", err);
        setLoading(false)
      })
  }, [isLoggedIn, navigate])


  //Update

  const handleSaveTime = (serviceId) => {
    const token = localStorage.getItem("token");
    const newTime = timeUpdates[serviceId] || "09:00"
  
    axios
      .put(`${import.meta.env.VITE_BACKEND_URL}/cart/cart/${serviceId}/time`, { time: newTime }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        toast.success("Time updated successfully");
        
        setCartItems((prevCart) => ({
          ...prevCart,
          services: prevCart.services.map((service) =>
            service._id === serviceId ? { ...service, time: newTime } : service
          ),
        }));
      })
      .catch((error) => {
        console.error("Error updating time:", error);
        toast.error("Failed to update time. Please try again.");
      });
  };



//Delete
   let handleDelete = (serviceId) => {
    if (!serviceId) {
      console.error("Service ID is undefined, cannot delete");
      return
    }
  
    axios
      .delete(`${import.meta.env.VITE_BACKEND_URL}/cart/cart/${serviceId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then(() => {
        setCartItems((prevCart) => ({
          ...prevCart,
          services: prevCart.services.filter((service) => service._id !== serviceId),
        }))
      })
      .catch((err) => {
        console.error("Error deleting service:", err.response?.data || err.message)
      })
  }

  
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <span className="loading loading-spinner loading-md text-green-900"></span>
      </div>
    )
  }

  return (
    <div className="bg-[rgb(255,250,236)] bg-contain bg-center min-h-screen flex flex-col items-center">
    <img src='/Ezrah-Logo.png' className='w-48 mt-8' alt='logo' />
       <h2 className="text-2xl font-semibold text-green-900 mt-2 mb-6">Services in your Cart</h2>
       <p className='text-green-900'>**If you need the services at a specific time please choose below and hit save**</p>

      {cartItems.services && cartItems.services.length > 0 ? (
        <div className="overflow-x-auto w-full max-w-7xl mt-8">
          <table className="table w-full mt-8">
            <thead>
              <tr>
                <th className="bg-green-900 text-white">#</th>
                <th className="bg-green-900 text-white">Service Name</th>
                <th className="bg-green-900 text-white">Description</th>
                <th className='bg-green-900 text-white'>Time</th>
                <th className="bg-green-900 text-white">Actions</th>
              </tr>
            </thead>
            <tbody>
            {cartItems.services.map((service, index) => (
                <tr key={service._id} className="text-green-900">
                  <td>{index + 1}</td>
                  <td>{service.name}</td>
                  <td>{service.description}</td>
                  <td>
                        <div className="flex items-center space-x-2">
                          <input
                            type="time"
                            value={timeUpdates[service._id] || service.time || "09:00"}
                            onChange={(e) =>
                              setTimeUpdates({
                                ...timeUpdates,
                                [service._id]: e.target.value,
                              })
                            }
                            className="border border-gray-300 p-2 rounded-md focus:outline-none"
                          />
                          <IoSaveSharp 
                            onClick={() => handleSaveTime(service._id)}
                            className="text-green-900 cursor-pointer hover:text-green-700"
                          />
                        </div>
                      </td>
                  <td>
                    <button
                      className="w-full inline-flex justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-900 hover:bg-green-950"
                      onClick={() => handleDelete(service._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-green-900 mt-4">Your cart is empty.</p>
      )}
    </div>
  );
}

export default Cart;