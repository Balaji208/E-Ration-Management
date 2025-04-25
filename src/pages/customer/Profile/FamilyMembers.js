import React, { useEffect, useState } from 'react'
import Img1 from '../../../assets/products/sugar.jpg'
import axios from 'axios';
export const FamilyMembers = () => {
   const RID = JSON.parse(window.sessionStorage.getItem('ID'))
    const [family,setFamily]=useState([])
 
  useEffect(()=>{
   const fetchFamily=async()=>
      {
   try{
      
            console.log(RID)
            const res =  await axios.get(`http://localhost:4000/Customer/fetchFamily/${RID}`)
            console.log(res);
          setFamily(res.data)
         

   }
   catch(err)
   {
      console.log(err)
   }
}
   fetchFamily()

  
  }
  ,[])
   // Map over the JSON data and create a div for each detail
   const detailsDivs = family.map((item, index) => (


      <div key={index} className='flex flex-col border-4 border-black p-4'>
         <div  className='flex flex-row mt-4 ml-4'>
            <div className='w-1/5 text-lg text-orange-400 justify-start font-bold ' >
               Name
            </div>
            <div className='shadow-lg shadow-gray-200  w-3/5 '>
               <p className='p-1 ml-4 font-semibold'>{item.name}</p>
            </div>
         </div>
         
         <div  className='flex flex-row mt-4 ml-4'>
            <div className='w-1/5 text-lg text-orange-400 justify-start font-bold ' >
               D.O.B
            </div>
            <div className='shadow-lg shadow-gray-200  w-3/5 '>
               <p className='p-1 ml-4 font-semibold'>{item.dateOfBirth.slice(0,10)}</p>
            </div>
         </div>
         <div  className='flex flex-row mt-4 ml-4'>
            <div className='w-1/5 text-lg text-orange-400 justify-start font-bold ' >
               Age
            </div>
            <div className='shadow-lg shadow-gray-200  w-3/5 '>
               <p className='p-1 ml-4 font-semibold'>{item.age}</p>
            </div>
         </div>
         <div  className='flex flex-row mt-4 ml-4'>
            <div className='w-1/5 text-lg text-orange-400 justify-start font-bold ' >
               Relationship
            </div>
            <div className='shadow-lg shadow-gray-200  w-3/5 '>
               <p className='p-1 ml-4 font-semibold'>{item.relationship}</p>
            </div>
         </div>
      </div>

   ));
   return (

      <div className='p-4 sm:ml-64'>
         <section className='h-screen'>
            <div className='flex  flex-col mt-4 '>
               {detailsDivs}
            </div>
         </section>
      </div>

   )
}
