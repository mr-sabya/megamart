import { Link } from '@remix-run/react'
import React from 'react'
import { MdOutlinePlace } from 'react-icons/md'


import './TopHeader.css';
import { HiOutlineTruck } from 'react-icons/hi';
import { RiDiscountPercentLine } from 'react-icons/ri';

function TopHeader() {
    return (
        <div className="top-header">
            <div className='container mx-auto flex justify-end'>
                <div className="action-icons flex justify-between gap-16">
                    <div className="icon">
                        <Link to="/">
                            <MdOutlinePlace />
                            Deliver to <strong>423651</strong>
                        </Link>
                    </div>
                    <div className="icon">
                        <Link to="/">
                            <HiOutlineTruck />
                            Track your order
                        </Link>
                    </div>
                    <div className="icon">
                        <Link to="/">
                            <RiDiscountPercentLine />
                            All Offers
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopHeader