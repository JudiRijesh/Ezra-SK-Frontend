import React from 'react'

function HelpProgramPage() {
    return (
        <div>
            <div className="bg-[rgb(255,250,236)] bg-contain bg-center min-h-screen flex flex-col items-center">
            
                <h1 className="text-green-900 font-semibold mt-24 text-2xl mb-20 text-center">Help Programs available </h1>
                <h5 className='text-green-900 mb-20'>Choose the care you or your loved ones deserve – EZRA brings support right to your door</h5>

                <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    
                 
                    <div className="card bg-[rgb(255,250,236)]  w-96 shadow-xl">
                        <figure>
                            <img src="./ride.png" alt="Shoes" className='w-90 h-72'  />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title text-green-900">Book your ride</h2>
                            <p className='text-green-900 text-sm'> For senior citizens who need assistance traveling, Ezra offers pickup and drop-off services at half price. Round-trip bookings, wheelchair accessibility, and care assistance are also available</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary mt-6">Book Now</button>
                            </div>
                        </div>
                    </div>

                    
                    <div className="card bg-[rgb(255,250,236)]  w-96 shadow-xl">
                        <figure>
                            <img src="./Nursingcare.png" alt="Shoes" className='w-90 h-72' />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title  text-green-900">Nursing Care for Elders</h2>
                            <p className='text-green-900 text-sm'>Providing compassionate, personalized nursing care for elders to support their health, independence, and quality of life in a safe, nurturing environment.</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary mt-6">Book Now</button>
                            </div>
                        </div>
                    </div>

                
                    <div className="card bg-[rgb(255,250,236)]  w-96 shadow-xl">
                        <figure>
                            <img src="./ChildAbuse.png" alt="Shoes" className='w-90 h-72'  />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title  text-green-900">Counselling for Abuse Victims</h2>
                            <p className='text-green-900 text-sm'>Offering empathetic counseling and support to help abuse victims heal, rebuild confidence, and regain control over their lives in a safe and understanding space.</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary mt-6">Book Now</button>
                            </div>
                        </div>
                    </div>

                   
                    <div className="card bg-[rgb(255,250,236)]  w-96 shadow-xl mt-6">
                        <figure>
                            <img src="./SuicideCare.png" alt="Shoes" className='w-90 h-72'  />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title  text-green-900">Care for Suicide Victims</h2>
                            <p className='text-green-900 text-sm'>Providing compassionate care and support for suicide survivors, offering guidance and resources to help them find hope, resilience, and a path toward healing.</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary mt-6">Book Now</button>
                            </div>
                        </div>
                    </div>


                   
                    <div className="card bg-[rgb(255,250,236)]  w-96 shadow-xl mt-6">
                        <figure>
                            <img src="./SuicidePrevention.png" alt="Shoes" className='w-90 h-72'  />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title  text-green-900">Suicide Prevention Care</h2>
                            <p className='text-green-900 text-sm'>Delivering proactive suicide prevention care through compassionate support, early intervention, and resources to foster hope and strengthen mental well-being.</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary mt-6">Book Now</button>
                            </div>
                        </div>
                    </div>


                    <div className="card bg-[rgb(255,250,236)]  w-96 shadow-xl mt-6">
                        <figure>
                            <img src="./EOL.png" alt="Shoes" className='w-90 h-72'  />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title  text-green-900">Palliative Care</h2>
                            <p className='text-green-900 text-sm'>Palliative care provides compassionate support to improve the quality of life for those facing serious illness, addressing physical, emotional, and spiritual needs. It's a personalized approach, offering relief, dignity, and comfort for both patients and their families.</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary mt-6">Book Now</button>
                            </div>
                        </div>
                    </div>


                    <div className="card bg-[rgb(255,250,236)]  w-96 shadow-xl mt-6">
                        <figure>
                            <img src="./CancerPatient.png" alt="Shoes" className='w-90 h-72'  />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title  text-green-900">Cancer Patient Care</h2>
                            <p className='text-green-900 text-sm'>Cancer patient care is a holistic approach focused on nurturing the mind, body, and spirit, providing essential medical support alongside emotional strength. It empowers patients and families with compassionate guidance, ensuring comfort and resilience at every step of the journey.</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary mt-6">Book Now</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default HelpProgramPage
