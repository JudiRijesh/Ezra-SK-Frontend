import React, { useState } from 'react'; 
import axios from 'axios';

function BecomeaHelpPartner() {
    
    const [name, setName] = useState("");
    const [email, setEmail] = useState(""); 
    const [phone, setPhone] = useState("");
    const [province, setProvince] = useState("");
    const [field, setField] = useState("");
  
    const handleSubmit = async (e) => {
      e.preventDefault(); 
      const contactData = { name, email, phone, province, field }

      try {

        const response = await axios.post("http://localhost:5005/become", contactData)

        setName("");
        setEmail("");
        setPhone("");
        setProvince("");
        setField("");

          console.log("Contact created successfully:", response.data);
        } catch (error) {
          console.error("Error creating contact:", error.response ? error.response.data : error.message);
        }

    };
  
    return (
      <div className="p-5 bg-[rgb(255,250,236)]">
        <div className="h-1/3 w-full">
          <img src="./ReachOut.png" className="w-full h-full object-cover" alt="ReachOut" /> 
        </div>
  
        <h1 className="text-2xl font-bold  mt-8 text-green-900">Get In Touch</h1>
        <br />
        <p className='text-green-900'>Do you have question about the App? 
        Want to implement the HELP Brief Intervention in your organisation and capture community impact data on network-centred care? </p>
        <p className='text-green-900'>We have a range of digital resources and training available. Fill out the contact form below and we’ll be in touch with more information. </p>

        <br />
        <br />

        <div className="h-1/3 w-full">
          <img src="./SuicideCare-logo-for-web.png" className="w-full h-full object-cover" alt="ReachOut" /> 
        </div>

        <h3 className='font-bold text-green-900'>Ready to start making a difference with your patients and carers?</h3>
        <p className='text-green-900'>Gain access to our full education and training program, as well as exclusive resources to support and to prevent Suicide in our community</p>
        <br />
        <br />
        <p className='text-green-900'>More than 720 000 people die by suicide every year. For each suicide, there are an estimated 20 suicide attempts.

            Suicide can occur at any stage of life and in all regions of the world. In 2021, suicide was the third leading cause of death among 15–29-year-olds globally, and 73% of all suicides happened in low- and middle-income countries. Almost 20% of global suicides were due to pesticide self-poisoning.

            While the link between suicide and mental health conditions (in particular, depression and alcohol use disorders) and a previous suicide attempt is well established in high-income countries, many suicides happen impulsively in moments of crisis. Further risk factors for suicide include experience of loss, loneliness, discrimination, relationship dispute, financial problems, chronic pain and illness, violence, abuse, and conflict or other humanitarian emergencies.

            Stigma around mental health conditions and suicide means many people thinking about suicide do not seek help. Suicides and suicide attempts have a ripple effect that impacts on families, friends, colleagues, communities and societies.</p>
        <br />
        <br />
        
        <div className="h-1/3 w-full">
          <img src="./eldercare-banner.png" className="w-full h-full object-cover" alt="ReachOut" /> 
        </div>

        <br />
        <br />
        <h3 className='font-bold text-green-900'>Featured Adult Educators under Eldercare Training Courses</h3>
        <br />
        <h3 className=' font-semibold text-green-900'>Ms Lim Hwee Er</h3>
        <br />
        <p className='text-green-900'>Hwee Er holds a Master of Health Service Management from the University of Sydney (USYD) and a Bachelor of Health Sciences (Hons) (OT) from the University of Teesside. As an occupational therapist, she has 14 years of clinical experience working with seniors of various geriatric/psychogeriatric conditions across a variety of settings. Her experience also includes being a consultant for the planning and implementation of specialised services and programmes such as early dementia programmes and social service based hostels.</p>
        <br />
        <p className='text-green-900'>As a WSQ Advanced Certificate in Training and Assessment (ACTA) certified trainer, Hwee Er is also involved in the development and implementation of WSQ certified and regular training programmes and workshops for professionals, family caregivers and the public. This is done in collaboration with various organisations such as the Tsao Foundation, Health Promotion Board (HPB), SSI and the Civil Service College (CSC) and covers a variety of issues related to eldercare and Well Elderly Programmes. Hwee Er is currently employed with Goshen Rehabilitation & Consultancy Services.</p>

        
        <h1 className="text-2xl font-bold mb-8 mt-8 text-green-900">
              Register your interest below in becoming a Ezra Partner for HELP
            </h1>
  
        <div className="flex mt-5 space-x-4">
         
          <div className="w-full">
                      
            <form onSubmit={handleSubmit} className="space-y-4">
              <label className="block text-sm font-medium text-green-900" htmlFor="name">Name</label>
              <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} 
                className="mt-1 block w-full border border-green-700 rounded-md shadow-sm p-2" required />
              
              <label className="block text-sm font-medium text-green-900" htmlFor="email">Email</label>
              <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} 
                className="mt-1 block w-full border border-green-700 rounded-md shadow-sm p-2" required />
              
              <label className="block text-sm font-medium text-green-900" htmlFor="phone">Phone</label>
              <input type="tel" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} 
                className="mt-1 block w-full border border-green-700 rounded-md shadow-sm p-2" required />
  
              <label className="block text-sm font-medium text-green-900" htmlFor="province">Province</label>
              <select id="province" value={province} onChange={(e) => setProvince(e.target.value)} 
                className="mt-1 block w-full border border-green-700 rounded-md shadow-sm p-2" required>
                  <option value="disabled">Select a province</option> 
                  <option value="Noord-Holland">Noord-Holland</option>
                  <option value="Zuid-Holland">Zuid-Holland</option>
                  <option value="Zeeland">Zeeland</option>
                  <option value="Noord-Brabant">Noord-Brabant</option>
                  <option value="Limburg">Limburg</option>
                  <option value="Utrecht">Utrecht</option>
                  <option value="Gelderland">Gelderland</option>
                  <option value="Flevoland">Flevoland</option>
                  <option value="Overijssel">Overijssel</option>
                  <option value="Drenthe">Drenthe</option>
                  <option value="Friesland">Friesland</option>
                  <option value="Groningen">Groningen</option>
              </select>

              <label className="block text-sm font-medium text-green-900" htmlFor="field">Field</label>
              <select id="field" value={field} onChange={(e) => setField(e.target.value)} 
                className="mt-1 block w-full border border-green-700 rounded-md shadow-sm p-2" required>
                  <option value="disabled">Select a field to which you want to become a partner to Help</option> 
                  <option value="Elderly Care">Elderly Care</option>
                  <option value="Suicide Prevention Center">Suicide Prevention Center</option>
                  <option value="Abuse Care">Abuse Care</option>
                  <option value="Chat-Help">Chat-Help</option>
                  <option value="Nursing Care for the Helpless">Nursing Care for the  Helpless</option>

              </select>
         
              <div>
                <button type="submit" className="w-full inline-flex justify-center mt-8 px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-900 hover:bg-green-950">
                  Submit
                </button>
              </div>
            </form>
          </div>
                
              

 
          
        </div>
      </div>
    );
  }
    

export default BecomeaHelpPartner