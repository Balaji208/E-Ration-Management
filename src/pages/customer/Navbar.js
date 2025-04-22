import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
export const Navbar = () => {
  const auth = window.sessionStorage.getItem("ID") || false;

  return (
    <>

      <nav className="bg-white   fixed w-full z-20 top-0 start-0 border-b border-gray-200 ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto ">





          <a  className="flex items-center space-x-3 rtl:space-x-reverse">
            {  /*<img src="" className="h-8" alt="Example Logo"/>*/}
            <span className="self-center text-2xl font-semibold whitespace-nowrap ">E-Ration</span>
          </a>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <div type="button" className="  text-xl w-44 h-16 text-orange-500  font-medium rounded-lg  px-6 mx-8 py-2 text-center">
              <div className="mt-2 flex justify-center items-center">


                <div className="">


                  <ShoppingCartIcon />
                </div>
                <div className="ml-2">

                  <Link to="/myCart" className='cursor-pointer'>My Cart</Link>
                </div>
              </div>
            </div>


            {!auth && <button type="button" className="mt-2 text-2xl w-36 h-10 text-white bg-orange-500 hover:bg-amber-700 rounded-lg  px-4 py-2 text-center">
              <Link to="/Customer-login">Login</Link>
            </button>}
            {auth &&
              <Link className="p-2 px-4 group text-xl font-semibold hover:text-amber-500" to="/myProfile">
                <AccountCircleIcon  styel={{outerWidth  :'8rem'}} />  
              </Link>
            }
            <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-sticky" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
              </svg>
            </button>
          </div>
          <div className=" mt-4  ml-32 items-center justify-between hidden w-full md:flex md:w-auto md:order-1  " id="navbar-sticky">
            <ul className="flex flex-col justify-center  items-center p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
              <li>

                <a className="p-2 px-4 group text-xl font-semibold hover:text-amber-500" href="/">
                  Home
                  <div className="bg-amber-500 h-[2px]  mx-2 w-0 group-hover:w-full transition-all duration-500 "></div>
                </a>

              </li>
              <li>
                <a href="#about" className="p-2 px-4 group text-xl font-semibold hover:text-amber-500" >
                  About
                  <div className="bg-amber-500 h-[2px]  mx-2 w-0 group-hover:w-full transition-all duration-500 "></div>
                </a>
              </li>
              <li>
                <a href="#GovernmentSchemes" className="p-2 px-4 group text-xl font-semibold hover:text-amber-500">
                  Schemes
                  <div className="bg-amber-500 h-[2px]  mx-2 w-0 group-hover:w-full transition-all duration-500 "></div>
                </a>
              </li>
              <li>
                {
                  auth && <Link className="p-2 px-4 group text-xl font-semibold hover:text-amber-500" to="/myProfile/userDetail">

                    
                  </Link>
                }
              </li>
            </ul>
          </div>
        </div>
      </nav>




    </>
  )
}
