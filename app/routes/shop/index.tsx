import React from 'react'
import Products from '~/components/products/Products'

function Shop() {
    return (
        <div className='section shop'>
            <div className="container mx-auto">

                <div className="flex flex-row">
                    <div className="sidebar basis-1/4"></div>
                    <div className="products basis-3/4">
                        <div className="title-section">
                            <h3 className='title'>Grab the best deal on <span>Smartphones</span></h3>
                        </div>
                        <Products number={4} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Shop