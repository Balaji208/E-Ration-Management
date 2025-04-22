import React, { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch } from 'react-redux';
import { add } from '../../store/manager/stockSlice';
export const Modal = ({pid,onClose,pname}) => {
    const dispatch = useDispatch()
 
    const shop_id = JSON.parse(window.sessionStorage.getItem('Shop_id'))
    console.log(shop_id)
    const [product,setProduct] = useState(
    {
      Shop_id : shop_id,  
      Item_id : pid,
      quantity : 0,


    }
  )
    
    const ChangeState =(e)=>{
        const value = parseInt(e.target.value);
        
        setProduct({...product,quantity : value })
        
        
    }
    const handleSubmit=()=>
      {
        dispatch(add(product))
        onClose()
      }
   
  return (
    <div className='fixed flex justify-center items-center inset-0 bg-black bg-opacity-30 backdrop-blur-sm'>
       <div className='text-black ml-44 mt-10 p-4 bg-white w-96 h-68 rounded-2xl'>
            <div className='text-end'>
            <button onClick={onClose} className=''><CloseIcon/></button>
            </div>
            <div className='pt-8 ml-12  flex-col justify-center items-center'>
                <p className='font-bold text-xl' >Enter quantity for {pname}  </p>
                <div className="mt-4">
                <input type='text'  onChange={ChangeState} className=' p-4 focus:border-red-400 focus:border-2 bg-purple-200 rounded-lg'
                 />
                </div>
                
            </div>
           
            <div className='mt-4 text-center'>
            <button onClick={handleSubmit} className='bg-custom-gradient text-xl p-3 px-8 rounded-lg text-white'> Add</button>
            </div>
            

       </div>


    </div>
  )

}
