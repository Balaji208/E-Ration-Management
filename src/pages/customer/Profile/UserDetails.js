import React from 'react'
import Img1 from '../../../assets/Customer_img.png'
import EditIcon from '@mui/icons-material/Edit';
import { useSelector } from 'react-redux';
export const UserDetails = () => {
   
      const details = useSelector( state => state.profile.Myprofile)
      
     console.log(details)
   
 
  return (
    <>
     <div class="p-4 sm:ml-64    ">
            <section id='section1' className='h-screen items-start'>
               <div className='flex  flex-row justify-center h-full  mt-4 w-full shadow-lg shadow-black-500 '>
                  <div className=' flex flex-col w-1/4 bg-white border-r-4 border-orange-100'>

                     <div className=' ml-8 w-40 mt-4 h-40 rounded-full font-center overflow-hidden  mr-5 shadow-lg  shadow-white'>
                        <img src={Img1} className='object-cover w-full h-full' ></img>
                     </div>

                     <div className="flex flex-col gap-4 p-2 mt-8 ml-4 w-44 text-gray-900 rounded-lg  bg-white  ">
                        <div className="text-center text-lg text-orange-400  font-bold">Ration ID</div>
                        <div className='text-center'><p className='text-lg font-semibold'>{details.rationId}</p></div>
                        <div className="text-center text-lg text-orange-400  font-bold">Ration Type</div>
                        <div className='justify-center items-center text-center'><p className='text-lg font-semibold'>{details.rationType}</p></div>
                     </div>

                  </div>

                  <div className='w-3/4 flex flex-col py-8'>
                     <div className='flex flex-row mt-4 ml-4'>
                        <div className='w-1/5 text-lg text-orange-400 justify-start font-bold ' >
                           Name
                        </div>
                        <div className='shadow-lg shadow-gray-200  w-3/5 '>
                           <p className='p-1 ml-4 font-semibold'>{details.firstName} {details.lastName}</p>
                        </div>
                     </div>
                     <div className='flex flex-row mt-4 ml-4'>
                        <div className='w-1/5 text-lg text-orange-400 font-bold' >
                           Gender
                        </div>
                        <div className='shadow-lg shadow-gray-200  w-3/5'>
                           <p className='p-1 ml-4 font-semibold'>{details.gender}</p>
                        </div>

                     </div>
                     <div className='flex flex-row mt-4 ml-4'>
                        <div className='w-1/5 text-lg text-orange-400 font-bold' >
                           D.O.B
                        </div>
                        <div className='shadow-lg shadow-gray-200  w-3/5'>
                           <p className='p-1 ml-4 font-semibold'>{details.dateOfBirth.slice(0,10)}</p>
                        </div>

                     </div>
                     <div className='flex flex-row mt-4 ml-4'>
                        <div className='w-1/5 text-lg text-orange-400 font-bold' >
                           Contact No
                        </div>
                        <div className='shadow-lg shadow-gray-200  w-3/5'>
                           <p className='p-1 ml-4 font-semibold'>{details.phoneNo}</p>
                        </div>

                     </div>
                     
                     <div className='flex flex-row mt-4 ml-4'>
                        <div className='w-1/5 text-lg text-orange-400 font-bold' >
                           Address
                        </div>
                        <div className='shadow-lg shadow-gray-200  w-3/5'>
                           <p className='p-1 ml-4 font-semibold'>{details.address}</p>
                        </div>

                     </div>
                     <div className='flex flex-row mt-4 ml-4'>
                        <div className='w-1/5 text-lg text-orange-400 font-bold' >
                           Pincode
                        </div>
                        <div className='shadow-lg shadow-gray-200  w-3/5'>
                           <p className='p-1 ml-4 font-semibold'>{details.pincode}</p>
                        </div>

                     </div>



                  </div>
               </div>

            </section>
            


         </div>
    </>
  )
}
