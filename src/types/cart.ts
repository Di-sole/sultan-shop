import { IProductInCart } from "./types";

export interface CartState {
    productsInCart: IProductInCart[],
    totalPrice: number
}

export enum CartActionTypes {
    ADD_TO_CART = 'ADD_TO_CART',
    REMOVE_FROM_CART = 'REMOVE_FROM_CART',
    CONFIRM_PURCHASE = 'CONFIRM_PURCHASE',
    INCREASE_PRODUCT_COUNT = 'INCREASE_PRODUCT_COUNT',
    DECREASE_PRODUCT_COUNT = 'DECREASE_PRODUCT_COUNT',
    UPDATE_TOTAL_PRICE = 'UPDATE_TOTAL_PRICE',
}

export type CartAction = AddToCartAction
    | RemoveFromCartAction
    | ConfirmPurchaseAction
    | IncreaseCountAction
    | DecreaseCountAction
    | UpdateTotalPrice

interface AddToCartAction {
    type: CartActionTypes.ADD_TO_CART,
    payload: IProductInCart
}

interface RemoveFromCartAction {
    type: CartActionTypes.REMOVE_FROM_CART,
    payload: IProductInCart
}

interface ConfirmPurchaseAction {
    type: CartActionTypes.CONFIRM_PURCHASE
}

interface IncreaseCountAction {
    type: CartActionTypes.INCREASE_PRODUCT_COUNT,
    payload: IProductInCart
}

interface DecreaseCountAction {
    type: CartActionTypes.DECREASE_PRODUCT_COUNT,
    payload: IProductInCart
}

interface UpdateTotalPrice {
    type: CartActionTypes.UPDATE_TOTAL_PRICE
}
