
import ProductCard from './index';
import * as ActionTypes from "../../Redux/Actions/actionTypes";
import { useDispatch } from 'react-redux';
import { getAllProducts, getProduct, setSlider } from './../../Redux/Actions/productAction';
import { useCallback, useEffect, useReducer, useState } from 'react';
import { useSelector } from 'react-redux';
import InfiniteScroll from "react-infinite-scroll-component";
import { addCart } from '../../Redux/Actions/cartAction';
import { payment } from './../../Redux/Actions/actions';
import { Navigate, useNavigate, useSearchParams } from 'react-router-dom';
import Loader from '../../Common/Loader';
import { FaRupeeSign } from 'react-icons/fa';

let count = 0;
function AllProduct() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { slider, search } = useSelector((item) => item.productReducer);
    useEffect(() => {
        dispatch(getAllProducts());
    }, [dispatch]);
    useEffect(() => {
        const body = document.querySelector('#root');

        body.scrollIntoView({
            behavior: 'smooth'
        }, 500)

    }, []);
    const [searchParams, setSearchParams] = useSearchParams();
    // useEffect(() => {
    //     console.log(search, "search");
    //     setSearchParams({ search })
    // }, [search]);
    if (search) {
        console.log(search, "search");
        setSearchParams({ search })
    }
    const filterFlag = (Object.keys(Object.fromEntries([...searchParams])).length !== 0) || (slider != 10000);
    const handleClear = () => {
        dispatch(setSlider(10000));
        navigate("/products");
    }
    return (
        <>
            <div className="bg-white">
                <div className="max-w-7xl mx-auto overflow-hidden sm:px-6 lg:px-8">
                    {filterFlag && <h2 className="text-center py-5">{ }</h2>}
                    {/* <InfiniteScroll
                            dataLength={prd.length}
                            next={fetchMoreData}
                            hasMore={has}
                            loader={<h4>Loading...</h4>}
                        > */}

                    <div className="-mx-px mb-10 grid grid-cols-2 sm:mx-0 md:grid-cols-3 lg:grid-cols-4 gap-10">
                        <div>
                            <label htmlFor="medium-range" className="block mb-2 text-sm font-medium text-gray-900 ">Price
                                <span className='float-right'>
                                    <span className='inline-flex items-center'><FaRupeeSign className="h-4 w-4" aria-hidden="true" />{slider}</span>
                                </span>
                            </label>
                            <input type="range" min="0" max="10000" value={slider} step="100" onChange={(e) => dispatch(setSlider(e.currentTarget.value))} className="form-range appearance-none w-full h-2 p-0 bg-transparent focus:outline-none focus:ring-0 focus:shadow-none  dark:bg-kazari-500" id="customRange1" />
                        </div>
                        {/* <div>
                            <select name="sort" className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-kazari-500 focus:border-kazari-500 sm:text-sm rounded-md" defaultValue="">
                                <option value="popularity" selected="selected">Sort by popularity</option>
                                <option value="rating">Sort by average rating</option>
                                <option value="date">Sort by latest</option>
                                <option value="price">Sort by price: low to high</option>
                                <option value="price-desc">Sort by price: high to low</option>
                            </select>
                        </div> */}
                        {filterFlag && <div className='md:col-span-2 lg:col-span-3 text-right'>
                            <button
                                onClick={handleClear}
                                type="button"
                                className="inline-flex justify-center items-center w-28 px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-kazari-600 hover:bg-kazari-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-kazari-500"
                            >
                                Clear
                            </button>
                        </div>}
                    </div>
                    <div className="-mx-px border-l border-gray-200 grid grid-cols-2 sm:mx-0 md:grid-cols-3 lg:grid-cols-4">
                        <ProductCard />
                    </div>
                    {/* </InfiniteScroll> */}
                </div>
            </div >
        </>
    )
}
export default AllProduct;

{/* <InfiniteScroll
{products.map((product) => (
    <ProductCard product={product} />
))}
    dataLength={this.state.items.length}
    next={this.fetchMoreData}
    hasMore={true}
    loader={<h4>Loading...</h4>}
>
    {this.state.items.map((i, index) => (
        <div style={style} key={index}>
            div - #{index}
        </div>
    ))}
</InfiniteScroll> */}