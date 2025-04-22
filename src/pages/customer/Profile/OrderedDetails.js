import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios';
export const OrderedDetails = () => {
   const order_id = window.sessionStorage.getItem('OID')
   const [orderDetails,setOrderDetails]=useState([])

   useEffect(()=>{
    const fetchShop=async()=>
       {
    try{
       
          
             const res =  await axios.get(`http://localhost:4000/Customer/Order_item_History/${order_id}`)
             
             console.log(res)
             
             setOrderDetails(res.data)

             
          
 
    }
    catch(err)
    {
       console.log(err)
    }
 }
    fetchShop()
 
   
   }
   ,[])
    let  total =0;
    
    orderDetails.map((p)=>(
        total = total + p.price_history
    ));
    
    return (
        <div className='sm:ml-64  flex justify-center items-center relative h-screen rounded-lg'>
            <div className='mt-10 border-4 border-orange-400 h-full  flex flex-col w-2/3 rounded-lg'>
                <div className='flex justify-end'>
                    <Link to='/myProfile/order-history' className='bg-orange-400 rounded-bl-lg w-8 items-center flex justify-center'> <CloseIcon /></Link>
                </div>
                <div className=" flex-col justify-center items-center text-center">
                    <div className=" p-4   ">
                        <h2 className='text-3xl font-bold '>Cart List</h2>
                    </div>
                    <div className="mt-8 flex justify-between items-center p-4">
                        <div className="flex-col justify-center items-center ">
                            <h2 className='text-xl font-semibold'>Item Name</h2>
                            {
                                orderDetails.map((p)=>(
                                    <div>{p.item_name}</div>
                                  
                                ))
                             }
                          
                        </div>
                        <div className="flex-col justify-center items-center ">
                            <h2 className='text-xl font-semibold'>Quantity</h2>
                            {
                                orderDetails.map((p)=>(
                                    <div>{p.quantity}</div>
                                  
                                ))
                             }
                           
                        </div>
                        <div className="mr-12">
                            <h2 className='text-xl font-semibold'>Price</h2>
                            {
                                orderDetails.map((p)=>(
                                    
                                    <div>{p.price_history}</div>
                                  
                                ))
                             }
                        </div>
                        

                    </div>
                    <div className="flex justify-end">

                        <h2 className='text-xl font-semibold mr-28 mt-8'>Total:<span className='ml-16'>{total}</span> </h2>
                    </div>


                </div>

            </div>
        </div>
    )
}
