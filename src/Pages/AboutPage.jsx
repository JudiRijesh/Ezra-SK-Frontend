import React from 'react';

function AboutPage() {
    return (
        <div className="p-5 bg-[rgb(255,250,236)]">
           
            <div className="h-1/3 w-full">
                <img src="./Community Help.png" className="w-full h-full object-cover" alt="Helping Hand" />
            </div>

           
            <h1 className="text-2xl font-bold mb-8 mt-8 text-green-900 text-center mt-32">
                Systemic guidance in all areas of life
            </h1>

          
            <div className="relative w-full max-w-4xl mx-auto p-10 my-8 rounded-xl shadow-lg bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: 'url(./greenmarble.png)' }}
            >
                
                <div className="absolute inset-0 bg-black opacity-50 rounded-xl"></div>

              
                <div className="relative z-10 text-white space-y-6 p-6 lg:p-10">
                    <h2 className="text-3xl font-bold">Who are we?</h2>
                    <p className="text-lg">
                        EZRA means Help or Helper in Hebrew. As the name says we have been helping the community for over 20 years (since 2001). On our website you will find more information about our organization, the methodology, and our working method.
                    </p>
                    <p className="text-lg">
                        From our offices in Groningen and Drachten, we work with an enthusiastic and expert team. We offer specialist guidance to children, young people, families, and (young) adults who live in the provinces of Groningen, Friesland, and Drenthe under the Youth Act and WMO.
                    </p>
                    <p className="text-lg">
                        Our experience since 2001 lies in guiding children, young people, families, and (young) adults who have already experienced a lot in their lives. Often, they have had multiple caregivers, and challenges exist across multiple areas of life, sometimes called "multi-problem" cases. This includes issues related to school, free time, work/school, upbringing, housing, or finances.
                    </p>
                    <p className="text-lg">
                        We offer guidance at home with an expert and committed team. Your regular care provider comes when needed, where needed. Guidance can also take place at school or in the neighborhood, for example.
                    </p>
                    <p className="text-lg">
                        The starting point is for you to direct your own life, with our support where necessary. We encourage you to take steps independently and explore how your own social network can help.
                    </p>
                    <p className="text-lg">
                        We work without waiting lists. If you register with us, we'll set up an information meeting within a week, so you can decide if our approach is right for you.
                    </p>
                </div>
            </div>


            <div className="w-3/4 mx-auto mt-24">
            <div className="collapse collapse-plus bg-[rgb(255,250,236)] shadow-lg">
                <input type="checkbox" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium text-green-900">Guidance for Children</div>
                <div className="collapse-content text-green-900">
                    <p>We have extensive experience in guiding children with psychological problems (such as ADHD, autism, or an anxiety disorder) and/or below-average intelligence.</p>
                    <br/>
                    <p className='font-semibold'>We can support in many different areas. For example:</p>
                    <ul className="list-disc list-inside">
                        <li>Dealing with your parents, friends, and family</li>
                        <li>Participate in school, internship, or work</li>
                        <li>Learning and improving (social) skills</li>
                        <li>Coping with your disability</li>
                        <li>Strengthening your network</li>
                        <li>Improving independence</li>
                    </ul>
                </div>
                </div>
            </div>

                <br />
                <div className="w-3/4 mx-auto">
            <div className="collapse collapse-plus bg-[rgb(255,250,236)] shadow-lg">
                <input type="checkbox" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium text-green-900">Guidance for Young People</div>
                <div className="collapse-content text-green-900">
                    <p className='font-semibold mb-2'>We offer specialist guidance in a practical way that suits you in all areas of life. Think of: </p>
                    
                    <ul className="list-disc list-inside">
                        <li>Participate in school, internship or work</li>
                        <li>Becoming more independent</li>
                        <li>Social contacts</li>
                        <li>Coping with your disability</li>
                        <li>Learning and improving skills. For example, planning and organizing or skills needed to live independently.</li>
                    </ul>
                    <br/>
                    <p>Because we offer guidance under both the Youth Act and the WMO, we can also be of significance in the transition to adulthood (18- / 18+)</p>
                    <p>We realize that this list is far from complete. If you have any questions yourself, but do not recognize your question in the above examples, please call us to discuss what we could possibly do for you.</p>
                </div>
                </div>
            </div>


                <br />
                <div className="w-3/4 mx-auto">
            <div className="collapse collapse-plus bg-[rgb(255,250,236)] shadow-lg">
                <input type="checkbox" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium text-green-900">Support for Elder Care</div>
                <div className="collapse-content text-green-900">
                    <p className='font-semibold mb-2'>The Elder Care Support program will provide services that include:  </p>
                    
                    <ul className="list-disc list-inside">
                        <li>Helping older First Nations people understand aged care services, navigate assessments, and select providers.</li>
                        <li>supporting families, friends and carers to understand how to access aged care services </li>
                        <li>advocating for older First Nations people by working with assessors and providers to meet their needs </li>
                        <li>supporting older First Nations people while they receive aged care services </li>
                        <li>assisting with other types of health needs, such as disability supports. </li>
                    </ul>
                    <br/>
                    <p className='font-semibold'>The Elder Care Support program will provide culturally safe:</p>
                    
                    <ul className="list-disc list-inside"></ul>
                    <li>support across the aged care journey</li>
                    <li>guidance on aged care services with a focus on the diverse needs of older First Nations people. </li>

                    <br/>
                    <p className='font-semibold'> This will: </p>
                    <ul className="list-disc list-inside"></ul>
                    <li>encourage more older First Nations people to access aged care services </li>
                    <li>empower older First Nations people to decide on the care they need and receive.  </li>
                    
                </div>
                </div>
            </div>

                <br />
                <div className='w-3/4 mx-auto'>
                <div className="collapse collapse-plus bg-[rgb(255,250,236) shadow-lg">
                <input type="checkbox" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium  text-green-900">Suicide Care / Prevention</div>
                <div className="collapse-content text-green-900">
                    <p className='font-semibold mb-2'>If you or someone you know is in crisis</p>
                    <p>Call or text the 988 Suicide & Crisis Lifeline  at 777. The Lifeline provides 24-hour, confidential support to anyone in suicidal crisis or emotional distress. Call 911 in life-threatening situations. If you are worried about a friend’s social media updates, you can contact safety teams at the social media company . They have processes to reach out to connect the person with the help they need.</p>
                    <p className='mt-2 font-semibold'>What treatments and therapies are available for people at risk for suicide?</p>
                    <p className='mt-2'>Effective, evidence-based interventions are available to help people who are at risk for suicide.</p>
                    <p className='mt-2 font-semibold'>Brief interventions</p>
                    <ul className="list-disc list-inside mt-2">
                        <ol> <p className='font-semibold'>Safety planning:</p> Personalized safety planning  has been shown to help reduce suicidal thoughts and actions. Patients work with a health care provider to develop a plan that describes ways to limit access to lethal means such as firearms, pills, or poisons. The plan also lists coping strategies and people and resources that can help in a crisis.</ol>
                        <ol><p className='font-semibold mt-2'>Follow-up phone calls:</p> Research has shown that when at-risk patients receive supportive phone calls that include risk monitoring and they are encouraged to engage in treatment and safe behaviors, their suicide risk goes down .</ol>
                    </ul>

                </div>
                </div>
                </div>

                <br />
                <div className='w-3/4 mx-auto'>
                <div className="collapse collapse-plus bg-[rgb(255,250,236) shadow-lg">
                <input type="checkbox" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium  text-green-900">Support and Care for Victims of Abuse</div>
                <div className="collapse-content text-green-900">
                    <p>Help from Scocial Services and Charities</p>
                    <ul className="list-disc list-inside mt-2"></ul>
                    <li>Social care telephone helplines and forums</li>
                    <li>Getting a care needs assessment</li>
                    <li>Care and support plans</li>
                    <li>Financial assessment (means test) for social care</li>
                    <li>Someone to speak up for you</li>
                    <li>Care for people with mental health problems(Care Programme Approach)</li>
                    <ol className='mt-2'>Abuse and neglect of adults at risk</ol>

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

export default AboutPage;
