import React, { useState } from 'react'
import Product from './Product';
import { AiFillStar } from 'react-icons/ai';
import Modal from './Uicomponent/Modal'
function Cards(props) {
    const [modal, setModal] = useState(false);
    const [id] = useState(props.id);
    return (
        <div className='bg-white text-white w-40 md:w-52 flex flex-col border border-black rounded-2xl p-2'>

            {/* {//Modal for viewing a particular product} */}
            {
                modal && (
                    <Modal>
                        <Product modal={modal} setModal={setModal} id={id} avatar={props.image}
                            title={props.title} price={props.price}
                            category={props.category} rating={props.rating.rate} count={props.rating.count}
                            description={props.description}
                        />
                    </Modal>
                )
            }
            <div className='h-[90vh] md:h-[38vw]'>
                <div><img src={props.image ? props.image : "https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.webp"} className=' mx-auto mt-2 p-2' height={50} alt='PRODUCT_IMG' /></div>
                <div className='p-1 mt-3 text-xl font-bold text-black'>{props.title.length > 15 ? props.title.slice(0, 15) : props.title}</div>
                <div className='mt-1 p-1 text-xs font-bold text-black border-blue-400 border rounded-full text-center bg-blue-100'>{props.category ? props.category : 'price Unavilable'}</div>
                <div className='mt-1 p-1 text-lg text-black'>₹{props.price ? props.price : 'price Unavilable'}</div>
                <div className='flex space-x-1 items-center'>
                    <div><AiFillStar size={18} color='red' /></div>
                    <div className='mt-1 p-1 text-lg text-black'>{props.rating ? props.rating : 'rating Unavilable'}</div>
                    <div className='mt-1 p-1 text-lg text-black'>({props.count ? props.count : 'rating Unavilable'})</div>
                </div>
                <p className='text-black p-2 text-xs'>
                    {props.description.length > 150 ? props.description.slice(0, 150) : props.description}
                </p>
            </div>
            <button className='bg-[#6A5FEB] p-2 mt-3 mb-3 mx-auto hover:scale-95 rounded-md' onClick={() => {
                setModal(true);
            }}>
                Read more
            </button>
        </div>
    )
}

export default Cards
