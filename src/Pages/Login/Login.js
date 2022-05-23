import React from 'react';
import logo from '../../logo.svg';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import Loading from '../Shared/Loading';

const Login = () => {
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [signInWithEmailAndPassword, user, loading, error,] = useSignInWithEmailAndPassword(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();

    let signInError;

    if(loading || googleLoading ){
        return <Loading></Loading>
    }

    if(error || googleError){
        signInError = <p className='text-red-500'><small>{error?.message || googleError?.message}</small></p>
    }

    if (googleUser) {
        // console.log(googleUser);
    }

    const onSubmit = data => {
        console.log(data);
        signInWithEmailAndPassword(data.email, data.password);
    }

    //logging in with google
    // const handleSignInWithGoogle = () => {
    //     signInWithGoogle();
    // }

    return (
        <div className='bg-slate-100 py-20'>

            <div className="mt-16 w-full max-w-sm p-6 m-auto bg-white rounded-md shadow-md">
                <div className="flex justify-center ">
                    <img src={logo} alt="logo" />
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="mt-6 ">
                    <div>
                        <label for="username" className="block text-sm ">Email</label>
                        <input type="email" placeholder='Your Email'
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md  dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" 
                            {...register("email", { 
                                required: { 
                                value: true ,
                                message: 'Email is Required' 
                            },
                            pattern: {
                                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                message: 'Please provide a valid Email address'
                            }
                            })}
                            />
                            {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                            {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                        {/* <span className="label-text-alt">Alt label</span> */}
                    </div>

                    <div className="mt-4">
                        <div className="flex items-center justify-between">
                            <label for="password" className="block text-sm ">Password</label>
                            <a href="#" className="text-xs text-gray-600 dark:text-gray-400 hover:underline">Forget Password?</a>
                        </div>

                        <input type="password" placeholder='Password'
                            className="mb-7 block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md   dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" 
                            {...register("password", { 
                                required: {
                                value:true ,
                                message: " Password field can't be empty" 
                            },
                            minLength: {
                                value: 6,
                                message: 'Atleast 6 characters or longer'
                            }
                            })}
                            />
                            {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                            {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                        {/* <span className="label-text-alt">Alt label</span> */}
                    </div>

                    {/* show error message */}
                    {signInError}

                    {/* Login Button */}
                    <div className="">
                        <input type="submit" value='Login'
                            className="mb-2 w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
                            
                        />
                    </div>
                </form>

                {/* OR */}
                <div className="flex items-center justify-between mt-6">
                    <span className="w-2/5 border-b dark:border-gray-600 lg:w-2/5"></span>

                    <p className="text-xs text-center text-gray-500 uppercase dark:text-gray-400 hover:underline">or</p>

                    <span className="w-2/5 border-b dark:border-gray-400 lg:w-2/5"></span>
                </div>

                {/*   GOOGLE SIGN IN     */}
                <div className="flex items-center mt-6 -mx-2 ">
                    <button onClick={() => signInWithGoogle()} className="border-gray-300 w-full flex items-center justify-center mt-4 text-gray-600 transition-colors duration-200 transform border rounded-lg  dark:hover:bg-slate-200" >
                        <div className="py-2 pl-4">
                            <svg className="w-6 h-6" viewBox="0 0 40 40">
                                <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#FFC107" />
                                <path d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z" fill="#FF3D00" />
                                <path d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z" fill="#4CAF50" />
                                <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#1976D2" />
                            </svg>
                        </div>

                        <span className="w-full  py-3 font-bold text-center">Sign in with Google</span>
                    </button>


                </div>

                <p className="mt-8 text-xs font-light text-center text-gray-400 "> Don't have an account? <a href="#"
                    className="font-medium text-gray-700  hover:underline">Create One</a></p>
            </div>
        </div>
    );
};

export default Login;