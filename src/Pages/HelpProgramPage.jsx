import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../context/auth.context';

function HelpProgramPage() {
    const navigate = useNavigate()
    const { loggedInUser } = useContext(AuthContext)
    const services = [
        {
            id: 1,
            name: "Book your ride",
            description: "For senior citizens who need assistance traveling, Ezra offers pickup and drop-off services at half price. Round-trip bookings, wheelchair accessibility, and care assistance are also available.",
            img: "/ride.png"
        },
        {
            id: 2,
            name: "Nursing Care for Elders",
            description: "Providing compassionate, personalized nursing care for elders to support their health, independence, and quality of life in a safe, nurturing environment.",
            img: "/Nursingcare.png"
        },
        {
            id: 3,
            name: "Counselling for Abuse Victims",
            description: "Offering empathetic counseling and support to help abuse victims heal, rebuild confidence, and regain control over their lives in a safe and understanding space.",
            img: "/ChildAbuse.png"
        },
        {
            id: 4,
            name: "Care for Suicide Victims",
            description: "Providing compassionate care and support for suicide survivors, offering guidance and resources to help them find hope, resilience, and a path toward healing.",
            img: "/SuicideCare.png"
        },
        {
            id: 5,
            name: "Suicide Prevention Care",
            description: "Delivering proactive suicide prevention care through compassionate support, early intervention, and resources to foster hope and strengthen mental well-being.",
            img: "/SuicidePrevention.png"
        },
        {
            id: 6,
            name: "Palliative Care",
            description: "Palliative care provides compassionate support to improve the quality of life for those facing serious illness, addressing physical, emotional, and spiritual needs. It's a personalized approach, offering relief, dignity, and comfort for both patients and their families.",
            img: "/EOL.png"
        },
        {
            id: 7,
            name: "Donate Food",
            description: "If you had a celebration and have extra food that you would like to donate to a HOME that needs food book our service we will help deliver it. If you would like to donate food through money book our services and we will help deliver food to the HOME you choose",
            img: "/food-donation.png"
        }
    ];

    const submitBookNow = async (service) => {
        if (!loggedInUser) {
            alert("Please log in to book a service.")
            navigate('/login')
            return;
        }
    
        const data = {
            userId: loggedInUser._id,
            name: service.name,
            serviceId: service.id,
        }
    
        try {
            console.log(`Posting to: ${import.meta.env.VITE_BACKEND_URL}/add`, data)
            await axios.post(`${import.meta.env.VITE_BACKEND_URL}/add`, data)
            alert("Item added to Cart")
            navigate('/Cart')
        } catch (error) {
            console.error("Error adding item to Cart:", error)
            alert(`Error adding item to Cart: ${error.response ? error.response.data.message : error.message}`)
        }
    }
    



    return (
        <div className="bg-[rgb(255,250,236)] bg-contain bg-center min-h-screen flex flex-col items-center">
              <div className='pb-7 mt-6 flex items-center space-x-2'> 
              <img src='/Ezrah-Logo.png' className='w-48' alt='logo' />
              </div>
            <h5 className='text-green-900 mb-20'>Choose the care you or your loved ones deserve – EZRA brings support right to your door</h5>

            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {services.map(service => (
                    <div key={service.id} className="card bg-[rgb(255,250,236)] w-96 shadow-xl">
                        <figure><img src={service.img} alt={service.name} className='w-90 h-72' /></figure>
                        <div className="card-body"><h2 className="card-title text-green-900">{service.name}</h2>
                            <p className='text-green-900 text-sm'>{service.description}</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary mt-6" onClick={() => submitBookNow(service)}>Book Now</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default HelpProgramPage;
