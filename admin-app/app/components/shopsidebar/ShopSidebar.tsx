import './ShopSidebar.css'

function ShopSidebar() {
    return (
        <div className='sidebar'>
            <div className="sidebar-item">
                <div className="title">
                    <h4>Search</h4>
                </div>

                <div className="item-body">
                    <input id="email" name="email" type="text" className="input search" placeholder='Product......'/>
                </div>
            </div>
            <div className="sidebar-item">
                <div className="title">
                    <h4>Categories</h4>
                </div>
                <div className="item-body">
                    <div className="categories">

                        <div className="item">
                            <div className="form-check">
                                <input id="comments" name="comments" type="checkbox" className="check-box" />
                                <label htmlFor="comments" className="check-label">Comments</label>
                            </div>
                            <div className="count">
                                <span>(4)</span>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
            <div className="sidebar-item">
                <div className="title">
                    <h4>Brands</h4>
                </div>
                <div className="item-body">
                    <div className="brands">

                        <div className="item">
                            <div className="form-check">
                                <input id="walton" name="comments" type="checkbox" className="check-box" />
                                <label htmlFor="walton" className="check-label">Comments</label>
                            </div>
                            <div className="count">
                                <span>(4)</span>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShopSidebar