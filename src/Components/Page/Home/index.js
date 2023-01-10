
import { Link, useNavigate, Navigate } from 'react-router-dom';
import banner_1 from "../../Assets/banner_1.jpg"
import banner_2 from "../../Assets/banner_2.jpg"
import banner_3 from "../../Assets/banner_3.jpg"
import { BsCartPlusFill } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { FaRupeeSign } from "react-icons/fa";
import { StarIcon, HeartIcon, CurrencyRupeeIcon } from '@heroicons/react/outline';
import { BASE_URL } from './../../Redux/Actions/actionTypes';
import { addCart } from '../../Redux/Actions/cartAction';
import { addFav, removeFav } from './../../Redux/Actions/wishlistAction';
import { useDispatch, useSelector } from 'react-redux';
import { addCheckout } from '../../Redux/Actions/checkoutAction';
import { Carousel } from 'react-responsive-carousel';
import { useState } from 'react';
// const favorites = [
//     {
//         id: 1,
//         name: 'Black Basic Tee',
//         price: '$32',
//         href: '#',
//         imageSrc: '',
//         imageAlt: "Model wearing women's black cotton crewneck tee.",
//     },
//     {
//         id: 2,
//         name: 'Off-White Basic Tee',
//         price: '$32',
//         href: '#',
//         imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-03-favorite-02.jpg',
//         imageAlt: "Model wearing women's off-white cotton crewneck tee.",
//     },
//     {
//         id: 3,
//         name: 'Mountains Artwork Tee',
//         price: '$36',
//         href: '#',
//         imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-03-favorite-03.jpg',
//         imageAlt:
//             "Model wearing women's burgundy red crewneck artwork tee with small white triangle overlapping larger black triangle.",
//     },
// ]



