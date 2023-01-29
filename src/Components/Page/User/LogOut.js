import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { userLogOut } from '../../Redux/Actions/userActions';
function Logout() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    localStorage.removeItem(process.env.REACT_APP_TOKEN);
    useEffect(() => {
        dispatch(userLogOut({ callback: () => navigate("/") }));
    }, [dispatch])
    // navigate("/");
    return ("");
}

export default Logout;