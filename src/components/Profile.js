import React from 'react'
import { TiSocialTwitter, TiSocialLinkedin, TiSocialSkype } from 'react-icons/ti'
import { useEffect,useState } from 'react';
import Loading from './Uicomponent/Loader';
import axios from 'axios'
function Profile(props) {

    const [loader,setLoader]=useState(false);
    const [data,setData]=useState({"id":2,"email":"janet.weaver@reqres.in","first_name":"Janet","last_name":"Weaver","avatar":"https://reqres.in/img/faces/2-image.jpg"});
    useEffect(() => {
        setLoader(true);
        axios.get(`https://reqres.in/api/users/${props.id}`).then((res)=>{
            setData(res.data.data);
            setLoader(false);
        }).catch((err)=>{
            console.log(err);
        })


    }, [])


    return (
        <div className='w-1/2 bg-gray-500 text-white h-1/2 flex flex-col'>
            {
                loader && (
                    <Loading/>
                )
            }
            <span className="p-4 cursor-pointer" onClick={() => {
                props.setModal(false);
            }} >
                &times;
            </span>
            <div ><img src={data.avatar} className='rounded-full mx-auto mt-5' width={100} /></div>
            <div className='mx-auto mt-5 font-bold text-sm md:text-2xl'>{data.first_name+" "+data.last_name}</div>
            <div className='mx-auto mt-2 text-xs md:text-base text-gray-300'>{data.email}</div>
            <div className='flex space-x-4 justify-center mt-10'>
                <TiSocialLinkedin size={30} className='cursor-pointer'/>
                <TiSocialTwitter size={30} className='cursor-pointer'/>
                <TiSocialSkype size={30} className='cursor-pointer'/>
            </div>
        </div>
    )
}

export default Profile
