import { useSelector } from 'react-redux'
import { CartCard } from '../../components/Customer/Customer-Details/CartCard';
import emptyCart from "../../assets/empty_cart.webp";
import { Link } from 'react-router-dom';


export const Cart = () => {


  
    let products = useSelector( state => state.cartState.cartList);
   
    let total = useSelector( state => state.cartState.total);
    if(products.length===0)
      {
        products = JSON.parse(window.sessionStorage.getItem('Cart'))
        console.log('p',products)
      

      }
      if(total===0)
        {
          total = JSON.parse(window.sessionStorage.getItem('Total'))
        }
    
    
    
    
    
    
  return (
    <main>
      <section className="">
        
      <h1 className='text-4xl mx-16 mt-4 font-bold text-blue-900'>Cart Items: {products.length} / ${total}</h1>
        <div className="w-full h-1 mt-4 bg-black">
         
        </div>
       
        { products.map((product,index) => (
          <CartCard key={index} product={product} />
          
        )) } 
       
        {
          products.length &&(
            <div className="flex justify-center items-center ">
          <button className=' bg-orange-500 w-40 h-12 rounded-lg text-white hover:bg-orange-600'>
            <Link to="/placeOrder">Place Order</Link>
            
            </button>
          </div>  
          )
          
        }  
        {
        !products.length && (
          <div className="flex justify-center items-center">
            <img src={emptyCart} alt="" />
          </div>
        )
      }
       
      </section>
    </main>
  )
}
