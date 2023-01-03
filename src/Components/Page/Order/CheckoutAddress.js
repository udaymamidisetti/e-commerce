import { useEffect, useRef, useState } from "react";
import { Dialog, Popover, RadioGroup, Tab, Transition } from '@headlessui/react'
import { MenuIcon, QuestionMarkCircleIcon, SearchIcon, ShoppingBagIcon, XIcon } from '@heroicons/react/outline'
import { CheckCircleIcon, TrashIcon } from '@heroicons/react/solid'
import { Link } from 'react-router-dom'
import { BiAddToQueue } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { addAddress } from "../../Redux/Actions/actions";
import { addCheckoutAddress } from "../../Redux/Actions/checkoutAction";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

function CheckoutAddress() {
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false)
    const { address } = useSelector((item) => item.reducer);
    const [selectedDeliveryMethod, setSelectedDeliveryMethod] = useState()
    const addressForm = useRef();
    const handleForm = (e) => {
        e.preventDefault();
        let formData = new FormData(addressForm.current);
        setOpen(false);
        dispatch(addAddress(formData));
    }
    useEffect(() => {
        dispatch(addCheckoutAddress(selectedDeliveryMethod))
    }, [dispatch]);
    return (
        <form ref={addressForm}>
            <div className="">
                <RadioGroup value={selectedDeliveryMethod} onChange={setSelectedDeliveryMethod}>
                    <RadioGroup.Label className="text-lg font-medium text-gray-900">Select from Saved Address</RadioGroup.Label>

                    <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
                        {address.map((adr, i) => (
                            <RadioGroup.Option
                                key={i}
                                value={adr}
                                className={({ checked, active }) =>
                                    classNames(
                                        checked ? 'border-transparent' : 'border-gray-300',
                                        active ? 'ring-2 ring-kazari-500' : '',
                                        'relative bg-white border rounded-lg shadow-sm p-4 flex cursor-pointer focus:outline-none'
                                    )
                                }
                            >
                                {({ checked, active }) => (
                                    <>
                                        <div>
                                            <dt className="font-medium text-gray-900">Delivery Address</dt>
                                            <dd className="mt-3 text-gray-500">
                                                <span className="block">{adr.aprtment}</span>
                                                <span className="block">{adr.address}</span>
                                                <span className="block">{`${adr.city}, ${adr.state}-${adr.pincode}`}</span>
                                            </dd>
                                        </div>
                                        {checked ? (
                                            <CheckCircleIcon className="h-5 w-5 text-kazari-600" aria-hidden="true" />
                                        ) : null}
                                        <div
                                            className={classNames(
                                                active ? 'border' : 'border-2',
                                                checked ? 'border-kazari-500' : 'border-transparent',
                                                'absolute -inset-px rounded-lg pointer-events-none'
                                            )}
                                            aria-hidden="true"
                                        />
                                    </>
                                )}
                            </RadioGroup.Option>
                        ))}
                        <div className={classNames(
                            false ? 'border-transparent' : 'border-gray-300',
                            false ? 'ring-2 ring-kazari-500' : '',
                            'relative bg-white border rounded-lg shadow-sm p-4 flex cursor-pointer focus:outline-none'
                        )}>
                            <div className=' flex items-center mx-auto'>
                                <div><BiAddToQueue /></div>
                                <div> &nbsp;</div>
                                <div onClick={() => setOpen(true)} className="font-medium text-kazari-600"> Add Delivery Address</div>
                            </div>
                        </div>
                    </div>
                </RadioGroup>
            </div>
            <div className={open ? "mt-10 pt-10 border-t border-gray-200 " : "hidden"}>
                <h2 className="text-lg font-medium text-gray-900">Contact information </h2>

                <div className="mt-4">
                    <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                        Email address
                    </label>
                    <div className="mt-1">
                        <input
                            type="email"
                            id="email-address"
                            name="email"
                            autoComplete="email"
                            className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-kazari-500 focus:border-kazari-500 sm:text-sm"
                        />
                    </div>
                </div>
            </div>

            <div className={open ? "mt-10 border-t border-gray-200 pt-10" : "hidden"}>
                <h2 className="text-lg font-medium text-gray-900">Shipping information <span className='text-kazari-600 text-base float-right' onClick={() => setOpen(false)}>Close</span></h2>

                <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
                    <div>
                        <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                            First name
                        </label>
                        <div className="mt-1">
                            <input
                                type="text"
                                id="first-name"
                                name="first_name"
                                autoComplete="given-name"
                                className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-kazari-500 focus:border-kazari-500 sm:text-sm"
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                            Last name
                        </label>
                        <div className="mt-1">
                            <input
                                type="text"
                                id="last-name"
                                name="last_name"
                                autoComplete="family-name"
                                className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-kazari-500 focus:border-kazari-500 sm:text-sm"
                            />
                        </div>
                    </div>

                    <div className="sm:col-span-2">
                        <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                            Address
                        </label>
                        <div className="mt-1">
                            <input
                                type="text"
                                name="address"
                                id="address"
                                autoComplete="address"
                                className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-kazari-500 focus:border-kazari-500 sm:text-sm"
                            />
                        </div>
                    </div>

                    <div className="sm:col-span-2">
                        <label htmlFor="apartment" className="block text-sm font-medium text-gray-700">
                            Apartment, suite, etc.
                        </label>
                        <div className="mt-1">
                            <input
                                type="text"
                                name="apartment"
                                id="apartment"
                                className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-kazari-500 focus:border-kazari-500 sm:text-sm"
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                            City
                        </label>
                        <div className="mt-1">
                            <input
                                type="text"
                                name="city"
                                id="city"
                                autoComplete="address-level2"
                                className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-kazari-500 focus:border-kazari-500 sm:text-sm"
                            />
                        </div>
                    </div>

                    {/* <div>
                        <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                            Country
                        </label>
                        <div className="mt-1">
                            <select
                                id="country"
                                name="country"
                                autoComplete="country-name"
                                className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-kazari-500 focus:border-kazari-500 sm:text-sm"
                            >
                                <option>United States</option>
                                <option>Canada</option>
                                <option>Mexico</option>
                            </select>
                        </div>
                    </div> */}

                    <div>
                        <label htmlFor="region" className="block text-sm font-medium text-gray-700">
                            State / Province
                        </label>
                        <div className="mt-1">
                            <input
                                type="text"
                                name="state"
                                id="region"
                                autoComplete="address-level1"
                                className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-kazari-500 focus:border-kazari-500 sm:text-sm"
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="postal-code" className="block text-sm font-medium text-gray-700">
                            Postal code
                        </label>
                        <div className="mt-1">
                            <input
                                type="text"
                                name="pincode"
                                id="postal-code"
                                autoComplete="postal-code"
                                className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-kazari-500 focus:border-kazari-500 sm:text-sm"
                            />
                        </div>
                    </div>

                    <div className="sm:col-span-2">
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                            Phone
                        </label>
                        <div className="mt-1">
                            <input
                                type="text"
                                name="phone"
                                id="phone"
                                autoComplete="tel"
                                className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-kazari-500 focus:border-kazari-500 sm:text-sm"
                            />
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <button onClick={handleForm}
                            type="submit"
                            className="mt-1 bg-kazari-600 border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-kazari-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-kazari-500"
                        >
                            Add Address
                        </button>
                    </div>
                </div>
            </div>
        </form>
    );
}

export default CheckoutAddress;