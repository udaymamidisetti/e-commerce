import { FcGoogle } from 'react-icons/fc';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../Common/Logo.svg';
import { userSignup } from '../../Redux/Actions/userActions';
import { useDispatch } from 'react-redux';
import { useEffect, useRef, useState } from 'react';
import useFetch from '../../../hooks/useFetch';
function SignUp() {
    const navigate = useNavigate();
    const [flag, setFlag] = useState(false);
    const otpInput = useRef();
    const [otp, otpFlag] = useState(false);
    const [readonly, setReadonly] = useState(false);
    const dispatch = useDispatch();
    const { handleGoogle, loading, error } = useFetch(
        "http://localhost:5000/api/auth/sign-up-google"
    );
    useEffect(() => {
        /* global google */
        if (window.google) {
            google.accounts.id.initialize({
                client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
                callback: handleGoogle,
            });

            google.accounts.id.renderButton(document.getElementById("signUpDiv"), {
                // type: "standard",
                theme: "filled_blue",
                size: "large",
                text: "continue_with",
                shape: "rectangular",
            });

            // google.accounts.id.prompt()
        }
    }, [handleGoogle]);
    const handleSubmit = (event) => {
        event.preventDefault();
        let formData = new FormData(event.currentTarget);

        // dispatch(userSignup(formData, navigate));
    }
    const getOTP = (phone) => {
        dispatch(getOTP(phone));
        setFlag(true);
    }
    const handleOTP = () => {
        // dispatch(otpVerify(otpInput.target.value));
    }
    return (
        <>
            <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-md">
                    <img
                        className="mx-auto h-24 w-auto"
                        src={Logo}
                        alt="Kazari main Logo"
                    />
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
                    {/* <p className="mt-2 text-center text-sm text-gray-600">
                        Or{' '}
                        <a href="#" className="font-medium text-kazari-600 hover:text-kazari-500">
                            start your 14-day free trial
                        </a>
                    </p> */}
                </div>

                <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                    <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                        <form className="space-y-6" onClick={handleSubmit}>
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                    Full Name
                                </label>
                                <div className="mt-1">
                                    <input id="name" name="name" type="text" autoComplete="name" required className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-kazari-500 focus:border-kazari-500 sm:text-sm"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    Email address
                                </label>
                                <div className="mt-1">
                                    <input id="email" name="email" type="email" autoComplete="email" required className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-kazari-500 focus:border-kazari-500 sm:text-sm"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    Phone No.
                                </label>
                                <div className="mt-1">
                                    <input id="phone" readOnly={readonly} onChange={(e) => e.target.value.length == 10 ? getOTP(e.target.value) : setFlag(false)} name="phone" type="Number" autoComplete="phone" required className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-kazari-500 focus:border-kazari-500 sm:text-sm"
                                    />
                                </div>
                            </div>
                            {flag &&
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                        OTP
                                    </label>
                                    <div className="mt-1 relative">
                                        <input ref={otpInput} id="phone" onChange={(e) => e.target.value.length == 10 ? true : e.target.value = e.target.value.substring(0, 4)} readOnly={readonly} name="otp" type="Number" autoComplete="phone" required className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-kazari-500 focus:border-kazari-500 sm:text-sm"
                                        />
                                        <div className="absolute inset-y-0 right-0 flex py-1.5 pr-1.5">
                                            {/* <AiFillQuestionCircle className="h-5" /> */}
                                            <button onClick={handleOTP} className="inline-flex items-center border focus:border-kazari-500 border-gray-200 rounded px-2 text-sm font-sans font-medium text-gray-600">
                                                Verify
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            }

                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                    Password
                                </label>
                                <div className="mt-1">
                                    <input id="password" name="password" type="password" autoComplete="current-password" required className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-kazari-500 focus:border-kazari-500 sm:text-sm"
                                    />
                                </div>
                            </div>

                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <input
                                        id="remember-me"
                                        name="remember-me"
                                        type="checkbox"
                                        className="h-4 w-4 text-kazari-600 focus:ring-kazari-500 border-gray-300 rounded"
                                    />
                                    <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                                        Remember me
                                    </label>
                                </div>

                                <div className="text-sm">
                                    <Link onClick={() => navigate("/login")} className="font-medium text-kazari-600 hover:text-kazari-500">
                                        Already have an account?
                                    </Link>
                                </div>
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-kazari-600 hover:bg-kazari-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-kazari-500"
                                >
                                    Sign Up
                                </button>
                            </div>
                        </form>

                        <div className="mt-6">
                            <div className="relative">
                                <div className="absolute inset-0 flex items-center">
                                    <div className="w-full border-t border-gray-300" />
                                </div>
                                <div className="relative flex justify-center text-sm">
                                    <span className="px-2 bg-white text-gray-500">Or continue with</span>
                                </div>
                            </div>

                            <div className="mt-6 grid grid-cols-1 gap-3">
                                <div className='flex justify-center' id="signUpDiv">
                                    <Link
                                        className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                                    >
                                        <FcGoogle className="w-5 h-5" />
                                        <span className=" text-kazari-600">&nbsp;Continue with Google</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default SignUp;
