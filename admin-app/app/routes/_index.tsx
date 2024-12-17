import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { IoIosArrowForward } from "react-icons/io";
import Categories from "~/components/categories/Categories";
import Offers from "~/components/offer/Offers";
import Products from "~/components/products/Products";
import Slider from "~/components/slider/Slider";


export const meta: MetaFunction = () => {
    return [
        { title: "New Remix App" },
        { name: "description", content: "Welcome to Remix!" },
    ];
};

export default function Index() {
    return (
        <div className="">
            <Slider />

            <div className="top-section">
                <div className='section product-section'>
                    <div className="container mx-auto">
                        <div className="title-section">
                            <h3 className='title'>Grab the best deal on <span>Smartphones</span></h3>
                            <Link to="">View All <IoIosArrowForward /></Link>
                        </div>
                        <Products number={5} />
                    </div>
                </div>
            </div>

            {/* categories */}

            <div className='section category-section'>
                <div className="container mx-auto">
                    <div className="title-section">
                        <h3 className='title'>Shop From <span>Top Categories</span></h3>
                        <Link to="">View All <IoIosArrowForward /></Link>
                    </div>

                    <Categories />
                </div>
            </div>

            {/* offers */}
            <Offers />


            {/* products */}

            <div className='section product-section'>
                <div className="container mx-auto">
                    <div className="title-section">
                        <h3 className='title'>Grab the best deal on <span>Smartphones</span></h3>
                        <Link to="">View All <IoIosArrowForward /></Link>
                    </div>
                    <Products number={5} />
                </div>
            </div>



            <div className='section product-section'>
                <div className="container mx-auto">
                    <div className="title-section">
                        <h3 className='title'>Grab the best deal on <span>Smartphones</span></h3>
                        <Link to="">View All <IoIosArrowForward /></Link>
                    </div>
                    <Products number={5} />
                </div>
            </div>
        </div>
    );
}

