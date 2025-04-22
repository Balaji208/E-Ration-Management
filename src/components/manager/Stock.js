import { React, useState } from 'react'
import { Modal} from "../../components/manager/Modal"
import image from "../../assets/products/onion.jpeg"
export const Stock = ({ pname,pid,img }) => {
    const [showModal, setShowModal] = useState(false);

    
    return (
        <>
            <div className="ml-4 mt-12 w-3/4 max-w-sm bg-card border border-gray-200 rounded-lg shadow ">
                <a href="/">
                    <img className="p-8 rounded-xl" src={img} alt="product card" />
                </a>
                <div className="px-5 pb-5">
                    <div className='flex  justify-between items-center'>
                        <h5 className="text-xl font-semibold tracking-tight text-gray-900 ">{pname}</h5>
                        <div className="mt-4 flex justify-between items-center border border-gray-300 w-28` h-8 rounded-xl">
                            <div className="flex justify-center items-center ">
                                <div className="ml-3">
                                    <button className='text-4xl'></button>
                                </div>
                                <div className="border ml-3 h-8 border-gray-200"></div>
                            </div>
                            <div className="flex justify-center items-center ">
                                <div className="ml-3">
                                   
                                </div> 
                                
                                <div className="border ml-3 h-8 border-gray-200"></div>
                            </div>
                            <div className="flex justify-center items-center ">

                                <button className='text-3xl ml-1 mr-3 text-center'></button>

                            </div>

                        </div>
                    </div>
                    <div className="flex items-center mt-2.5 mb-5">

                        <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded   ms-3">5.0</span>
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-3xl font-bold text-gray-900 "></span>
                        <button href="" className="text-white bg-purple-500 hover:bg-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center  " onClick={() => setShowModal(true)} >Add to cart</button>
                    </div>
                </div>
                {showModal && <Modal pname={pname} pid={pid} onClose={() => setShowModal(false)} />}

            </div>
        </>
    )
}