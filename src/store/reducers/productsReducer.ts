import json from '../../json';
import { ProductsAction, ProductsActionTypes, ProductsState } from '../../types/products';
import { sortProducts, getParamValues, filterProducts } from '../../utils/utils';

const products = JSON.parse(json);
const manufacturers = getParamValues(products, 'manufacturer');
const categories = getParamValues(products, 'category');

const initialState: ProductsState = {
    products: [...products],
    filtredAndSortedProducts: [...products],
    manufacturers: manufacturers,
    categories: categories
};

export function productsReducer(state = initialState, action: ProductsAction): ProductsState { 
    switch (action.type) {
        case ProductsActionTypes.SORT_PRODUCTS:
            const sorted = sortProducts(action.payload, state.filtredAndSortedProducts);
            return {...state, filtredAndSortedProducts: sorted}
        case ProductsActionTypes.FILTER_PRODUCTS:
            const filtred = filterProducts(action.payload.filter, action.payload.filterType, state.products)
            return {...state, filtredAndSortedProducts: filtred}
        case ProductsActionTypes.RESET_PRODUCTS_LIST:
            return {...state, filtredAndSortedProducts: [...products]}
        default:
            return state;
    }
}
