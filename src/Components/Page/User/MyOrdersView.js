import { useDispatch, useSelector } from "react-redux";
import { CheckIcon } from '@heroicons/react/outline'
import { FaRupeeSign } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { BASE_URL } from "../../Redux/Actions/actionTypes";
import { addCheckout } from "../../Redux/Actions/checkoutAction";

function MyOrdersView() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleCheckout = (product) => {
        // console.log(id, "id");
        dispatch(addCheckout([product]))
        navigate("/checkout");
        // dispatch(payment({ product: id, user: userData._id }, userData));
    }
    const { allOrders } = useSelector((item) => item.orderReducer);
    return (
        <div className="space-y-16 sm:space-y-24">
            {allOrders.map((order, i) => (
                <div key={i}>
                    <h3 className="sr-only">
                        Order placed on <time dateTime={order.createdAt}>{new Date(order.createdAt).toLocaleDateString()}</time>
                    </h3>

                    <div className="bg-gray-50 px-4 py-6 sm:rounded-lg sm:p-6 md:flex md:items-center md:justify-between md:space-x-6 lg:space-x-8">
                        <dl className="divide-y divide-gray-200 space-y-4 text-sm text-gray-600 flex-auto md:divide-y-0 md:space-y-0 md:grid md:grid-cols-4 md:gap-x-6 lg:w-3/4 lg:flex-none lg:gap-x-8">
                            <div className="flex justify-between md:block">
                                <dt className="font-medium text-gray-900">Order number</dt>
                                <dd className="md:mt-1">{`#ORDER000${i}`}</dd>
                            </div>
                            <div className="flex justify-between pt-4 md:block md:pt-0">
                                <dt className="font-medium text-gray-900">Date placed</dt>
                                <dd className="md:mt-1">
                                    <time dateTime={new Date(order.createdAt).toLocaleString()}>{new Date(order.createdAt).toLocaleString()}</time>
                                </dd>
                            </div>
                            <div className="flex justify-between pt-4 font-medium text-gray-900 md:block md:pt-0">
                                <dt>Total amount</dt>
                                <dd className="md:mt-1">
                                    <div className="flex flex-1 items-center">
                                        <FaRupeeSign className="flex-shrink-0 h-3 w-3 " aria-hidden="true" />
                                        <span href="#" className="ml-1 ">
                                            {new Intl.NumberFormat('en-IN').format(parseInt(order.price).toFixed(2)) + ".00"}
                                        </span>
                                    </div>

                                </dd>
                            </div>
                            <div className="flex justify-between pt-4 md:block md:pt-0">
                                <dt className="font-medium text-gray-900">Payment Status</dt>
                                <dd className="md:mt-1">{order.payment_successful ? <span className=" font-semibold text-green-700">Success</span> : <span className=" font-semibold  text-red-700">Failed</span>}</dd>
                            </div>
                        </dl>
                        <div className="space-y-4 mt-6 sm:flex sm:space-x-4 sm:space-y-0 md:mt-0">
                            {/* <a
                                            href={order.href}
                                            className="w-full flex items-center justify-center bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-kazari-500 md:w-auto"
                                        >
                                            View Order
                                            <span className="sr-only">{order.number}</span>
                                            to={"/order/invoice/" + order._id}
                                        </a> */}
                            <Link to={"/order/invoice/" + order._id}
                                className="w-full flex items-center justify-center bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-kazari-500 md:w-auto"
                            >
                                View Invoice
                                <span className="sr-only">for order {order._id}</span>
                            </Link>
                        </div>
                    </div>

                    <div className="mt-6 flow-root px-4 sm:mt-10 sm:px-0">
                        <div className="-my-6 divide-y divide-gray-200 sm:-my-10">
                            {order.product.map((prd) => (
                                <div key={prd.id} className="flex py-6 sm:py-10">
                                    <div className="min-w-0 flex-1 lg:flex lg:flex-col">
                                        <div className="lg:flex-1">
                                            <div className="sm:flex">
                                                <div>
                                                    <h4 className="font-medium text-gray-900">{prd.name}</h4>
                                                    <p className="hidde pl-5 mt-2 text-sm text-gray-500 sm:block" dangerouslySetInnerHTML={{ __html: prd.description }} />
                                                </div>
                                                <span className="mt-1 font-medium text-gray-900 sm:mt-0 sm:ml-6">
                                                    <div className="flex flex-1 justify-center mt-2 items-center">
                                                        <FaRupeeSign className="flex-shrink-0 h-5 w-5 " aria-hidden="true" />
                                                        <span href="#" className="ml-1 text-xl font-medium">
                                                            {prd.price}
                                                        </span>
                                                    </div>
                                                </span>
                                            </div>
                                            <div className="mt-2 flex text-sm font-medium sm:mt-4">
                                                <Link to={"/products/" + prd._id} className="text-kazari-600 hover:text-kazari-500">
                                                    View Product
                                                </Link>
                                                <div className="border-l border-gray-200 ml-4 pl-4 sm:ml-6 sm:pl-6">
                                                    <button onClick={() => handleCheckout(prd)} to={"/"} className="text-kazari-600 hover:text-kazari-500">
                                                        Buy Again
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-6 font-medium">
                                            {prd.status === 'delivered' ? (
                                                <div className="flex space-x-2">
                                                    <CheckIcon className="flex-none w-6 h-6 text-green-500" aria-hidden="true" />
                                                    <p>
                                                        Delivered
                                                        <span className="hidden sm:inline">
                                                            {' '}
                                                            on <time dateTime={prd.datetime}>{prd.date}</time>
                                                        </span>
                                                    </p>
                                                </div>
                                            ) : prd.status === 'out-for-delivery' ? (
                                                <p>Out for delivery</p>
                                            ) : prd.status === 'cancelled' ? (
                                                <p className="text-gray-500">Cancelled</p>
                                            ) : null}
                                        </div>
                                    </div>
                                    <div className="ml-4 flex-shrink-0 sm:m-0 sm:mr-6 sm:order-first">
                                        <img
                                            src={BASE_URL + prd.thumbnail}
                                            alt={prd.name}
                                            className="col-start-2 col-end-3 sm:col-start-1 sm:row-start-1 sm:row-span-2 w-20 h-20 rounded-lg object-center object-cover sm:w-40 sm:h-40 lg:w-52 lg:h-52"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ))
            }
        </div >
    );
}

export default MyOrdersView;