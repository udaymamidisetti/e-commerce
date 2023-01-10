import { FaRupeeSign } from "react-icons/fa";
import { HeartIcon } from '@heroicons/react/outline';
import { BASE_URL } from './../../Redux/Actions/actionTypes';
import { addCart } from '../../Redux/Actions/cartAction';
import { addFav, removeFav } from './../../Redux/Actions/wishlistAction';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { addCheckout } from '../../Redux/Actions/checkoutAction';

function classNames(...classes) {

    return classes.filter(Boolean).join(' ')
}

function Product() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { products, slider } = useSelector((item) => item.productReducer);
    const { wishlist } = useSelector((item) => item.wishlistReducer);
    const userData = useSelector((item) => item.reducer.userData);
    const userFlag = Object.entries(userData).length == 0;
    const [searchParams] = useSearchParams();
    let tempProducts = products;
    tempProducts = tempProducts.filter((item) => {
        if (item.hasOwnProperty("price")) {
            return item.price < slider;
        }
    });
    let search = searchParams.get("search");
    console.log(search, "search");
    console.log(Object.fromEntries([...searchParams]).hasOwnProperty("search"), "searchParams.entries()");
    if (Object.fromEntries([...searchParams]).hasOwnProperty("search")) {
        if (search == "") {
            navigate("/products");
        }
    }
    if (search) {
        tempProducts = tempProducts.filter((product) => product.name.toLowerCase().replace(/\s+/g, '').includes(search.toLowerCase().replace(/\s+/g, '')))
    }
    // tempProducts = (search === '') ? tempProducts : 
    if (searchParams.get("category")) {
        tempProducts = tempProducts.filter((item) => {
            if (item.hasOwnProperty("category")) {
                return item.category._id === searchParams.get("category");
            }
        });
    }
    if (searchParams.get("subcategory")) {
        tempProducts = tempProducts.filter((item) => {
            if (item.hasOwnProperty("subcategory")) {
                return item.subcategory._id === searchParams.get("subcategory");
            }
        });
    }

    const handleCart = (id) => {
        if (userFlag) {
            navigate("/login");
        }
        dispatch(addCart(id));
    }
    const handleCheckout = (product) => {
        if (userFlag) {
            navigate("/login");
        }
        dispatch(addCheckout([{ product, quantity: 1 }]))
        navigate("/checkout");
    }
    const wishlistHandler = (flag, id) => {
        if (!flag) {
            dispatch(addFav(id));
        } else {
            dispatch(removeFav(id));
        }
    }
    const productDetails = (id) => {
        navigate("/products/" + id);
    }
    return (
        <>
            {tempProducts && tempProducts.map((product, i) => {
                return <div key={i} className="group relative p-4 border-r border-b border-gray-200 sm:p-6">
                    <div className="rounded-lg overflow-hidden bg-gray-200 aspect-w-1 aspect-h-1 group-hover:opacity-75">
                        <img onClick={() => productDetails(product._id)}
                            src={BASE_URL + product.thumbnail}
                            alt={product.name + " Image"}
                            className="w-full h-[15rem] object-contain"
                        />

                        <HeartIcon onClick={() => wishlistHandler(Object.hasOwn(wishlist, product._id), product._id)} className={Object.hasOwn(wishlist, product._id) ? " fill-kazari-100 stroke-kazari-100 h5 w-5 bg-transparent absolute right-3 top-3 hover:cursor-pointer" : " hover:fill-kazari-100 hover:stroke-kazari-100 h5 w-5 bg-transparent absolute right-3 top-3 hover:cursor-pointer"} />

                    </div>
                    <div className="pt-10 pb-4 text-center">
                        <span className="md:text-base font-medium text-gray-900 sm:text-xs">
                            <a onClick={() => productDetails(product._id)}>
                                {/* <span aria-hidden="true" className="absolute inset-0" /> */}
                                {product.name}
                            </a>
                        </span>

                        <div className="flex flex-1 justify-center mt-2 items-center">
                            <FaRupeeSign className="flex-shrink-0 h-5 w-5 " aria-hidden="true" />
                            <span href="#" className="ml-1 text-xl font-medium">
                                {product.price}
                            </span>
                        </div>
                        {/* <div className="flex flex-1 justify-center mt-3 items-center">
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
                        </div> */}
                    </div>
                </div>
            })}
        </>
    );
}

export default Product;