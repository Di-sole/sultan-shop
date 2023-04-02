import { ISelectedProduct } from "../../types/types";
import { CartAction, CartActionTypes, CartState } from "../../types/cart";

const initialState: CartState = {
    selectedProducts: [],
    totalPrice: 0
};

export function cartReducer(state = initialState, action: CartAction): CartState { 
    switch (action.type) {
        case CartActionTypes.ADD_TO_CART:
            const newSelected: ISelectedProduct[] = [...state.selectedProducts];
            newSelected.push(action.payload);
            
            return {
                selectedProducts: newSelected, 
                totalPrice: Number(state.totalPrice) + (Number(action.payload.item.price) * Number(action.payload.count))
            };
        case CartActionTypes.REMOVE_FROM_CART:
            const removed: ISelectedProduct = [...state.selectedProducts].find(p => p.item.barcode == action.payload.item.barcode);
            const cleansedSelected = [...state.selectedProducts].filter(p => p != removed);
        
            return {
                selectedProducts: cleansedSelected, 
                totalPrice: Number(state.totalPrice) - (Number(removed.item.price) * Number(removed.count))
            };
        case CartActionTypes.INCREASE_PRODUCT_COUNT:
            const incState = {...state}
            incState.totalPrice += Number(action.payload.item.price);
            const incProduct: ISelectedProduct = incState.selectedProducts.find(p => p.item.barcode == action.payload.item.barcode);
            incProduct.count = Number(incProduct.count) + 1;

            return incState;
        case CartActionTypes.DECREASE_PRODUCT_COUNT:
            const decState = {...state}
            decState.totalPrice -= Number(action.payload.item.price);
            const decProduct: ISelectedProduct = decState.selectedProducts.find(p => p.item.barcode == action.payload.item.barcode);
            decProduct.count = Number(decProduct.count) - 1;

            return decState;
        case CartActionTypes.CONFIRM_PURCHASE:
            return {
                selectedProducts: [],
                totalPrice: 0
            }
        default:
            return state;
    }
}