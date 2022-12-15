import { useNavigate } from 'react-router-dom';
function Logout() {

    localStorage.removeItem(process.env.REACT_APP_TOKEN);
    const navigate = useNavigate();
    navigate("/");
    return ("");
}

export default Logout;