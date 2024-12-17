import './SideCart.css'
import { useCart } from "../../context/CartContext";

function SideCart() {

    const { isCartOpen, closeCart } = useCart();

    return (
        <div
            className={`side-cart ${isCartOpen ? "open" : ""
                }`}
            style={{ width: "300px" }}
        >
            <div className="p-4">
                <h2 className="text-xl font-bold">Your Cart</h2>
                <p className="mt-4">Cart items will appear here.</p>
                <button
                    onClick={closeCart}
                    className="mt-6 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                >
                    Close
                </button>
            </div>
        </div>
    )
}

export default SideCart