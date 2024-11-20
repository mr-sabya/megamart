import type { MetaFunction } from "@remix-run/node";
import Categories from "~/components/categories/Categories";
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
                <Products title="Grab the best deal on <span>Smartphones</span>" />
            </div>
            <Categories />
        </div>
    );
}

