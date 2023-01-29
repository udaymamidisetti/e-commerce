import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Logo from '../../Common/Logo.svg'
function InvoiceView() {
    const { order } = useSelector((item) => item.orderReducer);
    console.log(order, "Order");
    console.log(Object.entries(order), "Order");
    // return (<>klfksdlkf</>);
    return (
        <main>
            {Object.entries(order).length != 0 && <>
                <div className="block justify-between items-center p-4 my-6 mx-4 bg-white rounded-2xl shadow-xl shadow-gray-200 sm:flex">
                    <div className="flex items-center mb-3 sm:divide-x sm:divide-gray-100 sm:mb-0">

                    </div>
                    <div className="items-center space-y-4 sm:inline-flex sm:space-x-4 sm:space-y-0">
                        <div>
                            <Link to="/" className="inline-flex justify-center items-center py-2 px-3 w-full text-sm font-medium text-center text-white rounded-lg bg-kazari-300 shadow-md shadow-gray-300 hover:bg-kazari-100">
                                <svg
                                    className="mr-2 -ml-1 w-6 h-6"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                Download Invoice
                            </Link>
                        </div>
                        <div>
                            <Link to={"/"} className="inline-flex justify-center items-center py-2 px-3 w-full text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 hover:scale-[1.02] transition-transformsm:w-auto">
                                <svg
                                    className="mr-2 -ml-1 w-6 h-6"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M5 4v3H4a2 2 0 00-2 2v3a2 2 0 002 2h1v2a2 2 0 002 2h6a2 2 0 002-2v-2h1a2 2 0 002-2V9a2 2 0 00-2-2h-1V4a2 2 0 00-2-2H7a2 2 0 00-2 2zm8 0H7v3h6V4zm0 8H7v4h6v-4z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                Print
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-12 gap-4">

                    <div className="bg-white shadow-lg shadow-gray-200 rounded-2xl p-4 col-span-12 2xl:col-start-3 2xl:col-span-8 md:mx-6 lg:my-6">
                        <div className="overflow-hidden p-4 space-y-6">
                            <div className="sm:flex">
                                <div className="mb-5 text-2xl font-bold sm:text-3xl sm:mb-0">
                                    {order._id}
                                </div>

                                <div className="space-y-3 text-left sm:ml-auto sm:text-right">
                                    <div className="space-y-1">
                                        <div className='mb-5 flex justify-end'>
                                            <img className='w-1/2' src={Logo} />
                                        </div>
                                        <div className="text-sm font-normal text-gray-900">
                                            Kazari Collection 1/602,“C” Wing, Akshata Apartments,
                                        </div>
                                        <div className="text-sm font-normal text-gray-900">
                                            Tilak Nagar, Chembur (W),Mumbai- 400089 India
                                        </div>
                                    </div>
                                    <div className="text-sm font-normal text-gray-500">
                                        {/* {new Date(order.createdAt).toISOString} */}
                                        {order.createdAt}
                                    </div>
                                </div>
                            </div>
                            <div className="sm:w-72">
                                <div className="mb-4 text-base font-bold text-gray-900 uppercase">
                                    Bill to
                                </div>
                                <div className="text-base font-normal text-gray-500">
                                    {order.address.address + order.address.apartment + " - " + order.address.pincode}
                                </div>
                            </div>
                            <div className="flex flex-col my-8">
                                <div className="overflow-x-auto border-b border-gray-200">
                                    <div className="inline-block min-w-full align-middle">
                                        <div className="overflow-hidden shadow-lg">
                                            <table className="min-w-full divide-y divide-gray-200">
                                                <thead className="text-gray-900 bg-gray-50">
                                                    <tr>
                                                        <th
                                                            scope="col"
                                                            className="p-4 text-xs font-semibold tracking-wider text-left uppercase"
                                                        >
                                                            Item
                                                        </th>
                                                        <th
                                                            scope="col"
                                                            className="p-4 text-xs font-semibold tracking-wider text-left uppercase"
                                                        >
                                                            Price
                                                        </th>
                                                        <th
                                                            scope="col"
                                                            className="p-4 text-xs font-semibold tracking-wider text-left uppercase"
                                                        >
                                                            Qty
                                                        </th>

                                                        <th
                                                            scope="col"
                                                            className="p-4 text-xs font-semibold tracking-wider text-left uppercase"
                                                        >
                                                            Total
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody className="text-gray-900 bg-white">
                                                    {order.order_items.map(({ product, quantity, productAttr }, i) =>
                                                        <tr key={i}>
                                                            <td className="p-4 text-sm font-normal whitespace-nowrap">
                                                                <div className="text-base font-semibold">
                                                                    {product.name}
                                                                </div>
                                                            </td>
                                                            {productAttr ?
                                                                <>
                                                                    <td className="p-4 text-base font-normal text-gray-500 whitespace-nowrap">
                                                                        {productAttr.price}
                                                                    </td>
                                                                    <td className="p-4 text-base font-semibold text-gray-900 whitespace-nowrap">
                                                                        {quantity}
                                                                    </td>
                                                                    <td className="p-4 text-base font-semibold whitespace-nowrap">
                                                                        {quantity * productAttr.price}
                                                                    </td>
                                                                </> :
                                                                <>
                                                                    <td className="p-4 text-base font-normal text-gray-500 whitespace-nowrap">
                                                                        {product.price}
                                                                    </td>
                                                                    <td className="p-4 text-base font-semibold text-gray-900 whitespace-nowrap">
                                                                        {quantity}
                                                                    </td>
                                                                    <td className="p-4 text-base font-semibold whitespace-nowrap">
                                                                        {quantity * product.price}
                                                                    </td>
                                                                </>
                                                            }
                                                        </tr>
                                                    )}

                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-3 sm:text-right sm:ml-auto sm:w-72">
                                <div className="flex justify-between">
                                    <div className="text-sm font-medium text-gray-500 uppercase">
                                        Subtotal
                                    </div>
                                    <div className="text-base font-medium text-gray-900">$415.00</div>
                                </div>
                                <div className="flex justify-between">
                                    <div className="text-sm font-medium text-gray-500 uppercase">
                                        Tax rate
                                    </div>
                                    <div className="text-base font-medium text-gray-900">5%</div>
                                </div>
                                <div className="flex justify-between">
                                    <div className="text-sm font-medium text-gray-500 uppercase">
                                        Discount
                                    </div>
                                    <div className="text-base font-medium text-gray-900">$64.00</div>
                                </div>
                                <div className="flex justify-between">
                                    <div className="text-base font-semibold text-gray-900 uppercase">
                                        Total
                                    </div>
                                    <div className="text-base font-bold text-gray-900">$351.00</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
            }
        </main>

    );
}

export default InvoiceView;