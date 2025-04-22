import React, { useState } from 'react'
import { CustomerRegister } from '../register/CustomerRegister'
import { useLocation } from 'react-router-dom';

export const AddCustomer = () => {

  
  const key = useLocation();

   const check = window.sessionStorage.getItem('key');
   if(key.key !== check )
      {
         window.sessionStorage.setItem('key',JSON.stringify(0));
         window.sessionStorage.setItem('RID',JSON.stringify(0));

      }
  return (
    <>
    <section className='ml-76 bg-gray-400 h-full'>
        <CustomerRegister/>
    </section>
    </>
  )
}
