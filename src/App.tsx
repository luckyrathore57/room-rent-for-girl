// import React, { useState } from 'react';
// import RegistrationModal from './componets/Registration';
// import LoginModal from './componets/LoginModal';
import  Feed  from './componets/Feed';
import AppBar from './componets/AppBar/AppBar';
import RentOrShare from './componets/RentOrShare';
import FilterRequirement from './componets/FilterRequirement';
import CitiesScrollFeed from './componets/Home/CitesScrollFeed';

const RegistrationPage: React.FC = () => {

  // const [isOpen,setIsOpen]=useState<boolean>(true);


  return (
      <div >

        {/* <RegistrationModal isOpen={isOpen} onClose={()=>{setIsOpen(false)}}/> */}
        {/* <LoginModal isOpen={isOpen} onClose={()=>{setIsOpen(false)}}/> */}
        <div className='shadow-sm '>
          <AppBar/>
        </div>
      <div>

        <div className='flex justify-center shadow-sm'>
          <RentOrShare/>
        </div>
        <div className='flex justify-center shadow-sm w-screen'>
          <FilterRequirement/>

        </div>
        <div>
          <CitiesScrollFeed/>
        </div>
        
        <div className='flex justify-center'>
          <Feed/>
        </div>
        </div>
      </div>

  );
};

export default RegistrationPage;

