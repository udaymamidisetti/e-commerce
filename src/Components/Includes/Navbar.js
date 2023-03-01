import { Fragment, useEffect } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { SearchIcon } from '@heroicons/react/solid'
import { BellIcon, MenuIcon, XIcon, UserIcon, ShoppingCartIcon } from '@heroicons/react/outline'
import { useSelector, useDispatch } from "react-redux";
import { getCategory } from "../Redux/Actions/categoryAction";
import Logo from '../Common/Logo.svg';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import Cart from './../Page/Cart/Cart';
import Notification from './../Page/Notification/Notification';
import Loader from '../Common/Loader';
import CategoriesTab from './CategoriesTab';
import { BASE_TOKEN } from '../Redux/Actions/actionTypes';
import { getCart } from '../Redux/Actions/cartAction';
import { userDataStore } from '../Redux/Actions/userActions';
import { getWishList } from '../Redux/Actions/wishlistAction';
import { search } from '../Redux/Actions/productAction';
import Search from './Search';
// import { getProduct } from './../Redux/Actions/productAction';
// import { getCart } from './../Redux/Actions/cartAction';
const user = {
    name: 'Tom Cook',
    email: 'tom@example.com',
    imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}
// const navigation = [
//     { name: 'Dashboard', href: '#', current: true },
//     { name: 'Team', href: '#', current: false },
//     { name: 'Projects', href: '#', current: false },
//     { name: 'Calendar', href: '#', current: false },
// ]


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

