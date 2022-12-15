import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getOrderDetails } from '../../Redux/Actions/orderAction';
import InvoiceView from './InvoiceView';
function Invoice() {
    const dispatch = useDispatch();
    const { id } = useParams();
    useEffect(() => {
        dispatch(getOrderDetails(id));
    }, [dispatch]);
    return (
        <InvoiceView />
    );
}

export default Invoice;