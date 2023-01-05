import React from 'react'
import CardHolder from './CardHolder'
import SideBar from './SideBar'

function Home() {
    return (
        <div className='flex w-full min-h-screen'>
            <div className='hidden md:w-1/5 md:inline-flex'>
                <SideBar />
            </div>
            <div className='md:w-4/5 mt-10 ml-5 mr-5 md:ml-0 md:mr-0 w-full'>
                <CardHolder/>
            </div>

        </div>
    )
}

export default Home
