import { Link } from '@remix-run/react'
import React from 'react'
import { IoIosArrowForward } from 'react-icons/io'

import Category1 from '~/images/category-1.png';
import Category2 from '~/images/category-2.png';

import './Categories.css'

function Categories() {
    return (

        <div className="categories grid lg:grid-cols-7 grid-cols-2 gap-14">
            <div className="category">
                <Link to='/'>
                    <div className="image">
                        <img src={Category1} alt="" />
                    </div>
                    <p>Mobile</p>
                </Link>
            </div>
            <div className="category">
                <Link to='/'>
                    <div className="image">
                        <img src={Category2} alt="" />
                    </div>
                    <p>Mobile</p>
                </Link>
            </div>
            <div className="category">
                <Link to='/'>
                    <div className="image">
                        <img src={Category1} alt="" />
                    </div>
                    <p>Mobile</p>
                </Link>
            </div>
            <div className="category">
                <Link to='/'>
                    <div className="image">
                        <img src={Category1} alt="" />
                    </div>
                    <p>Mobile</p>
                </Link>
            </div>
            <div className="category">
                <Link to='/'>
                    <div className="image">
                        <img src={Category1} alt="" />
                    </div>
                    <p>Mobile</p>
                </Link>
            </div>
            <div className="category">
                <Link to='/'>
                    <div className="image">
                        <img src={Category1} alt="" />
                    </div>
                    <p>Mobile</p>
                </Link>
            </div>
            <div className="category">
                <Link to='/'>
                    <div className="image">
                        <img src={Category1} alt="" />
                    </div>
                    <p>Mobile</p>
                </Link>
            </div>
        </div>
    )
}

export default Categories