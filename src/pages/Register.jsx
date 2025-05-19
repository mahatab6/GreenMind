import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Helmet } from 'react-helmet';
import { AuthContext } from '../context/AuthContext';



const Register = () => {

    const [showPassword, setShowPassword] = useState(false);
    const {register} = useContext(AuthContext);
     const navigate = useNavigate();

    const handleform =(e)=> {
        e.preventDefault();
        const name = e.target.name.value;
        const photoURL = e.target.photoURL.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        const passwordRegExp = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
        if (!passwordRegExp.test(password)) {
            alert("Password must be at least 6 characters long and include both uppercase and lowercase letters.");
            return;
        }

        register(email,password)  
            .then(result => {
                    console.log(result);
                    navigate('/');
                })
            .catch(error => {
                    console.log(error);
                });

    }
    return (
        <div className='w-11/12 mx-auto min-h-[calc(100vh-150px)]'>
            <Helmet>
                <title>Register | GreenMind</title>
            </Helmet>
            <div className="flex flex-col mx-auto border-1 justify-items-center my-5 md:my-20 max-w-md p-6 rounded-md sm:p-10 ">
                <div className="mb-8 text-center">
                    <h1 className="my-3 text-4xl font-bold">Register a New Account</h1>
                    <p className="text-sm dark:text-gray-600">Join us today and unlock the full experience. Just a few steps and you're in!</p>
                </div>
                <form onSubmit={handleform} className="space-y-12">
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block mb-2 text-sm">Name</label>
                            <input type="text" name="name"  placeholder="Enter your name" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 " />
                        </div>
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm">Email address</label>
                            <input type="email" name="email"  placeholder="Enter your email" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 " />
                        </div>
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm">PhotoURL</label>
                            <input type="text" name="photoURL"  placeholder="Enter your Photo URL" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 " />
                        </div>
                        <div className='relative'>
                            <div className="flex justify-between mb-2">
                                <label htmlFor="password" className="text-sm">Password</label>
                            </div>
                            <input type={showPassword? "text":"password"} name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 " />
                             <div className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer pt-5"onClick={() => setShowPassword(prevState => !prevState)} 
                                    >
                                        {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
                             </div>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <div>
                            <button type="submit" className="w-full px-8 py-3 font-semibold rounded-md dark:bg-[#82B440] dark:text-gray-50">Sign in</button>
                        </div>
                        <p className="px-6 text-sm text-center dark:text-gray-600">Already have an Green Mind Account? 
                            <Link to="/login" className="hover:underline dark:text-blue-500">Login here</Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;