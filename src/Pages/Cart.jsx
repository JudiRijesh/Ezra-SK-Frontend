import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/auth.context';

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const { authenticateUser } = useContext(AuthContext);

 
  useEffect(() => {
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
  }, [])

   

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

      {cartItems.services && cartItems.services.length > 0 ? (
        <div className="overflow-x-auto w-full max-w-7xl mt-8">
          <table className="table w-full">
            <thead>
              <tr>
                <th className="bg-green-900 text-white">#</th>
                <th className="bg-green-900 text-white">Service Name</th>
                <th className="bg-green-900 text-white">Description</th>
                <th className='bg-green-900 text-white'>Expected time for Service</th>
                <th className="bg-green-900 text-white">Actions</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.services.map((service, index) => (
                <tr key={service._id} className="text-green-900">
                  <td>{index + 1}</td>
                  <td>{service.name}</td>
                  <td>{service.description}</td>
                  <td><p>Time will be confirmed by EZRA Helper or you can update your time here</p></td>
                  <td>
                    <div className="flex space-x-2">
                      
                      <button
                        className="btn btn-sm btn-error"
                        onClick={() => handleDelete(service._id)}
                      >
                        Delete
                      </button>
                    </div>
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