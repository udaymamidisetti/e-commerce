import { useSelector } from 'react-redux';
import { TrashIcon } from '@heroicons/react/solid'
import { Link, useNavigate } from 'react-router-dom'
import { BASE_URL } from '../../Redux/Actions/actionTypes';
import { FaRupeeSign } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addQuantity, removeCheckout } from '../../Redux/Actions/checkoutAction';
import { payment } from '../../Redux/Actions/actions';
import { toast } from 'react-toastify';
function OrderSummary() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { checkout, address } = useSelector((item) => item.checkoutReducer);
    const { userData } = useSelector((item) => item.reducer);
    const setTotalHandle = () => {
        let totalPrice = 0;
        let tax = 0;
        let taxTotalPrice = 0;

        checkout.map(({ product, quantity, productAttr }) => {
            if (Object.entries(productAttr).length != 0) {
                totalPrice += parseFloat(quantity) * parseFloat(productAttr.price);
                if (product.tax) {
                    tax += (parseFloat(quantity) * parseFloat(productAttr.price)) * (parseFloat(product.tax) / 100);
                }
            } else {
                totalPrice += parseFloat(quantity) * parseFloat(product.price);
                if (product.tax) {
                    tax += (parseFloat(quantity) * parseFloat(product.price)) * (parseFloat(product.tax) / 100);
                }
            }
        })
        return { totalPrice: parseFloat(totalPrice), tax: parseFloat(tax) };
    }
    console.log(setTotalHandle(), "setTotalHandle");
    // const handleQuantity = (id, prdQuantity) => {
    //     let temp = quantity;
    //     temp[id] = parseInt(prdQuantity);
    //     dispatch(addQuantity(temp));
    //     // let newTotal = parseInt(total) - (parseInt(e.currentTarget.value) * parseInt(price));
    //     // setTotal((parseInt(e.currentTarget.value) * parseInt(price)) + parseInt(total));
    // }
    const handleCheckoutRemove = (id) => {
        removeCheckout(id);
    }
    console.log(address, "address");
    const handlePayment = () => {
        if (address == undefined || Object.keys(address).length == 0) {
            toast.error("Please select delivery address or provide delivery address");
            return;
        }
        let ids = [];
        checkout.map(({ product }) => {
            ids.push(product._id);
        })
        if (ids) {
            dispatch(payment({ product: ids, user: userData._id, address }, userData, navigate));
        }
    }
    return (
        <div className="mt-10 lg:mt-0">
            <h2 className="text-lg font-medium text-gray-900">Order summary</h2>

            <div className="mt-4 bg-white border border-gray-200 rounded-lg shadow-sm">
                <h3 className="sr-only">Items in your cart</h3>
                <ul role="list" className="divide-y divide-gray-200">
                    {checkout.length !== 0 && checkout.map(({ product, quantity, productAttr }, i) => (
                        <li key={i} className="flex py-6 px-4 sm:px-6">
                            <div className="flex-shrink-0">
                                <img src={BASE_URL + product.thumbnail} alt={product.name + " Image"} className="w-20 rounded-md" />
                            </div>

                            <div className="ml-6 flex-1 flex flex-col">
                                <div className="flex">
                                    <div className="min-w-0 flex-1">
                                        <h4 className="text-sm">
                                            <Link to={"/products/" + product._id} className="font-medium text-gray-700 hover:text-gray-800">
                                                {product.name}
                                            </Link>
                                        </h4>
                                    </div>

                                    <div className="ml-4 flex-shrink-0 flow-root">
                                        <button
                                            type="button"
                                            onClick={() => handleCheckoutRemove(product._id)}
                                            className="-m-2.5 bg-white p-2.5 flex items-center justify-center text-gray-400 hover:text-gray-500"
                                        >
                                            <span className="sr-only">Remove</span>
                                            <TrashIcon className="h-5 w-5 text-red-600" aria-hidden="true" />
                                        </button>
                                    </div>
                                </div>

                                <div className="flex-1 pt-2 flex items-end justify-between">
                                    <div className="flex flex-1 justify-left mt-2 items-center">
                                        <FaRupeeSign className="flex-shrink-0 h-4 w-4 " aria-hidden="true" />
                                        <span href="#" className="ml-1 text-base font-medium">
                                            {Object.entries(productAttr).length == 0 ? product.price : productAttr.price}
                                        </span>
                                    </div>
                                    <div className="ml-4">
                                        <label htmlFor="quantity" className="sr-only">
                                            Quantity
                                        </label>
                                        <select
                                            id="quantity"
                                            name="quantity"
                                            className="rounded-md border border-gray-300 text-base font-medium text-gray-700 text-left shadow-sm focus:outline-none focus:ring-1 focus:ring-kazari-500 focus:border-kazari-500 sm:text-sm"
                                        >
                                            {Array.from({ length: 10 }).map((item, i) => {
                                                if (i == 0) {
                                                    return;
                                                }
                                                let selected = "";


                                                if (quantity == i) {
                                                    selected = "selected";
                                                }
                                                return <option value={i} key={i} selected={selected}>{i}</option>
                                            })}
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
                <dl className="border-t border-gray-200 py-6 px-4 space-y-6 sm:px-6">
                    <div className="flex items-center justify-between">
                        <dt className="text-sm">Subtotal</dt>
                        <dd className="text-sm font-medium text-gray-900">
                            <div className="flex flex-1 justify-left mt-2 items-center">
                                <FaRupeeSign className="flex-shrink-0 h-3 w-3 " aria-hidden="true" />
                                <span href="#" className="ml-1 text-base font-medium">
                                    {(setTotalHandle().totalPrice).toFixed(2)}
                                </span>
                            </div></dd>
                    </div>
                    <div className="flex items-center justify-between">
                        <dt className="text-sm">Shipping</dt>
                        <dd className="text-sm font-medium text-gray-900">Free shipping</dd>
                    </div>
                    <div className="flex items-center justify-between">
                        <dt className="text-sm">Taxes</dt>
                        <dd className="text-sm font-medium text-gray-900">{(setTotalHandle().tax).toFixed(2)}</dd>
                    </div>
                    <div className="flex items-center justify-between border-t border-gray-200 pt-6">
                        <dt className="text-base font-medium">Total</dt>
                        <dd className="text-base font-medium text-gray-900">
                            <div className="flex flex-1 justify-left mt-2 items-center">
                                <FaRupeeSign className="flex-shrink-0 h-3 w-3 " aria-hidden="true" />
                                <span href="#" className="ml-1 text-base font-medium">
                                    {(setTotalHandle().totalPrice + setTotalHandle().tax).toFixed(2)}
                                </span>
                            </div>
                        </dd>
                    </div>
                </dl>

                <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                    <button onClick={handlePayment}
                        type="submit"
                        className="w-full bg-kazari-600 border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-kazari-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-kazari-500"
                    >
                        Proceed to Payment
                    </button>
                </div>
            </div>
        </div>
    );
}

export default OrderSummary;