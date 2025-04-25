import axios from 'axios';
import React, { useState } from 'react'
import { toast } from 'react-toastify';

export const CustomerRegister = () => {
    const [familySize, setFamilySize] = useState('');
    let sid=JSON.parse(window.sessionStorage.getItem('Shop_id'))
     sid = parseInt(sid)
    const [details, setDetails] = useState({
        Ration_ID:0,
        First_Name: '',
        Last_Name: '',
        Gender: '',
        Age: '',
        Date_of_Birth: '',
        Address: '',
        City: '',
        Pincode: '',
        Phone_no: '',
        Pass_word:'',
        Family_Size: '',
        Shop_id: sid,
        Ration_Type: ''
    });
    const [showAdditionalInputs, setShowAdditionalInputs] = useState(false);
    const [familyMembers, setFamilyMembers] = useState([
      
    ]);

    const handleFamilySizeChange = (event) => {
        setDetails({...details,Family_Size :  parseInt(event.target.value)})
        const size = parseInt(event.target.value);
        setFamilySize(size);
        setShowAdditionalInputs(true);
        const newFamilyMembers = Array.from({ length: size }, () => ({   Ration_ID :  details.Ration_ID,name: '', Age: 0, Date_of_Birth: '', gender: '', Relationship :'' }));
        setFamilyMembers(newFamilyMembers);
    };
   
   
   
    
    const today = new Date().toISOString().split('T')[0];
    const handleRegister= async()=>
        {
           // console.log(details)

           
            try {
                const res = await axios.post(`http://localhost:4000/ShopManager/AddCustomer`, details);
                
                console.log(details);
                const res1 = await axios.post('http://localhost:4000/ShopManager/AddFamily',familyMembers)
             
                if(res.statusText==='OK' && res1.statusText==='OK')
                    {
                        toast.success('Customer registered successfully')
                    }

            }
            catch (err) {


            }
        }
        
       
    const handleInputChange = (index, field, value) => {
        const updatedFamilyMembers = [...familyMembers];
        console.log(field,value)
        updatedFamilyMembers[index][field] = value;
        setFamilyMembers(updatedFamilyMembers);
        console.log(familyMembers)
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-background-gradient">
            <div className="justify-center min-h-screen flex flex-col items-center w-11/12 max-w-4xl p-8 rounded-xl bg-background-gradient shadow-2xl border border-gray-300">
                <h1 className="text-center font-bold text-4xl  mb-8 decoration-1 "
                 style={{
                    background: 'radial-gradient(circle at 10% 20%, rgb(64, 84, 178) 0%, rgb(219, 2, 234) 90%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text', // For non-webkit browsers that support the property
                    textFillColor: 'transparent' // For non-webkit browsers that support the property
                }}
                >Customer Register</h1>
                <div className="flex flex-col md:flex-row w-full">
                    <div className="mx-4 flex flex-col w-full md:w-1/2">
                        <label htmlFor="rationNumber" className="p-4 mx-5 mt-2 font-semibold text-purple-500">Ration Number</label>
                        <input 
                        onChange={(e)=>setDetails({...details,Ration_ID : parseInt(e.target.value)})}
                        
                        type="text" id="rationNumber" placeholder='100523A12345' className="rounded-xl mx-8 p-2 w-full bg-gray-100 focus:bg-white focus:border-blue-500 focus:outline-none transition duration-200" />
                        
                        <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 ">Select an option</label>
                                    <select id="countries"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 "
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                                        value={details.Ration_Type}
                                        onChange={(e)=>setDetails({...details,Ration_Type : e.target.value})}>
                                        
                                        <option value="PHH">PHH</option>
                                        <option value="PHH-AYY">PHH-AYY</option>
                                        <option value="NPHH">NPHH</option>
                                        <option value="NPHH-S">NPHH-S</option>
                                        <option value="NPHH-NC">NPHH-NC</option>
                                    </select>

                        <label htmlFor="firstName" className="p-4 mx-5 mt-2 font-semibold text-purple-500">First Name</label>
                        <input type="text" 
                         onChange={(e)=>setDetails({...details,First_Name : e.target.value})}
                        id="firstName" placeholder='JOHN' className="rounded-xl mx-8 p-2 w-full bg-gray-100 focus:bg-white focus:border-blue-500 focus:outline-none transition duration-200" />

                        <label htmlFor="lastName" className="p-4 mx-5 mt-2 font-semibold text-purple-500">Last Name</label>
                        <input type="text"
                         onChange={(e)=>setDetails({...details,Last_Name : e.target.value})}
                         id="lastName" placeholder='DOE' className="rounded-xl mx-8 p-2 w-full bg-gray-100 focus:bg-white focus:border-blue-500 focus:outline-none transition duration-200" />

                        <label htmlFor="gender" className="text-purple-500 p-4 mx-5 mt-2 font-semibold">Gender</label>
                        <select id="gender"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 "
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                                        value={details.Gender}
                                        onChange={(e)=>setDetails({...details,Gender : e.target.value})}>
                                        
                                        <option value="M">Male</option>
                                        <option value="F">Female</option>
                                        <option value="O">Others</option>
                                      
                                    </select>
                       
                        
                

                        <label htmlFor="phoneNumber" className="text-purple-500 p-4 mx-5 mt-2 font-semibold">Phone Number</label>
                        <input type="text"
                         onChange={(e)=>setDetails({...details,Phone_no :parseInt( e.target.value)})}
                         id="phoneNumber" placeholder='91914 59940' className="rounded-xl mx-8 p-2 w-full bg-gray-100 focus:bg-white focus:border-blue-500 focus:outline-none transition duration-200" />

                        <label htmlFor="familySize" className="text-purple-500 p-4 mx-5 mt-2 font-semibold">Family Size</label>
                        <input type="number" 
                       
                        id="familySize" placeholder='5' min='0' value={familySize} onChange={handleFamilySizeChange} className="rounded-xl mx-8 p-2 w-full bg-gray-100 focus:bg-white focus:border-blue-500 focus:outline-none transition duration-200" />
                    </div>
                    <div className="mx-4 flex flex-col w-full md:w-1/2">
                        <label htmlFor="age" className="text-purple-500 p-4 mx-5 mt-2 font-semibold">Age</label>
                        <input type="text" id="age"
                        onChange={(e)=>setDetails({...details,Age : parseInt( e.target.value)})}
                         placeholder='30' className="rounded-xl mx-8 p-2 w-full bg-gray-100 focus:bg-white focus:border-blue-500 focus:outline-none transition duration-200" />

                        <label htmlFor="dob" className="text-purple-500 p-4 mx-5 mt-2 font-semibold">Date of Birth</label>
                        <input type="date"
                                max={today}
                               
                                onChange={(e)=>setDetails({...details,Date_of_Birth : e.target.value})}
                                id="dob" placeholder='01-01-1994'
                                className="rounded-xl mx-8 p-2 w-full bg-gray-100 focus:bg-white focus:border-blue-500 focus:outline-none transition duration-200" 
                                 />
                      

                        <label htmlFor="address" className="text-purple-500 p-4 mx-5 mt-2 font-semibold">Address</label>
                        <input type="text"
                        onChange={(e)=>setDetails({...details,Address : e.target.value})}
                         id="address" className="rounded-xl mx-8 p-2 w-full bg-gray-100 focus:bg-white focus:border-blue-500 focus:outline-none transition duration-200" />

                        <label htmlFor="city" className="text-purple-500 p-4 mx-5 mt-2 font-semibold">City</label>
                        <input type="text" 
                        onChange={(e)=>setDetails({...details,City : e.target.value})}
                        id="city" placeholder='Chennai' className="rounded-xl mx-8 p-2 w-full bg-gray-100 focus:bg-white focus:border-blue-500 focus:outline-none transition duration-200" />

                        <label htmlFor="pincode" className="text-purple-500 p-4 mx-5 mt-2 font-semibold">Pincode</label>
                        <input type="text"
                        onChange={(e)=>setDetails({...details,Pincode : parseInt( e.target.value)})}
                         id="pincode" placeholder='600025' className="rounded-xl mx-8 p-2 w-full bg-gray-100 focus:bg-white focus:border-blue-500 focus:outline-none transition duration-200" />
                        {showAdditionalInputs && familyMembers.map((member, index) => (
                            <div key={index} className="flex p-5" >
                                <input type="text" placeholder={`Name ${index }`} value={member.name} onChange={(e) => handleInputChange(index, 'name', e.target.value)} className="rounded-xl mx-2 p-2 w-full bg-gray-100 focus:bg-white focus:border-blue-500 focus:outline-none transition duration-200" />
                                <input type="text" placeholder={`Age ${index} `} value={member.Age} onChange={(e) => handleInputChange(index, 'Age', parseInt(e.target.value))} className="rounded-xl mx-2 p-2 w-full bg-gray-100 focus:bg-white focus:border-blue-500 focus:outline-none transition duration-200" />
                                <input type="date" placeholder={`DOB ${index} `} value={member.Date_of_Birth} onChange={(e) => handleInputChange(index, 'Date_of_Birth', e.target.value)} className="rounded-xl mx-2 p-2 w-full bg-gray-100 focus:bg-white focus:border-blue-500 focus:outline-none transition duration-200" />
                                <input type="text" placeholder={`Gender ${index} `} value={member.gender} onChange={(e) => handleInputChange(index, 'gender', e.target.value)} className="rounded-xl mx-2 p-2 w-full bg-gray-100 focus:bg-white focus:border-blue-500 focus:outline-none transition duration-200" />
                                <input type="text" placeholder={`Gender ${index} `} value={member.Relationship} onChange={(e) => handleInputChange(index, 'Relationship', e.target.value)} className="rounded-xl mx-2 p-2 w-full bg-gray-100 focus:bg-white focus:border-blue-500 focus:outline-none transition duration-200" />
                            </div>
                        ))}
                        <label htmlFor="firstName" className="p-4 mx-5 mt-2 font-semibold text-purple-500">Set your password</label>
                        <input type="text" 
                         onChange={(e)=>setDetails({...details,Pass_word : e.target.value})}
                        id="firstName" placeholder='password' className="rounded-xl mx-8 p-2 w-full bg-gray-100 focus:bg-white focus:border-blue-500 focus:outline-none transition duration-200" />
                    </div>
                </div>
                <button onClick={handleRegister} className=" bg-custom-gradient hover:bg-purple-900  mt-8 rounded-xl  text-white text-xl py-2 px-8 transition duration-200">
                    Register
                </button>
            </div>
        </div>
    );
}