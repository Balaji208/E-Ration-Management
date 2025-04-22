import React, { useState, useEffect } from 'react';
import "./style.css";
import card from "../../../assets/card_img.png";
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import { toast } from "react-toastify";

export const CardPay = () => {
    const cartList = useSelector((state) => state.cartState.cartList);
    const total = useSelector((state) => state.cartState.total);
    const deliveryInfo = useSelector((state) => state.cartState.deliveryInfo);
    const auth = window.sessionStorage.getItem("ID") || false;
    const [items, setItems] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const itemIds = cartList.map(product => ({ Order_ID: deliveryInfo.Order_ID, Item_id: product.Item_id, quantity: product.quantity }));
        setItems(itemIds);
    }, [cartList, deliveryInfo.Order_ID]);

    const handlePayment = async (e) => {
        e.preventDefault();

       

        try {
            

             
                const orderDetailsResponse = await axios.post('http://localhost:4000/Customer/OrderDetails', { items });
                const deliveryResponse = await axios.post('http://localhost:4000/Customer/deliveryInfo', deliveryInfo);

                if (orderDetailsResponse.status === 200  && deliveryResponse.status===200 ) {
                    toast.success('Order Placed Successfully');
                    navigate('/OrderSuccess');
                }
            
        } catch (err) {
            console.log(err);
            toast.error('Failed to place order. Please try again.');
        }
    };

    return (
        <>
            {auth && (
                <div className="container">
                    <form>
                        <div className="flex w-full mx-16">
                            <div className="w-1/2 flex-col justify-center items-center">
                                <h2 className="text-3xl font-bold">Cart List</h2>
                                <div className="mt-8 flex justify-between items-center">
                                    <div className="flex-col justify-center items-center">
                                        <h2 className="text-xl font-semibold">Name</h2>
                                        {cartList.map((product) => (
                                            <div key={product.Item_id} className="text-xl mt-4">{product.Item_Name}</div>
                                        ))}
                                    </div>
                                    <div className="flex-col justify-center items-center">
                                        <h2 className="text-xl font-semibold">Quantity</h2>
                                        {cartList.map((product) => (
                                            <div key={product.Item_id} className="text-xl mt-4">{product.quantity} kg</div>
                                        ))}
                                    </div>
                                    <div className="mr-12">
                                        <h2 className="text-xl font-semibold">Price</h2>
                                        {cartList.map((product) => (
                                            <div key={product.Item_id} className="text-xl mt-4">{product.Price}</div>
                                        ))}
                                    </div>
                                </div>
                                <div className="flex justify-end">
                                    <h2 className="text-xl font-semibold mr-28 mt-8">Total:<span className="ml-16">{total}</span></h2>
                                </div>
                            </div>
                            
                            <div className="row w-1/2">
                                <div className="col">
                                    <h3 className="title">Payment</h3>
                                    <div className="inputBox">
                                        <span>Cards accepted :</span>
                                        <img src={card} alt="" />
                                    </div>
                                    <div className="inputBox">
                                        <span>Name on card :</span>
                                        <input type="text" placeholder="mr. john deo" required />
                                    </div>
                                    <div className="inputBox">
                                        <span>Credit card number :</span>
                                        <input type="number" placeholder="1111-2222-3333-4444" required/>
                                    </div>
                                    <div className="inputBox">
                                        <span>Exp month :</span>
                                        <input type="text" placeholder="january" required/>
                                    </div>
                                    <div className="flex">
                                        <div className="inputBox">
                                            <span>Exp year :</span>
                                            <input type="number" placeholder="2022"required />
                                        </div>
                                        <div className="inputBox">
                                            <span>CVV :</span>
                                            <input type="text" placeholder="1234" className="mr-8" required />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button onClick={handlePayment} type="submit" className="submit-btn rounded-lg">Pay ₹{total}</button>
                    </form>
                </div>
            )}
            {!auth && (
                <div>
                    <div className="flex-col ml-16 justify-center items-center">
                        <h2 className="mt-16 text-4xl font-bold">Page Restricted</h2>
                        <h2 className="text-3xl mt-4">OOPS! Only logged in users can view this page!</h2>
                        <button className="border h-16 w-48 mt-8 text-white rounded-lg bg-orange-500">
                            <Link to="/Customer-login">Go to login page</Link>
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};
