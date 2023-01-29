import { EyeIcon, EyeOffIcon } from "@heroicons/react/outline";
import { useSelector } from "react-redux";

function Account() {
    const { userData } = useSelector((item) => item.reducer)
    const handleCheck = () => {

    }
    return (
        <form action="#" method="POST">
            <div className="shadow sm:overflow-hidden sm:rounded-md">
                <div className="space-y-6 bg-white py-6 px-4 sm:p-6">
                    <div>
                        <h3 className="text-lg font-medium leading-6 text-gray-900">Change Password</h3>
                    </div>

                    <div className="grid grid-cols-6 gap-6">
                        <div className="col-span-6 sm:col-span-3 relative relative flex items-center">
                            <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                                Old Password
                            </label>
                            <input
                                type="password"
                                name="old_password"
                                autoComplete="given-name"
                                className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-kazari-500 focus:outline-none focus:ring-kazari-500 sm:text-sm"
                            />
                            <div className="absolute inset-y-0 right-0 flex py-1.5 pr-1.5">
                                {/* <AiFillQuestionCircle className="h-5" /> */}
                                <button onClick={handleCheck} className="inline-flex items-center border focus:border-kazari-500 border-gray-200 rounded px-2 text-sm font-sans font-medium text-gray-600">
                                    Check
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-6 gap-6">
                        <div className="col-span-6 sm:col-span-3 relative relative flex items-center">
                            <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                                Password
                            </label>
                            <input
                                type="password"
                                name="password"
                                autoComplete="given-name"
                                className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-kazari-500 focus:outline-none focus:ring-kazari-500 sm:text-sm"
                            />
                            <div className="absolute inset-y-0 right-0 flex py-1.5 pr-1.5">
                                {/* <AiFillQuestionCircle className="h-5" /> */}
                                <button onClick={handleCheck} className="inline-flex items-center border focus:border-kazari-500 border-gray-200 rounded px-2 text-sm font-sans font-medium text-gray-600">
                                    Check
                                </button>
                            </div>
                        </div>

                        <div className="col-span-6 sm:col-span-3 relative relative flex items-center">
                            <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                                Confirm Password
                            </label>
                            <input
                                type="password"
                                id="email-address"
                                autoComplete="email"
                                className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-kazari-500 focus:outline-none focus:ring-kazari-500 sm:text-sm"
                            />
                            <div className="absolute inset-y-0 right-0 flex py-1.5 pr-1.5">
                                {/* <AiFillQuestionCircle className="h-5" /> */}
                                <button onClick={handleCheck} className="inline-flex items-center border focus:border-kazari-500 border-gray-200 rounded px-2 text-sm font-sans font-medium text-gray-600">
                                    Check
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                    <button
                        type="submit"
                        className="inline-flex justify-center rounded-md border border-transparent bg-kazari-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-kazari-700 focus:outline-none focus:ring-2 focus:ring-kazari-500 focus:ring-offset-2"
                    >
                        Save
                    </button>
                </div>
            </div>
        </form>
    );
}

export default Account;