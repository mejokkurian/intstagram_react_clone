import React from 'react'

function Suggestions() {
    return (
        <div className='mt-4 ml-10'>
            <div className="flex  space-x-36  text-sm ">
                <h3 className="  text-sm  text-gray-400">Suggestions for you</h3>
                <button  className=" mb-2 text-gray-600 text-sm font-semibold cursor-pointer">See All</button>
            </div>

            <div

                className="flex items-center justify-between mt-1">
                <img
                    className="w-10 h-10 rounded-full border p-[2px]"
                    src='https://us.123rf.com/450wm/oneinchpunch/oneinchpunch1808/oneinchpunch180802187/106768246-beautiful-woman-traveling-on-her-jet.jpg?ver=6' alt="instagram feed"
                />
                <div
                    className="flex-1 ml-4">
                    <h2 className="font-semibold text-sm">
                    </h2>
                    <h3 className="text-sm text-black-400">
                         mr_mejo
                    </h3>
                </div>
                <button className="text-blue-400 text-xs font-bold">
                    Follow mejo
                </button>
            </div>

        </div>
    )
}

export default Suggestions
