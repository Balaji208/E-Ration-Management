import React, { useEffect, useState } from 'react'
import img1 from "../../../assets/products/rice.jpeg";
import img2 from "../../../assets/products/sugar.jpg";
import img3 from "../../../assets/products/wheat.jpeg";
import { IndividualProduct } from './IndividualProduct';
import axios from 'axios';

export const FeauturedProduct = () => {

 
    const [ products,setProducts] = useState([])
    const sid = window.sessionStorage.getItem('Shop_Id_Customer')
    const size =window.sessionStorage.getItem('Family_Size_Customer')
    const [fetchItems,setFetchItems]=useState([])

    useEffect(()=>{

        const fetchProducts =async()=>
            {
                     try{
                             const res = await axios.get(`http://localhost:4000/Customer/FetchTodayProducts/${sid}`);
                             const { data } = await axios.get('http://localhost:4000/ShopManager/getAllProducts');
                             setFetchItems(data)
                             setProducts(res.data)
                     }
                     catch(err)
                     {
                           console.log(err)
                     }

            }
            fetchProducts()
    },[sid])
     
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
      
      const limitedProducts = filteredProducts.slice(0, 3);
     // console.log(limitedProducts)
    
    
    const handleProducts =async()=>
        {
            try{
                const response = await axios.get('http://localhost:4000/featuredProducts');
               // console.log(response)
            }
            catch(err)
            {
                console.log(err)
            }
            
        }
        handleProducts()
  return (
    <>
   
{
    limitedProducts.map((obj,index)=>(
        <div className="flex justify-between items-center flex-wrap max-w-104 " key={index}>
            <IndividualProduct obj={obj} img={fetchItems.img_url} />
        </div>
        
    ))
}


    </>
  )
}
