import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { getOrderAllDetails } from '../../Redux/Actions/orderAction';
import MyOrdersView from './MyOrdersView';
const orders = [
    {
        number: 'WU88191111',
        date: 'January 22, 2021',
        datetime: '2021-01-22',
        href: '#',
        invoiceHref: '#',
        total: '2836.00',
        products: [
            {
                id: 1,
                name: 'Handloom Portrait of Abstract Body Posing with Bird',
                description:
                    "Each Wall hanging is made on traditional handloom and is made with quality work. 100% genuine product with top quality material Made in India The images represent the actual product as the piece is hand-weaved to perfection. Handloom portrait/decorative wall hanging takes around 10 days to make",
                href: '#',
                price: '2836.00',
                status: 'out-for-delivery',
                date: 'January 5, 2021',
                datetime: '2022-10-175',
                imageSrc: 'http://localhost:5000/public/images/thumbnail/YTzhWTrd3qM5cjr7NXSw.png',
                imageAlt: 'Handloom Portrait of Abstract Body Posing with Bird Image',
            },
            // More products...
        ],
    },
    // More orders...
]

function MyOrder() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getOrderAllDetails());
    }, [dispatch])
    useEffect(() => {
        const body = document.querySelector('#root');

        body.scrollIntoView({
            behavior: 'smooth'
        }, 500)

    }, []);
    return (
        <div className="bg-white">
            <div className="max-w-4xl mx-auto py-16 sm:px-6 sm:pt-8 sm:pb-24">
                <div className="px-4 sm:px-0">
                    <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">Order history</h1>
                    <p className="mt-2 text-sm text-gray-500">
                        Check the status of recent orders, manage returns, and download invoices.
                    </p>
                </div>

                <div className="mt-16">
                    <h2 className="sr-only">Recent orders</h2>
                    <MyOrdersView />
                </div>
            </div>
        </div>
    )
}
export default MyOrder;

