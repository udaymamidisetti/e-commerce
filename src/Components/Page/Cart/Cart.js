import { CheckIcon, ClockIcon } from '@heroicons/react/solid'
import { useSelector, useDispatch } from 'react-redux';
import { BASE_URL } from './../../Redux/Actions/actionTypes';
import { FaRupeeSign } from 'react-icons/fa';
import { deleteCartItem, changeQuantity } from './../../Redux/Actions/cartAction';
import { Link, useNavigate } from 'react-router-dom';
import { addCheckoutCart } from '../../Redux/Actions/checkoutAction';


export default function Cart() {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleQuantityChange = (e, id) => {

    }
    const handleRemove = (id) => {
        dispatch(deleteCartItem(id));
    }
    const { cart } = useSelector((item) => item.cartReducer);
    const proceedCheckout = () => {
        console.log("proceedCheckout");
        dispatch(addCheckoutCart(navigate));

    }
    return (
        <div className="bg-white">
            <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-6">
                <h1 className="text-2xl font-extrabold tracking-tight text-gray-900">Shopping Cart</h1>

                <form className="mt-4">
                    <div>
                        <h2 className="sr-only">Items in your shopping cart</h2>

                        <ul role="list" className="border-t border-b overflow-y-auto h-[50vh] scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-10 pr-5 border-gray-200 divide-y divide-gray-200">
                            {cart.length !== 0 && cart.map(({ product, quantity }, i) => (
                                <li key={i} className="flex items-center py-2 sm:py-2">
                                    <div className="flex-shrink-0">
                                        <img src={BASE_URL + product.thumbnail} alt={product.name + " image"} className="w-24 h-24 rounded-lg object-center object-cover sm:w-32 sm:h-32" />
                                    </div>

                                    <div className="relative ml-4 flex-1 flex flex-col justify-between sm:ml-6">
                                        <div>
                                            <div className="flex justify-between sm:grid sm:grid-cols-2">
                                                <div className="pr-6">
                                                    <h3 className="text-sm">
                                                        <Link to={"/products/" + product._id} className="font-medium text-gray-700 hover:text-gray-800">
                                                            {product.name}
                                                        </Link>
                                                    </h3>
                                                    {/* <p className="mt-1 text-sm text-gray-500">{product.color}</p> */}
                                                    {/* {product.size ? <p className="mt-1 text-sm text-gray-500">{product.size}</p> : null} */}
                                                </div>

                                                <span className="text-sm font-medium text-gray-900 text-right">
                                                    <div className="flex flex-1 justify-end mt-2 items-center">
                                                        <FaRupeeSign className="flex-shrink-0 h-4 w-4 " aria-hidden="true" />
                                                        <span className="ml-1 text-base font-medium">
                                                            {product.price}
                                                        </span>
                                                    </div>
                                                </span>
                                            </div>

                                            <div className="mt-4 flex items-center sm:block sm:absolute sm:top-0 sm:left-1/2 sm:mt-0">
                                                <label htmlFor={`quantity-${product._id}`} className="sr-only">
                                                    Quantity, {product.quantity}
                                                </label>
                                                <select
                                                    id={`quantity-${product._id}`}
                                                    name={`quantity-${product._id}`}
                                                    onChange={(e) => handleQuantityChange(e, product._id)}
                                                    className="block max-w-full rounded-md border border-gray-300 py-1.5 text-base leading-5 font-medium text-gray-700 text-left shadow-sm focus:outline-none focus:ring-1 focus:ring-kazari-500 focus:border-kazari-500 sm:text-sm"
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

                                                <button type="button" className="ml-4 text-sm font-medium text-kazari-300 hover:text-kazari-100 sm:ml-0 sm:mt-3" onClick={() => handleRemove(product._id)}>
                                                    <span>Remove</span>
                                                </button>
                                            </div>
                                        </div>

                                        {/* <p className="mt-4 flex text-sm text-gray-700 space-x-2">
                                            {product.inStock ? (
                                                <CheckIcon className="flex-shrink-0 h-5 w-5 text-green-500" aria-hidden="true" />
                                            ) : (
                                                <ClockIcon className="flex-shrink-0 h-5 w-5 text-gray-300" aria-hidden="true" />
                                            )}

                                            <span>{product.inStock ? 'In stock' : `Ships in ${product.leadTime}`}</span>
                                        </p> */}
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="mt-5">
                        <button onClick={proceedCheckout} type="submit" className="w-full bg-kazari-600 border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-kazari-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-kazari-500">
                            Proceed to Checkout
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
