import { useState } from "react";
import DateRangePickerComponent from "./ui/DateRangePickerComponent";
import GuestSelector from "./ui/GuestOptionComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchBar=()=>{
    const [dateSelection,setDateSelection]=useState<boolean>(false);
    const [guestSelection,setGuestSelection]=useState<boolean>(false);

    return (
        <div className="my-2 block lg:hidden w-full">
            <div className="flex justify-center items-center rounded-full border-2 border-black w-full">
                <div className="w-1/5 h-12 rounded-l-full grid justify-center items-center cursor-pointer hover:bg-gray-100">
                    Where
                    {/* <span className="text-gray-800 -mt-10 text-sm">Search Location</span> */}
                </div>
                <div className="w-1 h-8 bg-gray-300"></div>
                <div className="w-1/5 h-12 grid justify-center items-center cursor-pointer hover:bg-gray-100" 
                onClick={()=>{
                    setDateSelection((date)=>!date)
                    setGuestSelection(false);
                    }}>
                    check in
                    {/* <span className="text-gray-800 -mt-10 text-sm">Add Date</span> */}
                </div>
                <div className="w-1 h-8 bg-gray-300"></div>
                <div className="w-1/5 h-12  grid justify-center items-center cursor-pointer hover:bg-gray-100" 
                onClick={()=>{setDateSelection(date=>!date)}}>
                    check out
                    {/* <span className="text-gray-800 -mt-10 text-sm">Add Date</span> */}
                </div>
                <div className="w-1 h-8 bg-gray-300"></div>
                <div className="w-1/5 h-12  grid justify-center items-center cursor-pointer hover:bg-gray-100" 
                onClick={()=>{
                    setGuestSelection(guestSelection=>!guestSelection);
                    setDateSelection(false);
                    }}>
                    who
                    {/* <span className="text-gray-800 -mt-10 text-sm">Add Guest</span> */}
                    
                </div>
                <div className="w-1 h-12 bg-gray-300"></div>
                <div className="w-1/5 h-12 rounded-r-full flex justify-center items-center bg-[#FFA1C9] hover:bg-[#F94892]">
                    <FontAwesomeIcon icon={faSearch} className="h-5 w-5"/>
                </div>
            </div>
            <div className={`${(dateSelection)?'':"hidden"} flex justify-center`}>
                <DateRangePickerComponent/>
            </div>
            <div className={`${(guestSelection)?'':"hidden"} flex justify-center`}>
                <GuestSelector/>
            </div>
        </div>
    )
}

export default SearchBar;
// export default DateRangePickerComponent;
