import { IProductInCart } from "../../types/types";
import { CartAction, CartActionTypes, CartState } from "../../types/cart";

const initialState: CartState = {
    productsInCart: [],
    totalPrice: 0
};

export function cartReducer(state = initialState, action: CartAction): CartState { 
    switch (action.type) {
        case CartActionTypes.ADD_TO_CART:
            const newProds: IProductInCart[] = [...state.productsInCart];
            newProds.push(action.payload);
            
            return {
                productsInCart: newProds, 
                totalPrice: Number(state.totalPrice) + (Number(action.payload.item.price) * Number(action.payload.count))
            };

        case CartActionTypes.REMOVE_FROM_CART:
            const removed: IProductInCart = [...state.productsInCart].find(p => p.item.barcode == action.payload.item.barcode);
            const cleansedProds = [...state.productsInCart].filter(p => p != removed);
        
            return {
                productsInCart: cleansedProds, 
                totalPrice: Number(state.totalPrice) - (Number(removed.item.price) * Number(removed.count))
            };

        case CartActionTypes.INCREASE_PRODUCT_COUNT:
            const incState = {...state}
            incState.totalPrice += Number(action.payload.item.price);
            const incProduct: IProductInCart = incState.productsInCart.find(p => p.item.barcode == action.payload.item.barcode);
            incProduct.count = Number(incProduct.count) + 1;

            return incState;

        case CartActionTypes.DECREASE_PRODUCT_COUNT:
            const decState = {...state}
            decState.totalPrice -= Number(action.payload.item.price);
            const decProduct: IProductInCart = decState.productsInCart.find(p => p.item.barcode == action.payload.item.barcode);
            decProduct.count = Number(decProduct.count) - 1;

            return decState;

        case CartActionTypes.CONFIRM_PURCHASE:
            return {
                productsInCart: [],
                totalPrice: 0
            }
            
        default:
            return state;
    }
}