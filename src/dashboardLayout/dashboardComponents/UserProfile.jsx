import React, { useContext } from 'react';
import { FaUserCircle, FaSignOutAlt } from 'react-icons/fa';
import { FiSettings } from 'react-icons/fi';
import { AuthContext } from '../../context/AuthContext';
import { Link, useNavigate } from 'react-router';
import { Bounce, toast } from 'react-toastify';

const UserProfile = () => {

    const {activeUser, logOut} = useContext(AuthContext)
    const navigate = useNavigate();
    const handlelogOut = () =>{
            logOut()
            .then(() => {
                toast('Logout Done', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    transition: Bounce,
                    });
                    navigate('/');
                })
        }

  return (
    <div className="bg-white p-6 rounded-xl shadow-md  text-center mt-4">
      <div className="flex items-center justify-center gap-2 mb-4 text-purple-600 text-xl font-semibold">
        <FaUserCircle /> Profile
      </div>

      <div className="flex items-center gap-4 justify-center mb-4">
        
        <div className="bg-green-500 text-white text-xl font-bold rounded-full h-12 w-12 flex items-center justify-center uppercase">
            <img 
                className=" w-10 h-10 rounded-full border-2 border-green-500 "
                src={activeUser.photoURL || "/default-avatar.png"}
                alt=""
                title={activeUser.displayName}
            />
        </div>
        <div className="text-left">
          <h2 className="text-lg font-bold text-black">{activeUser.displayName}</h2>
          <p className="text-sm text-gray-600">{activeUser.email}</p>
        </div>
      </div>
        <div className="flex justify-center">
            <Link onClick={()=>{handlelogOut()}} className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition"> LogOut</Link>
</div>

    </div>
  );
};

export default UserProfile;
