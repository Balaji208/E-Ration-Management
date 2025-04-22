import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios';
export const ShopDetails = () => {
  const [shop,setShop]=useState([])
  const [manager, setManager] =useState([])
  const SID = JSON.parse(window.sessionStorage.getItem('Shop_Id_Customer'));
  

  useEffect(()=>{
    const fetchShop=async()=>
       {
    try{
       
          
             const res =  await axios.get(`http://localhost:4000/Customer/fetchShop/${SID}`)
             
             setShop(res.data[0])

             const MID = res.data[0].mgr_id;
             const res1=await axios.get(`http://localhost:4000/Customer/fetchManager/${MID}`);
          
             setManager(res1.data[0])
          
 
    }
    catch(err)
    {
       console.log(err)
    }
 }
    fetchShop()
 
   
   }
   ,[])

  return (
    <div className='p-4 sm:ml-64'>
      <section className='h-screen'>
        <div className='flex-col gap-8 h-full mt-4'>
          <div className='w-full flex-col  border-orange-400 h-1/2 '>
            <div className='justify-centee text-center '>
              <p className='bg-orange-400 text-white font-semibold'>SHOP DETAILS
              </p>
            </div>
            <div className='flex flex-col  p-4'>
              <div className='flex flex-row mt-4 ml-4'>
                <div className='w-1/5 text-lg text-red-600 justify-start font-bold ' >
                  Shop id
                </div>
                <div className='shadow-lg shadow-gray-200  w-3/5 '>
                  <p className='p-1 ml-4 font-semibold'>{shop.Shop_id}</p>
                </div>
              </div>
              <div className='flex flex-row mt-4 ml-4'>
                <div className='w-1/5 text-lg text-red-600 justify-start font-bold ' >
                  Address
                </div>
                <div className='shadow-lg shadow-gray-200  w-3/5 '>
                  <p className='p-1 ml-4 font-semibold '>{shop.address}</p>
                </div>
              </div>
              <div className='flex flex-row mt-4 ml-4'>
                <div className='w-1/5 text-lg text-red-600 justify-start font-bold ' >
                  City
                </div>
                <div className='shadow-lg shadow-gray-200  w-3/5 '>
                  <p className='p-1 ml-4 font-semibold'>{shop.city }</p>
                </div>
              </div>
              <div className='flex flex-row mt-4 ml-4'>
                <div className='w-1/5 text-lg text-red-600 justify-start font-bold ' >
                  Pincode
                </div>
                <div className='shadow-lg shadow-gray-200  w-3/5 '>
                  <p className='p-1 ml-4 font-semibold'>{shop.pincode }</p>
                </div>
              </div>
            </div>
          </div>
          <div className='w-full flex-col border-b-4 border-orange-400 h-1/2 '>
            <div className='justify-centee text-center '>
              <p className='bg-orange-400 text-white font-semibold'>SHOP MANAGER DETAILS
              </p>
            </div>
            <div className='flex flex-col  p-4'>
              <div className='flex flex-row mt-4 ml-4'>
                <div className='w-1/5 text-lg text-red-600 justify-start font-bold ' >
                  Manager Id
                </div>
                <div className='shadow-lg shadow-gray-200  w-3/5 '>
                  <p className='p-1 ml-4 font-semibold'>{shop.mgr_id}</p>
                </div>
              </div>
              <div className='flex flex-row mt-4 ml-4'>
                <div className='w-1/5 text-lg text-red-600 justify-start font-bold ' >
                  Name
                </div>
                <div className='shadow-lg shadow-gray-200  w-3/5 '>
                  <p className='p-1 ml-4 font-semibold'>{manager.fname}</p>
                </div>
              </div>
              <div className='flex flex-row mt-4 ml-4'>
                <div className='w-1/5 text-lg text-red-600 justify-start font-bold ' >
                  Contact No
                </div>
                <div className='shadow-lg shadow-gray-200  w-3/5 '>
                  <p className='p-1 ml-4 font-semibold'>{manager.phone_no}</p>
                </div>
              </div>
              
              
            </div>
          </div>
        </div>


      </section>

    </div>
  )
}