function Navbar() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { cartLoading, cart, itemCount } = useSelector((item) => item.cartReducer);
    const { categories, subcategories, loading } = useSelector((item) => item.categoryReducer);
    const userData = useSelector((item) => item.reducer.userData);
    const userFlag = Object.entries(userData).length == 0;
    let userNavigation = [
        { name: "Account", href: '/user/profile' },
        { name: 'Orders', href: '/user/orders' },
        { name: 'Wishlist', href: '/user/wishlist' },
        { name: 'Sign out', href: '/log-out' },
    ]
    if (userFlag) {
        userNavigation = [
            { name: 'Login', href: '/login' },
            { name: 'Sign Up', href: '/sign-up' },
        ]
    }
    const checkLogin = () => {
        if (userFlag) {
            navigate("/login");
        }
    }

    useEffect(() => {
        if (BASE_TOKEN) {
            dispatch(userDataStore(BASE_TOKEN));
            dispatch(getCart());
            dispatch(getWishList());
        }
        dispatch(getCategory());
    }, [dispatch]);

    return (
        <>
            {loading ? <Loader /> :
                <Disclosure as="header" className="bg-white shadow z-full fixed w-full ">
                    {({ open }) => (
                        <>
                            <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:divide-y lg:divide-gray-200 lg:px-8">
                                <div className="relative h-16 flex justify-between">
                                    <div className="relative z-10 px-2 flex lg:px-0">
                                        <div className="flex-shrink-0 flex items-center" onClick={() => navigate("/")}>
                                            <img
                                                className="block h-12 w-auto"
                                                src={Logo}
                                                alt="Kazari main Logo"
                                            />
                                        </div>
                                    </div>
                                    <div className="relative z-0 flex-1 px-2 flex items-center justify-center sm:absolute sm:inset-0 ">
                                        <Search />
                                        {/* <div className="w-full sm:max-w-xs ">
                                            <label htmlFor="search" className="sr-only">
                                                Search
                                            </label>
                                            <div className="relative">
                                                <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
                                                    <SearchIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                                </div>
                                                <input
                                                    id="search"
                                                    name="search"
                                                    className="block w-full bg-white border border-gray-300 rounded-md py-2 pl-10 pr-3 text-sm placeholder-gray-500 focus:outline-none focus:text-gray-900 focus:placeholder-gray-400 focus:ring-1 focus:ring-kazari-500 focus:border-kazari-500 sm:text-sm"
                                                    placeholder="Search"
                                                    type="search"
                                                    onKeyUp={handleSearch}
                                                />
                                            </div>
                                        </div> */}
                                    </div>
                                    <div className="relative z-10 flex items-center lg:hidden">
                                        {/* Mobile menu button */}
                                        <Disclosure.Button className="rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-kazari-500">
                                            <span className="sr-only">Open menu</span>
                                            {open ? (
                                                <XIcon className="block h-6 w-6" aria-hidden="true" />
                                            ) : (
                                                <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                                            )}
                                        </Disclosure.Button>
                                    </div>
                                    <div className="hidden lg:relative lg:z-10 lg:ml-4 lg:flex lg:items-center">
                                        {/* <button
                                    type="button"
                                    className="flex-shrink-0 bg-white rounded-full p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-kazari-500 ml-4"
                                >
                                    <span className="sr-only">View notifications</span>
                                    <BellIcon className="h-9 w-6" aria-hidden="true" />
                                </button> */}

                                        {/* Notofication dropdown */}
                                        {/* <Menu as="div" className="flex-shrink-0 relative ml-4">
                                            <div>
                                                <Menu.Button className="bg-white rounded-full flex focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-kazari-500">
                                                    <span className="sr-only">Open user menu</span>
                                                    <BellIcon onClick={checkLogin} className="h-8 w-8 p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-full" alt="" />
                                                </Menu.Button>
                                            </div>
                                            {(userFlag) ? "" :
                                                <Transition
                                                    as={Fragment}
                                                    enter="transition ease-out duration-100"
                                                    enterFrom="transform opacity-0 scale-95"
                                                    enterTo="transform opacity-100 scale-100"
                                                    leave="transition ease-in duration-75"
                                                    leaveFrom="transform opacity-100 scale-100"
                                                    leaveTo="transform opacity-0 scale-95"
                                                >
                                                    <Menu.Items className="origin-top-right absolute right-0 mt-2 w-[40vw] rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 py-1 focus:outline-none">
                                                        <Notification />
                                                    </Menu.Items>
                                                </Transition>
                                            }
                                        </Menu> */}
                                        {/* Cart dropdown */}
                                        <Menu as="div" className="flex-shrink-0 relative ml-4">
                                            <div>
                                                <Menu.Button className="bg-white rounded-full flex focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-kazari-500">
                                                    <span className="sr-only">Open user menu</span>

                                                    {itemCount ? <span className=" absolute -top-1 left-0 items-center px-1.5 py-0.5 rounded-full text-xs font-medium bg-kazari-100 text-white"> {itemCount} </span> : ""}<ShoppingCartIcon onClick={checkLogin} className="h-8 w-8 p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-full" alt="" />
                                                </Menu.Button>
                                            </div>
                                            {(userFlag) ? "" :
                                                <Transition
                                                    as={Fragment}
                                                    enter="transition ease-out duration-100"
                                                    enterFrom="transform opacity-0 scale-95"
                                                    enterTo="transform opacity-100 scale-100"
                                                    leave="transition ease-in duration-75"
                                                    leaveFrom="transform opacity-100 scale-100"
                                                    leaveTo="transform opacity-0 scale-95"
                                                >
                                                    <Menu.Items className="origin-top-right absolute right-0 mt-2 w-[40vw] rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 py-1 focus:outline-none">
                                                        {cartLoading ? "" : <Cart cart={cart} dispatch={dispatch} />}
                                                    </Menu.Items>
                                                </Transition>
                                            }

                                        </Menu>
                                        {/* <button
                                    type="button"
                                    className="flex-shrink-0 bg-white rounded-full p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-kazari-500 ml-4"
                                >
                                    <span className="sr-only">View notifications</span>
                                    <ShoppingCartIcon className="h-6 w-6" aria-hidden="true" />
                                </button> */}

                                        {/* Profile dropdown */}

                                        <Menu as="div" className="flex-shrink-0 relative ml-4">
                                            <div>
                                                <Menu.Button className="bg-white rounded-full flex focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-kazari-500">
                                                    <span className="sr-only">Open user menu</span>
                                                    <UserIcon className="h-8 w-8 p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-full" alt="" />
                                                </Menu.Button>
                                            </div>
                                            <Transition
                                                as={Fragment}
                                                enter="transition ease-out duration-100"
                                                enterFrom="transform opacity-0 scale-95"
                                                enterTo="transform opacity-100 scale-100"
                                                leave="transition ease-in duration-75"
                                                leaveFrom="transform opacity-100 scale-100"
                                                leaveTo="transform opacity-0 scale-95"
                                            >
                                                <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 py-1 focus:outline-none">
                                                    {userNavigation.map((item, i) => (
                                                        <Menu.Item key={i}>
                                                            {({ active }) => (
                                                                <Link
                                                                    // onClick={() => navigate(item.href)}
                                                                    to={item.href}
                                                                    className={classNames(
                                                                        active ? 'bg-gray-100' : '',
                                                                        'block py-2 px-4 text-sm text-gray-700'
                                                                    )}
                                                                >
                                                                    {item.name}
                                                                </Link>
                                                            )}
                                                        </Menu.Item>
                                                    ))}
                                                </Menu.Items>
                                            </Transition>
                                        </Menu>
                                    </div>
                                </div>
                                <nav className="hidden lg:py-2 lg:flex lg:space-x-8" aria-label="Global">
                                    <Link
                                        key={"home"}
                                        // onClick={() => navigate("/products")}
                                        to={"/"}
                                        className={classNames(
                                            'text-gray-900 hover:bg-gray-50 hover:text-gray-900',
                                            'rounded-md py-2 px-3 inline-flex items-center text-sm font-medium'
                                        )}

                                    >
                                        Home
                                    </Link>
                                    <CategoriesTab />
                                    {/* <Link
                                        key={"PERSONALIZED"}
                                        // onClick={() => navigate("/products")}
                                        to={"/personalized"}
                                        className={classNames(
                                            'text-gray-900 hover:bg-gray-50 hover:text-gray-900',
                                            'rounded-md py-2 px-3 inline-flex items-center text-sm font-medium'
                                        )}

                                    >
                                        Personalized
                                    </Link> */}
                                </nav>
                            </div>

                            {/* Mobile menu */}
                            <Disclosure.Panel as="nav" className="lg:hidden" aria-label="Global">
                                <div className="pt-2 pb-3 px-2 space-y-1">
                                    {categories.map((item, i) => (
                                        <Disclosure.Button
                                            key={i}
                                            as="a"
                                            onClick={() => navigate("/products?category=" + item._id)}
                                            className={classNames(
                                                item.current ? 'bg-gray-100 text-gray-900' : 'text-gray-900 hover:bg-gray-50 hover:text-gray-900',
                                                'block rounded-md py-2 px-3 text-base font-medium'
                                            )}
                                            aria-current={item.current ? 'page' : undefined}
                                        >
                                            {item.name}
                                        </Disclosure.Button>
                                    ))}
                                </div>
                                <div className="border-t border-gray-200 pt-4 pb-3">
                                    {/* <div className="px-4 flex items-center">
                                        <div className="flex-shrink-0">
                                            <UserIcon className="h-10 w-10 rounded-full" alt="" />
                                        </div>
                                        <button
                                            type="button"
                                            className="ml-auto flex-shrink-0 bg-white rounded-full p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-kazari-500"
                                        >
                                            <span className="sr-only">View notifications</span>
                                            <BellIcon className="h-6 w-6" aria-hidden="true" />
                                        </button>
                                    </div> */}
                                    <div className="mt-3 px-2 space-y-1">
                                        {userNavigation.map((item, i) => (
                                            <Disclosure.Button
                                                key={i}
                                                as="a"
                                                onClick={() => navigate(item.href)}
                                                className="block rounded-md py-2 px-3 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900"
                                            >
                                                {item.name}
                                            </Disclosure.Button>
                                        ))}
                                    </div>
                                </div>
                            </Disclosure.Panel>
                        </>
                    )
                    }
                </Disclosure >
            }
        </>
    )
}
export default Navbar;
