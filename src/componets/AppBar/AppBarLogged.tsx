
import React from 'react';
import SearchBar from '../SearchBar';

const AppBarLogged: React.FC = () => {
    
    return (
        <header className="py-4 w-screen">
            <div className="container mx-auto flex justify-between items-center w-full">
                {/* Logo */}
                <div className="text-black text-2xl font-bold cursor-pointer hidden lg:block">
                    <span>She Share Vacation Rentals</span>
                </div>
                <div className='w-5/6 lg:hidden'>
                    <SearchBar/>
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
                <div>
                    <button className='text-blue-200'>
                    <div className="h-10 w-10"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={{display: "block", height: "100%", width: "100%", color:"blue" }}><path d="M16 .7C7.56.7.7 7.56.7 16S7.56 31.3 16 31.3 31.3 24.44 31.3 16 24.44.7 16 .7zm0 28c-4.02 0-7.6-1.88-9.93-4.81a12.43 12.43 0 0 1 6.45-4.4A6.5 6.5 0 0 1 9.5 14a6.5 6.5 0 0 1 13 0 6.51 6.51 0 0 1-3.02 5.5 12.42 12.42 0 0 1 6.45 4.4A12.67 12.67 0 0 1 16 28.7z"></path></svg></div>
                    </button>
                </div>
                
            </div>
        </header>
    );
};

export default AppBarLogged;
