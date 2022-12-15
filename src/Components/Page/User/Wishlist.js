
import ProductCard from '../Product';
import { useDispatch } from 'react-redux';
import { getProduct } from './../../Redux/Actions/productAction';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import InfiniteScroll from "react-infinite-scroll-component";
import { addCart } from '../../Redux/Actions/cartAction';
import { payment } from './../../Redux/Actions/actions';
import { Navigate, useNavigate } from 'react-router-dom';
import Loader from '../../Common/Loader';
import WishlistView from './WishlistView';
function Wishlist() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { productLoading, products } = useSelector((item) => item.productReducer);
    const { wishlistLoading, wishlist } = useSelector((item) => item.wishlistReducer);
    const userData = useSelector((item) => item.reducer.userData);
    const userFlag = Object.entries(userData).length == 0;
    const [prd, setPrd] = useState(products.slice(0, 12));
    const [has, setHas] = useState(true);
    let array = [];
    for (const key in wishlist) {
        if (Object.hasOwnProperty.call(wishlist, key)) {
            array.push(wishlist[key]);
        }
    }
    const fetchMoreData = () => {
        if ((parseInt(products.length) - parseInt(prd.length)) > 12) {
            let temp = products.slice(prd.length, (prd.length + 12));
            setPrd([...prd, ...temp]);
        } else {
            let temp = products.slice(prd.length);
            setPrd([...prd, ...temp])
            setHas(false);
        }
    }

    return (
        <>
            {productLoading ? <Loader /> :
                <>
                    <div className="px-4 sm:px-6 lg:px-8">
                        <div className="relative mx-auto max-w-[40.5rem] pt-10 text-center pb-6">
                            <h1 className="text-2xl font-extrabold tracking-tight text-kazari sm:text-3xl">Wishlist</h1>
                            {/* <p className="mt-4 text-base leading-7 text-slate-600">Last updated on November 2, 2021</p> */}
                        </div>
                    </div>
                    <div className="bg-white py-10">
                        <div className="max-w-7xl mx-auto overflow-hidden sm:px-6 lg:px-8">
                            <h2 className="sr-only">Products</h2>
                            <div className="-mx-px border-l border-gray-200 grid grid-cols-2 sm:mx-0 md:grid-cols-3 lg:grid-cols-4">
                                <WishlistView wishlist={wishlist} product={array} userFlag={userFlag} dispatch={dispatch} navigate={navigate} userData={userData} />
                            </div>
                        </div>
                    </div >
                </>
            }
        </>
    )
}
export default Wishlist;

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