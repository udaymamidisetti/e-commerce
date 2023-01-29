import { EyeIcon, EyeOffIcon } from "@heroicons/react/outline";
import { useSelector } from "react-redux";
import Password from "./Password";

function Account() {
    const { userData } = useSelector((item) => item.reducer)
    return (
        <form action="#" method="POST">
            <div className="shadow sm:overflow-hidden sm:rounded-md">
                <div className="space-y-6 bg-white py-6 px-4 sm:p-6">
                    <div>
                        <h3 className="text-lg font-medium leading-6 text-gray-900">Personal Information</h3>
                    </div>

                    <div className="grid grid-cols-6 gap-6">
                        <div className="col-span-6 sm:col-span-3">
                            <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                                Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                autoComplete="name"
                                value={userData.name}
                                className="mt-1 block  w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-kazari-500 focus:outline-none focus:ring-kazari-500 sm:text-sm"
                            />
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                            <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                                Email address
                            </label>
                            <input
                                type="text"
                                name="email"
                                id="email-address"
                                autoComplete="email"
                                disabled="true"
                                value={userData.email}
                                className="mt-1 block bg-gray-100 w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-kazari-500 focus:outline-none focus:ring-kazari-500 sm:text-sm"
                            />
                        </div>
                        <div className="col-span-6 sm:col-span-3">
                            <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                                Phone
                            </label>
                            <input
                                type="text"
                                name="phone"
                                id="email-address"
                                autoComplete="phone"
                                disabled={true}
                                value={userData.phone}
                                className="mt-1 block bg-gray-100 w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-kazari-500 focus:outline-none focus:ring-kazari-500 sm:text-sm"
                            />
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
                {/* <Password /> */}
            </div>
        </form>
    );
}

export default Account;