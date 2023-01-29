import OrderDetailsView from "./OrderDetailsView";
import { useDispatch } from 'react-redux';
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getOrderDetails } from "../../Redux/Actions/orderAction";

function OrderDetails() {
    const dispatch = useDispatch();
    const { id } = useParams();
    useEffect(() => {
        dispatch(getOrderDetails(id));
    }, [dispatch]);
    return (
        <OrderDetailsView />
    )
}
export default OrderDetails;
