import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


function OrderDetailsView() {
    const { order, payment } = useSelector((item) => item.orderReducer);
    console.log(payment, "payment");
    useEffect(() => {
        const body = document.querySelector('#root');

        body.scrollIntoView({
            behavior: 'smooth'
        }, 500)

    }, []);
    return (
        <div className="bg-white">
            {order && <div className="max-w-3xl mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
                {Object.entries(order).length != 0 && <div>
                    {order.payment_successful == 1 ?
                        <div className="max-w-xl">
                            <h1 className="text-sm font-semibold uppercase tracking-wide text-green-600">Payment Successful</h1>
                            <p className="mt-2 text-4xl font-extrabold tracking-tight sm:text-5xl">It's on the way!</p>
                            <p className="mt-2 text-base text-gray-500">Your order #{order.razorpayOrderId} has shipped and will be with you soon.</p>

                            <dl className="mt-12 text-sm font-medium">
                                <dt className="text-gray-900">Tracking number</dt>
                                <dd className="text-indigo-600 mt-2">51547878755545848512</dd>
                            </dl>
                        </div> :
                        <div className="max-w-xl">
                            <h1 className="text-sm font-semibold uppercase tracking-wide text-red-600">Payment Failed</h1>
                            {/* <p className="mt-2 text-4xl font-extrabold tracking-tight sm:text-5xl">It's on the way!</p> */}
                            <p className="mt-2 text-base text-gray-500">Your order #{order.razorpayOrderId} Payment Failed, Try again Later.</p>

                            <dl className="mt-12 text-sm font-medium">
                                <dt className="text-gray-900">Tracking number</dt>
                                <dd className="text-indigo-600 mt-2">{order.trackId ? "1335555446688" : "768546545876"}</dd>
                            </dl>
                        </div>
                    }
                    <div className="mt-10 border-t border-gray-200">
                        <h2 className="sr-only">Your order</h2>

                        <h3 className="sr-only">Items</h3>
                        {order.order_items.map(({ product, quantity, productAttr }, i) => (
                            <div key={i} className="py-10 border-b border-gray-200 flex space-x-6">
                                <img
                                    src={process.env.REACT_APP_BASE_URL + product.thumbnail}
                                    alt={product.name + " image"}
                                    className="flex-none w-20 h-20 object-center object-cover bg-gray-100 rounded-lg sm:w-40 sm:h-40"
                                />
                                <div className="flex-auto flex flex-col">
                                    <div>
                                        <h4 className="font-medium text-gray-900">
                                            <Link to={"/products/" + product._id}>{product.name}</Link>
                                        </h4>
                                        <p className="mt-2 text-sm text-gray-600" dangerouslySetInnerHTML={{ __html: product.description }}></p>
                                    </div>
                                    <div className="mt-6 flex-1 flex items-end">
                                        <dl className="flex text-sm divide-x divide-gray-200 space-x-4 sm:space-x-6">
                                            <div className="flex">
                                                <dt className="font-medium text-gray-900">Quantity</dt>
                                                <dd className="ml-2 text-gray-700">{quantity}</dd>
                                            </div>
                                            <div className="pl-4 flex sm:pl-6">
                                                <dt className="font-medium text-gray-900">Price</dt>
                                                <dd className="ml-2 text-gray-700">{productAttr ? (Object.entries(productAttr).length == 0 ? product.price : productAttr.price) : product.price + ((product.tax / 100) * product.price)}</dd>
                                            </div>
                                        </dl>
                                    </div>
                                </div>
                            </div>
                        ))}

                        <div className="">
                            <h3 className="sr-only">Your information</h3>

                            <h4 className="sr-only">Addresses</h4>
                            <dl className="grid grid-cols-2 gap-x-6 text-sm py-10">
                                <div>
                                    <dt className="font-medium text-gray-900">Shipping address</dt>
                                    <dd className="mt-2 text-gray-700">
                                        <address className="not-italic">
                                            <span className="block">{order.address.address}</span>
                                            <span className="block">{order.address.apartment}</span>
                                            <span className="block">{`${order.address.city}, ${order.address.state}, India - ${order.address.pincode}`}</span>
                                        </address>
                                    </dd>
                                </div>
                                {/* <div>
                                    <dt className="font-medium text-gray-900">Billing address</dt>
                                    <dd className="mt-2 text-gray-700">
                                        <address className="not-italic">
                                            <span className="block">Kristin Watson</span>
                                            <span className="block">7363 Cynthia Pass</span>
                                            <span className="block">Toronto, ON N3Y 4H8</span>
                                        </address>
                                    </dd>
                                </div> */}
                            </dl>

                            <h4 className="sr-only">Payment</h4>
                            <dl className="grid grid-cols-2 gap-x-6 border-t border-gray-200 text-sm py-10">
                                <div>
                                    <dt className="font-medium text-gray-900">Payment method</dt>
                                    <dd className="mt-2 text-gray-700">
                                        <p className="uppercase">{payment.method}</p>
                                        {payment.method == "upi" &&
                                            <p className="uppercase text-indigo-500">{payment.acquirer_data.upi_transaction_id}</p>
                                        }
                                        {payment.method == "card" && <p>
                                            <span aria-hidden="true">•••• </span>
                                            <span className="sr-only">Ending in </span>{payment.card.last4}
                                        </p>}
                                    </dd>
                                </div>
                                <div>
                                    <dt className="font-medium text-gray-900">Shipping method</dt>
                                    <dd className="mt-2 text-gray-700">
                                        <p>DHL</p>
                                        <p>Takes up to 3 working days</p>
                                    </dd>
                                </div>
                            </dl>

                            <h3 className="sr-only">Summary</h3>

                            <dl className="space-y-6 border-t border-gray-200 text-sm pt-10">
                                <div className="flex justify-between">
                                    <dt className="font-medium text-gray-900">Subtotal</dt>
                                    <dd className="text-gray-700">{order.price}</dd>
                                </div>
                                {/* <div className="flex justify-between">
                                <dt className="flex font-medium text-gray-900">
                                    Discount
                                    <span className="rounded-full bg-gray-200 text-xs text-gray-600 py-0.5 px-2 ml-2">STUDENT50</span>
                                </dt>
                                <dd className="text-gray-700">-$18.00 (50%)</dd>
                            </div> */}
                                {/* <div className="flex justify-between">
                                <dt className="font-medium text-gray-900">Shipping</dt>
                                <dd className="text-gray-700">$5.00</dd>
                            </div> */}
                                <div className="flex justify-between">
                                    <dt className="font-medium text-gray-900">Total</dt>
                                    <dd className="text-gray-900">{order.price}</dd>
                                </div>
                            </dl>
                        </div>
                    </div>
                </div>}



            </div>}
        </div>
    )
}
export default OrderDetailsView;
