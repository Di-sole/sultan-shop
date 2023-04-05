import { IProduct } from "./types";

export interface ProductsState {
    products: IProduct[],
    filtredAndSortedProducts: IProduct[],
    manufacturers: string[],
    categories: string[],
    currentPage: number,
    productsLimit: number
}

export enum ProductsActionTypes {
    SORT_PRODUCTS = 'SORT_PRODUCTS',
    FILTER_PRODUCTS = 'FILTER_PRODUCTS',
    FILTER_BY_SEVERAL_FILTERS = 'FILTER_BY_SEVERAL_FILTERS',
    RESET_PRODUCTS_LIST = 'RESET_PRODUCTS_LIST',
    SET_CURRENT_PAGE = 'SET_PAGE',
}

export type ProductsAction = SortProductsAction 
    | FilterProductsAction 
    | FilterBySeveralFiltersAction
    | ResetProductsListAction
    | SetCurrentPage;

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

interface SetCurrentPage {
    type: ProductsActionTypes.SET_CURRENT_PAGE,
    payload: number
}

interface FilterBySeveralFiltersAction {
    type: ProductsActionTypes.FILTER_BY_SEVERAL_FILTERS,
    payload: {minPrice: string, maxPrice: string, params: string[]}
}
