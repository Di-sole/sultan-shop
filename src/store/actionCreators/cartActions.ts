import { CartAction, CartActionTypes } from "../../types/cart"
import { ISelectedProduct } from "../../types/types"

export const addToCart = (payload: ISelectedProduct): CartAction => {
    return {
        type: CartActionTypes.ADD_TO_CART,
        payload: payload
    }
}

export const removeFromCart = (payload: ISelectedProduct): CartAction => {
    return {
        type: CartActionTypes.REMOVE_FROM_CART,
        payload: payload
    }
}

export const confirmPurchase = (): CartAction => {
    return {
        type: CartActionTypes.CONFIRM_PURCHASE
    }
}

export const increaseCount = (payload: ISelectedProduct): CartAction => {
    return {
        type: CartActionTypes.INCREASE_PRODUCT_COUNT,
        payload: payload
    }
}

export const decreaseCount = (payload: ISelectedProduct): CartAction => {
    return {
        type: CartActionTypes.DECREASE_PRODUCT_COUNT,
        payload: payload
    }
}