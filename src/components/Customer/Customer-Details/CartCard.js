import { useDispatch, useSelector } from "react-redux";
import {remove} from "../../../store/cart/cartSlice"
import "./CartCard.css";

import { toast } from "react-toastify" 

export const CartCard = ({product}) => {
  const {Item_Name, Price, image,quantity} = product;
  
  const handleRemove = ()=>
  {
    dispatch(remove(product));
    toast.success('Item Removed successfully')
  }
  let  products = useSelector(state =>state.cartState.cartList)
  let total = useSelector(state =>state.cartState.total)
 
  window.sessionStorage.setItem('Cart',  JSON.stringify(products))  
window.sessionStorage.setItem('Total',  JSON.stringify(total))  
  const dispatch = useDispatch();
  return (
      <div className="cartCard">
        <img src={image} alt={Item_Name} />
        <h1 className="font-bold">Item Name:</h1> 
        <p className="productName">{Item_Name}</p>
        <h1 className="font-bold">Price:</h1>
        <p className="productPrice">₹{Price}</p>
        <h1 className="font-bold">Quantity :</h1>
        <p className="">{quantity} kg</p>
        <button onClick={handleRemove} >Remove</button>
      </div>
  )
}