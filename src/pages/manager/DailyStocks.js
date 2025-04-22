import React, { useEffect, useState } from 'react'
import { Stock } from '../../components/manager/Stock';
import { useDispatch, useSelector } from 'react-redux';
import axios from "axios"
import { toast } from 'react-toastify';
export const DailyStocks = () => {



  const dispatch = useDispatch();


  const [updated, setUpdated] = useState(false)

  const [products, setProducts] = useState([])
  const stocksFromRedux = useSelector((state) => state.stocks.stockList);
  const [stocks, setStocks] = useState([]);

  const [today,setToday]=useState([])  // to store today's products
  

  //update stocks to daily_stock and updated_stock table
  const handleStocks = async () => {

    const date = new Date();

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based in JavaScript
    const day = String(date.getDate()).padStart(2, '0');

    const mysqlDate = `${year}-${month}-${day}`;

    // Fetch stock data from Redux store on button click which was given as input from modal by manager
    setStocks(stocksFromRedux);
    console.log('Updated stocks:', stocksFromRedux);
    try {
      const res = await axios.post('http://localhost:4000/ShopManager/TodayProducts', stocksFromRedux);

      const res1 = await axios.post(`http://localhost:4000/ShopManager/UpdateDailyProducts/${mysqlDate}`, stocksFromRedux);
     
      if (res.statusText === 'OK') {
        toast.success("Today's Stocks have been updated Successfully!")
      }

    }
    catch (err) {
      toast.error("Error in updating today's stock")
      console.log(err)
    }




  };


//To check if the shop manager he already updated stock or not for current day
  useEffect(() => {
    const date = new Date();

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based in JavaScript
    const day = String(date.getDate()).padStart(2, '0');

    const mysqlDate = `${year}-${month}-${day}`;
    const sid = window.sessionStorage.getItem('Shop_id')
    const val = { todayDate: mysqlDate, Shop_id: sid }

    const check = async () => {




      try {
        const res = await axios.post(`http://localhost:4000/ShopManager/Check`, val);
        
        if (res.data.length >0)
          setUpdated(true)
        const res1 = await axios.get(`http://localhost:4000/ShopManager/TodayProducts/${sid}`)
       // console.log()
        setToday(res1.data)

      }
      catch (err) {
        console.log(err)
      }

    }
    check()
  }, [])


   // Fetch initial stock data from Redux store on component mount
  useEffect(() => {
   
    setStocks(stocksFromRedux);
  }, [stocksFromRedux]);

  useEffect(() => {
    dispatch({ type: "GET_STOCK" })

  }, [dispatch])
  useEffect(() => {
    const getProducts = async () => {
      const { data } = await axios.get('http://localhost:4000/ShopManager/getAllProducts');
      console.log(data)
      setProducts(data)

    }
    getProducts()
 
  }, [])

  return (
    <>
      {!updated && <div className="flex-col ml-76 h-full  bg-background-gradient justify-center items-center">

        <div className="mt-4">
          <h2 className='text-center text-3xl font-bold'
            style={{
              background: 'radial-gradient(circle at 10% 20%, rgb(64, 84, 178) 0%, rgb(219, 2, 234) 90%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text', // For non-webkit browsers that support the property
              textFillColor: 'transparent' // For non-webkit browsers that support the property
            }}>All Available Stocks</h2>
          <div className="flex flex-wrap">
            {products.map((item, index) => (
              <div className="w-1/3 " key={index}>
                <Stock pname={item.Item_Name} pid={item.Item_id} img={item.img_url}/>

              </div>

            ))}









          </div>

          <div className="mt-16 text-center mb-4 ">
            <button className='p-4 rounded-xl text-white font-semibold bg-custom-gradient' onClick={handleStocks}>Update Today's Stocks</button>

          </div>
        </div>





      </div >}
      {
        updated &&
        <div className="flex-col ml-76 h-full b justify-center items-center">

          <div className="">
            <h2 className='font-bold text-center text-5xl mr-8 py-2 ' style={{
              background: 'radial-gradient(circle at 10% 20%, rgb(64, 84, 178) 0%, rgb(219, 2, 234) 90%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text', // For non-webkit browsers that support the property
              textFillColor: 'transparent' // For non-webkit browsers that support the property
            }}>Today's Available Products</h2>
          </div>

          <div className="text-center mt-24 shadow-lg bg-white flex-col justify-center items-center mx-36">
            <div className="flex justify-between items-center mt-4">
              <div className="ml-8">
                <h2 className='font-semibold'>Shop ID </h2>
              </div>
              <div className="ml-8">
                <h2 className='font-semibold'>Item ID </h2>
              </div>
              <div className="ml-8">
                <h2 className='font-semibold'>Available Quantity </h2>
              </div>
              
              


            </div>

            

            {today.map((item, index) =>
              <div className="flex  justify-between items-center mt-4">
                <div className="ml-8">
                  <h2 className='font-semibold'>{item.Shop_id}</h2>
                </div>
                <div className="ml-8">
                  <h2 className='font-semibold'>{item.Item_id}</h2>
                </div>
                <div className="ml-8">
                  <h2 className='font-semibold'>{item.quantity}</h2>
                </div>
              </div>


            )}




          </div>





        </div>
      }


    </>
  )
}
