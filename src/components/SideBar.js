import React from 'react'
import {BsFillPeopleFill,BsBellFill,BsCalendar3EventFill} from 'react-icons/bs'
import {AiFillSetting} from 'react-icons/ai';
import {RiNavigationFill} from 'react-icons/ri'
function SideBar() {
  return (
    <div className='hidden md:flex flex-col space-y-10 w-1/5 mx-5 mt-10'>
      <div className=''>
        <div className='mx-3'><BsFillPeopleFill size={20}/></div>
        <div className='text-xs'>Personnel</div>
      </div>
      <div className=''>
        <div className='mx-3'><RiNavigationFill size={20}/></div>
        <div className='text-xs'>Who's away</div>
      </div>
      <div className=''>
        <div className='mx-1'><BsBellFill size={20}/></div>
        <div className='text-xs'>News</div>
      </div>
      <div className=''>
        <div className='mx-1'><BsCalendar3EventFill size={20}/></div>
        <div className='text-xs'>Events</div>
      </div>
      <div className=''>
        <div className='mx-2'><AiFillSetting size={20}/></div>
        <div className='text-xs'>Settings</div>
      </div>
    </div>
  )
}

export default SideBar
