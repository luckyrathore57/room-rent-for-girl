const RentOrShare=()=>{
    return (
        <div className="hidden lg:grid grid-cols-12 mx-auto items-center justify-center my-5">
            
            <div className=" col-span-8 items-center h-32 flex justify-center px-10">
                <div className=" h-20 w-52  hover:bg-[#FADADA] rounded-l-full flex justify-center items-center border-2 border-[#FFA1C9] cursor-pointer">
                    Rent a Room
                </div>
                <div className=" h-20 w-52  hover:bg-[#FADADA] rounded-r-full flex justify-center items-center border-2 border-[#FFA1C9] cursor-pointer">
                    Share your Room
                </div>
            </div>
            <div className=" flex-col items-center justify-center">
                <div className="text-[#E60965]">
                    <input type="radio" name="category"/> Welcome
                </div>
                <div className="text-[#E60965]">
                    <input type="radio" name="category" /> Safety
                </div>
                <div className="text-[#E60965]">
                    <input type="radio" name="category" /> Adventure
                </div>
                <div className="text-[#E60965]">
                    <input type="radio" name="category" /> Community
                </div>
            </div>
        </div>
    )
}
export default RentOrShare;