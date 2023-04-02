import { IProduct } from "./types";

export interface ProductsState {
    products: IProduct[],
    filtredAndSortedProducts: IProduct[],
    manufacturers: string[],
    categories: string[]
}

export enum ProductsActionTypes {
    SORT_PRODUCTS = 'SORT_PRODUCTS',
    FILTER_PRODUCTS = 'FILTER_PRODUCTS',
    RESET_PRODUCTS_LIST = 'RESET_PRODUCTS_LIST',
}

export type ProductsAction = SortProductsAction | FilterProductsAction | ResetProductsListAction;

interface SortProductsAction {
    type: ProductsActionTypes.SORT_PRODUCTS,
    payload: string
}

interface FilterProductsAction {
    type: ProductsActionTypes.FILTER_PRODUCTS,
    payload: {filter: string | string[], filterType: string}
}

interface ResetProductsListAction {
    type: ProductsActionTypes.RESET_PRODUCTS_LIST
}
