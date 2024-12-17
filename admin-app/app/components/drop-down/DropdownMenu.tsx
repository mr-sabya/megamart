import { Link } from '@remix-run/react';
import React, { useState } from 'react';

const DropdownMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative">
            <button
                onClick={toggleMenu}
                className="menu-item relative"
            >
                Menu
            </button>
            {isOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                    <Link
                        to="/products"
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    >
                        Products
                    </Link>
                    <Link
                        to="/cart"
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    >
                        Cart
                    </Link>
                    <Link
                        to="/about"
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    >
                        About Us
                    </Link>
                </div>
            )}
        </div>
    );
};

export default DropdownMenu;
