import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
export const OrderSuccess = () => {
  const orderID = useSelector((state)=> state.cartState.deliveryInfo.Order_ID)
 
  
  return (
    <>
    <section className="text-xl text-center max-w-4xl mx-auto my-10 py-5 text-black bg-orange-200 border border-slate-800 rounded">
          <div className="my-5">
              <p className="bi bi-check-circle text-green-600 text-7xl mb-5"></p>
              <p>Thank you  for order!</p>
              <p>Your Order ID:{orderID} </p>          
          </div>
          <div className="my-5">
              <p>Your order is confirmed.</p>
             
              <p className="my-5">Payment ID: xyz_123456789</p>
          </div>
          <Link to="/" type="button" className="text-white bg-blue-700 hover:bg-blue-800 rounded-lg text-lg px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none">Continue Shopping <i className="ml-2 bi bi-cart"></i></Link>
      </section></>
  )
}
