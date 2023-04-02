import { ISelectedProduct } from "./types";

export interface CartState {
    selectedProducts: ISelectedProduct[],
    totalPrice: number
}

export enum CartActionTypes {
    ADD_TO_CART = 'ADD_TO_CART',
    REMOVE_FROM_CART = 'REMOVE_FROM_CART',
    CONFIRM_PURCHASE = 'CONFIRM_PURCHASE',
    INCREASE_PRODUCT_COUNT = 'INCREASE_PRODUCT_COUNT',
    DECREASE_PRODUCT_COUNT = 'DECREASE_PRODUCT_COUNT',
}

export type CartAction = AddToCartAction
    | RemoveFromCartAction
    | ConfirmPurchaseAction
    | IncreaseCountAction
    | DecreaseCountAction

interface AddToCartAction {
    type: CartActionTypes.ADD_TO_CART,
    payload: ISelectedProduct
}

interface RemoveFromCartAction {
    type: CartActionTypes.REMOVE_FROM_CART,
    payload: ISelectedProduct
}

interface ConfirmPurchaseAction {
    type: CartActionTypes.CONFIRM_PURCHASE
}

interface IncreaseCountAction {
    type: CartActionTypes.INCREASE_PRODUCT_COUNT,
    payload: ISelectedProduct
}

interface DecreaseCountAction {
    type: CartActionTypes.DECREASE_PRODUCT_COUNT,
    payload: ISelectedProduct
}
