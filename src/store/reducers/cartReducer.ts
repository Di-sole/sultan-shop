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
            return {...state, productsInCart: newProds};

        case CartActionTypes.REMOVE_FROM_CART:
            const removed: IProductInCart = state.productsInCart.find(p => p.item.barcode == action.payload.item.barcode);
            const cleansedProds = [...state.productsInCart].filter(p => p != removed);
            return {...state, productsInCart: cleansedProds};

        case CartActionTypes.INCREASE_PRODUCT_COUNT:
            const incState = {...state}
            const incProduct: IProductInCart = incState.productsInCart.find(p => p.item.barcode == action.payload.item.barcode);
            incProduct.count = Number(incProduct.count) + 1;
            return incState;

        case CartActionTypes.DECREASE_PRODUCT_COUNT:
            const decState = {...state}
            const decProduct: IProductInCart = decState.productsInCart.find(p => p.item.barcode == action.payload.item.barcode);
            decProduct.count = Number(decProduct.count) - 1;
            return decState;

        case CartActionTypes.UPDATE_TOTAL_PRICE:
            let newTotal = 0;
            state.productsInCart.forEach(p => newTotal += Number(p.item.price) * Number(p.count));
            return {...state, totalPrice: newTotal}

        case CartActionTypes.CONFIRM_PURCHASE:
            return {
                productsInCart: [],
                totalPrice: 0
            }
            
        default:
            return state;
    }
}