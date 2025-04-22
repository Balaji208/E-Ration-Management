import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EditIcon from '@mui/icons-material/Edit';
import { toast } from 'react-toastify';


export const UpdateCustomer = () => {
    const [Ration_ID, setRation_ID] = useState(0);
    const [found, setFound] = useState(false);
    const [details, setDetails] = useState({});

    
    const [disabledFields, setDisabledFields] = useState(
        {
            
            First_Name: true,
            Last_Name: true,
            Gender: true,
            Age: true,
            Date_of_Birth: true,
            Address: true,
            City: true,
            Pincode: true,
            Phone_no: true,
            Family_Size: true,
            Ration_Type: true
        });
     
    const [updatedDetails, setUpdatedDetails] = useState({
  
        First_Name: '',
        Last_Name: '',
        Gender: '',
        Age: '',
        Date_of_Birth: '',
        Address: '',
        City: '',
        Pincode: '',
        Phone_no: '',
        Family_Size: '',
        Ration_Type: ''
    });
   

    const handleRequest = async () => {
        console.log(Ration_ID)
        
        const sid= JSON.parse(window.sessionStorage.getItem('Shop_id'));
        const rid = JSON.parse(Ration_ID)
        const val ={
            Shop_id :sid,
            Ration_ID : rid
           
        }
        console.log(val)
        try {
            const res = await axios.post(`http://localhost:4000/ShopManager/search/Customer`,val);
           
            if(res.data.length===0)
                {
                    toast.error('Customer not found')
                }
            else if (res.status === 200 &&res.data.length===1 ) {
               
                setDetails(res.data[0]);
                setFound(true);
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };
  useEffect(()=>{
    const RID = window.sessionStorage.getItem('RID');
   
   

    if(RID>0 )
        {
           
            const getDetails =async ()=>
                {
            try {
                const res = await axios.get(`http://localhost:4000/MyProfile/${RID}`);
                console.log(res)
                if (res.status === 200) {
                    
                    setDetails(res.data[0]);
                    setFound(true);
                    setRation_ID(res.data[0].Ration_ID)
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
            
        }
        getDetails()

        }

  },[])
   
    const handleUpdate = (field) => {
        setDisabledFields(prevState => ({
            ...prevState,
            [field]: true
        }));
        console.log(`Updated ${ field }: ${ updatedDetails[field]}`);
        const val = { [field]: updatedDetails[field] }
       
        const updateDb = async () => {
            try {
                const res = await axios.post(`http://localhost:4000/ShopManager/update/${Ration_ID}`,val)
                
                

            }
            catch (err) {

            }
        }
        updateDb()
    };

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setUpdatedDetails(prevDetails => ({
            ...prevDetails,
            [id]: value
        }));

    };

    return (
        <>
            {!found && (
               <section className='ml-72  h-screen'>
               <h1 className='text-3xl text-black text-center mt-8 font-semibold'
               style={{
                background: 'radial-gradient(circle at 10% 20%, rgb(64, 84, 178) 0%, rgb(219, 2, 234) 90%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text', // For non-webkit browsers that support the property
                textFillColor: 'transparent' // For non-webkit browsers that support the property
            }}
               >Update Customer Details</h1>
               <div className="flex  flex-col gap-4 justify-center items-center  ">
                   <div className='bg-background-gradient mt-20 flex flex-col gap-4 border-2 p-8 border-black   rounded-lg shadow-lg shadow-black'
                   >
                       <div className='text-lg text-black text-center'>
                           Enter Customer's Ration ID   

                       </div>
                       <div className='text-center'>
                           <input type="number" onChange={(e) => setRation_ID((e.target.value))} className='text-end border-1 border-gray-300  bg-gray-300 focus:shadow-lg focus:shadow-' />
                       </div>
                       <div className='text-center'>
                           <button onClick={handleRequest} className='bg-orange-300 p-2 rounded-lg text-white font-semibold' >Search</button>
                       </div>
                   </div>
                   <div>
                   
                   </div>
                   
               </div>
           </section>
            )}


            {found && (

                <section className='ml-72 border-l-4 h-screen'>

                    <div className='flex flex-col justify-center'>
                        <div>
                            <h1 className='text-4xl mt-4 text-black text-center font-bold '
                            style={{
                                background: 'radial-gradient(circle at 10% 20%, rgb(64, 84, 178) 0%, rgb(219, 2, 234) 90%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text', // For non-webkit browsers that support the property
                                textFillColor: 'transparent' // For non-webkit browsers that support the property
                            }}
                            >Customer Details</h1>
                            <div className='text-center justify-center font-semibold flex flex-row' >
                                <div className='text-xl mt-2 text-center '>Ration Id  :   </div>
                                <div className=' text-xl mt-2 text-center ' >{Ration_ID}</div>
                            </div>
                        </div>

                        <div className='flex flex-col justify-center '>

                            <div className='flex flex-col ml-4'>
                                <div className=''
                                
                                
                                >
                                    <p className='ml-4 font-semibold text-purple-600 text-2xl'
                                   
                                    >First Name</p></div>
                                <div className='ml-4 mt-2 w-full flex flex-row'>
                                    <input type='text'
                                        className='w-2/3 placeholder:text-black font-semibold p-1 bg-gradient2 rounded-lg'     
                                        id='First_Name'
                                        disabled={disabledFields.First_Name}
                                        placeholder={details.First_Name}
                                        onChange={handleInputChange}
                                    />
                                    <div className="cursor-pointer ml-8  rounded-sm items-center  hover:font-bold" onClick={() => setDisabledFields(prevState => ({ ...prevState, First_Name: false }))}>
                                        <EditIcon />
                                    </div>
                                    <div className='ml-8'>
                                        {!disabledFields.First_Name && <button onClick={() => handleUpdate('First_Name')} className='bg-blue-300 rounded-lg text-white p-2  hover:font-bold bg-custom-gradient ' >Update</button>}
                                    </div>


                                </div>
                            </div>

                            <div className='flex flex-col ml-4 mt-4'>
                                <div className='ml-4 font-semibold text-purple-600 text-2xl'>Last Name</div>
                                <div className='ml-4 mt-2 w-full flex flex-row'>
                                    <input type='text'
                                        className='w-2/3 placeholder:text-black font-semibold p-1 bg-gradient2 rounded-lg ' 
                                        id='Last_Name'
                                        disabled={disabledFields.Last_Name}
                                        placeholder={details.Last_Name}
                                        onChange={handleInputChange}
                                    />
                                    <div className="cursor-pointer ml-8  rounded-sm items-center  hover:font-bold" onClick={() => setDisabledFields(prevState => ({ ...prevState, Last_Name: false }))} >
                                        <EditIcon />
                                    </div>
                                    <div className='ml-8'>
                                        {!disabledFields.Last_Name && <button onClick={() => handleUpdate('Last_Name') } className='bg-blue-300 rounded-lg text-white p-2  hover:font-bold bg-custom-gradient ' >Update</button>}
                                    </div>

                                </div>
                            </div>


                            <div className='flex flex-col ml-4 mt-4'>
                                <div className='ml-4 font-semibold text-purple-600 text-2xl'>Gender</div>
                                <div className='ml-4 mt-2 w-full flex flex-row'>
                                    <input type='text'
                                        className='w-2/3 placeholder:text-black font-semibold p-1 bg-gradient2 rounded-lg'
                                        id='Gender'
                                        disabled={disabledFields.Gender}
                                        placeholder={details.Gender}
                                        onChange={handleInputChange} />
                                    <div className="cursor-pointer ml-8  rounded-sm items-center  hover:font-bold" onClick={() => setDisabledFields(prevState => ({ ...prevState, Gender: false }))}>
                                        <EditIcon />
                                    </div>
                                    <div className='ml-8'>
                                        {!disabledFields.Gender && <button onClick={() => handleUpdate('Gender')} className='bg-blue-300 rounded-lg text-white p-2  hover:font-bold bg-custom-gradient ' >Update</button>}
                                    </div>

                                </div>
                            </div>

                            {/*Age details */}
                            <div className='flex flex-col ml-4 mt-4'>
                                <div className='ml-4 font-semibold text-purple-600 text-2xl'>Age</div>
                                <div className='ml-4 mt-2 w-full flex flex-row'>
                                    <input type='text'
                                        className='w-2/3 placeholder:text-black font-semibold p-1 bg-gradient2 rounded-lg'
                                        id='Age'
                                        disabled={disabledFields.Age}
                                        placeholder={details.Age}
                                        onChange={handleInputChange} />
                                    <div className="cursor-pointer ml-8  rounded-sm items-center  hover:font-bold" onClick={() => setDisabledFields(prevState => ({ ...prevState, Age: false }))}>
                                        <EditIcon />
                                    </div>
                                    <div className='ml-8'>
                                        {!disabledFields.Age && <button onClick={() => handleUpdate('Age')} className='bg-blue-300 rounded-lg text-white p-2  hover:font-bold bg-custom-gradient ' >Update</button>}
                                    </div>

                                </div>
                            </div>

                            {/*DOB details */}
                            <div className='flex flex-col ml-4 mt-4'>
                                <div className='ml-4 font-semibold text-purple-600 text-2xl'>Date of Birth</div>
                                <div className='ml-4 mt-2 w-full flex flex-row'>
                                    <input type='text'
                                        className='w-2/3 placeholder:text-black font-semibold p-1 bg-gradient2 rounded-lg'
                                        id='Date_of_Birth'
                                        disabled={disabledFields.Date_of_Birth}
                                        placeholder={details.Date_of_Birth.slice(0,10)}
                                        onChange={handleInputChange} />
                                    <div className="cursor-pointer ml-8  rounded-sm items-center  hover:font-bold" onClick={() => setDisabledFields(prevState => ({ ...prevState, Date_of_Birth: false }))}>
                                        <EditIcon />
                                    </div>
                                    <div className='ml-8'>
                                        {!disabledFields.Date_of_Birth && <button onClick={() => handleUpdate('Date_of_Birth')} className='bg-blue-300 rounded-lg text-white p-2  hover:font-bold bg-custom-gradient ' >Update</button>}
                                    </div>

                                </div>
                            </div>

                            {/*Address details */}
                            <div className='flex flex-col ml-4 mt-4'>
                                <div className='ml-4 font-semibold text-purple-600 text-2xl'>Address</div>
                                <div className='ml-4 mt-2 w-full flex flex-row'>
                                    <input type='text'
                                        className='w-2/3 placeholder:text-black font-semibold p-1 bg-gradient2 rounded-lg'
                                        id='Address'
                                        disabled={disabledFields.Address}
                                        placeholder={details.Address}
                                        onChange={handleInputChange} />
                                    <div className="cursor-pointer ml-8  rounded-sm items-center  hover:font-bold" onClick={() => setDisabledFields(prevState => ({ ...prevState, Address: false }))}>
                                        <EditIcon />
                                    </div>
                                    <div className='ml-8'>
                                        {!disabledFields.Address && <button onClick={() => handleUpdate('Address')} className='bg-blue-300 rounded-lg text-white p-2  hover:font-bold bg-custom-gradient ' >Update</button>}
                                    </div>

                                </div>
                            </div>

                            {/*City details */}
                            <div className='flex flex-col ml-4 mt-4'>
                                <div className='ml-4 font-semibold text-purple-600 text-2xl'>City</div>
                                <div className='ml-4 mt-2 w-full flex flex-row'>
                                    <input type='text'
                                        className='w-2/3 placeholder:text-black font-semibold p-1 bg-gradient2 rounded-lg'
                                        id='City'
                                        disabled={disabledFields.City}
                                        placeholder={details.City}
                                        onChange={handleInputChange} />
                                    <div className="cursor-pointer ml-8  rounded-sm items-center  hover:font-bold" onClick={() => setDisabledFields(prevState => ({ ...prevState, City: false }))}>
                                        <EditIcon />
                                    </div>
                                    <div className='ml-8'>
                                        {!disabledFields.City && <button onClick={() => handleUpdate('City')} className='bg-blue-300 rounded-lg text-white p-2  hover:font-bold bg-custom-gradient ' >Update</button>}
                                    </div>

                                </div>
                            </div>
                            {/*Pincode details */}
                            <div className='flex flex-col ml-4 mt-4'>
                                <div className='ml-4 font-semibold text-purple-600 text-2xl'>Pincode</div>
                                <div className='ml-4 mt-2 w-full flex flex-row'>
                                    <input type='text'
                                        className='w-2/3 placeholder:text-black font-semibold p-1 bg-gradient2 rounded-lg'
                                        id='Pincode'
                                        disabled={disabledFields.Pincode}
                                        placeholder={details.Pincode}
                                        onChange={handleInputChange} />
                                    <div className="cursor-pointer ml-8  rounded-sm items-center  hover:font-bold" onClick={() => setDisabledFields(prevState => ({ ...prevState, Pincode: false }))}>
                                        <EditIcon />
                                    </div>
                                    <div className='ml-8'>
                                        {!disabledFields.Pincode&& <button onClick={() => handleUpdate('Pincode')} className='bg-blue-300 rounded-lg text-white p-2  hover:font-bold bg-custom-gradient ' >Update</button>}
                                    </div>

                                </div>
                            </div>

                            {/*Phone no details */}
                            <div className='flex flex-col ml-4 mt-4'>
                                <div className='ml-4 font-semibold text-purple-600 text-2xl'>Phone Number</div>
                                <div className='ml-4 mt-2 w-full flex flex-row'>
                                    <input type='text'
                                        className='w-2/3 placeholder:text-black font-semibold p-1 bg-gradient2 rounded-lg'
                                        id='Phone_no'
                                        disabled={disabledFields.Phone_no}
                                        placeholder={details.Phone_no}
                                        onChange={handleInputChange} />
                                    <div className="cursor-pointer ml-8  rounded-sm items-center  hover:font-bold" onClick={() => setDisabledFields(prevState => ({ ...prevState, Phone_no: false }))}>
                                        <EditIcon />
                                    </div>
                                    <div className='ml-8'>
                                        {!disabledFields.Phone_no && <button onClick={() => handleUpdate('Phone_no')} className='bg-blue-300 rounded-lg text-white p-2  hover:font-bold bg-custom-gradient ' >Update</button>}
                                    </div>

                                </div>
                            </div>

                            {/*Family size details */}
                            <div className='flex flex-col ml-4 mt-4'>
                                <div className='ml-4 font-semibold text-purple-600 text-2xl'>Family size</div>
                                <div className='ml-4 mt-2 w-full flex flex-row'>
                                    <input type='text'
                                        className='w-2/3 placeholder:text-black font-semibold p-1 bg-gradient2 rounded-lg'
                                        id='Family_Size'
                                        disabled={disabledFields.Family_Size}
                                        placeholder={details.Family_Size}
                                        onChange={handleInputChange} />
                                    <div className="cursor-pointer ml-8  rounded-sm items-center  hover:font-bold" onClick={() => setDisabledFields(prevState => ({ ...prevState, Family_Size: false }))}>
                                        <EditIcon />
                                    </div>
                                    <div className='ml-8'>
                                        {!disabledFields.Family_Size && <button onClick={() => handleUpdate('Family_Size')} className='bg-blue-300 rounded-lg text-white p-2  hover:font-bold bg-custom-gradient ' >Update</button>}
                                    </div>

                                </div>
                            </div>

                            {/*Ration type details */}
                            <div className='flex flex-col ml-4 mt-4'>
                                <div className='ml-4 font-semibold text-purple-600 text-2xl'>Ration type</div>
                                <div className='ml-4 mt-2 w-full flex flex-row'>
                                    <input type='text'
                                        className='w-2/3 placeholder:text-black font-semibold p-1 bg-gradient2 rounded-lg'
                                        id='Ration_Type'
                                        disabled={disabledFields.Ration_Type}
                                        placeholder={details.Ration_Type}
                                        onChange={handleInputChange} />
                                    <div className="cursor-pointer ml-8  rounded-sm items-center  hover:font-bold" onClick={() => setDisabledFields(prevState => ({ ...prevState, Ration_Type: false }))}>
                                        <EditIcon />
                                    </div>
                                    <div className='ml-8'>
                                        {!disabledFields.Ration_Type && <button onClick={() => handleUpdate('Ration_Type')} className='bg-blue-300 rounded-lg text-white p-2  hover:font-bold bg-custom-gradient ' >Update</button>}
                                    </div>

                                </div>
                            </div>




                        </div>
                    </div>
                </section>
            )}
        </>
    );
};