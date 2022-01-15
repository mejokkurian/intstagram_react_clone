import React from 'react'
import {
    BookmarkIcon,
    ChatIcon,
    DotsHorizontalIcon,
    EmojiHappyIcon,
    HeartIcon,
    PaperAirplaneIcon
} from '@heroicons/react/outline'

function Feed({ id, username, userImg, img, caption }) {
    return (

        <div className="bg-white my-7 border rounded-sm">
            {/* Header  */}
            <div className="flex items-center p-3">
                <img src='https://cdn.pixabay.com/photo/2014/12/16/22/25/woman-570883_1280.jpg' className="rounded-full h-12 w-12 
                object-contain border p-1 mr-3" alt="" />
                <p className="flex-1 font-bold">mejo</p>
                <DotsHorizontalIcon className="h-5" />
            </div>
            {/* img  */}
            <img src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg' className="object-cover " alt="" />
            {/* Buttons  */}
            <div className="flex justify-between px-4 pt-4">
                <div className="flex space-x-1">
                    <HeartIcon className="btn" />
                    <ChatIcon className="btn" />
                    <PaperAirplaneIcon className="btn" />
                </div>
                <BookmarkIcon className="btn" />
            </div>
            {/* caption  */}
            <p className="p-5 truncate">
                <span className="font-bold mr-1">mej0</span>
                {caption}
            </p>
            {/* comments  */}
            {/* input box  */}
            <form className="flex items-center p-4 border">
                <EmojiHappyIcon className="h-7" />
                <input type="text"
                    placeholder="Add a comment..."
                    className="border-none flex-1 focus:ring-0 outline-none" />
                <button className="font-semibold text-blue-400">Post</button>
            </form>
        </div>

    )
}

export default Feed
