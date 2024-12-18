import { Link } from '@remix-run/react'
import React from 'react'
import { IoIosArrowForward } from 'react-icons/io'

import Product1 from '~/images/product-1.png'
import Product2 from '~/images/product-2.png'
import Product3 from '~/images/product-3.png'
import Product4 from '~/images/product-4.png'
import Product5 from '~/images/product-5.png'
import './Products.css'
import Index from '~/routes/_index'


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

function Products({number} : {number: number}) {
    return (


        <div className={`products grid ${number == 4 ? 'xl:grid-cols-4': 'xl:grid-cols-5'} grid-cols-2 gap-4`}>
            {products.map((product, index) => (
                <div className="product" key={index}>
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
    )
}

export default Products