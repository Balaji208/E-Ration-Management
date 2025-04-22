import { React, useState } from 'react'
import { format } from 'date-fns';
import axios from 'axios';
import { toast } from 'react-toastify';



export const UpdatedRecords = () => {
    const today = new Date().toISOString().split('T')[0];
    const [selectedDate, setSelectedDate] = useState('');
    const [items, setItems] = useState([])

    const handleDateChange = (event) => {
        setSelectedDate(event.target.value);
    };
    const [ok, setOk] = useState(false)

    const handleSubmit = async (event) => {

        console.log('datee', selectedDate)


        event.preventDefault();
        const SID = JSON.parse(window.sessionStorage.getItem('Shop_id'));


        const val = {
            givenDate: selectedDate,
            Shop_id: SID
        }

        try {
            const { data } = await axios.post('http://localhost:4000/ShopManager/getUpdatedStock', val);
            console.log(data)
            if (data.length === 0) {
                toast.error("No stocks updated on the given date")
            }

            else {
                setItems(data)
                setOk(true)



            }




        }
        catch (err) {

            console.log(err)
        }
        // Format the date before submission

        // Use formattedDate for submission or other purposes
    };

    return (

        <>

            {!ok && <section className='ml-76  h-full'>
                <h1 className='text-3xl text-black text-center mt-8 font-semibold'>Check Stocks </h1>
                <div className="flex  flex-col gap-4 justify-center  items-center  ">
                    <div className=' mt-20 flex flex-col gap-4 border-2 p-8 border-black bg-background-gradient  rounded-lg shadow-lg shadow-black'>
                        <div className='text-lg  text-center'>
                            Enter date to check the updated Details

                        </div>
                        <div className='text-center'>
                            <input type="date"
                                max={today}
                                value={selectedDate}
                                onChange={handleDateChange}
                                className='text-end border-1 border-gray-300  bg-gray-300 focus:shadow-lg focus:shadow-' />
                        </div>
                        <div className='text-center'>
                            <button className='bg-orange-300 p-2 rounded-lg text-white font-semibold' onClick={handleSubmit} >Search</button>
                        </div>
                    </div>
                    <div>
                        <div className='bg-red-500 w-30 h-30 rounded-full'> </div>
                    </div>

                </div>

            </section>}


            {ok && (

                <div className="ml-76 flex flex-col justify-center items-center mt-8">
                    <div className='text-2xl text-blue-400 font-semibold'>
                        Updated Date : {selectedDate}
                    </div>
                    <div className="flex flex-row gap-16 mt-8">
                        <div className="font-semibold text-lg">Item ID</div>
                        <div className="font-semibold text-lg">Quantity</div>
                    </div>
                    {items.map((it, index) => (
                        

                        <div key={index} className='flex  flex-row  gap-16 mt-4'>

{console.log(items)}
                            <div className=" text-center">{it.Item_id}</div>
                            <div className="text-center">{it.quantity}</div>
                        </div>))
                    }
                </div>
            )}



        </>
    )
}
