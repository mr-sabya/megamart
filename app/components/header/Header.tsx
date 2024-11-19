import { Link } from '@remix-run/react';
import { LuSearch } from 'react-icons/lu';
import Logo from '~/images/MegaMart.png';

import './Header.css';
import { AiOutlineBars } from 'react-icons/ai';
import { FiUser } from 'react-icons/fi';
import { PiShoppingCart } from 'react-icons/pi';

function Header() {
    return (
        <div className='header'>
            <div className='container mx-auto flex justify-between items-center'>
                <div className="logo">
                    <Link to="/">
                        <img src={Logo} alt="" />
                    </Link>
                </div>

                <div className="action-menu w-3/4">
                    <div className="search">
                        <LuSearch />
                        <input type="text" />
                        <button>
                            <AiOutlineBars />
                        </button>
                    </div>

                    <div className="action border-r pr-10">
                        <Link to='/'>
                            <FiUser />
                            Sign Up/Sing In
                        </Link>
                    </div>
                    <div className="action">
                        <Link to='/'>
                            <PiShoppingCart />
                            Cart
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header