import React, { createContext, useContext, useState, ReactNode } from "react";

// Define the context type
interface CartContextType {
    isCartOpen: boolean;
    toggleCart: () => void;
    openCart: () => void;
    closeCart: () => void;
}

// Define default values
const defaultValue: CartContextType = {
    isCartOpen: false,
    toggleCart: () => { },
    openCart: () => { },
    closeCart: () => { },
};

// Create the context
const CartContext = createContext<CartContextType>(defaultValue);

interface CartProviderProps {
    children: ReactNode; // Properly type 'children'
}

// CartProvider component
export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);

    const toggleCart = () => setIsCartOpen((prev) => !prev);
    const openCart = () => setIsCartOpen(true);
    const closeCart = () => setIsCartOpen(false);

    return (
        <CartContext.Provider value={{ isCartOpen, toggleCart, openCart, closeCart }}>
            {children}
        </CartContext.Provider>
    );
};

// Custom hook to use the CartContext
export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
};
