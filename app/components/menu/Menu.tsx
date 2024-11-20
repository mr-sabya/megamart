import React, { useEffect, useRef, useState } from 'react'
import DropdownMenu from '../drop-down/DropdownMenu'
import { IoIosArrowDown } from 'react-icons/io';

import './Menu.css'
import { Link, useLocation } from '@remix-run/react';


function Menu() {

    const [openDropdown, setOpenDropdown] = useState<number | null>(null);
    const menuRef = useRef<HTMLDivElement | null>(null);
    const location = useLocation(); // Get current location (current URL)
    const [isSticky, setIsSticky] = useState(false);

    const menuItems = [
        { name: "Home", path: "/", items: ["Overview", "Updates", "Reports"] },
        { name: "Services", path: "/services", items: ["Web Development", "SEO", "Marketing"] },
        { name: "About Us", path: "/about", items: ["Team", "History", "Mission"] },
        { name: "Projects", path: "/projects", items: ["Ongoing", "Completed", "Upcoming"] },
        { name: "Blog", path: "/blog", items: ["Tech", "Lifestyle", "Business"] },
        { name: "Contact", path: "/contact", items: ["Email", "Phone", "Location"] },
        { name: "Support", path: "/support", items: ["FAQs", "Live Chat", "Help Center"] },
    ];

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {

                setOpenDropdown(null);

            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleDropdownClick = (index: number) => {
        // Toggle dropdown on the clicked index
        setOpenDropdown(openDropdown === index ? null : index);
    };

    // Function to check if the current URL matches the link
    const isActive = (path: string) => {
        // Match the exact pathname (you can adjust if you want partial matching)
        return location.pathname === path || location.pathname.startsWith(path + "/");
    }

    return (
        <div className={`main-menu ${isSticky ? "sticky" : ""}`}>
            <div className='container mx-auto'>
                <nav className="menu" ref={menuRef}>
                    <ul className="flex gap-5">
                        {menuItems.map((menu, index) => (
                            <li key={menu.name} className={`relative ${isActive(menu.path) ? "active" : ""}`}>
                                <button
                                    onClick={() => handleDropdownClick(index)}
                                    className="menu-item"
                                >
                                    {menu.name}
                                    <IoIosArrowDown />
                                </button>

                                {openDropdown === index && (
                                    <ul className="absolute left-0 mt-2 w-48 bg-white text-gray-800 rounded shadow-lg z-10">
                                        {menu.items.map((item, idx) => (
                                            <li key={idx}>
                                                <a
                                                    href={`/${menu.name.toLowerCase()}/${item.toLowerCase()}`}
                                                    className="block px-4 py-2 hover:bg-gray-100"
                                                >
                                                    {item}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}

                        <li>
                            <Link to='/' className='menu-item'>
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Menu