function Home() {
    const [check, setCheck] = useState(true);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { products } = useSelector((item) => item.productReducer);
    const { wishlist } = useSelector((item) => item.wishlistReducer);
    const userData = useSelector((item) => item.reducer.userData);
    const { categories, subcategories, loading } = useSelector((item) => item.categoryReducer);
    const userFlag = Object.entries(userData).length == 0;
    let productsTemp = [];
    if (products) {
        let ind = 0;
        let end = 0;
        for (let index = 0; index < 6; index++) {
            // const element = array[index];
            if (index == 0 || index % 3 == 0) {
                end = index + 3;
                productsTemp.push(products.slice(index, end));
            }
        }
        // productsTemp = products.slice(ind, end);
    }

    const handleCart = (id) => {
        // console.log(id, "id");
        if (userFlag) {
            navigate("/login");
        }
        dispatch(addCart(id));
    }
    const handleCheckout = (product) => {
        // console.log(id, "id");
        if (userFlag) {
            navigate("/login");
        }
        dispatch(addCheckout([product]))
        navigate("/checkout");
        // dispatch(payment({ product: id, user: userData._id }));
    }
    const wishlistHandler = (flag, id) => {
        if (!flag) {
            dispatch(addFav(id));
        } else {
            dispatch(removeFav(id));
        }
    }
    const productDetails = (id) => {
        // dispatch(getProduct(id));
        console.log("productDetails");
        navigate("/products/" + id);
    }
    console.log(Object.keys(categories).length, "categories");
    return (
        <>
            {(Object.keys(categories).length !== 0) && <div className="bg-white" >
                <main>
                    {/* Category section */}
                    <section aria-labelledby="category-heading" className="bg-gray-50">
                        <div className="max-w-7xl mx-auto py-8 px-4 sm:py-12 sm:px-6 lg:px-8">
                            <div className="sm:flex sm:items-baseline sm:justify-between">
                                <h2 id="category-heading" className="text-2xl font-extrabold tracking-tight text-gray-900">
                                    Shop by Category
                                </h2>
                                <Link to='/products' className="hidden text-sm font-semibold text-kazari-600 hover:text-kazari-500 sm:block">
                                    Browse all categories<span aria-hidden="true"> &rarr;</span>
                                </Link>
                                {/* <div onClick={() => navigate("/products")} className=" text-sm font-semibold text-kazari-600 hover:text-kazari-500 sm:block">
                                    Browse all categories<span aria-hidden="true"> &rarr;</span>
                                </div> */}
                            </div>

                            <div className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:grid-rows-2 sm:gap-x-6 lg:gap-8">
                                <div className="group aspect-w-2 aspect-h-1 rounded-lg overflow-hidden sm:aspect-h-1 sm:aspect-w-1 sm:row-span-2">
                                    <img
                                        src={banner_1}
                                        alt="Two models wearing women's black cotton crewneck tee and off-white cotton crewneck tee."
                                        className="object-center object-cover group-hover:opacity-75"
                                    />
                                    <div aria-hidden="true" className="bg-gradient-to-b from-transparent to-black opacity-50" />
                                    <div className="p-6 flex items-end">
                                        <div>
                                            <h3 className="font-semibold text-white">
                                                {/* <Link to={"/products?category=" + Object.keys(categories).length !== 0 ? categories.find((item) => item.name.toLowerCase() == "Bags".toLowerCase())._id : "all"}> */}
                                                <Link to={"/products"}>
                                                    <span className="" />
                                                    Bags
                                                </Link>
                                                {/* <a href="#">
                                                    <span className="absolute inset-0" />
                                                    Bags
                                                </a> */}
                                            </h3>
                                            <p aria-hidden="true" className="mt-1 text-sm text-white">
                                                Shop now
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="group aspect-w-2 aspect-h-1 rounded-lg overflow-hidden sm:relative sm:aspect-none sm:h-full">
                                    <img
                                        src={banner_2}
                                        alt="Wooden shelf with gray and olive drab green baseball caps, next to wooden clothes hanger with sweaters."
                                        className="object-center object-cover group-hover:opacity-75 sm:absolute sm:inset-0 sm:w-full sm:h-full"
                                    />
                                    <div
                                        aria-hidden="true"
                                        className="bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0"
                                    />
                                    <div className="p-6 flex items-end sm:absolute sm:inset-0">
                                        <div>
                                            <h3 className="font-semibold text-white">
                                                {/* <Link to={"/products?category=" + Object.keys(categories).length !== 0 ? categories.find((item) => item.name.toLowerCase() == "Bags".toLowerCase())._id : "all"}> */}
                                                <Link to={"/products"}>
                                                    <span className="absolute inset-0" />
                                                    APPAREL
                                                </Link>
                                            </h3>
                                            <p aria-hidden="true" className="mt-1 text-sm text-white">
                                                Shop now
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="group aspect-w-2 aspect-h-1 rounded-lg overflow-hidden sm:relative sm:aspect-none sm:h-full">
                                    <img
                                        src={banner_3}
                                        alt="Walnut desk organizer set with white modular trays, next to porcelain mug on wooden desk."
                                        className="object-center object-cover group-hover:opacity-75 sm:absolute sm:inset-0 sm:w-full sm:h-full"
                                    />
                                    <div
                                        aria-hidden="true"
                                        className="bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0"
                                    />
                                    <div className="p-6 flex items-end sm:absolute sm:inset-0">
                                        <div>
                                            <h3 className="font-semibold text-white">
                                                {/* <Link to={"/products?category=" + Object.keys(categories).length !== 0 ? categories.find((item) => item.name.toLowerCase() == "Bags".toLowerCase())._id : "all"}> */}
                                                <Link to={"/products"}>
                                                    <span className="absolute inset-0" />
                                                    Bags
                                                </Link>
                                            </h3>
                                            <p aria-hidden="true" className="mt-1 text-sm text-white">
                                                Shop now
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-6 sm:hidden" onClick={() => navigate("/products")}>
                                <Link className="block text-sm font-semibold text-kazari-600 hover:text-kazari-500">
                                    Browse all categories<span aria-hidden="true"> &rarr;</span>
                                </Link>
                            </div>
                        </div>
                    </section>

                    {/* Featured section */}
                    <section aria-labelledby="cause-heading">
                        <div className="relative bg-gray-800 py-32 px-6 sm:py-40 sm:px-12 lg:px-16">
                            <div className="absolute inset-0 overflow-hidden">
                                <img
                                    src={banner_3}
                                    alt=""
                                    className="w-full h-full object-center object-cover"
                                />
                            </div>
                            <div aria-hidden="true" className="absolute inset-0 bg-gray-900 bg-opacity-50" />
                            <div className="relative max-w-3xl mx-auto flex flex-col items-center text-center">
                                <h2 id="cause-heading" className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                                    About Us
                                </h2>
                                <p className="mt-3 text-xl text-white">
                                    Kazari Collection is a trademark registered company. Established in 2019, Kazari Collection is a platform for customers to buy unique and hand-made home décor items along with apparel and accessories. All the products displayed on Kazari Collection are 100% genuine India made and hand-made.
                                </p>
                                <Link
                                    to={"/about-us"}
                                    className="mt-8 w-full block bg-white border border-transparent rounded-md py-3 px-8 text-base font-medium text-gray-900 hover:bg-gray-100 sm:w-auto"
                                >
                                    Read our story
                                </Link>
                            </div>
                        </div>
                    </section>

                    {/* Favorites section */}
                    <section aria-labelledby="favorites-heading">
                        <div className="max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
                            <div className="sm:flex sm:items-baseline sm:justify-between">
                                <h2 id="favorites-heading" className="text-2xl font-extrabold tracking-tight text-gray-900">
                                    Our Favorites
                                </h2>
                                <Link to='/products' className="hidden text-sm font-semibold text-kazari-600 hover:text-kazari-500 sm:block">
                                    Browse all favorites<span aria-hidden="true"> &rarr;</span>
                                </Link>
                            </div>

                            <Carousel >
                                {productsTemp && productsTemp.map((product, i) => {
                                    return <div key={i} className="mt-6 grid grid-cols-1 gap-y-10 sm:grid-cols-3 sm:gap-y-0 sm:gap-x-6 lg:gap-x-8">
                                        {product.map((products, i) => (
                                            <div key={i} className="group relative p-4 border-r border-b border-gray-200 sm:p-6" >
                                                <div className="rounded-lg overflow-hidden bg-gray-200 aspect-w-1 aspect-h-1 group-hover:opacity-75">
                                                    <div onClick={() => productDetails(products._id)}>
                                                        <img
                                                            src={BASE_URL + products.thumbnail}
                                                            alt={products.name + " Image"}
                                                            className="w-full h-[15rem] object-contain object-center"
                                                        />
                                                    </div>

                                                    <HeartIcon onClick={() => wishlistHandler(Object.hasOwn(wishlist, products._id), products._id)} className={Object.hasOwn(wishlist, products._id) ? " fill-kazari-100 stroke-kazari-100 h5 w-5 bg-transparent absolute right-3 top-3 hover:cursor-pointer" : " hover:fill-kazari-100 hover:stroke-kazari-100 h5 w-5 bg-transparent absolute right-3 top-3 hover:cursor-pointer"} />

                                                </div>
                                                <div className="pt-10 pb-4 text-center">
                                                    <span className="md:text-base font-medium text-gray-900 sm:text-xs">
                                                        <a onClick={() => productDetails(products._id)}>
                                                            {/* <span aria-hidden="true" className="absolute inset-0" /> */}
                                                            {products.name}
                                                        </a>
                                                    </span>
                                                    <div className="flex flex-1 justify-center mt-2 items-center">
                                                        <FaRupeeSign className="flex-shrink-0 h-5 w-5 " aria-hidden="true" />
                                                        <span href="#" className="ml-1 text-xl font-medium">
                                                            {products.price}
                                                        </span>
                                                    </div>
                                                    {/* <div className="flex flex-1 justify-center mt-3 items-center">
                                                        <button
                                                            onClick={() => handleCheckout(products)}
                                                            type="button"
                                                            className="inline-flex justify-center items-center w-1/2 px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-kazari-600 hover:bg-kazari-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-kazari-500"
                                                        >
                                                            Buy Now
                                                        </button>
                                                        <button onClick={() => handleCart(products._id)} type="button" className="ml-2 inline-flex justify-center items-center w-1/2 px-2.5 py-1.5 border border-transparent text-xs font-medium rounded text-white bg-kazari-100 hover:bg-kazari-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-kazari-500">
                                                            Add to Cart
                                                        </button>
                                                    </div> */}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                })}
                            </Carousel>
                        </div>

                        <div className="mt-6 sm:hidden" onClick={() => navigate("/products")}>
                            <Link className="block text-sm font-semibold text-kazari-600 hover:text-kazari-500">
                                Browse all favorites<span aria-hidden="true"> &rarr;</span>
                            </Link>
                        </div>
                    </section >

                    {/* CTA section */}
                    {/* <section aria-labelledby="sale-heading">
                    <div className="pt-32 overflow-hidden sm:pt-14">
                        <div className="bg-gray-800">
                            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                                <div className="relative pt-48 pb-16 sm:pb-24">
                                    <div>
                                        <h2 id="sale-heading" className="text-4xl font-extrabold tracking-tight text-white md:text-5xl">
                                            Final Stock.
                                            <br />
                                            Up to 50% off.
                                        </h2>
                                        <div className="mt-6 text-base">
                                            <Link to="/" className="font-semibold text-white">
                                                Shop the sale<span aria-hidden="true"> &rarr;</span>
                                            </Link>
                                        </div>
                                    </div>

                                    <div className="absolute -top-32 left-1/2 transform -translate-x-1/2 sm:top-6 sm:translate-x-0">
                                        <div className="ml-24 flex space-x-6 min-w-max sm:ml-3 lg:space-x-8">
                                            <div className="flex space-x-6 sm:flex-col sm:space-x-0 sm:space-y-6 lg:space-y-8">
                                                <div className="flex-shrink-0">
                                                    <img
                                                        className="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72"
                                                        src="https://tailwindui.com/img/ecommerce-images/home-page-03-category-01.jpg"
                                                        alt=""
                                                    />
                                                </div>

                                                <div className="mt-6 flex-shrink-0 sm:mt-0">
                                                    <img
                                                        className="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72"
                                                        src="https://tailwindui.com/img/ecommerce-images/home-page-03-category-02.jpg"
                                                        alt=""
                                                    />
                                                </div>
                                            </div>
                                            <div className="flex space-x-6 sm:-mt-20 sm:flex-col sm:space-x-0 sm:space-y-6 lg:space-y-8">
                                                <div className="flex-shrink-0">
                                                    <img
                                                        className="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72"
                                                        src="https://tailwindui.com/img/ecommerce-images/home-page-03-favorite-01.jpg"
                                                        alt=""
                                                    />
                                                </div>

                                                <div className="mt-6 flex-shrink-0 sm:mt-0">
                                                    <img
                                                        className="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72"
                                                        src="https://tailwindui.com/img/ecommerce-images/home-page-03-favorite-02.jpg"
                                                        alt=""
                                                    />
                                                </div>
                                            </div>
                                            <div className="flex space-x-6 sm:flex-col sm:space-x-0 sm:space-y-6 lg:space-y-8">
                                                <div className="flex-shrink-0">
                                                    <img
                                                        className="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72"
                                                        src="https://tailwindui.com/img/ecommerce-images/home-page-03-category-01.jpg"
                                                        alt=""
                                                    />
                                                </div>

                                                <div className="mt-6 flex-shrink-0 sm:mt-0">
                                                    <img
                                                        className="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72"
                                                        src="https://tailwindui.com/img/ecommerce-images/home-page-03-category-02.jpg"
                                                        alt=""
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}
                </main >
            </div >}
        </>
    );
}

export default Home;