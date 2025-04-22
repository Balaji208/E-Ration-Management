import React, { useState } from 'react'

import { useEffect } from 'react';
import {toast} from "react-toastify"

import { add } from '../../../store/cart/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
export const IndividualProduct = ({ obj ,img}) => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const size =window.sessionStorage.getItem('Family_Size_Customer')
   // let quantity=0
    const dispatch = useDispatch();
    
const [but,setBut] = useState(false)
   const [ok ,setOk] = useState(false)
     //console.log({img})
   
   let items = useSelector( state => state.cartState.cartList)

   let x = items.map( (id)=>items.Item_id === obj.Item_id )

    const handleAdd =  () => {
     //   console.log(obj.Item_id,name,price,parseInt(obj.quantity))
        if(but === false)

       { setCartlist(p=> ({...p,
            Item_id: obj.Item_id,
            Item_Name : name,
            Price : price,
            quantity : parseInt(obj.quantity)

        }));
        setBut(true)
    }
    else
    {
        setBut(false)
    }
    };
    //fetch item Name

    useEffect(()=>{
         
        const fetchItemName = async ()=>
            {
                try{
                    

                    const res = await axios.get(`http://localhost:4000/Customer/fetchItemName/${obj.Item_id}`)
                   

                    setName(res.data[0].Item_Name)
                    setPrice(res.data[0].Price)

                }
                catch(err)
                {
                    console.log(err)
                }
            }
            fetchItemName()
    },[]);

    useEffect(()=>{
         
        if(obj.quantity >= size * 5 && obj.Item_id===101)
            {
                setOk(true)
            }
    },[]);

    
    
   
const products = useSelector( state=>state.cartState.cartList);
const total = useSelector( state => state.cartState.total);

window.sessionStorage.setItem('Cart',  JSON.stringify(products))  
window.sessionStorage.setItem('Total',  JSON.stringify(total))  
    

const [cartlist, setCartlist] = useState({

    Item_Name : '',
    Price : 0,
    Item_id :0,
    quantity :0,


});
useEffect(() => {

    if(cartlist.Item_Name !=='')
       {
           dispatch(add(cartlist))
           toast.info('Item added')
       }

   
}, [cartlist,dispatch]);
    return (
        <>


            <div className="ml-16 mt-12 w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow ">
                <a href="/">
                    <img className="p-8 rounded-t-lg" src={img} alt="product card" />
                </a>
                <div className="px-5 pb-5">
                    <div className='flex  justify-between items-center'>
                        <h5 className="text-xl font-semibold tracking-tight text-gray-900 ">{name}</h5>
                        <h5 className="text-xl font-semibold tracking-tight text-gray-900 ">{obj.quantity}</h5>
                        <h5 className="text-xl font-semibold tracking-tight text-gray-900 ">₹{price}</h5>
                    </div>
                    <div className="flex items-center mt-2.5 mb-5">

                        <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded   ms-3"></span>
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-3xl font-bold text-gray-900 "></span>
                        <button href="" className="text-white bg-orange-500 hover:bg-orange-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center " disabled={but} onClick={handleAdd}>Add to cart</button>
                    </div>
                </div>
            </div>

        </>
    )
}
