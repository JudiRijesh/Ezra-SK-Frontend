import React, { useState } from 'react'; 

function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState(""); 
  const [phone, setPhone] = useState("");
  const [province, setProvince] = useState("");
  const [organisation, setOrganisation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); 
    console.log({ name, email, phone, province, organisation });
  };

  return (
    <div className="p-5 bg-[rgb(255,250,236)]">
      <div className="h-1/3 w-full">
        <img src="./helpinghand.png" className="w-full h-full object-cover" alt="Helping Hand" /> 
      </div>

      <div className="flex mt-5 space-x-4">
       
        <div className="w-2/3">
          <h1 className="text-2xl font-bold mb-8 mt-8 text-green-900">
            Register your interest below in becoming a Ezra Partner for HELP
          </h1>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <label className="block text-sm font-medium text-green-900" htmlFor="name">Name</label>
            <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} 
              className="mt-1 block w-1/2 border border-green-700 rounded-md shadow-sm p-2" required />
            
            <label className="block text-sm font-medium text-green-900" htmlFor="email">Email</label>
            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} 
              className="mt-1 block w-1/2 border border-green-700 rounded-md shadow-sm p-2" required />
            
            <label className="block text-sm font-medium text-green-900" htmlFor="phone">Phone</label>
            <input type="tel" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} 
              className="mt-1 block w-1/2 border border-green-700 rounded-md shadow-sm p-2" required />

            <label className="block text-sm font-medium text-green-900" htmlFor="province">Province</label>
            <select id="province" value={province} onChange={(e) => setProvince(e.target.value)} 
              className="mt-1 block w-1/2 border border-green-700 rounded-md shadow-sm p-2" required>
                <option value="" disabled>Select a province</option> 
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

            <label className="block text-sm font-medium text-green-900" htmlFor="organisation">Organisation</label>
            <input type="text" id="organisation" value={organisation} onChange={(e) => setOrganisation(e.target.value)} 
              className="mt-1 block w-1/2 border border-green-700 rounded-md shadow-sm p-2" required />

            <div>
              <button type="submit" className="w-1/2 inline-flex justify-center mt-8 px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-900 hover:bg-green-950">
                Submit
              </button>
            </div>
          </form>
        </div>

        
        <div className="w-1/3 mt-32">
          <div className="p-5 border border-green-700 rounded-md shadow-sm bg-white">
            <h2 className="text-xl font-semibold text-green-900 mt-2">Contact Information</h2>
            <p className="mt-4 text-green-800 pl-2">Phone: (123) 456-7890</p>
            <p className="text-green-800 mt-2 pl-2">Email: contact@ezrahelp.com</p>
            <p className="text-green-800 mt-2 pl-2">Address: 1234 Help Street, Noord-Holland, NL</p>
            <br></br>
            <br></br>
            <p className="mt-10 text-green-800">Working Hours:</p>
            <ul className="list-disc ml-5 text-green-800 mt-8">
              <li>Monday - Friday: 9am - 6pm</li>
              <li>Saturday: 10am - 4pm</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
