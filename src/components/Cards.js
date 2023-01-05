import React, { useState } from 'react'
import Profile from './Profile';
import Modal from './Uicomponent/Modal'
function Cards(props) {
    const [modal,setModal]=useState(false);
    const [id,setId]=useState(props.id);
    return (
        <div className='bg-gray-500 text-white w-40 flex flex-col border border-black rounded-2xl'>
            {
                modal && (
                    <Modal>
                        <Profile modal={modal} setModal={setModal} id={id}/>
                    </Modal>
                )
            }
            <div><img src={props.avatar} className='rounded-full mx-auto mt-2' width={60} /></div>
            <div className='mx-auto mt-3 text-lg font-bold'>{props.first_name}</div>
            <button className='bg-[#6A5FEB] p-1.5 mt-4 mb-3 mx-auto hover:scale-95' onClick={()=>{
                setModal(true);
            }}>
                Know More
            </button>
        </div>
    )
}

export default Cards
