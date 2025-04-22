import React, { useEffect, useState } from 'react'
import { IndividualProduct } from '../../components/Customer/Home/IndividualProduct'
import { Navbar } from '../customer/Navbar'
import axios from 'axios';
export const AllProducts = () => {

  const [ products,setProducts] = useState([])
    const sid = window.sessionStorage.getItem('Shop_Id_Customer')
    const size =window.sessionStorage.getItem('Family_Size_Customer');
    const [fetchItems,setFetchItems]=useState([])


    

    useEffect(()=>{

        const fetchProducts =async()=>
            {
                     try{
                             const res = await axios.get(`http://localhost:4000/Customer/FetchTodayProducts/${sid}`);
                             const response = await axios.get('http://localhost:4000/ShopManager/getAllProducts');
                            
                             setProducts(res.data)
                     }
                     catch(err)
                     {
                           console.log(err)
                     }

            }
            fetchProducts()
    },[sid])

    useEffect(()=>{

      const fetchProducts =async()=>
          {
                   try{
                          
                           const {data} = await axios.get('http://localhost:4000/ShopManager/getAllProducts');
                           
                           setFetchItems(data)
                           
                           console.log('img...:',data.img_url)

                   }
                   catch(err)
                   {
                         console.log(err)
                   }

          }
          fetchProducts()
  },[products])

     //console.log('jiii',products)
    const filteredProducts = products.filter(product => {
        if (product.Item_id === 102 && product.quantity < size * 5) {
       //   product.quantity=size*5;
          return false;
        }
        if(product.Item_id === 102 && product.quantity >= size * 5)
          {
            product.quantity=size*5;
            return true;

          }
        if (product.Item_id === 103 && product.quantity < size * 0.5) {
         
          return false;
        }
        if (product.Item_id === 103 && product.quantity >= size * 0.5) {
          product.quantity=size * 0.5
          return true;
        }
        if(product.quantity===0){
            return false
        }
        if(product.Item_id === 101 && product.quantity >= 5)
          {
            product.quantity=5;
          }
        else{
          product.quantity=1;
        }
        return true;
      });
      
  //console.log('hiiiii',filteredProducts)
  return (
    <>
    <div className="">
      <Navbar/>
    </div>
    <div className="mt-24">

    <h2 className='text-center text-3xl font-bold'>Products that are available today</h2>

<div className="mt-16 flex flex-row justify-items items-center flex-wrap max-w-350px ">
 {
   filteredProducts.map((obj)=>(
   
    
 
   <IndividualProduct obj={obj}  />
   ))
 }

</div>


    </div>
      
    </>
  )
}
