import { ProductsAction, ProductsActionTypes } from "../../types/products";

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

export function FilterBySeveralFilters(payload: {
    minPrice: string, 
    maxPrice: string, 
    params: string[]
}): ProductsAction {
    return {
        type: ProductsActionTypes.FILTER_BY_SEVERAL_FILTERS,
        payload: payload
    }
}

export function resetProductsList(): ProductsAction {
    return {
        type: ProductsActionTypes.RESET_PRODUCTS_LIST
    }
}

export function setCurrentPage(payload: number): ProductsAction {
    return {
        type: ProductsActionTypes.SET_CURRENT_PAGE,
        payload: payload
    }
}
