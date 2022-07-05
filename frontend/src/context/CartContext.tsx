import React, { createContext, useContext, useEffect, useState } from "react";
import { useLocalStorage } from "../hooks";
import { CartItem } from "../models";

interface ICartContext {
    items: CartItem[];
    totalPrice: number;
    addItem: (newProduct: CartItem) => void;
    removeItem: (id: number) => void;
    increaseQuantity: (id: number) => void;
    decreaseQuantity: (id: number) => void;
}

const initialValue = {
    items: [],
    totalPrice: 0,
    addItem: (newProduct: CartItem) => {},
    removeItem: (id: number) => {},
    increaseQuantity: (id: number) => {},
    decreaseQuantity: (id: number) => {},
};

const CartContext = createContext<ICartContext>(initialValue);

interface ProviderProps {
    children: React.ReactNode;
}

export const CartContextProvider: React.FC<ProviderProps> = ({ children }) => {
    const { state, setState } = useLocalStorage<CartItem[]>("cart");
    const [cart, setCart] = useState<CartItem[]>(state ? state : []);
    const [totalPrice, setTotalPrice] = useState<number>(0);

    const calculateTotalPrice = (updatedList: CartItem[]) =>
        setTotalPrice(
            updatedList.reduce((total, item) => total + item.total, 0),
        );

    const addItem = (newProduct: CartItem) => {
        if (cart.find(product => product.id === newProduct.id)) return;
        const updatedCart = cart.concat(newProduct);
        setCart(updatedCart);
        calculateTotalPrice(updatedCart);
    };

    const removeItem = (id: number) => {
        const updatedCart = cart.filter(product => product.id !== id);
        setCart(updatedCart);
        calculateTotalPrice(updatedCart);
    };

    const increaseQuantity = (id: number) => {
        const selectedProductIndex = cart.findIndex(
            product => product.id === id,
        );
        const selectedProduct = cart[selectedProductIndex];
        const updatedProduct: CartItem = {
            ...selectedProduct,
            quantity: selectedProduct.quantity + 1,
            total: (selectedProduct.quantity + 1) * selectedProduct.price,
        };

        const updatedCart = cart.map(product =>
            product.id === id ? updatedProduct : product,
        );

        setCart(updatedCart);
        calculateTotalPrice(updatedCart);
    };

    const decreaseQuantity = (id: number) => {
        const selectedProductIndex = cart.findIndex(
            product => product.id === id,
        );
        const selectedProduct = cart[selectedProductIndex];
        // Remove from cart if quantity === 0
        if (selectedProduct.quantity - 1 === 0) {
            removeItem(id);
            return;
        }

        const updatedProduct: CartItem = {
            ...selectedProduct,
            quantity: selectedProduct.quantity - 1,
            total: (selectedProduct.quantity - 1) * selectedProduct.price,
        };

        const updatedCart = cart.map(product =>
            product.id === id ? updatedProduct : product,
        );

        setCart(updatedCart);
        calculateTotalPrice(updatedCart);
    };

    useEffect(() => {
        setState(cart);
    }, [cart]);

    return (
        <CartContext.Provider
            value={{
                items: cart,
                totalPrice,
                addItem,
                removeItem,
                increaseQuantity,
                decreaseQuantity,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export const useCartContext = () => useContext(CartContext);
