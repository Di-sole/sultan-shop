import { Dispatch } from "redux"
import { ProductsAction, ProductsActionTypes } from "../../types/products"

export function sortProducts(payload: string): ProductsAction {
    return {
        type: ProductsActionTypes.SORT_PRODUCTS, 
        payload: payload
    }
}

export function filterProducts(payload: {filter: string | string[], filterType: string}): ProductsAction {
    return {
        type: ProductsActionTypes.FILTER_PRODUCTS, 
        payload: payload
    }
}

export function resetProductsList(): ProductsAction {
    return {
        type: ProductsActionTypes.RESET_PRODUCTS_LIST
    }
}