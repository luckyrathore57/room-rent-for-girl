import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';


interface FormData {
  username: string;
  email: string;
  password: string;
}

const RegistrationModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<FormData>({
    username: '',
    email: '',
    password: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you can perform your registration logic
    console.log('Form submitted with data:', formData);
    onClose();
  };

  const onGoogleLogin=()=>{
    
  }
  const onFacebookLogin=()=>{
    
  }

  if (!isOpen) return null;

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen">
        <div className="relative bg-white w-full max-w-md p-6 rounded-lg shadow-lg">
          <div>
            <h2 className="text-center text-3xl font-extrabold text-gray-900">Registration</h2>
            <button onClick={onClose} className="absolute top-0 right-0 m-4 text-gray-500 hover:text-gray-700">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="mt-8 space-y-2">
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                  Username:
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  required
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password:
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                />
              </div>
              <div>
               <p className=' text-xs mb-2'>username-demouser demo-account-demo@gmail.com, demo-password-12345678</p>
             </div>
             <div>
               <button
                 type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#F94892] hover:bg-[#E60965] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#F94892]"
               >
                 Register
               </button>
             </div>
            </form>
            <div className="text-center">
            <div className="flex items-center justify-center mt-0 mb-4">
                <div className="border-b border-gray-400 w-full"></div> {/* Left line */}
                <div className="mx-2 text-xs">or</div> {/* Centered element */}
                <div className="border-b border-gray-400 w-full"></div> {/* Right line */}
            </div>
              <div>
                {/* Google Login Button */}
                <button
                  className="inline-flex items-center justify-center w-full py-2 px-4 border border-black rounded-md shadow-sm text-sm font-medium text-black bg-white hover:bg-gray-100 "
                  onClick={onGoogleLogin}
                >
                  <span className="mr-2">
                  <FontAwesomeIcon icon={faGoogle} />
                  </span>
                  Google
                </button>

              </div>
              <div className="mt-2">
                {/* Facebook Login Button */}
                <button
                  className="inline-flex items-center justify-center w-full py-2 px-4 border border-black rounded-md shadow-sm text-sm font-medium text-black bg-white hover:bg-gray-100 "
                  onClick={onFacebookLogin}
                >
                  <span className="mr-2">
                    <FontAwesomeIcon icon={faFacebook} />
                  </span>
                  Facebook
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationModal;

