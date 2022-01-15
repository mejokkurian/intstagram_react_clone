function Story({ img, username }) {
    return (
    <div>
        <div className="border mt-3 max-h-24">
            <img className="h-14 w-14 mt-2 rounded-full p-[1.5px] border-red-500 border-2 
            object-contain cursor-pointer "
                src='https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_1280.jpg' />
            <p className=" text-xs w-14 truncate text-center">mejo</p>
        </div>

        
    </div>
    )
}
export default Story


