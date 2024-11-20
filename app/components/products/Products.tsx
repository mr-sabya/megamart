import { Link } from '@remix-run/react'
import React from 'react'
import { IoIosArrowForward } from 'react-icons/io'

import Product1 from '~/images/product-1.png'
import Product2 from '~/images/product-2.png'
import Product3 from '~/images/product-3.png'
import Product4 from '~/images/product-4.png'
import Product5 from '~/images/product-5.png'
import './Products.css'


const products = [
    {
        name: "Galaxy S22 Ultra",
        price: 32999,
        old_price: 74999,
        save: 32999,
        off: 56,
        image: Product1
    },
    {
        name: "Galaxy M13 (4GB | 64 GB )",
        price: 32999,
        old_price: 74999,
        save: 32999,
        off: 56,
        image: Product2
    },
    {
        name: "Galaxy M13 (4GB | 64 GB )",
        price: 32999,
        old_price: 74999,
        save: 32999,
        off: 56,
        image: Product3
    },
    {
        name: "Galaxy M13 (4GB | 64 GB )",
        price: 32999,
        old_price: 74999,
        save: 32999,
        off: 56,
        image: Product4
    },
    {
        name: "Galaxy M13 (4GB | 64 GB )",
        price: 32999,
        old_price: 74999,
        save: 32999,
        off: 56,
        image: Product5
    },

];

function Products({ title }: { title: string }) {
    return (
        <div className='section product-section'>
            <div className="container mx-auto">
                <div className="title-section">
                    <h3 className='title' dangerouslySetInnerHTML={{ __html: title }} />
                    <Link to="">View All <IoIosArrowForward /></Link>
                </div>

                <div className="products grid grid-cols-5 gap-4">
                    {products.map((product, index) => (
                        <div className="product">
                            <div className="image">
                                <Link to='/'><img src={product.image} alt="" /></Link>
                                <div className="off">
                                    <span>56% OFF</span>
                                </div>
                            </div>
                            <div className="text">
                                <h4><Link to=''>{product.name}</Link></h4>
                                <p className='price'>₹{product.price} <span>₹{product.old_price}</span></p>
                                <p className='save'>Save - ₹{product.save}</p>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    )
}

export default Products