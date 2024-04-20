
import React, { useState } from 'react';
import SearchBar from '../SearchBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const AppBarNotLogged: React.FC = () => {
    const [openMenu,setOpenMenu]=useState(false);
    
    return (
        <header className="">
            <div className={`container mx-auto flex justify-between items-center w-full mt-2 ${openMenu?"hidden":""}`}>
                {/* Logo */}
                <div className="text-black text-2xl font-bold cursor-pointer w-3/4 hidden lg:block">
                    <span>She Share Vacation Rentals</span>
                </div>
                <div className='w-5/6 hidden md:block'>
                    <SearchBar/>
                </div>
                <div className=' ml-2 cursor-pointer md:hidden' onClick={()=>{setOpenMenu(openMenu=>!openMenu)}}>
                    <FontAwesomeIcon icon={faBars}/>
                </div>
                {/* Navigation Links */}
                {/* <nav className="text-black">
                    <ul className="flex space-x-4">
                        <li>
                            <a href="#" className="hover:text-gray-400">Welcome</a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-gray-400">Safety</a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-gray-400">Adventure</a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-gray-400">Community</a>
                        </li>
                    </ul>
                </nav> */}

                {/* User Section*/}
                <div className='flex'>
                    <button className='bg-[#F94892] px-3 py-1 rounded-full mx-2 text-white hover:bg-[#E60965]'>
                        login
                    </button>
                    <button className='border-[#F94892] border-2 px-2 py-1 rounded-full text-[#F94892] hover:bg-[#FFA1C9] hover:text-[#E60965]'>
                        singup
                    </button>
                </div>
                
            </div>
            <div className={`${openMenu?"":"hidden"} h-screen w-screen bg-[#FFA1C9] pt-3`}>
                <div className=' ml-2 cursor-pointer md:hidden' onClick={()=>{setOpenMenu(openMenu=>!openMenu)}}>
                    <FontAwesomeIcon icon={faBars}/>
                </div>
                <div className='flex-col'> 
                    
                </div>
            </div>
            
        </header>
    );
};

export default AppBarNotLogged;
