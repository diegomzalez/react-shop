import { useState } from "react";

const initialState = {
    cart: [],
    isMenuOpen: false,
    isOrderOpen: false,
    isMenuMobile: false,
};

const useInitialState = () => {
    const [state, setState] = useState(initialState);
    const addToCart = (payload) => {
        setState({
            ...state,
            cart: state.cart.includes(payload)
            ? [...state.cart]
            : [...state.cart, payload]
        });
    };
    const removeFromCart = (payload) => {
        setState({
            ...state,
            cart: state.cart.filter(items => items.id !== payload.id),
        });
    }
    const toggleMenu = () => {
        setState({
            ...state,
            isMenuOpen: !state.isMenuOpen,
        });
    }
    const toggleOrder = () => {
        setState({
            ...state,
            isOrderOpen: !state.isOrderOpen,
        });
    }
    const toggleMenuMobile = () => {
        setState({
            ...state,
            isMenuMobile: !state.isMenuMobile,
        });
    }
    return {
        state,
        addToCart,
        removeFromCart,
        toggleMenu,
        toggleOrder,
        toggleMenuMobile,
    };
};

export default useInitialState;

