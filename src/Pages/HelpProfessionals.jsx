import React from 'react';

function HelpProfessionals() {
    return (
        <div className="bg-[rgb(255,250,236)] bg-cover min-h-screen"> {/* Set background color */}
            <div className="flex items-start">

                {/* Left Side - Text Content */}
                <div className="flex flex-col ml-4 mt-24 max-w-md">
                    <h1 className="text-2xl font-bold mb-12 text-green-900">Virtual Assistants / Professionals</h1>
                    <p>
                        Virtual Assistants and Professionals in the medical field, especially those working in palliative care, provide 
                        essential support across various aspects of health and well-being. Here’s a brief look at their roles:
                    </p>
                    <ol className="list-decimal list-inside mt-4 space-y-4">
                        <li>
                            <strong>Palliative Care:</strong> Virtual Assistants help patients and their families manage symptoms, provide 
                            comfort, and coordinate care plans to improve the quality of life for those with serious or terminal illnesses. 
                            They guide families through medical decisions, emotional support, and end-of-life care planning.
                        </li>
                        <li>
                            <strong>Guidance for Children:</strong> Virtual professionals offer counseling, emotional support, and educational 
                            resources to help children understand and cope with health-related challenges, whether for themselves or family members.
                        </li>
                        <li>
                            <strong>Guidance for Young People:</strong> For adolescents and young adults, Virtual Assistants provide mental 
                            health support, preventive care information, and resources to support well-being during critical developmental years.
                        </li>
                        <li>
                            <strong>Support for Elder Care:</strong> Virtual professionals assist with coordinating medical appointments, medication 
                            management, and daily assistance for older adults, addressing issues of loneliness and independence.
                        </li>
                    </ol>
                </div>

                
                <div className="ml-auto mr-4 mt-28">
                    <img src='/Support.png' className='w-[700px]' alt='logo' /> 

                    
                    <ol className="list-decimal list-inside mt-4 space-y-4" start="5">
                        <li className='mt-16 ml-4'>
                            <strong>Suicide Care and Prevention:</strong> Virtual Assistants are trained to recognize warning signs, offer immediate 
                            support, and connect individuals with mental health resources, playing a critical role in prevention.
                        </li>
                        <li className='ml-4 pb-48'>
                            <strong>Support for Victims of Abuse:</strong> Virtual professionals offer a confidential and safe space for abuse survivors, 
                            providing resources, emotional support, and guidance to help them rebuild their lives, along with connections to legal, 
                            medical, and psychological services.
                        </li>
                    </ol>
                </div>
            </div>

            
            <div className="flex flex-col items-center">
    <h1 className="text-2xl font-bold text-green-900 text-center mb-20">Our Virtual Professionals</h1>




    <div className="hero bg-[rgb(255,250,236)] ">
  <div className="hero-content flex-col lg:flex-row">
    <img
      src="/doc1.png"
      className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-2xl font-bold">Dr Sasha Stevens</h1>
      <p className="py-6">
      Dr. Sasha Stevens is a psychiatrist specializing in adolescent mental health. With extensive experience in addressing the unique psychological and emotional challenges faced by teenagers, Dr. Stevens employs a compassionate and evidence-based approach to support young individuals and their families. Her practice focuses on areas such as anxiety, depression, trauma, and developmental issues, aiming to foster resilience and mental well-being during these formative years.
      </p>
      </div>
  </div>
</div>


<div className="hero  bg-[rgb(255,250,236)]  ">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img
      src="/doc2.png"
      className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-2xl font-bold">Dr Charles Evans</h1>
      <p className="py-6">
      Dr. Charles Evans is a dedicated specialist in palliative care, committed to providing compassionate, patient-centered support for individuals with serious, life-limiting illnesses. With a focus on improving quality of life, Dr. Evans works closely with patients and their families to manage symptoms, alleviate pain, and address emotional, spiritual, and practical needs. His approach integrates medical expertise with empathy, aiming to ensure comfort and dignity throughout each stage of care.
      </p>
     </div>
  </div>
</div>
    
    
    
    <div className="hero bg-[rgb(255,250,236)] ">
  <div className="hero-content flex-col lg:flex-row">
    <img
      src="/doc3.png"
      className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-2xl font-bold">Dr Benjamin Oetaker</h1>
      <p className="py-6">
      Dr. Benjamin Oetaker is an expert in child guidance, specializing in the emotional and behavioral development of young children. He is dedicated to helping children and their families navigate challenges such as anxiety, behavioral issues, and social skills. Through a supportive and individualized approach, Dr. Oetaker fosters a safe environment where children can build confidence, resilience, and healthy coping strategies, promoting their overall mental well-being and personal growth.
      </p>
      </div>
  </div>
</div>

<div className="hero  bg-[rgb(255,250,236)]  ">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img
      src="/doc4.png"
      className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-2xl font-bold">Dr Kate Buchanen</h1>
      <p className="py-6">
      Dr. Kate Buchanan is a specialist in suicide prevention and care, dedicated to providing compassionate, proactive support for individuals at risk. With a focus on early intervention, mental health education, and resilience-building, Dr. Buchanan collaborates closely with patients and their support networks to address underlying issues such as depression, trauma, and anxiety. Her approach combines clinical expertise with empathy, aiming to empower individuals with coping strategies, hope, and resources to navigate challenging times and foster lasting mental well-being.
      </p>
     </div>
  </div>
</div>
      
      <div className="hero bg-[rgb(255,250,236)] ">
  <div className="hero-content flex-col lg:flex-row">
    <img
      src="/doc5.png"
      className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-2xl font-bold">Dr Yoshida Hall</h1>
      <p className="py-6">
      Dr. Yoshida Hall is a compassionate specialist in the support and care of abuse survivors. With a focus on creating a safe and empowering environment, Dr. Hall provides trauma-informed therapy to help individuals heal from the emotional and psychological impacts of abuse. Her approach combines therapeutic expertise with deep empathy, offering survivors practical tools for rebuilding self-esteem, trust, and resilience. Dr. Hall is dedicated to guiding her patients toward recovery and helping them reclaim a sense of empowerment and well-being in their lives.
      </p>
      </div>
  </div>
</div>

    </div>
    <footer className="footer footer-center bg-[rgb(255,250,236)] text-green-900 p-10 mt-96 shadow-lg">
  <aside>
 
    <p className="font-bold">
      EZRA
      <br />
      Seek for Help and you shall find
    </p>
    <p className="mt-2 text-green-800">Phone: (123) 456-7890</p>
            <p className="text-green-800">Email: contact@ezrahelp.com</p>
            <p className="text-green-800">Address: 1234 Help Street, Noord-Holland, NL</p>
    
    <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
  </aside>
  <nav>
    <div className="grid grid-flow-col gap-4">
      <a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="fill-current">
          <path
            d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
        </svg>
      </a>
      <a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="fill-current">
          <path
            d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
        </svg>
      </a>
      <a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="fill-current">
          <path
            d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
        </svg>
      </a>
    </div>
  </nav>
</footer>
</div>

    );
}

export default HelpProfessionals;
