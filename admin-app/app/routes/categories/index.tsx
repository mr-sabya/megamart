import { MetaFunction } from '@remix-run/react';
import React from 'react'
import Categories from '~/components/categories/Categories'

export const meta: MetaFunction = () => {
    return [
        { title: "New Remix App" },
        { name: "description", content: "Welcome to Remix!" },
    ];
};


function Index() {
    return (
        <div className='section category-section'>
            <div className="container mx-auto">
                <div className="title-section">
                    <h3 className='title'>All <span>Categories</span></h3>
                    
                </div>

                <Categories />
            </div>
        </div>
    )
}

export default Index