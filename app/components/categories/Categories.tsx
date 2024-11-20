import { Link } from '@remix-run/react'
import React from 'react'
import { IoIosArrowForward } from 'react-icons/io'

function Categories() {
    return (
        <div className='section product-section'>
            <div className="container mx-auto">
                <div className="title-section">
                    <h3 className='title'>Shop From <span>Top Categories</span></h3>
                    <Link to="">View All <IoIosArrowForward /></Link>
                </div>
            </div>
        </div>
    )
}

export default Categories