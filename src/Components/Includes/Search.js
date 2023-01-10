import { Combobox, Transition } from "@headlessui/react";
import { CheckIcon, SearchIcon } from "@heroicons/react/solid";
import { Fragment, useState } from 'react';
import { FaRupeeSign } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { searchHandle } from "../Redux/Actions/productAction";
import { BASE_URL } from './../Redux/Actions/actionTypes';

function Search() {
    const { search, products } = useSelector((item) => item.productReducer)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [selected, setSelected] = useState("");
    const [query, setQuery] = useState('')
    const handleSearch = (e) => {
        var code = (e.keyCode ? e.keyCode : e.which);
        if (code == 13) {
            // dispatch(searchHandle(e.currentTarget.value));
            navigate({
                pathname: '/products',
                search: `?search=${encodeURIComponent(query)}`,
            });
        }
        setQuery(e.currentTarget.value);
    }
    const productClick = (product) => navigate("/products/" + product._id);
    const filteredProduct = query === '' ? products : products.filter((product) => product.name.toLowerCase().replace(/\s+/g, '').includes(query.toLowerCase().replace(/\s+/g, '')))
    return (
        <div className="w-full sm:max-w-xs">
            <Combobox value={selected} onChange={productClick}>
                <div className="relative mt-1">
                    <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-kazari-300 sm:text-sm">
                        <Combobox.Input
                            className="w-full bg-white border border-gray-300 rounded-md py-2 pl-10 pr-3 text-sm placeholder-gray-500 focus:outline-none focus:text-gray-900 focus:placeholder-gray-400 focus:ring-1 focus:ring-kazari-500 focus:border-kazari-500 sm:text-sm"
                            displayValue={(product) => product.name}
                            onKeyUp={handleSearch}
                        />
                        <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                            <SearchIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                        </Combobox.Button>
                    </div>
                    <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                        afterLeave={() => setQuery('')}
                    >
                        <Combobox.Options className="absolute mt-1 max-h-[50vh] -left-[12vw] w-[40vw] overflow-auto rounded-md bg-white  py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm z-full">
                            {filteredProduct.length === 0 && query !== '' ? (
                                <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                                    Nothing found.
                                </div>
                            ) : (
                                filteredProduct.map((product, i) => (
                                    <Combobox.Option
                                        key={i}
                                        className={({ active }) =>
                                            `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-kazari-600 text-white' : 'text-gray-900'
                                            }`
                                        }
                                        value={product}
                                    >
                                        {({ selected, active }) => (

                                            <Link to={"/products/" + product._id}>
                                                <div className="grid grid-cols-5 gap-4">
                                                    <div className=""><img className="max-w-full h-[10vh] mx-auto object-center object-contain" src={BASE_URL + product.thumbnail} /></div>
                                                    <div className="col-span-4 flex items-center">
                                                        <span className="ml-1">
                                                            {product.name}
                                                        </span>
                                                    </div>
                                                </div>
                                                {/* <span onClick={() => productClick(product._id)}
                                                    className={`block truncate ${selected ? 'font-medium' : 'font-normal'
                                                        }`}
                                                >
                                                    {product.name}
                                                </span>
                                                {selected ? (
                                                    <span
                                                        className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active ? 'text-white' : 'text-kazari-600'
                                                            }`}
                                                    >
                                                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                    </span>
                                                ) : null} */}
                                            </Link>
                                        )}
                                    </Combobox.Option>
                                ))
                            )}
                        </Combobox.Options>
                    </Transition>
                </div>
            </Combobox >
        </div >
    );
}

export default Search;