import React from 'react'
function Product(props) {



    return (
        <div className=' bg-white text-black h-full w-full md:w-1/2 md:h-3/4 flex flex-col'>
            <span className="p-2 cursor-pointer" onClick={() => {
                props.setModal(false);
            }} >
                &times;
            </span>
            <div ><img src={props.avatar} className='p-2 mx-auto mt-5' width={100} alt='product_avatar' /></div>
            <div className='mx-auto mt-5 font-bold text-sm md:text-2xl p-4 '>{props.title}</div>
            <div className='mx-auto mt-2 text-xs md:text-base text-black border border-blue-200 rounded-full p-3
            bg-blue-300
            '>{props.category}</div>
            <div className='mx-auto mt-2 text-lg p-4 md:text-xl md:p-5 '>{props.description}</div>
        </div>
    )
}

export default Product
