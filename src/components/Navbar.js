import React from 'react'
import { RxAvatar } from 'react-icons/rx'
import { MdNotificationsActive, MdOutlineLogout } from 'react-icons/md'
import { AiFillSetting } from 'react-icons/ai'
import Button from './Uicomponent/Button'
function Navbar() {
    return (
        <div className='bg-[#15074E] flex justify-between p-4 rounded-xl mt-2 mx-2 text-white '>
            <div className='flex justify-center space-x-2 align-middle items-center'>
                <div><RxAvatar color='white' size={40} /></div>
                <div className='flex flex-col'><div className='text-sm '>Danish Jamal</div>
                    <div className='text-xs text-gray-400'>HR MANAGER</div></div>
            </div>
            <div className='hidden md:flex space-x-5'>
                <div> <Button active icon={MdNotificationsActive} buttonText='NOTIFICATION'/></div>
                <div><Button active icon={AiFillSetting} buttonText='Settings' /></div>
                <div><Button active icon={MdOutlineLogout} 
                buttonText='Logout'/></div>
            </div>
        </div>
    )
}

export default Navbar
