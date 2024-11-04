import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/auth.context';
import axios from 'axios';

function Cart() {
  const { loggedInUser } = useContext(AuthContext)
  const [cartItems, setCartItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchCartItems = async () => {
      if (!loggedInUser) {
        return
      }

      try {
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/${loggedInUser._id}`)
        setCartItems(response.data.items)
      } catch (err) {
        setError('Error fetching cart items')
        console.error(err)
      } finally {
        setLoading(false)
      }
    };

    fetchCartItems()
  }, [loggedInUser])

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>{error}</div>
  }

  return (
    <div className="p-5 min-h-screen bg-[rgb(255,250,236)]">
      <h1 className='text-3xl font-bold text-green-900 mt-40 underline'>Items in your Cart</h1>
      {cartItems.length === 0 ? (
        <p className="text-green-900 mt-4">Your cart is empty.</p>
      ) : (
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6">
          {cartItems.map(item => (
            <div key={item._id} className="card bg-[rgb(255,250,236)] w-96 shadow-xl">
              <div className="card-body">
                <h2 className="card-title text-green-900">{item.name}</h2>
                <p className='text-green-900'>Quantity: {item.quantity}</p>
               
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Cart
