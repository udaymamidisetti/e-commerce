import { Fragment, useEffect, useReducer, useRef, useState } from 'react'
import { StarIcon } from '@heroicons/react/solid'
import { Tab, RadioGroup } from '@headlessui/react'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { BASE_URL } from '../../Redux/Actions/actionTypes'
import { FaRupeeSign, FaShareAlt } from 'react-icons/fa'
import { Carousel } from 'react-responsive-carousel';
import axios from 'axios'
import { getProduct, addReview, getReview } from '../../Redux/Actions/productAction'
import Loader from '../../Common/Loader'
import { IoLogoWhatsapp } from 'react-icons/io'
import { payment } from '../../Redux/Actions/actions'
import { addCart } from '../../Redux/Actions/cartAction'
import { addFav, removeFav } from '../../Redux/Actions/wishlistAction'
import { HeartIcon } from '@heroicons/react/outline'
import { toast } from 'react-toastify'
import CheckDelivery from './CheckDelivery'
import { addCheckout } from '../../Redux/Actions/checkoutAction'


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}
function AddReviewComponent({ id, userData }) {
    const [rating, setRating] = useState(0);
    const [page, setPage] = useState(1);
    const [clickrating, setClickrating] = useState(0);
    const [addReviewFlag, setReviewFlag] = useState(true);
    const comment = useRef();
    const dispatch = useDispatch();
    const userFlag = Object.entries(userData).length == 0;
    const navigate = useNavigate();
    const { reviews, pagination, reviewUserFlag } = useSelector((item) => item.productReducer);
    const handleSubmit = () => {
        if (userFlag) {
            navigate("/login");
        }
        const data = { comment: comment.current.value, review: clickrating, product: id };
        dispatch(addReview(data));
        comment.current.value = "";
        setReviewFlag(false);
    }
    useEffect(() => {
        console.log("kkdlfklklgfkl");
        dispatch(getReview(id, page))
    }, [page])

    return (
        <>
            {!reviewUserFlag &&
                <div className="w-full max-w-2xl mx-auto mt-16 lg:max-w-none lg:mt-0 lg:col-span-4">
                    {addReviewFlag ?
                        <>
                            <div className="flex text-sm text-gray-500 ">
                                <div className={classNames('border-t border-gray-200', 'py-10')}>
                                    <h2 className="font-bold text-gray-900">Add Review</h2>
                                    <div className="flex items-center mt-4">
                                        {[1, 2, 3, 4, 5].map((elem, i) => (
                                            <StarIcon
                                                key={i}
                                                onMouseEnter={() => setRating(elem)}
                                                onMouseLeave={() => setRating(0)}
                                                onClick={() => setClickrating(elem)}
                                                className={classNames(
                                                    rating >= elem || clickrating >= elem ? 'text-yellow-400' : 'text-gray-300',
                                                    'h-10 w-10 flex-shrink-0'
                                                )}
                                                aria-hidden="true"
                                            />
                                        ))}
                                    </div>
                                    <p className="sr-only">{5} out of 5 stars</p>
                                </div>
                            </div>
                            <div >
                                <textarea ref={comment} rows="4" name="comment" id="comment" class="block w-full rounded-md border-gray-300 shadow-sm focus:border-kazari-500 focus:ring-kazari-500 sm:text-sm" />

                            </div>
                            <div >
                                <button
                                    type="button"
                                    className="w-full mt-5 bg-kazari-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-kazari-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-kazari-500"
                                    onClick={handleSubmit}
                                >
                                    Submit
                                </button>
                            </div>
                        </> :
                        <div className="my-4 prose prose-sm max-w-none ">
                            Thanks for your Review
                        </div>
                    }
                </div>
            }
            <div className="w-full max-w-2xl mx-auto lg:max-w-none lg:mt-0 lg:col-span-4">
                <Tab.Group as="div">
                    <div className="border-b border-gray-200">
                        <Tab.List className="-mb-px flex space-x-8">
                            <Tab
                                className={({ selected }) =>
                                    classNames(
                                        selected
                                            ? 'border-kazari-600 text-kazari-600'
                                            : 'border-transparent text-gray-700 hover:text-gray-800 hover:border-gray-300',
                                        'whitespace-nowrap py-6 border-b-2 font-medium text-sm'
                                    )
                                }
                            >
                                Customer Reviews
                            </Tab>
                        </Tab.List>
                    </div>
                    <Tab.Panels as={Fragment}>
                        <Tab.Panel className="-mb-10">
                            <h3 className="sr-only">Customer Reviews</h3>

                            {reviews.length != 0 ? reviews.map((review, reviewIdx) => (
                                <div key={reviewIdx} className="flex text-sm text-gray-500 space-x-4">
                                    <div className="flex-none py-10">
                                        <img src={"https://www.pngitem.com/pimgs/m/150-1503945_transparent-user-png-default-user-image-png-png.png"} alt="" className="w-10 h-10 bg-gray-100 rounded-full" />
                                    </div>
                                    <div className={classNames(reviewIdx === 0 ? '' : 'border-t border-gray-200', 'py-10')}>
                                        <h3 className="font-medium text-gray-900">{review.user.name}</h3>
                                        <p>
                                            <time dateTime={review.createdAt}>{review.createdAt}</time>
                                        </p>

                                        <div className="flex items-center mt-4">
                                            {[0, 1, 2, 3, 4].map((rating, i) => (
                                                <StarIcon
                                                    key={i}
                                                    className={classNames(
                                                        review.review > rating ? 'text-yellow-400' : 'text-gray-300',
                                                        'h-5 w-5 flex-shrink-0'
                                                    )}
                                                    aria-hidden="true"
                                                />
                                            ))}
                                        </div>
                                        <p className="sr-only">{review.review} out of 5 stars</p>

                                        <div className="mt-4 prose prose-sm max-w-none text-gray-500"
                                            dangerouslySetInnerHTML={{ __html: review.comment }}
                                        />
                                    </div>
                                </div>
                            )) :
                                <div className="my-10 text-lg text-center prose prose-sm max-w- ">
                                    No review found
                                </div>
                            }
                        </Tab.Panel>
                    </Tab.Panels>
                </Tab.Group>
            </div>
            {reviews && pagination.pagesCount > 1 && <div className="w-full max-w-2xl mx-auto lg:max-w-none lg:mt-0 lg:col-span-4">
                <nav
                    className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6"
                    aria-label="Pagination"
                >
                    <div className="hidden sm:block">
                        <p className="text-sm text-gray-700">
                            Showing <span className="font-medium">{page}</span> to <span className="font-medium">{pagination.reviewCount < page * 5 ? pagination.reviewCount : page * 5}</span> of{' '}
                            <span className="font-medium">{pagination.reviewCount}</span> results
                        </p>
                    </div>
                    <div className="flex flex-1 justify-between sm:justify-end">
                        {page !== 1 &&
                            <button
                                className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                                onClick={() => setPage(page - 1)}
                            >
                                Previous
                            </button>
                        }
                        {page < pagination.pagesCount &&
                            <button
                                className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                                onClick={() => setPage(page + 1)}
                            >
                                Next
                            </button>
                        }
                    </div>
                </nav>
            </div>}

        </>
    );
}
function ProductDetailsView() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { productDetails, productDetailsAttr } = useSelector((item) => item.productReducer);
    const { wishlistLoading, wishlist } = useSelector((item) => item.wishlistReducer);
    const [selectedSize, setSelectedSize] = useState(productDetailsAttr.length !== 0 ? productDetailsAttr[0] : {})
    // const wishlistFlag = Object.hasOwn(wishlist, productDetails._id);
    const wishlistFlag = false;
    const { userData } = useSelector((item) => item.reducer);
    const userFlag = Object.entries(userData).length == 0;
    const handleCart = (id) => {
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
        dispatch(addCheckout([{ product, quantity: 1, productAttr: selectedSize }]))
        navigate("/checkout");
        // dispatch(payment({product: id, user: userData._id }, userData));
    }
    const wishlistHandler = (flag, id) => {
        if (!flag) {
            dispatch(addFav(id));
        } else {
            dispatch(removeFav(id));
        }
    }
    const handleShare = (id) => {
        toast.success("Link copied to your clipboard");
    }
    // useEffect(() => {
    //     if (Object.keys(productDetails).length) {
    //         dispatch(getReview(productDetails._id));
    //     }
    // }, [productDetails])
    return (
        <>
            {Object.keys(productDetails).length &&
                <div className="bg-white">
                    <div className="mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                        {/* Product */}
                        <div className="lg:grid lg:grid-rows-1 lg:grid-cols-7 lg:gap-x-8 lg:gap-y-10 xl:gap-x-16">
                            {/* Product image */}
                            <div className="lg:row-end-1 lg:col-span-4">
                                <div className="aspect-w-4 aspect-h-3 lg:w-4/5 rounded-lg bg-gray-100 overflow-hidden">
                                    <Carousel>
                                        {productDetails.images.map((element, i) => {
                                            return <div key={i} className="h-[25rem]">
                                                <img alt={productDetails.name + " Image"} className="w-full h-full object-contain object-center" src={BASE_URL + element} />
                                            </div>
                                        })}
                                    </Carousel>
                                    {/* <img src={BASE_URL + productDetails.thumbnail} alt={productDetails.name + " Image"} className="object-center object-cover" /> */}
                                </div>
                            </div>

                            {/* Product details */}
                            <div className="max-w-2xl mx-auto mt-14 sm:mt-16 lg:max-w-none lg:mt-0 lg:row-end-2 lg:row-span-2 lg:col-span-3">
                                {/* <div className="mb-5">
                                    <ul role="list" className="flex items-center space-x-6">
                                        <li>
                                            <a href="#" className="flex items-center justify-center w-6 h-6 text-gray-400 hover:text-gray-500">
                                                <span className="sr-only">Share on Facebook</span>
                                                <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="flex items-center justify-center w-6 h-6 text-gray-400 hover:text-gray-500">
                                                <span className="sr-only">Share on Instagram</span>
                                                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="flex items-center justify-center w-6 h-6 text-gray-400 hover:text-gray-500">
                                                <span className="sr-only">Share on Twitter</span>
                                                <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                                                    <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                                                </svg>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="flex items-center justify-center w-6 h-6 text-gray-400 hover:text-gray-500">
                                                <span className="sr-only">Share on Whatsapp</span>
                                                <IoLogoWhatsapp className=' text-[1.8rem]' />
                                            </a>
                                        </li>
                                    </ul>
                                </div> */}
                                <div className="flex flex-row gap-10 items-center">
                                    <div className=' basis-1/4'>
                                        <h3 className="sr-only">Reviews</h3>
                                        <div className="flex items-center">
                                            {[0, 1, 2, 3, 4].map((rating, i) => (
                                                <StarIcon
                                                    key={i}
                                                    className={classNames(
                                                        5 > rating ? 'text-yellow-400' : 'text-gray-300',
                                                        'h-5 w-5 flex-shrink-0'
                                                    )}
                                                    aria-hidden="true"
                                                />
                                            ))}
                                        </div>
                                        <p className="sr-only">{5} out of 5 stars</p>
                                    </div>
                                    <div className='basis-1/4'>
                                        <h3 className="sr-only">Share</h3>
                                        <div className="flex items-center">
                                            <FaShareAlt onClick={() => handleShare()} className='hover:text-slate-400 cursor-pointer' />
                                        </div>
                                        <p className="sr-only">{5} out of 5 stars</p>
                                    </div>
                                    <div className='basis-2/4'>
                                        <HeartIcon onClick={() => wishlistHandler(Object.hasOwn(wishlist, productDetails._id), productDetails._id)} className={Object.hasOwn(wishlist, productDetails._id) ? " fill-kazari-100 float-right stroke-kazari-100 h-8 w-8 bg-transparent hover:cursor-pointer" : " hover:fill-kazari-100 hover:stroke-kazari-100 h-8 w-8 bg-transparent hover:cursor-pointer float-right"} />
                                    </div>
                                </div>
                                <div className="flex flex-col-reverse">
                                    <div className="mt-4">
                                        <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">{productDetails.name}</h1>
                                        <h2 id="information-heading" className="sr-only">
                                            Product information
                                        </h2>
                                    </div>
                                </div>

                                <p className="text-gray-500 my-6" dangerouslySetInnerHTML={{ __html: productDetails.shortdescription }}></p>

                                {productDetailsAttr.length != 0 && <div className="sm:flex sm:justify-between">
                                    {/* Size selector  value={selectedSize} onChange={setSelectedSize} */}
                                    <RadioGroup value={selectedSize} onChange={setSelectedSize}>
                                        <RadioGroup.Label className="block text-sm font-medium text-gray-700"></RadioGroup.Label>
                                        <div className="mt-1 grid grid-cols-1 gap-4 sm:grid-cols-2">
                                            {productDetailsAttr.map((size) => (
                                                <RadioGroup.Option
                                                    as="div"
                                                    key={size.name}
                                                    value={size}
                                                    className={({ active }) =>
                                                        classNames(
                                                            active ? 'ring-2 ring-kazari-500' : '',
                                                            'relative block cursor-pointer rounded-lg border border-gray-300 p-4 focus:outline-none'
                                                        )
                                                    }
                                                >
                                                    {({ active, checked }) => (
                                                        <>
                                                            <RadioGroup.Label as="p" className="text-base font-medium text-gray-900">
                                                                {size.name}
                                                            </RadioGroup.Label>
                                                            <RadioGroup.Description as="p" className="mt-1 text-sm text-gray-500">
                                                                {size.description}
                                                                <div className="flex flex-1  mt-2 items-center text-kazari-500">
                                                                    <FaRupeeSign className="flex-shrink-0 h-5 w-5 " aria-hidden="true" />
                                                                    <span className="ml-1 text-[1rem] font-bold">
                                                                        {new Intl.NumberFormat('en-IN').format(parseInt(size.price).toFixed(2)) + ".00"}
                                                                    </span>

                                                                </div>
                                                            </RadioGroup.Description>
                                                            <div
                                                                className={classNames(
                                                                    active ? 'border' : 'border-2',
                                                                    checked ? 'border-kazari-500' : 'border-transparent',
                                                                    'pointer-events-none absolute -inset-px rounded-lg'
                                                                )}
                                                                aria-hidden="true"
                                                            />
                                                        </>
                                                    )}
                                                </RadioGroup.Option>
                                            ))}
                                        </div>
                                    </RadioGroup>
                                </div>}

                                <div className="flex flex-1  mt-2 items-center">
                                    <FaRupeeSign className="flex-shrink-0 h-5 w-5 " aria-hidden="true" />
                                    <span className="ml-1 text-[2rem] font-bold">
                                        {new Intl.NumberFormat('en-IN').format(parseInt(Object.entries(selectedSize).length !== 0 ? selectedSize.price : productDetails.price).toFixed(2)) + ".00"}
                                    </span>

                                </div>
                                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2">
                                    <button
                                        type="button"
                                        className="w-full bg-kazari-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-kazari-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-kazari-500"
                                        onClick={() => handleCheckout(productDetails)}
                                    >
                                        Buy Now
                                    </button>
                                    <button
                                        type="button"
                                        className="w-full bg-kazari-50 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-kazari-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-kazari-500"
                                        onClick={() => handleCart(productDetails._id)}
                                    >
                                        Add to Cart
                                    </button>
                                </div>
                                {/* <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-1">
                                    <CheckDelivery />
                                </div> */}

                                {/* <div className="border-t border-gray-200 mt-10 pt-10">
                                    <div className=" prose prose-sm text-gray-500">
                                        <CheckDelivery />
                                    </div>
                                </div> */}
                                <div className="border-t border-gray-200 mt-10 pt-10">
                                    <h3 className="text-sm font-medium text-gray-900">Highlights</h3>
                                    <div className="mt-4 prose prose-sm text-gray-500" dangerouslySetInnerHTML={{ __html: productDetails.description }}>

                                    </div>
                                </div>
                            </div>
                            <AddReviewComponent userData={userData} id={productDetails._id} />
                        </div>
                    </div>
                </div >}
        </>
    );
}

export default ProductDetailsView;