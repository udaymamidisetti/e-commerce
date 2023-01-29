import { useEffect } from 'react';
import Logo from './Logo.svg';

function Loader() {
    return (
        <div className={" w-screen h-screen backdrop-opacity-10 backdrop-invert bg-white z-10 fixed "}>
            < div className="flex items-center justify-center w-screen h-screen" >
                <img className='animate-bounce' src={Logo} />
            </div >
        </div >
    );
}

export default Loader;