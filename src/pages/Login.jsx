
import { useContext } from 'react';
import { Link, useLocation, useNavigate, } from 'react-router';
import { AuthContext } from '../context/AuthContext';
import { Bounce, toast } from 'react-toastify';

const Login = () => {

    const {login, GoogleLogin} = useContext(AuthContext)
    const location = useLocation();
    const navigate = useNavigate();

    const handlelogin = e =>{
         e.preventDefault();
         const email = e.target.email.value;
         const password = e.target.password.value;

        login(email, password)
        .then(() => {
            toast.success('Wow successfully login', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                transition: Bounce,
                });
            navigate(location?.state || '/');
                    
                })
        .catch(() => {
                    toast.error('Login failed due to the password and email rong', {
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
                });

    }

    const handleGoole = () =>{
        GoogleLogin()
        .then(() => {
            toast.success('Wow successfully login', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                transition: Bounce,
                });
            navigate(location?.state || '/');
        })
        .catch(() => {
                toast.error('Login failed ', {
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
                });
    }
    
    return (
        <div className='w-11/12 mx-auto min-h-[calc(100vh-150px)]'>
            <div className="flex flex-col mx-auto border-1 justify-items-center my-5 md:my-20 max-w-md p-6 rounded-md sm:p-10 ">
                <div className="mb-8 text-center">
                    <h1 className="my-3 text-4xl font-bold">Great to have you back!</h1>
                </div>
                <form onSubmit={handlelogin} className="space-y-12">
                    <div className="space-y-4">
                        <button onClick={()=> handleGoole()} aria-label="Login with Google" type="button" className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-600 focus:dark:[#82B440]">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                                <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                            </svg>
                            <p>Login with Google</p>
                        </button>
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm">Email address</label>
                            <input type="email" name="email"  placeholder="Enter your email" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 " />
                        </div>
                        <div>
                            <div className="flex justify-between mb-2">
                                <label htmlFor="password" className="text-sm">Password</label>
                                <a rel="noopener noreferrer" href="#" className="text-xs hover:underline dark:text-gray-600">Forgot password?</a>
                            </div>
                            <input type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 " />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <div>
                            <button type="submite" className="w-full px-8 py-3 font-semibold rounded-md hover:bg-green-600 cursor-pointer bg-green-500 dark:text-gray-50">Sign in</button>
                        </div>
                        <p className="px-6 text-sm text-center dark:text-gray-600">New here?
                            <Link to="/register" className="hover:underline dark:text-blue-500">Register here</Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;