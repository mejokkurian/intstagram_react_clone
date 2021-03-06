import {
    SearchIcon,
    PlusCircleIcon,
    UserGroupIcon,
    HeartIcon,
    PaperAirplaneIcon,
    MenuIcon
} from '@heroicons/react/outline'
import { HomeIcon } from '@heroicons/react/solid'
import React, { useState } from 'react'
import  ImageUpload  from '../modals/ImageUpload'

import Discard from '../discard/Discard'


function Header() {
    const [fileUploaded, setfileUploaded] = useState('')
    const [show, setShow] = useState(false);
    console.log(fileUploaded)

    // modal opening function
    const handleShow = () => setShow(true);
    const [discard, setDiscard] = useState(false)

    // modal closing function
    const handleClose = () => {
        setDiscard(true)
    }

    return (

        <div className="shadow-sm border-b bg-white sticky top-0 z-50">
            <div className="flex justify-between max-w-6xl mx-5 lg:mx-auto">

                {/* Left  */}

                <div className='relative   items-center inline-grid  w-24 cursor-pointer'>
                    <img
                        src="https://links.papareact.com/ocw" layout="fill"
                        objectfit="contain" alt='My Awesome '
                    />
                </div>

                {/* Middle  -search input field*/}
                <div className='max-w-xs'>

                    <div className='mt-1 hidden md:block relative p-3 rounded-md'>

                        <div className='absolute inset-y-0 pl-3 flex items-center pointer-events-none'>
                            <SearchIcon className="h-5 w-5 text-gray-500" />
                        </div>

                        <div>
                            <input className="bg-gray-100 block w-full pl-10 sm:text-sm border-gray-100 focus:ring-black focus:border-black rounded-md" type="text" placeholder="Search" />
                        </div>
                    </div>
                </div>

                {/* Right  */}
                <div className="flex items-center justify-end space-x-4">
                    <HomeIcon className='navBtn' />
                    <MenuIcon className='h-6 md:hidden cursor-pointer' />
                    <div className="relative navBtn">
                    <PaperAirplaneIcon className="navBtn rotate-45"/>
                    <div className="absolute -top-1 -right-2 text-xs w-5 h-5 bg-red-500 rounded-full flex items-center justify-center animate-pulse text-white">3</div>
                    </div>
                    <PlusCircleIcon onClick={handleShow}className="navBtn"/>
                    <UserGroupIcon className="navBtn" />
                    <HeartIcon className="navBtn" />
                   
                    <ImageUpload show = {show} hide = {handleClose} setfileUpload = {setfileUploaded} fileUpload = {fileUploaded} />
                    {discard&&<Discard setState = {setDiscard} setfileUpload = {setfileUploaded} setshowOne = {setShow}/> } 
                </div>
            </div>
        </div>
    )
}


export default Header
