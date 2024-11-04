import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/auth.context';
import axios from 'axios';

function Cart() {
  const { loggedInUser } = useContext(AuthContext); // Assuming user is needed for fetching cart
  const [cartItem, setCartItem] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/AddtoCart`);
        setCartItem(response.data);
      } catch (err) {
        setError('Error fetching cart items');
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCartItems();
  }, []); 
  
  const handleDelete = (id) => {
    axios.delete(`${import.meta.env.VITE_BACKEND_URL}/AddtoCart/${id}`)
      .then(() => {
        // Filter out the deleted item
        setCartItem(prevItems => prevItems.filter(item => item._id !== id));
      })
      .catch((err) => {
        console.error("Error deleting cart item:", err);
      });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="p-5 min-h-screen bg-[rgb(255,250,236)]">
      <h1 className='text-3xl font-bold text-green-900 mt-40 underline'>Items in your Cart</h1>
      {cartItem.length === 0 ? (
        <p className="text-green-900 mt-4">Your cart is empty.</p>
      ) : (
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6">
          {cartItem.map(item => (
            <div key={item._id} className="card bg-[rgb(255,250,236)] w-96 shadow-xl">
              <div className="card-body">
                <h2 className="card-title text-green-900">{item.name}</h2>
                <p className='text-green-900'>An EZRA helper will call you to book an Appointment in the next 5 mins</p>
                <button onClick={() => handleDelete(item._id)} className="btn btn-danger">Delete if you no longer need the service</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Cart;
