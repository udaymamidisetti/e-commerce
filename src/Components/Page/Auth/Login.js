import Logo from "../../Common/Logo.svg";
import { BASE_URL } from "../../Redux/Actions/actionTypes";
import { FcGoogle } from 'react-icons/fc';
import axios from 'axios';
import { userLogin, userForgot } from './../../Redux/Actions/userActions';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";
import { useDispatch, } from 'react-redux';
import { toast } from 'react-toastify';
import useFetch from "../../../hooks/useFetch";
function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [emailVerify, setEmailVerify] = useState(true);
    const [email, setEmail] = useState("");
    const [forgot, setForgot] = useState(false);
    const { handleGoogle, loading, error } = useFetch(
        "http://localhost:5000/api/auth/login-google"
    );

    useEffect(() => {
        /* global google */
        if (window.google) {
            google.accounts.id.initialize({
                client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
                callback: handleGoogle,
            });

            google.accounts.id.renderButton(document.getElementById("loginDiv"), {
                // type: "standard",
                theme: "filled_blue",
                size: "large",
                text: "signin_with",
                shape: "rectangular",
            });

            // google.accounts.id.prompt()
        }
    }, [handleGoogle]);
    const handleSubmit = async (event) => {
        event.preventDefault();

        let formData = new FormData(event.currentTarget);

        setEmail(formData.get("email"));
        dispatch(userLogin(formData, navigate, setEmailVerify));
    }
    const handleForgot = async (event) => {
        event.preventDefault();
        let formData = new FormData(event.currentTarget);
        try {
            const res = await axios.post(`${BASE_URL}api/auth/forgot-password`, formData);
            forgot(false);
            toast.success(res.data.message);
        } catch (error) {
            toast.error(error.response.data.message);
        }
    }
    return (
        <>
            <div className={"min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8 " + ((forgot) ? "hidden" : "")}>
                <div className="sm:mx-auto sm:w-full sm:max-w-md md:w-full lg:w-full">
                    <img
                        className="mx-auto h-24 w-auto"
                        src={Logo}
                        alt="Kazari main Logo"
                    />
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
                    <p className="mt-2 text-center text-sm text-gray-600">
                    </p>
                </div>

                <div className="mt-2 sm:mx-auto sm:w-full sm:max-w-md">
                    <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    Email address
                                </label>
                                <div className="mt-1">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        required
                                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-kazari-500 focus:border-kazari-500 sm:text-sm"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                    Password
                                </label>
                                <div className="mt-1">
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        autoComplete="current-password"
                                        required
                                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-kazari-500 focus:border-kazari-500 sm:text-sm"
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
                                    <a onClick={() => setForgot(true)} className="font-medium text-kazari-600 hover:text-kazari-500">
                                        Forgot your password?
                                    </a>
                                </div>
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-kazari-600 hover:bg-kazari-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-kazari-500"
                                >
                                    Sign in
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
                                <div className="flex justify-center" id="loginDiv">
                                    <a
                                        className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                                    >
                                        <FcGoogle className="w-5 h-5" />
                                        <span className=" text-kazari-600">&nbsp;Continue with Google</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={"min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8 " + ((forgot) ? "" : "hidden")}>
                <div className="sm:mx-auto sm:w-full sm:max-w-md md:w-full lg:w-full">
                    <img
                        className="mx-auto h-24 w-auto"
                        src={Logo}
                        alt="Kazari main Logo"
                    />
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
                    <p className="mt-2 text-center text-sm text-gray-600">
                    </p>
                </div>

                <div className="mt-2 sm:mx-auto sm:w-full sm:max-w-md">
                    <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                        <form className="space-y-6" onSubmit={handleForgot}>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    Email address
                                </label>
                                <div className="mt-1">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        required
                                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-kazari-500 focus:border-kazari-500 sm:text-sm"
                                    />
                                </div>
                            </div>

                            <div className="flex items-center justify-between">
                                <div className="flex items-center">

                                </div>

                                <div className="text-sm">
                                    <a onClick={() => setForgot(false)} className="font-medium text-kazari-600 hover:text-kazari-500">
                                        Login to your account?
                                    </a>
                                </div>
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-kazari-600 hover:bg-kazari-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-kazari-500"
                                >
                                    Forgot Password
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
                                <div id="loginDiv">
                                    <a
                                        className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                                    >
                                        <FcGoogle className="w-5 h-5" />
                                        <span className=" text-kazari-600">&nbsp;Continue with Google</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Login;
