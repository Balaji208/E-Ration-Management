import React ,{useState,useEffect} from 'react'
import { motion } from 'framer-motion';
import { NavLink,Link, Outlet, useNavigate } from 'react-router-dom';
import { UserDetails } from './UserDetails';
import Img1 from '../../../assets/products/sugar.jpg'
import { toast } from 'react-toastify';
export const CustomerDetails = () => {
   
      const[change, setChange] = useState(null);
      const[count,setCount]=useState(3);
      const navigate = useNavigate()
      useEffect(() => {
         if (change === null) {
           setChange('cardDetails');
         }
       }, [change]);
       const Set=()=>{
         setCount(0);
         setChange('inbox');
       }
       const handleLogout=()=>
         {
           sessionStorage.removeItem('ID')
           sessionStorage.removeItem('Shop_Id_Customer')
           sessionStorage.removeItem('OID')
           sessionStorage.removeItem('Family_Size_Customer')
           navigate('/')
           toast.success('Logged out successfully')
         }
   return (
      <>

         <aside id="default-sidebar" class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
            <div class="h-full px-3 py-4 overflow-y-auto bg-white-300 dark:bg-gray-800 shadow-black-600 shadow-lg ">
               <ul class="space-y-2 font-medium">
                  <li className='mt-4 shadow-lg rounded-lg'  onClick={()=>setChange('cardDetails')}>
                  <Link href="#" to="/myProfile/userDetail"  className={`flex items-center p-2   rounded-lg dark:text-white hover:bg-orange-400 hover:text-white  ${change==='cardDetails'?'bg-orange-400 text-white':''} `}  >

                        <span class="ms-3  "  >Card Details</span>
                     </Link>
                  </li>
                  <li className='mt-4 shadow-lg rounded-lg' onClick={()=>setChange('family')}>


                     <Link href="#"  to="/myProfile/family-members" class={`flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-orange-400 hover:text-white ${change==='family'?'bg-orange-400 text-white':''} `}>

                        <span class="flex-1 ms-3 whitespace-nowrap  ">Family Members</span>
                     </Link>
                  </li>
                  <li className='mt-4 shadow-lg rounded-lg'  onClick={()=>setChange('shopDetails')}>
                     <Link href="#" to="/myProfile/shop-details" class={  `flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-orange-400 hover:text-white ${change==='shopDetails'?'bg-orange-400 text-white':''}`}>

                        <span class="flex-1 ms-3 whitespace-nowrap">Shop Details</span>

                     </Link>
                  </li>
                  <li className='mt-4 shadow-lg rounded-lg' onClick={()=>setChange('history')}>
                     <Link href="#" to="/myProfile/order-history" class={`flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-orange-400 hover:text-white ${change==='history'?'bg-orange-400 text-white':''}`}>

                        <span class="flex-1 ms-3 whitespace-nowrap">Order History</span>
                        
                     </Link>
                  </li>

                  <li className='mt-4 shadow-lg rounded-lg ' onClick={()=>Set()} >
                     <a   class={`flex items-center p-2  rounded-lg dark:text-white hover:bg-orange-400 hover:text-white ${change==='inbox'?'bg-orange-400 text-white':''}`}>

                        <span  class="flex-1 ms-3 whitespace-nowrap cursor-pointer" onClick={handleLogout}>Logout </span>
                        
                     </a>
                  </li>
                  <li className='mt-4 shadow-lg rounded-lg ' onClick={()=>Set()} >
                    <Link to='/' className='text-white'>Back to home</Link>
                  </li>
                  
                  
                  

                  
                  


               </ul>
            </div>
         </aside>
         
         
      
         <Outlet/>

      </>
   )
};