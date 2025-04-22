import React, { useEffect, useState } from 'react';

import axios from "axios";
import { Link, useLocation, useNavigate } from 'react-router-dom';
export const Dashboard = () => {
    const [selectedType, setSelectedType] = useState('All');
    const [allCustomers, setAllCutsomers] = useState([]);
    const [allCount, setAllCount] = useState(0);
    const [orderBy, setorderBy] = useState('Asc')
    const [icon, setIcon] = useState('up')
    const navigate = useNavigate()

    const x = useLocation()
    window.sessionStorage.setItem('key', JSON.stringify(x.key));
    window.sessionStorage.setItem('RID', JSON.stringify(0));
    const shop = window.sessionStorage.getItem('Shop_id')

    useEffect(() => {

        const handleAllCustomers = async () => {
            const val = {
                Shop_id: shop,
                Ration_Type: selectedType
            }

            try {
                const { data } = await axios.post(`http://localhost:4000/ShopManager/AllCustomers`, val)
                setAllCutsomers(data)
                console.log(selectedType)

            }
            catch (err) {


            }
        }
        handleAllCustomers()




    }, [selectedType, shop])

    useEffect(() => {

        const handleAllCustomersCount = async () => {
            const val = {
                Shop_id: shop,
                Ration_Type: selectedType
            }

            try {
                const { data } = await axios.post(`http://localhost:4000/ShopManager/AllCustomersCount`, val)
                setAllCount(data[0].count)
                console.log(data)

            }
            catch (err) {


            }
        }
        handleAllCustomersCount()




    }, [selectedType, shop])
    console.log(allCount)

    const handleSelectChange = (event) => {
        setSelectedType(event.target.value);

    };

    const handleUpdate = (val) => {
        window.sessionStorage.setItem('RID', val);
        navigate('/ShopManager/update')


    }



    const handleSort = async () => {
        if (icon === 'up') {
            setIcon('up-alt')
            setorderBy('ASC')
            try {
                const { data } = await axios.get(`http://localhost:4000/ShopManager/AllCustomer/sort/${orderBy}`)
                setAllCutsomers(data)


            }
            catch (err) {

                console.log(err)
            }
        }
        else {
            setIcon('up')
            setorderBy('DESC')
            try {
                const { data } = await axios.get(`http://localhost:4000/ShopManager/AllCustomer/sort/${orderBy}`)
                setAllCutsomers(data)
                console.log()

            }
            catch (err) {

                console.log(err)
            }
        }
    }


    return (
        <>
            <section className='ml-76 h-full bg-gradient2'>


                <h2 className='font-bold text-center text-5xl mr-8 py-2 ' style={{
                    background: 'radial-gradient(circle at 10% 20%, rgb(64, 84, 178) 0%, rgb(219, 2, 234) 90%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text', // For non-webkit browsers that support the property
                    textFillColor: 'transparent' // For non-webkit browsers that support the property
                }}>Dashboard</h2>
                <div className="w-full h-full felx-col">
                    <div className="flex justify-around mt-16">
                        <div className="border rounded-lg flex w-80 p-4  border-black h-20 bg-white">

                            <div className="flex ">
                                <h2 className='font-semibold text-lg '>Total Customers ({selectedType}):  </h2>
                                <p className='ml-8 text-2xl'>{allCount}</p>
                            </div>
                        </div>
                        <div className="flex-col">

                            <div >
                                <form class="w-72 h-24  mx-auto">
                                    <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 ">Select an option</label>
                                    <select id="countries"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 "
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                                        value={selectedType}
                                        onChange={handleSelectChange}>
                                        <option value='All'>All</option>
                                        <option value="PHH">PHH</option>
                                        <option value="PHH-AYY">PHH-AYY</option>
                                        <option value="NPHH">NPHH</option>
                                        <option value="NPHH-S">NPHH-S</option>
                                        <option value="NPHH-NC">NPHH-NC</option>
                                    </select>
                                </form>

                            </div>

                        </div>
                    </div>
                    <div className="w-full h-full flex-col mt-16    ">
                        <div className="flex justify-between">
                            <h2 className='font-semibold text-3xl'>All Customers</h2>
                            <div className="mr-12">
                                <Link to="/ShopManager/add">
                                    <button className='border border-blue-800 bg-white rounded-lg text-gradient2 p-3 text-lg hover:text-white hover:bg-custom-gradient '>Add New Customer</button>
                                </Link></div>
                        </div>


                        <div className=" mt-4 w-full shadow-lg rounded-lg border-black h-10 bg-custom-gradient flex justify-between p-2 items-center "
                        >
                            <div className="w-1/7">
                                <h2 className='font-semibold text-1xl text-white '>Ration ID</h2>
                            </div>
                            <div className="w-1/7">
                                <h2 className='font-semibold text-1xl  text-white'>Ration Type </h2>
                            </div>
                            <div className="w-1/7">
                                <h2 className='font-semibold text-1xl  text-white'>First Name<span className='cursor-pointer'
                                    onClick={handleSort}><i class={`bi bi-sort-alpha-${icon}`}></i></span></h2>
                            </div>
                            <div className="w-1/7">
                                <h2 className='font-semibold text-1xl  text-white'>Last Name</h2>
                            </div>
                            <div className="w-1/7">
                                <h2 className='font-semibold text-1xl  text-white'>Phone Number</h2>
                            </div>
                            <div className="w-1/7">
                                <h2 className='font-semibold text-1xl  text-white'>City</h2>
                            </div>
                            <div className="w-1/7">Edit</div>

                        </div>

                        {allCustomers.map((person, index) => (
                            <div key={index} className=" mt-2   w-full shadow-lg rounded-lg border-black h-10 bg-white flex justify-between items-center p-2 hover:bg-gradient2"
                            >
                                <div className="text-sm  w-1/7 text-center font-semibold ">
                                    <h2 className=''>{person.Ration_ID}</h2>
                                </div>
                                <div className="text-sm  w-1/7 font-semibold text-center">
                                    <h2 className=''>{person.Ration_Type}</h2>
                                </div>
                                <div className="text-sm  w-1/7  font-semibold text-center">
                                    <h2 className=''>{person.First_Name}</h2>
                                </div>
                                <div className="text-sm  w-1/7 flex justify-center font-semibold items-center">
                                    <h2 className=''>{person.Last_Name}</h2>
                                </div>
                                <div className="text-sm  w-1/7 flex justify-center font-semibold items-center">
                                    <h2 className=''>{person.Phone_no}</h2>
                                </div>
                                <div className="text-sm  w-1/7 flex justify-center font-semibold items-center">
                                    <h2 className=''>{person.City}</h2>
                                </div>
                                <div className=" w-1/7 flex justify-center font-semibold items-center">
                                    <button ><i class="bi bi-pencil-square text-purple-500 w-8 h-8 ml-3"
                                        onClick={() => handleUpdate(person.Ration_ID)}
                                    ></i></button>
                                </div>

                            </div>
                        ))}

                    </div>

                </div>

            </section>


        </>
    )
}
