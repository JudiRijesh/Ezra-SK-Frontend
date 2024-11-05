import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/auth.context';

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const { authenticateUser } = useContext(AuthContext);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/cart`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`, 
        },
      })
      .then((res) => {
        setCartItems(res.data.items || []);
        setLoading(false)
      })
      .catch((err) => {
        console.error("Error fetching cart items:", err);
        setLoading(false)
      });
  }, [])

 
  if (loading) {
    return <div>Loading...</div>
  }


  return (
    <div className="bg-[rgb(255,250,236)] bg-contain bg-center min-h-screen flex flex-col items-center">
       <h2>Your Cart</h2>
      {cartItems.length > 0 ? (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>{item.name}</li>
          ))}
        </ul>
      ) : (
        <p>Your cart is empty.</p>
      )}
      </div>
  )
}

export default Cart