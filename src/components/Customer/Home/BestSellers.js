import React from 'react'
import { motion } from 'framer-motion';

import truck from "../../../assets/delivery-truck_4947193.png";
import clock from "../../../assets/clock.png";

export const BestSellers = () => {
  return (
    <>
    <div className="mt-48  w-full h-5/6 bg-gray-100 flex flex-col justify-items items-center" id="best_Sellers">
          
          <div className="mb-12 flex flex-row justify-between">


            <motion.div
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{delay:0,duration:1.5}} 
            className="bg-white w-90 h-32 ml-12 mt-8 rounded-xl shadow-lg shadow-gray-400">
              <div className="flex justify-items align-items">
                <div className="p-5 mt-2">
                  <img src={truck} alt="" className='w-20' />
                </div>
                <div className="ml-4 mt-5 w-4/6 flex flex-col">
                  <h2 className='text-2xl'> Fast Delivery</h2>
                  <p className='mt-2 w-5/6' >Within 2-3 hours after ordering</p>
                </div>
              </div>
            </motion.div>

            <motion.div
            initial={{y:-2000}}
            animate={{y:0}}
            transition={{delay:0.2,type:'bounce',stiffness:0}}

             className="bg-white w-90 h-32 ml-12 mt-8 rounded-xl shadow-lg shadow-gray-400">
              <div className="flex justify-items align-items">
                <div className="p-5 mt-2">
                  <img src={clock} alt="" className='w-12 m-3' />
                </div>
                <div className=" mt-6 w-4/6 flex flex-col mx-6">
                  <h2 className='text-2xl'>Opening Hours</h2>
                  <p className='mt-2 w-full' >Mon-Fri 9:00am - 06:00pm</p>
                </div>
              </div>
            </motion.div>


            

            <motion.div 
            initial={{x:'200vw'}}
            animate={{x:0}}
            transition={{delay:0.5,type:"tween",stiffness:100}}
          
            className="bg-white w-auto h-32 ml-12 mt-8 rounded-xl shadow-lg shadow-gray-400"
            >
              <div className="flex justify-items align-items">
                <div className="p-5 ">
                  <img src={truck} alt="" className='w-20 m-3' />
                </div>
                <div className="ml-4 mt-4  flex flex-col">
                  <h2 className='text-2xl w-5/6'> Eco-Friendly Packaging</h2>
                  <p className='mt-2 ' >Sustainable materials</p>
                </div>
              </div>
            </motion.div>


           
            
          </div>
        </div>
    </>
  )
}
