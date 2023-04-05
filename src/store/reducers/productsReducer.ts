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
    categories: categories,
    currentPage: 1,
    productsLimit: 12
};

export function productsReducer(state = initialState, action: ProductsAction): ProductsState { 
    switch (action.type) {
        case ProductsActionTypes.SORT_PRODUCTS:
            const sorted = sortProducts(action.payload, state.filtredAndSortedProducts);
            return {...state, filtredAndSortedProducts: sorted}

        case ProductsActionTypes.FILTER_PRODUCTS:
            const filtred = filterProducts(action.payload.filter, action.payload.filterType, state.products)
            return {...state, filtredAndSortedProducts: filtred}

        case ProductsActionTypes.FILTER_BY_SEVERAL_FILTERS:
            const filtredFirst = filterProducts(action.payload.minPrice, 'min-price', state.products);
            const filtredSecond = filterProducts(action.payload.maxPrice, 'max-price', filtredFirst);
            const filtredThird = filterProducts(action.payload.params, 'manufacturer', filtredSecond);
            return {...state, filtredAndSortedProducts: filtredThird}

        case ProductsActionTypes.RESET_PRODUCTS_LIST:
            return {...state, filtredAndSortedProducts: [...products]}

        case ProductsActionTypes.SET_CURRENT_PAGE:
            return {...state, currentPage: action.payload}

        default:
            return state;
    }
}
