import Button from '../../Common/Button';
import ButtonOutline from '../../Common/ButtonOutline';
import { BsCartPlusFill } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { FaRupeeSign } from "react-icons/fa";
import { StarIcon, HeartIcon, CurrencyRupeeIcon } from '@heroicons/react/outline';
import { BASE_URL, GET_PRODUCT_FAILURE } from './../../Redux/Actions/actionTypes';
import { addCart } from '../../Redux/Actions/cartAction';
import { payment } from '../../Redux/Actions/actions';
import { addFav, removeFav } from './../../Redux/Actions/wishlistAction';
import { getAllProducts, getProduct } from '../../Redux/Actions/productAction';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { addCheckout } from '../../Redux/Actions/checkoutAction';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

function WishlistView() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { products } = useSelector((item) => item.productReducer);
    const { wishlist } = useSelector((item) => item.wishlistReducer);
    const userData = useSelector((item) => item.reducer.userData);
    const userFlag = Object.entries(userData).length == 0;

    let array = [];
    products.map((product) => {
        if (Object.hasOwn(wishlist, product._id)) {
            array.push(product);
        }
    })
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
        navigate("/products/" + id);
    }
    return (
        <>
            {array && array.map((product, i) => {
                return <div key={i} className="group relative p-4 border-r border-b border-gray-200 sm:p-6">
                    <div className="rounded-lg overflow-hidden bg-gray-200 aspect-w-1 aspect-h-1 group-hover:opacity-75">
                        <img onClick={() => productDetails(product._id)}
                            src={BASE_URL + product.thumbnail}
                            alt={product.name + " Image"}
                            className="w-full h-full object-center object-cover"
                        />

                        <HeartIcon onClick={() => wishlistHandler(Object.hasOwn(wishlist, product._id), product._id)} className={Object.hasOwn(wishlist, product._id) ? " fill-kazari-100 stroke-kazari-100 h5 w-5 bg-transparent absolute right-3 top-3 hover:cursor-pointer" : " hover:fill-kazari-100 hover:stroke-kazari-100 h5 w-5 bg-transparent absolute right-3 top-3 hover:cursor-pointer"} />

                    </div>
                    <div className="pt-10 pb-4 text-center">
                        <span className="md:text-base font-medium text-gray-900 sm:text-xs">
                            <a href={product.href}>
                                {/* <span aria-hidden="true" className="absolute inset-0" /> */}
                                {product.name}
                            </a>
                        </span>
                        {/* <div className="mt-3 flex flex-col items-center">
                        <p className="sr-only">{product.rating} out of 5 stars</p>
                        <div className="flex items-center">
                            {[0, 1, 2, 3, 4].map((rating) => (
                                <StarIcon
                                    key={rating}
                                    className={classNames(
                                        product.rating > rating ? 'text-yellow-400' : 'text-gray-200',
                                        'flex-shrink-0 h-5 w-5'
                                    )}
                                    aria-hidden="true"
                                />
                            ))}
                        </div>
                        <p className="mt-1 text-sm text-gray-500">{product.reviewCount} reviews</p>
                    </div> */}
                        {/* <div className="mt-3 flex flex-col items-center">
                    <FaRupeeSign className='flex-shrink-0 h-5 w-5' /><span className="mt-4 text-base font-medium text-gray-900">{product.price}</span>
                    </div> */}
                        <div className="flex flex-1 justify-center mt-2 items-center">
                            <FaRupeeSign className="flex-shrink-0 h-5 w-5 " aria-hidden="true" />
                            <span href="#" className="ml-1 text-xl font-medium">
                                {product.price}
                            </span>
                        </div>
                        <div className="flex flex-1 justify-center mt-3 items-center">
                            <button
                                onClick={() => handleCheckout(product)}
                                type="button"
                                className="inline-flex justify-center items-center w-1/2 px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-kazari-600 hover:bg-kazari-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-kazari-500"
                            >
                                Buy Now
                            </button>
                            <button onClick={() => handleCart(product._id)} type="button" className="ml-2 inline-flex justify-center items-center w-1/2 px-2.5 py-1.5 border border-transparent text-xs font-medium rounded text-white bg-kazari-100 hover:bg-kazari-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-kazari-500">
                                Add to Cart
                            </button>
                        </div>

                    </div>
                    <div>

                    </div>
                </div>
            })}
            {array.length == 0 &&
                <div className="w-full max-w-2xl mx-auto lg:max-w-none lg:mt-0 lg:col-span-4">
                    <div className="my-10 text-xl font-bold text-gray-500 text-center prose prose-sm max-w- ">
                        Wishlist empty ... add some Products
                    </div>
                    <div className="my-10 text-xl  text-kazari-500 text-center prose prose-sm max-w- flex justify-center">
                        {/* <button>Go to Products</button> */}
                        <Link to="/products"
                            type="button"
                            className=" item-center bg-kazari-600 font-bold border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-kazari-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-kazari-500"
                        >
                            Go to Products
                        </Link>
                    </div>
                </div>
            }
        </>
    );
}

export default WishlistView;