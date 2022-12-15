import { CheckIcon, ClockIcon } from '@heroicons/react/solid'

const products = [
    {
        id: 1,
        name: 'Nomad Tumbler',
        href: '#',
        price: '$35.00',
        color: 'White',
        inStock: true,
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-01-product-03.jpg',
        imageAlt: 'Insulated bottle with white base and black snap lid.',
    },
    {
        id: 2,
        name: 'Basic Tee',
        href: '#',
        price: '$32.00',
        color: 'Sienna',
        inStock: true,
        size: 'Large',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-01-product-01.jpg',
        imageAlt: "Front of men's Basic Tee in sienna.",
    },
    // More products...
]
export default function Notification() {
    return (
        <div className="bg-white">
            <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
                <h1 className="text-2xl font-extrabold tracking-tight text-gray-900">Notification</h1>

                <form className="mt-4">
                    <div>
                        <h2 className="sr-only">Items in your shopping cart</h2>

                        <ul role="list" className="border-t border-b border-gray-200 divide-y divide-gray-200">

                        </ul>
                    </div>
                    <div className="mt-5">
                        <button
                            type="submit"
                            className="w-full bg-kazari-600 border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-kazari-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-kazari-500"
                        >
                            Go to Orders
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
