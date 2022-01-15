import React from 'react'

function MiniProfile() {
    return (
        <div>
            <div className="flex items-center justify-between mt-14 ml-10">
                <img className="w-16 mb-0 h-16 rounded-full border p-[2px]"
                    src="https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072821__340.jpg"
                    alt="" />

                <div className="flex-1 mx-1">
                    <h2 className="text-sm mb-0">mr_mejo</h2>
                    <h3 className="text-sm text-gray-400">Mejo</h3>
                </div>
                <div className=''>
                    <button className="text-blue-400 text-sm font-semibold ">Sign Out</button>
                </div>
            </div>
        </div>
    )
}

export default MiniProfile
