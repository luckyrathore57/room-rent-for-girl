import { faAdd, faSubtract } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

const GuestSelector = () => {
  const [guests, setGuests] = useState(1);


  const handleGuestAdd = () => {
    setGuests(guests=>guests+1);
  };
  const handleGuestSubtract = () => {
    setGuests(guests=>guests-1);
  };


  return (
    <div className="mt-4 flex items-center" >
      <label className="block text-gray-700 text-sm font-bold mb-2 mr-5" htmlFor="guests">
        Number of Guests
      </label>
      <div className='flex items-center bg-[#FBE5E5] rounded-full gap-2'>
        <button className=' shadow-sm h-8 w-8 bg-[#FBE5E5] rounded-full disabled:bg-white disabled:cursor-not-allowed disabled:border-gray-50' disabled={guests<=0} onClick={handleGuestSubtract}>
            <FontAwesomeIcon icon={faSubtract}/>
        </button>
        <span>{guests}</span>
        <button  className=' shadow-sm h-8 w-8 bg-[#FBE5E5] rounded-full disabled:bg-white disabled:cursor-not-allowed disabled:border-gray-50' onClick={handleGuestAdd} disabled={guests>=10}>
            <FontAwesomeIcon icon={faAdd}/>

        </button>
      </div>
    </div>
  );
};

export default GuestSelector;
