import React, { useEffect, useState } from 'react'
import VisibilityIcon from '@mui/icons-material/Visibility';
import {  useNavigate } from 'react-router-dom';

import axios from 'axios';
export const OrderHistory = () => {

  const [orders,setOrders]=useState([])
  const RID = JSON.parse(window.sessionStorage.getItem('ID'));
  const navigate = useNavigate()

  useEffect(()=>{
      const fetchOrders=async()=>
         {
      try{
         
           
               const res =  await axios.get(`http://localhost:4000/Customer/fetchOrders/${RID}`)
             
               setOrders(res.data)
               
               
            
   
      }
      catch(err)
      {
         console.log(err)
      }
   }
      fetchOrders()
   
     
     }
     ,[])
  



const handleOrder=(id)=>
  {
  (window.sessionStorage.setItem('OID',id))
  navigate('/myProfile/order-history/order-details')
  }

  return (
    <div className='p-4 sm:ml-64'>
      <section className='h-screen'>
        <div className='flex-col'>
          <div className='flex flex-row border-4 justify-between gap-4  mb-4 bg-orange-400 rounded-lg'>
            <div className='text-white text-lg  w-1/3  flex justify-center font-semibold'>Order Id</div>
            <div className='text-white text-lg  w-1/3 flex justify-center font-semibold'>Ordered Date</div>
            
            <div className='text-white text-lg  w-1/3 flex justify-center font-semibold'>Details</div>

          </div>
         { orders.map((item, index) => (
    <div key={index} className='flex flex-row  justify-between gap-4 h-20 shadow-lg shadow-red-1--'>
      <div className=' text-lg  w-1/3  flex justify-center font-semibold items-center'><p>{item.Order_ID}</p></div>
     
      <div className=' text-lg  w-1/3 flex justify-center font-semibold items-center'><p>{item.OrderDate.slice(0,10)}</p> </div>
    
      <div className=' text-lg  w-1/3 flex justify-center font-semibold items-center'>
        <p  onClick={()=>handleOrder(item.Order_ID)} className='bg-red-500 rounded-lg p-2 cursor-pointer text-white hover:border-4 hover:border-orange-400  '>View <span className='text-black'><VisibilityIcon /></span> </p></div>

    </div>))}
          
        </div>
        
      </section>

    </div>

  )

}
