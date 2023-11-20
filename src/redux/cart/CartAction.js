import CartActionTypes from "./cartActionTypes";

export const addProductToCart = (productId) => ({
type: CartActionTypes.ADD_PRODUCT,
payload: productId,
});

export const removeProductFromCart = (productId) => ({
    type: CartActionTypes.REMOVE_PRODUCT,
    payload: productId,
});

export const increaseProductQuantity = (productId) => ({
    type: CartActionTypes.INCREASE_PRODUCT,
    payload: productId,
});

export const decreaseProductQuantity = (productId) => ({
    type: CartActionTypes.DECREASE_PRODUCT,
    payload: productId,
});