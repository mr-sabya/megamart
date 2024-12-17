import React from 'react'
import Products from '~/components/products/Products'
import ShopSidebar from '~/components/shopsidebar/ShopSidebar'

import './Shop.css'
import { MetaFunction } from '@remix-run/react';

export const meta: MetaFunction = () => {
    return [
        { title: "Shop" },
        { name: "description", content: "Welcome to Remix!" },
    ];
};



function Shop() {
    return (
        <div className='section shop'>
            <div className="container mx-auto">

                <div className="flex flex-row gap-10">
                    <div className="basis-1/4">
                        <ShopSidebar />
                    </div>
                    <div className="products basis-3/4">

                        <Products number={4} />
                        <div className="load-more">
                            <button>Load More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Shop