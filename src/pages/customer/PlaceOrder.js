import React, { useEffect, useState } from 'react'
import deliver_boy from "../../assets/placeOrder/delivery_boy.png";
import cash_on_delivery from "../../assets/placeOrder/cashOnDelivery.png";
import creditCard from "../../assets/placeOrder/credit-card.png"
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import empty from "../../assets/empty_cart.webp";
import axios from "axios";
import { DeliveryInfo } from '../../store/cart/cartSlice';
export const PlaceOrder = () => {


    const date = new Date();

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based in JavaScript
  const day = String(date.getDate()).padStart(2, '0');
  
  const mysqlDate = `${year}-${month}-${day}`;
  
 


    const auth = window.sessionStorage.getItem("ID") || false;
    const products = useSelector(state => state.cartState.cartList)
    const value = products.length > 0 ? true : false
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const [deliveryInfo, setDeliveryInfo] = useState(
        {
            Ration_ID: 0,
            Order_ID: 0,

            PaymentMode: "",
            OrderDate : ''


        }
    )
    const userDetails = useSelector(state => state.profile.Myprofile);
    
    
    
   

    const handlePayment = (e) => {

        const mode = document.getElementsByName('payment');
        e.preventDefault();

        const OID = Date.now(); // Generate Order_ID

        const ID = JSON.parse( window.sessionStorage.getItem('ID'));
        
        const paymentMode = mode[0].checked ? mode[0].value : mode[1].value;
        setDeliveryInfo({
            ...deliveryInfo,
            Ration_ID: ID,
            Order_ID: OID,
            PaymentMode: paymentMode,
            OrderDate : mysqlDate,

            
        });

    }

    useEffect(() => {
        const handleRequest = async () => {
         
            if (deliveryInfo.PaymentMode === 'Cash-On-Delivery' && deliveryInfo.Order_ID) {
                try {
                    const response = await axios.post('http://localhost:4000/Customer/deliveryInfo', deliveryInfo)
                   
                }
                catch (err) {
                    console.log(err)
                }
            }
            else if (deliveryInfo.PaymentMode === 'Credit/Debit Card' && deliveryInfo.Order_ID) {
               
                dispatch(DeliveryInfo(deliveryInfo))
                navigate("/CardPayment")


            }

        }
        handleRequest()
    }, [deliveryInfo, dispatch, navigate])

    return (
        <>
            {

            }
            {auth && value && <div className="">
                <div className="flex justify-around items-center ">

                    <div className="flex-col mt-8 w-1/2 justify-start mb-64">
                        <h2 className='text-4xl mx-1 font-bold'> <span className='text-4xl text-orange-500'>Delivery</span>  Information</h2>
                        <div className="w-full bg-orange-500 h-0.5 m-1"></div>
                        <div className="w-full flex-col justify-center items-center mt-8">
                            <div className="flex  justify-center w-full items-center">
                                <div className="mx-2 w-1/2 flex-col  justify- items-center">
                                    <div className="">
                                        <label htmlFor="" className='font-semibold text-2xl '>
                                            <span className='font-semibold text-2xl text-red-600'>First</span> Name</label>
                                    </div>
                                    <div className="">
                                        <div className='mt-2  bg-orange-100 rounded-lg h-9 w-full  '>
                                            <p className='ml-4 text-xl pt-1 font-semibold'>{userDetails.First_Name}</p>
                                        </div>
                                    </div>


                                </div>
                                <div className="mx-2 w-1/2 flex-col  justify- items-center">
                                    <div className="">
                                        <label htmlFor="" className='font-semibold text-2xl '>
                                            <span className='font-semibold text-2xl text-red-600'>Last</span> Name</label>
                                    </div>
                                    <div className="">
                                        <div type="text" className='mt-2  bg-orange-100 rounded-lg h-9 w-full  ' >
                                        <p className='ml-4 text-xl pt-1 font-semibold'>{userDetails.Last_Name}</p>
                                        </div>
                                    </div>


                                </div>
                            </div>
                            <div className=" mt-8 flex  justify-center w-full items-center">
                                <div className="mx-2 w-1/2 flex-col  justify- items-center">
                                    <div className="">
                                        <label htmlFor="" className='font-semibold text-2xl '>
                                            <span className='font-semibold text-2xl text-red-600'>Address</span> </label>
                                    </div>
                                    <div className="">
                                        <div type="text" className='mt-2  bg-orange-100 rounded-lg h-9 w-full  '>
                                        <p className='ml-4 text-xl pt-1 font-semibold'>{userDetails.Address}</p>
                                        </div>
                                    </div>


                                </div>
                                <div className="mx-2  w-1/2 flex-col  justify- items-center">
                                    <div className="">
                                        <label htmlFor="" className='font-semibold text-2xl '>
                                            <span className='font-semibold text-2xl text-red-600'>Pin</span> code</label>
                                    </div>
                                    <div className="">
                                        <div type="text" className='mt-2  bg-orange-100 rounded-lg h-9 w-full '>
                                        <p className='ml-4 text-xl pt-1 font-semibold'>{userDetails.Pincode}</p>
                                        </div>
                                    </div>


                                </div>
                            </div>



                            <div className=" mt-8 flex  justify-center w-full items-center">
                                <div className="mx-2 w-1/2 flex-col  justify- items-center">
                                    <div className="">
                                        <label htmlFor="" className='font-semibold text-2xl '>
                                            <span className='font-semibold text-2xl text-red-600'>City</span> </label>
                                    </div>
                                    <div className="">
                                        <div type="text" className='mt-2  bg-orange-100 rounded-lg h-9 w-full'>
                                        <p className='ml-4 text-xl pt-1 font-semibold'>{userDetails.City}</p>
                                        </div>
                                    </div>


                                </div>
                                <div className="mx-2  w-1/2 flex-col  justify- items-center">
                                    <div className="">
                                        <label htmlFor="" className='font-semibold text-2xl '>
                                            <span className='font-semibold text-2xl text-red-600'>Phone</span> Number</label>
                                    </div>
                                    <div className="">
                                        <div type="number" className='mt-2  bg-orange-100 rounded-lg h-9 w-full' >
                                        <p className='ml-4 text-xl pt-1 font-semibold'>{userDetails.Phone_no}</p>
                                        </div>
                                    </div>


                                </div>
                            </div>

                            <div className="flex justify-center items-center mt-8 ">
                                <div className="flex-col mt-8 justify-start w-5/6">
                                    <h className="text-2xl font-semibold"><span className='font-semibold text-2xl text-red-600'>Pay</span> Using</h>
                                    <div className=" mt-2 w-5/6 flex-col justify-center items-center">


                                        <div className="h-20 bg-slate-200 rounded-2xl flex justify-start items-center    hover:bg-slate-300">
                                            <input className='ml-6 w-5 h-5' type="radio" name="payment" value="Cash-On-Delivery" />
                                            <img src={cash_on_delivery} alt="cash-on-delivery" className='w-24 h-24 mx-4' />
                                            <div className="">

                                                <label htmlFor="" className=' text-2xl font-medium' >Cash on delivery</label>

                                            </div>
                                        </div>




                                        <div className=" mt-2 h-20 bg-slate-200 rounded-2xl flex justify-start items-center cursor-pointer hover:bg-slate-300 ">
                                            <input className='ml-6 w-5 h-5' type="radio" name="payment" value="Credit/Debit Card" />
                                            <img src={creditCard} alt="cash-on-delivery" className='w-20 h-20 mx-4' />
                                            <div className="">

                                                <label htmlFor="" className=' text-2xl font-medium' >Credit / Debit card</label>

                                            </div>

                                        </div>

                                    </div>


                                </div>
                                <div className="mt-8  ">
                                    <button onClick={handlePayment} className='border text-xl   bg-orange-400 w-30 h-16 text-white border-1xl rounded-lg hover:bg-white hover:text-orange-500 hover:border hover:border-orange-500 transition '>Proceed to payment </button>
                                </div>
                            </div>



                        </div>
                    </div>
                    <div className="">
                        <img src={deliver_boy} className='mb-64' alt="delivery-boy" />
                    </div>


                </div>


            </div>

            }

            {
                !auth &&
                <div className="">
                    <div className="flex-col  ml-16 justify-center items-center">
                        <h2 className='mt-16 text-4xl font-bold'>Page Restricted</h2>
                        <h2 className='text-3xl mt-4'>OOPS ! Only logged In users can able to view this page !</h2>
                        <button className='border  h-16 w-48 mt-8 text-white rounded-lg bg-orange-500'>
                            <Link to="/Customer-login">Go to login page</Link>
                        </button>
                    </div>

                </div>

            }
            {
                !value &&
                <div className="ml-60 flex-col justify-center items-center">
                    <img src={empty} alt="" />
                    <h2 className='text-2xl'>Your cart list is empty add products into cart to place order</h2>
                    <button className='border  h-16 w-48 mt-8 text-white rounded-lg bg-orange-500'>
                        <Link to="/">Back to home page</Link>
                    </button>

                </div>
            }

        </>
    )
}
